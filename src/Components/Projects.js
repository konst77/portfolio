import Image from 'next/image'
import bob from '/Image/bob.png'
import Link from 'next/link';
import msai from '/Image/msai.png'
import niet from '/Image/niet.png'

const Projects = () => {
    return (
    <div id='projects'>
        <h2>Curated Projects</h2>

        <Link href="/projects/thebob">
            <div className='prjdiv'>
              <div className='prjimage'>
                <Image className="prjimg" src={bob} alt="TheBoB" />
              </div>
              <div className='prjgrids'>
                <h3 className='prjhead'>The BoB</h3>
                <p className='prjp'>Information Architecture<br></br>User Experience</p>
                <p className='prjpd'>2023</p>
                <button className='prjbutton'>View</button>
              </div>
            </div>
        </Link>

        <Link href="/projects/moonstudioai">
            <div className='prjdiv'>
              <div className='prjimage'>
                <Image className="prjimg" src={msai} alt="MoonStudioAi" />
              </div>
              <div className='prjgrids'>
                <h3 className='prjhead'>Moon Studio Ai</h3>
                <p className='prjp'>Identity<br></br>Web Development</p>
                <p className='prjpd'>2023</p>
                <button className='prjbutton'>View</button>
              </div>
            </div>
        </Link>

        <Link href="/projects/niet">
          <div className='prjdiv'>
            <div className='prjimage'>
            <Image className="prjimg" src={niet} alt="n i e t" />
            </div>
            <div className='prjgrids'>
              <h3 className='prjhead'>n i e t</h3>
              <p className='prjp'>User Experience<br></br>Mobile Design</p>
              <p className='prjpd'>2023</p>
              <button className='prjbutton'>View</button>
            </div>
          </div>
        </Link>
    </div>
    );
};

export default Projects;