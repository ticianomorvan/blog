import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

type ArticleType = {
  title: string,
  category: string,
  date: string,
  content: string,
}

export default function ArticlePage({ title, category, date, content }: ArticleType) {
  return (
    <>
      <h1>{title}</h1>
      <p>{category}</p>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}