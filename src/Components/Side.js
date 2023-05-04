import Image from 'next/image'
import Link from 'next/link'
import ai from '/Image/ai.png'
import hcd from '/Image/hcd.png'
import book from '/Image/book.png'

const Side = () => {
    return (
        <div class='sidediv'>
            <h2>On the side...</h2>

            <div class='grids'>
                <Link id='sidelink' class='hcs' href="/hcs">
                    <div class='sidedivmin'>
                        <div class='sideimgholder'>
                            <Image class="sideimg" src={hcd} alt="TheBoB" />
                        </div>

                        <div class='sidemindiv'>
                            <h3 class='sideminh'>Personal Story</h3>
                            <p class='sideminp'>Human-Centered Studio works to help small businesses thrive with consulting services using design strategy.</p>
                        </div>
                    </div>
                </Link>

                <Link id='sidelink' class='ai' href="/ai">
                    <div class='sidedivmin'>
                        <div class='sideimgholder'>
                            <Image class="sideimg" src={ai} alt="ai" />
                        </div>
                        
                        <div class='sidemindiv'>
                            <h3 class='sideminh'>What I do on the side</h3>
                            <p class='sideminp'>Currently working to discover how ai can help better designer's work life.</p>
                        </div>
                    </div>
                </Link>

                <Link id='sidelink' class='library' href="/library">
                    <div class='sidedivmin'>
                        <div class='sideimgholder'>
                            <Image class="sideimg" src={book} alt="library" />
                        </div>
                        
                        <div class='sidemindiv'>
                            <h3 class='sideminh'>Specifically opinionated bookshelf</h3>
                            <p class='sideminp'>Books that got me through lifetime, inspirations that helped me be who I am today.</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Side;