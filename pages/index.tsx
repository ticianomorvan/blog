import type { GetStaticProps, GetStaticPropsResult } from 'next';
import type ArticleType from 'types/article';
import { getAllArticles } from 'lib/articles';
import Image from 'next/image';
import Head from 'next/head';
import User, { IUser } from 'lib/user';

// Components
import Layout from 'components/Layout';
import ArticleCard from 'components/ArticleCard';
import Socials from 'components/Socials';

type HomeType = {
  user: IUser,
  articles: ArticleType[]
}

export default function Home({ user, articles }: HomeType) {
  return (
    <>
      <Head>
        <title>{`${user.name} | Blog`}</title>
      </Head>

      <Layout id="home-layout">
        <div className="flex flex-col gap-8">
          <section className="flex flex-col items-center">
            <Image
              src={user.profilePicture}
              alt={`${user.name}'s profile photo`}
              width={128}
              height={128}
              className="rounded-full"
            />

            <h1 className="mt-6 text-blue-700 text-3xl font-semibold">Ticiano Morvan</h1>
            <h2 className="font-normal text-xl text-center">
              {User.role}
              {' '}
              🚀 from
              {' '}
              {User.country.name}
              {' '}
              {User.country.emoji}
            </h2>

            <Socials />
          </section>

          <section className="flex flex-col items-center">
            <h3 className="text-2xl pb-2">
              ¡Bienvenidos a mi blog!
            </h3>

            <p className="text-center sm:text-left">
              Aquí voy a escribir un poco acerca de programación, diseño, aplicaciones, tecnología,
              {' '}
              soft-skills y todo lo que se me cruce por la mente.
            </p>
          </section>

          {articles.map(({
            id, title, subtitle, categories, date,
          }) => (
            <ArticleCard
              key={`article-${id}`}
              id={id}
              title={title}
              subtitle={subtitle}
              categories={categories}
              date={date}
            />
          ))}

        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = ():
  GetStaticPropsResult<{ user: IUser, articles: ArticleType[] }> => {
  const user = User;
  const articles = getAllArticles();

  return {
    props: {
      user,
      articles,
    },
  };
};
