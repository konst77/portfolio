import Heroprj from '../../Components/bob/Heroprj'
import Navbar from '../../Components/Navbar'
import Head from 'next/head'

export default function Thebob() {
    return (
        <>
            <Head>
                <title>Ray Moon</title>
                <meta name="description" content="Ray's Portfolio" />
                 <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
  
            <Navbar />
  
            <main>
                <Heroprj />
            </main>
        </>
    )
}

