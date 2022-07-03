import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ticiano Morvan's blog</title>
      </Head>

      <Layout>
        <div
          className="flex flex-col gap-8"
        >
          <section
            className="flex flex-col items-center"
          >
            <Image
              src="/images/profile.jpg"
              width={128}
              height={128}
              className="rounded-full"
            />
            <h1
              className="text-blue-700 text-3xl font-semibold p-2"
            >
              Ticiano Morvan
            </h1>
            <h2>
              Frontend Developer 🚀 from Argentina 🇦🇷
            </h2>
          </section>

          <section
            className="flex flex-col items-center"
          >
            <h3
              className="text-2xl pb-2"
            >
              ¡Bienvenidos a mi blog!
            </h3>

            <p
              className="text-justify"
            >
              Aquí voy a escribir un poco acerca de programación, diseño, aplicaciones, tecnología, soft-skills y todo lo que se me cruce por la mente.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Home
