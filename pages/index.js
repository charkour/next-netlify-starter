import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Home!" />
        <p className="description">
          Home
          <Link href="/">Go to /</Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
