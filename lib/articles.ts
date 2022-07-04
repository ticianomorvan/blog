import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type ArticleType from 'types/article';

const articlesDirectory = path.join(process.cwd(), 'articles')

/**
 * Get the IDs of all articles.
 */
export function getArticlesIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  })
}

/**
 * 
 * @param fileName The name of the file
 * @returns an object with all of the file headers and content.
 */
export const getArticleData = async (fileName: string): Promise<ArticleType> => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileData = fs.readFileSync(fullPath, 'utf-8');

  const matteredResult = matter(fileData);

  const processedContent = await remark()
    .use(html)
    .process(matteredResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matteredResult.data as {
      title: string,
      subtitle: string,
      categories: string[],
      date: string
    }
  }
}

/**
 * 
 * @returns an array populated with the data of all the articles, sorted by date.
 */
export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const files = fileNames.map(async (fileName) => await getArticleData(fileName))
  return files.sort((a, b) =>
    a < b
      ? 1
      : a > b
        ? 1
        : 0
  )
}