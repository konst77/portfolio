import Link from 'next/link'

const Footer = () => {
    return (
        <div id='footer' className='grids'>
            <div className='footerall'>
                <div className='footerdiv'>
                    <Link id='ftlink' href='/'>Home</Link>
                </div>

                <div className='footerdiv'>
                    <Link id='ftlink' href='/about'>About</Link>
                </div>

                <div className='footerdiv'>
                    <Link id='ftlink' href='/learning'>Learning</Link>
                </div>

                <div className='footerdiv'>
                    <Link id='ftlink' href='/contact'>Contact</Link>
                </div>
            </div>
            
            <h4 className='footertag'>©RayMoon2023</h4>
    
        </div>
    );
};

export default Footer;