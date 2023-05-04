import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import Learn from '../Components/Learn'
import Footer from '../Components/Footer'

export default function Learnings() {
    return (
      <>
        <Head>
          <title>Ray's Learning'</title>
          <meta name="description" content="Ray's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main>
            <div className="grids">
                <div className="hero">
                  <h1 className="heroh1">
                    Ray is a Learner. He wrote his learnings from his previous activities, courses, and experiences ↓
                  </h1>
                </div>
            </div>

            <hr></hr>

            <Learn />

            <hr></hr>

        </main>

        <Footer />
    </>
    )
}