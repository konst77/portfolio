import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Side from '../Components/Side'
import Personal from '../Components/Personal'
import Footer from '../Components/Footer'



export default function Home() {

  function ScrollButton({ sectionId }) {
    function handleClick() {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <>
      <Head>
        <title>Ray's Portfolio</title>
        <meta name="description" content="Ray's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>

      <Hero />

      <hr></hr>

      <Projects sectionId="my-section" />

      <hr></hr>

      <Side />

      <hr></hr>

      <Personal />

      </main>

      <hr></hr>

      <Footer />
    </>
  )
}
