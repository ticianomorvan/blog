import type ArticleType from 'types/article';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import sanitize from 'sanitize-html';

import renderer from './renderers';

const articlesDirectory = path.join(process.cwd(), 'articles');

marked.setOptions({
  gfm: true,
});

marked.use({ renderer });

/**
 * Get the IDs of all articles.
 */
export function getArticlesIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

/**
 *
 * @param fileName The name of the file
 * @returns an object with all of the file headers and content.
 */
export const getArticleData = (fileName: string): ArticleType => {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileData = fs.readFileSync(fullPath, 'utf-8');

  const matteredResult = matter(fileData);

  const parsedMarkdown = marked.parse(matteredResult.content);

  const contentHtml = sanitize(parsedMarkdown, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'div',
      'hr', 'ul', 'ol', 'li', 'a', 'b', 'i', 'strong', 'code', 'pre',
      'em', 'small', 'kbd', 'col', 'colgroup', 'table', 'u', 'tbody',
      'thead', 'td', 'tr', 'th', 'img', 'span',
    ],
    allowedClasses: {
      pre: ['language-*', 'hljs-*'],
      code: ['language-*', 'hljs', '*'],
      span: ['hljs-*'],
    },
  });

  return {
    id,
    contentHtml,
    ...matteredResult.data as {
      title: string,
      subtitle: string,
      categories: string[],
      date: string
    },
  };
};

/**
 *
 * @returns an array populated with the data of all the articles, sorted by date.
 */
export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);

  const files = fileNames.map((fileName) => getArticleData(fileName));
  return files;
}
