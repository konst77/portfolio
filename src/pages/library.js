import Libhero from '../Components/library/Libhero'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Shelf from '../Components/library/Shelf'

export default function Library() {
    return (
        <>
            <Navbar />

            <Libhero />

            <hr></hr>

            <Shelf />

            <hr></hr>

            <Footer />
        </>
    )
}