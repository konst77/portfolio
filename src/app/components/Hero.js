'use client';

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
import bob from '../../../public/images/bob.png'
import moon from '../../../public/images/msai.png'
import niet from '../../../public/images/niet.png'
import hcd from '../../../public/images/hcd.png'
import ai from '../../../public/images/ai.png'
import book from '../../../public/images/book.png'
import profile from '../../../public/images/profile.png'

const Hero = () => {

    return (
        <>
            <div className="flex flex-col w-auto justify-center px-4 h-[400px] md:h-[800px] mt-[80px] md:px-0 md:grid md:grid-cols-12 md:mx-40">
                <div className="w-full md:col-start-1 md:col-end-5 md:self-center">
                    <h1 className="text-[32px] leading-[32px] md:text-[48px] md:leading-[56px]">
                        Ray is a Product Designer weirdly obsessed with<br></br> {''}
                        <span>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                              words={['Digital Product.', 'Code Development.', 'Human Purpose.', 'Beautiful Interaction.']}
                              loop={0 | false}
                              cursor
                              cursorStyle='_'
                              typeSpeed={50}
                              deleteSpeed={30}
                              delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="mt-3 text-[#767676]">
                        Full stack product designer, designing and developing human-centered products.
                    </p>
                    <Link href="/#project" scroll={false}>
                    <button 
                    className='py-2 px-6  mt-[40px] border text-primary border-primary rounded-lg font-[500]'
                    
                    >Ray’s Projects ↓</button>
                    </Link>
                </div>
            </div>
            
            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div id='project' className="flex flex-column w-auto px-4 mt-[80px] 
            md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] 
                md:text-[40px] md:leading-[40px]">
                    Curated Projects
                </h2>
            </div >

            <div id='prjdiv' className="flex flex-col w-auto px-4 mt-[40px] 
            md:mt-[60px] md:px-0 md:mx-40">
                <Link href='/bob'>
                    <Image id='prjimg' alt='bob' src={bob} className='object-cover object-left h-[240px] sm:h-auto w-auto bg-[#f1f1f5] rounded-lg col-span-full mb-3 
                    md:w-full' />
                    <div className='
                    md:mt-[20px] md:px-0 md:grid md:grid-cols-12 md:grid-rows-2'>                            
                        <h3 className='block text-[24px] 
                        md:col-start-1 md:col-end-5'>The BoB</h3>
                        <p className='block text-sm text-[#767676] leading-4 
                        md:col-start-5 md:col-end-8 md:text-lg md:leading-5'>
                            Information Architecture<br></br>User Experience<br></br>Web Development
                        </p>                            <p className='text-[#767676] mt-[10px] md:col-start-8 md:col-end-13 md:m-0'>
                        The BoB is a Korean restaurant on a mission to serve original Korean cuisines. 
                        From a vague vision to a celebrated local attraction, only by changing the menu.
                        </p>
                    </div>
                </Link>
            </div>

            <div id='prjdiv' className="flex flex-col w-auto px-4 mt-[100px] 
            md:mt-[60px] md:px-0 md:mx-40">
                <Link href={'/moonstudioai'}>
                    <Image id='prjimg' alt='moonstudioai' src={moon} className='object-cover object-center h-[240px] sm:h-auto w-auto bg-[#f1f1f5] rounded-lg col-span-full mb-3 
                        md:w-full' />
                    <div className='
                    md:mt-[20px] md:px-0 md:grid md:grid-cols-12 md:grid-rows-2'>
                        <h3 className='block text-[24px] 
                        md:col-start-1 md:col-end-5'>Moon Studio Ai</h3>
                        <p className='block md:col-start-5 text-sm text-[#767676] leading-4 
                        md:col-end-8 md:text-lg md:leading-5'>
                            Identity<br></br>Web Development
                        </p>
                        <p className='text-[#767676] mt-[10px] 
                        md:col-start-8 md:col-end-13 md:m-0'>
                            Building an effective environment for coding an image focused website with static development.
                        </p>
                    </div>
                </Link>
            </div>

            <div id='prjdiv' className="flex flex-col w-auto px-4 mt-[100px] 
            md:mt-[60px] md:px-0 md:mx-40">
                <Link href={'/niet'}>
                    <Image id='prjimg' alt='niet' src={niet} className='object-cover object-right h-[240px] sm:h-auto w-auto bg-[#f1f1f5] rounded-lg col-span-full mb-3 
                    md:w-full' />
                    <div className='
                    md:mt-[20px] md:px-0 md:grid md:grid-cols-12 md:grid-rows-2'>
                        <h3 className='block text-[24px] 
                        md:col-start-1 md:col-end-5'>n i e t</h3>
                        <p className='block text-sm text-[#767676] leading-4 
                        md:col-start-5 md:col-end-8 md:text-lg md:leading-5'>
                            Mobile Design<br></br>Accessibility
                        </p>
                        <p className='text-[#767676] mt-[10px] md:col-start-8 md:col-end-13 md:m-0'>
                        niet is a social habit app that helps those facing psychological struggles find direction. Focusing on iteration from wireframing to 
                        prototyping an app considering accessibility.
                        </p>
                    </div>
                </Link>
            </div>
            
            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40">
            </div>

            <div className="flex flex-col w-auto px-4 mt-[80px] md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]">
                    On the side...
                </h2>

                <div className="flex flex-col w-auto mt-[80px] gap-[30px] 
                md:px-0 md:grid md:grid-cols-12">
                    <Link href={'/journey'} className="block col-auto w-full md:col-span-4">
                        <div id='prjdiv'>
                            <Image id='prjimg' alt='journey' src={hcd} className='h-auto w-auto bg-[#f1f1f5] rounded-lg mb-3 
                            md:w-full' />
                            <div>
                                <h3>My journey into design</h3>
                                <p className='text-[#767676]'>Human-Centered Studio works to help small businesses thrive with consulting services using design strategy.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={'/learn'} className="block col-auto w-full 
                    md:col-span-4">
                        <div id='prjdiv'>
                            <Image id='prjimg' alt='learn' src={ai} className='h-auto w-auto bg-[#f1f1f5] rounded-lg mb-3 
                            md:w-full' />
                            <div>
                                <h3>To anyone learning design from the start.</h3>
                                <p className='text-[#767676]'>Giving back what I had been receiving from the community.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={'/library'} className="block col-auto w-full 
                    md:col-span-4">
                        <div id='prjdiv'>
                            <Image id='prjimg' alt='library' src={book} className='h-auto w-auto bg-[#f1f1f5] rounded-lg mb-3 
                            md:w-full' />
                            <div>
                                <h3>Specifically opinionated bookshelf</h3>
                                <p className='text-[#767676]'>From the help of people who share, I am influenced to help others with what I learned.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  md:mx-40"></div>

            <div className='flex flex-col w-auto px-4 mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12'>
                <Image src={profile} alt='profile' className='rounded-lg w-full md:col-span-5' />
                <div className='col-start-6 col-end-13 self-center'>
                <h1 className=''>I am a diligent, self-motivated, and design thinking minded product designer to help craft smooth experiences for digital products.</h1>
                <Link href={'/about'}>
                    <button
                    className='py-2 px-6  mt-[40px] border text-primary border-primary rounded-lg font-[500]'
                    
                    >More About Ray →</button>
                </Link>
                </div>
            </div>

        </>
    );
};

export default Hero;