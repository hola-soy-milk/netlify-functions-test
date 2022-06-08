import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {
  const [hello, setHello] = useState("");
  const [goHello, setGoHello] = useState("");
  const [edgeHello, setEdgeHello] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('.netlify/functions/hello');
        const json = await response.json();
        setHello(json.message)
        const goresponse = await fetch('.netlify/functions/helloworld');
        const text = await goresponse.text();
        setGoHello(text)
        const edgeresponse = await fetch('edgy');
        const edgetext = await edgeresponse.text();
        setEdgeHello(edgetext)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

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

        <p>Message from Netlify JS: {hello}</p>
        <p>Message from Netlify but in Go: {goHello}</p>
        <p>Message from Netlify Edge: {edgeHello}</p>
      </main>

      <Footer />
    </div>
  )
}
