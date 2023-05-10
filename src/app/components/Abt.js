import Image from 'next/image'
import Link from 'next/link'
import profile from '../../../public/images/profile.png'
import duchamp from '../../../public/images/about/duchamp.png'
import seattle from '../../../public/images/about/seattle.gif'
import group from '../../../public/images/about/group.png'

const Abt = () => {
    return(
        <main>
            <div className='flex flex-col w-auto px-4 mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-row-2'>
                <Image src={profile} alt="profile" 
                className="rounded-lg w-full h-[240px]
                md:col-start-1 md:col-end-6 md:h-auto"
                />
                <div className='md:col-start-6 md:col-end-13 md:row-start-2'>
                    <h1>Full stack product designer based in Seattle.
                        <br></br>
                        Founder of Human-Centered Studio.
                        <br></br><br></br>
                        I am interested in Psychology,
                        Web Design, and bringing multiple phisolophies into design.
                        </h1>
                </div>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div className='flex flex-col w-auto px-4 mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-row-2'>
                <Image src={seattle} alt="profile" 
                className="rounded-lg w-full h-[240px] grayscale
                md:col-start-1 md:col-end-7 md:h-auto"
                />
                <p className='
                md:text-xl md:col-start-6 md:col-end-10 md:row-start-2'>
                § Moving across the Pacific Ocean at age ten, my experience
                 across different cultures allowed me to naturally adapt to new environments quickly,
                  observe things from different perspectives and embrace others.
                </p>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div className='flex flex-col w-auto px-4 mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-row-2'>
                <Image src={duchamp} alt="profile" 
                className="rounded-lg w-full h-[240px] grayscale
                md:col-start-1 md:col-end-7 md:h-auto"
                />
                <p className='
                md:text-xl md:col-start-6 md:col-end-10 md:row-start-2'>
                § Academically, I was inspired by the works I interacted with at my university.
                 I obsessed over critical thinking, simplicity, and purpose. Most importantly,
                  I was able to approach problems differently. By asking why five times,
                   seeing things from different angles, and focusing on priorities.
                </p>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div className='flex flex-col w-auto px-4 mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-row-2'>
                <Image src={group} alt="profile" 
                className="rounded-lg w-full h-[240px] grayscale
                md:col-start-1 md:col-end-7 md:h-auto"
                />
                <p className='
                md:text-xl md:col-start-6 md:col-end-10 md:row-start-2'>
                § In college, I had the opportunity to experience various group activities learning
                 about leadership. Learning to brace ambiguity, failing or succeeding, and working in teams.
                </p>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div className='flex flex-col w-auto px-4 my-[80px] gap-[30px] h-[400px] items-center
            md:mx-40 md:px-0 md:grid md:grid-cols-12'>
                <div className='flex flex-col col-start-6 col-end-13 items-left'>
                <h1 className='text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px]'>I am a diligent, self-motivated, and design thinking minded product designer to help craft smooth experiences for digital products.</h1>
                    <button
                    className='py-2 px-6  mt-[40px] border text-primary border-primary rounded-lg font-[500] w-[240px]'
                    
                    ><Link href={'/learning'} className='w-full py-2 px-6 rounded-lg'>Ray's Learning →</Link></button>
                </div>
            </div>

        </main>
    )
}

export default Abt;