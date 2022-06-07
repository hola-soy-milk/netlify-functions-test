import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {

  fetch('.netlify/functions/hello').then(data => data.json()).then(data => console.log(data.message))
  // fetch('.netlify/functions/helloworld').then(data => setGoHello(data.body))
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
        <p>Message from Netlify but in Go: {goHello}</p>
      </main>

      <Footer />
    </div>
  )
}
