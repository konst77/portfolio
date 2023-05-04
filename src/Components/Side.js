import Image from 'next/image'
import Link from 'next/link'
import ai from '/Image/ai.png'
import hcd from '/Image/hcd.png'
import book from '/Image/book.png'

const Side = () => {
    return (
        <div className='sidediv'>
            <h2>On the side...</h2>

            <div className='grids'>
                <Link id='sidelink' className='hcs' href="/hcs">
                    <div className='sidedivmin'>
                        <div className='sideimgholder'>
                            <Image className="sideimg" src={hcd} alt="TheBoB" />
                        </div>

                        <div className='sidemindiv'>
                            <h3 className='sideminh'>Personal Story</h3>
                            <p className='sideminp'>Human-Centered Studio works to help small businesses thrive with consulting services using design strategy.</p>
                        </div>
                    </div>
                </Link>

                <Link id='sidelink' className='ai' href="/ai">
                    <div className='sidedivmin'>
                        <div className='sideimgholder'>
                            <Image className="sideimg" src={ai} alt="ai" />
                        </div>
                        
                        <div className='sidemindiv'>
                            <h3 className='sideminh'>What I do on the side</h3>
                            <p className='sideminp'>Currently working to discover how ai can help better designer's work life.</p>
                        </div>
                    </div>
                </Link>

                <Link id='sidelink' className='library' href="/library">
                    <div className='sidedivmin'>
                        <div className='sideimgholder'>
                            <Image className="sideimg" src={book} alt="library" />
                        </div>
                        
                        <div className='sidemindiv'>
                            <h3 className='sideminh'>Specifically opinionated bookshelf</h3>
                            <p className='sideminp'>Books that got me through lifetime, inspirations that helped me be who I am today.</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Side;