import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark }

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
export function getArticleData(fileName: string) {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const headers = matter(fileContents);

  return {
    id,
    ...headers.data as { title: string, category: string, date: string }
  }
}

/**
 * 
 * @returns an array populated with the data of all the articles, sorted by date.
 */
export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => getArticleData(fileName))
  return allArticlesData.sort((articleA, articleB) =>
    articleA.date < articleB.date
      ? 1
      : articleA.date > articleB.date
        ? -1
        : 0
  )
}