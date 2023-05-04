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
            <div class='prjdiv'>
              <div class='prjimage'>
                <Image class="prjimg" src={bob} alt="TheBoB" />
              </div>
              <div class='prjgrids'>
                <h3 class='prjhead'>The BoB</h3>
                <p class='prjp'>Information Architecture<br></br>User Experience</p>
                <p class='prjpd'>2023</p>
                <button class='prjbutton'>View</button>
              </div>
            </div>
        </Link>

        <Link href="/moonstudioai">
            <div class='prjdiv' href="/moonstudioai">
              <div class='prjimage'>
                <Image class="prjimg" src={msai} alt="MoonStudioAi" />
              </div>
              <div class='prjgrids'>
                <h3 class='prjhead'>Moon Studio Ai</h3>
                <p class='prjp'>Identity<br></br>Web Development</p>
                <p class='prjpd'>2023</p>
                <button class='prjbutton'>View</button>
              </div>
            </div>
        </Link>

        <Link href="/niet">
          <div class='prjdiv' href="/niet">
            <div class='prjimage'>
            <Image class="prjimg" src={niet} alt="n i e t" />
            </div>
            <div class='prjgrids'>
              <h3 class='prjhead'>n i e t</h3>
              <p class='prjp'>User Experience<br></br>Mobile Design</p>
              <p class='prjpd'>2023</p>
              <button class='prjbutton'>View</button>
            </div>
          </div>
        </Link>
    </div>
    );
};

export default Projects;