import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react/cjs/react.development'

export default function Home() {
  const [hello, setHello] = useState("");

  fetch('./.netlify/functions/hello').then(data => data.json()).then(data => setHello(data.message))
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <p>Message from Netlify: {hello}</p>
      </main>

      <Footer />
    </div>
  )
}
