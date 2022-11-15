import Head from 'next/head'
import Hero from './components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>A Beaver's Adventure | Home</title>
        <meta name="keywords" content="A Beaver's Adventure" />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  );
}
