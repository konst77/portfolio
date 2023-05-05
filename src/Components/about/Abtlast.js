import Link from 'next/link'

const Abtlast = () => {
    return (
        <div id="abtlast" className='grids'>
            <div className='abtherodiv'>
                <h1 id='abthero' className='heroh1'>I am a diligent, self-motivated, and design thinking minded product designer to help design smooth experiences for humans.</h1>
                <Link href='/learning'>
                    <button className='herobutton'>Ray's Learning →</button>
                </Link>
            </div>
        </div>
    )
}

export default Abtlast