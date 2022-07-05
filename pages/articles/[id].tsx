import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
} from 'next';
import { getArticleData, getArticlesIds } from 'lib/articles';
import type ArticleType from 'types/article';
import Head from 'next/head';

// Components
import Layout from 'components/Layout';
import ArticleNavbar from 'components/ArticleNavbar';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import CategoryGroup from 'components/CategoryGroup';
import Author from 'components/Author';
import DaysFromPublication from 'components/DaysFromPublication';
import Body from 'components/Body';

export function ArticlePage({
  id, title, subtitle, categories, date, contentHtml,
}: ArticleType) {
  return (
    <>
      <Head>
        <title>{`${title} | Ticiano Morvan`}</title>
        <meta property="og:title" content={`${title} | Ticiano Morvan`} key="article-title" />
      </Head>

      <Layout id={`article-${id}`}>
        <ArticleNavbar />
        <Title text={title} />
        <Subtitle text={subtitle} />

        <section className="flex flex-col justify-center text-center sm:flex-row sm:text-start">
          <Author
            name="Ticiano Morvan"
            photo="/images/profile.jpg"
          />
          <DaysFromPublication plainDate={date} />
        </section>

        <Body content={contentHtml} />
        <CategoryGroup categories={categories} />
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context):
  Promise<GetStaticPropsResult<ArticleType>> => {
  if (context.params?.id) {
    const articleData = await getArticleData(context.params.id as string);

    return {
      props: {
        ...articleData,
      },
    };
  }

  return {
    props: {
      id: '0',
      title: "There isn't any file that match the query.",
      subtitle: 'Try again',
      date: new Date().toISOString(),
      categories: ['Invalid'],
      contentHtml: '# Nothing here.',
    },
  };
};

export default ArticlePage;
