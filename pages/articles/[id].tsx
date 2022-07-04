import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult
} from 'next';
import { getArticleData, getArticlesIds } from 'lib/articles';
import type ArticleType from 'types/article';

// Components
import Layout from 'components/Layout';
import BackToHome from 'components/BackToHome';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import CategoryGroup from 'components/CategoryGroup';
import DaysFromPublication from 'components/DaysFromPublication'
import Author from 'components/Author';

export const ArticlePage = ({
  id, title, subtitle, categories, date, contentHtml
}: ArticleType) => {
  return (
    <Layout id={`article-${id}`}>
      <BackToHome />
      <Title text={title} />
      <Subtitle text={subtitle} />

      <section className="m-4 mb-12">
        <span className="flex gap-4 justify-center">
          <CategoryGroup categories={categories} />
          <p className="self-center">-</p>
          <DaysFromPublication plainDate={date} />
        </span>
        <Author
          name="Ticiano Morvan"
          photo="/images/profile.jpg"
          socials={{ instagram: 'ticianomorvan', github: 'Ti7oyan', linkedin: 'ticianomorvan' }}
        />
      </section>


      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticlesIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<ArticleType>> => {

  if (context.params?.id) {
    const articleData = await getArticleData(context.params.id as string)

    return {
      props: {
        ...articleData,
      }
    }
  }

  return {
    props: {
      id: '0',
      title: "There isn't any file that match the query.",
      subtitle: "Try again",
      date: new Date().toISOString(),
      categories: ['Invalid'],
      contentHtml: '# Nothing here.'
    }
  }
}

export default ArticlePage;