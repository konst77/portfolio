import Navbar from '../Components/Navbar'
import Abthero from '../Components/about/Abthero'
import Abt from '../Components/about/Abt'
import Head from 'next/head'
import Abtlast from '../Components/about/Abtlast'
import Footer from '../Components/Footer'
import React from 'react';
import duchamp from '../../Image/about/duchamp.png'
import group from '../../Image/about/group.png'
import seattle from '../../Image/about/seattle.gif'

export default function About() {

    const text1 = '§ Moving across the Pacific Ocean at age ten, my experience across different cultures allowed me to naturally adapt to new environments quickly, observe things from different perspectives and embrace others.'
    const text2 = '§ Academically, I was inspired by the works I interacted with at my university. I obsessed over critical thinking, simplicity, and purpose. Most importantly, I was able to approach problems differently. By asking why five times, seeing things from different angles, and focusing on the necessary.'
    const text3 = '§ In college, I had the opportunity to experience various group activities learning about leadership. Learning to brace ambiguity, failing or succeeding, and working in teams.'

    return (
      <>
        <Head>
          <title>About Ray</title>
          <meta name="description" content="Ray's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar />
  
        <main>
            <Abthero />

            <hr></hr>

            <Abt src={seattle} text={text1} />

            <hr></hr>

            <Abt src={duchamp} text={text2} />

            <hr></hr>

            <Abt src={group} text={text3} />

            <hr></hr>

            <Abtlast />

            <hr></hr>

            <Footer />

        </main>
    </>
    )
}