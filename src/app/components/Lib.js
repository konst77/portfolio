import Image from 'next/image'
import af from '../../../public/images/libraryimg/af.png'
import citb from '../../../public/images/libraryimg/citb.png'
import cs from '../../../public/images/libraryimg/cs.jpg'
import dis from '../../../public/images/libraryimg/dis.png'
import doet from '../../../public/images/libraryimg/doet.jpg'
import ds from '../../../public/images/libraryimg/ds.jpg'
import ed from '../../../public/images/libraryimg/ed.png'
import factfulness from '../../../public/images/libraryimg/factfulness.jpg'
import hgw from '../../../public/images/libraryimg/hgw.png'
import ip from '../../../public/images/libraryimg/ip.jpg'
import ls from '../../../public/images/libraryimg/ls.jpg'
import sapiens from '../../../public/images/libraryimg/sapiens.jpg'
import sd from '../../../public/images/libraryimg/sd.jpg'
import sprint from '../../../public/images/libraryimg/sprint.jpg'
import sub from '../../../public/images/libraryimg/sub.png'
import ta from '../../../public/images/libraryimg/ta.png'

export default function Lib () {

    return (
        <>
            <div className="flex flex-col w-auto px-4 md:h-[640px] mt-[80px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='mt-[40px] md:mt-0 md:col-start-1 md:col-end-6 md:row-start-1 md:self-center md:row-span-2 md:mb-[80px]'>
                    <h1 className='text-[32px] leading-[32px] md:text-[48px] md:leading-[56px]'>
                        I used to read everything that I can get my hands on. I learned to behave through good books.
                    </h1>
                </div>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40">
            </div>

            <div className="flex flex-col w-auto px-4 gap-[30px] mt-[80px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-4">
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden border border-[#ddd] rounded-lg md:mt-0 md:col-start-1 md:col-end-4 md:row-start-1
                transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        About Face
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn how to utilize Goal-Directed design process to create psychological and purposeful design through collaborations.
                    </p>
                    <Image src={af} alt='about-face'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>

                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden border border-[#ddd] rounded-lg md:mt-0 md:col-start-4 md:col-end-7 md:row-start-1'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Design of Everyday Things
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn how our everyday objects are designed with many methods presented by the author to create similar products consisting psychology and engineering.
                    </p>
                    <Image src={doet} alt='design-of-everyday-things'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden border border-[#ddd] rounded-lg md:mt-0 md:col-start-7 md:col-end-10 md:row-start-1'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Emotional Design
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn that psychology in design is a powerful way to create a loveable product.
                    </p>
                    <Image src={ed} alt='emotional-design'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden border border-[#ddd] rounded-lg md:mt-0 md:col-start-10 md:col-end-13 md:row-start-1'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Design is Storytelling
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                    Helped me learn that stories are what makes design change people’s minds and stick.
                    </p>
                    <Image src={dis} alt='design-is-storytelling'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>

                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-1 md:col-end-4 md:row-start-2'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Sprint
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn agile development measuring specific metrics followed by key decisions, members involved, and learnings throughout.
                    </p>
                    <Image src={sprint} alt='about-face'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>

                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-4 md:col-end-7 md:row-start-2'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Design Sociology
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn the relevance between the needs of people during the time enforced more design solutions to meet the people’s needs.
                    </p>
                    <Image src={ds} alt='design-of-everyday-things'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-7 md:col-end-10 md:row-start-2'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        The Lean Startup
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn that the lean startup model focuses on values and insights rather than perfectionist approaches to product development.
                    </p>
                    <Image src={ls} alt='emotional-design'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-10 md:col-end-13 md:row-start-2'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Intellectual Capital Theory
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Learned that the mutualism between the customer and the content to create customer fit values by presenting changes in lifestyle from the product.
                    </p>
                    <Image src={ip} alt='design-is-storytelling'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-1 md:col-end-4 md:row-start-3'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Factfulness
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Ten facts that helped me realize that the world you know is different from what you actually experience on your own.
                    </p>
                    <Image src={factfulness} alt='about-face'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>

                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-4 md:col-end-7 md:row-start-3'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Sapiens
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn that there are always that one new paradigm that changes the way we live, the way we work, and the way we bring futurization.
                    </p>
                    <Image src={sapiens} alt='design-of-everyday-things'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-7 md:col-end-10 md:row-start-3'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        How Google Works
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn the perspectives from working at a big company like Google, how to become a smart hire, and how much focus I should have in communication.
                    </p>
                    <Image src={hgw} alt='emotional-design'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-10 md:col-end-13 md:row-start-3'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Creative Selection
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn that actions are stronger than words, demos over process decks, feedbacks allow speedy insights, and foster developing values.
                    </p>
                    <Image src={cs} alt='design-is-storytelling'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-1 md:col-end-4 md:row-start-4'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Shoe Dog
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me change how I view  entrepreneurial success from starting with nothing to becoming the sports giant today.
                    </p>
                    <Image src={sd} alt='about-face'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>

                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-4 md:col-end-7 md:row-start-4'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Subliminal
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn how to use my subconscious to reach my goals by ruling my behaviors.
                    </p>
                    <Image src={sub} alt='design-of-everyday-things'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-7 md:col-end-10 md:row-start-4'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        The Alchemist
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn that the dream is the motivation of a journey, and the journey is what gives you growth.
                    </p>
                    <Image src={ta} alt='emotional-design'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
                <div className='pt-[40px] pb-[60px] px-[40px] md:h-[440px] overflow-hidden md:mt-[60px] border border-[#ddd] rounded-lg md:col-start-10 md:col-end-13 md:row-start-4'>
                    <h4 className='text-[20px] leading-[24px] font-medium md:text-[24px] md:leading-[24px]'>
                        Color is the Best Strategy
                    </h4>
                    <p className='text-[#767676] mt-[20px] h-[100px]'>
                        Helped me learn the psychology of color, use cases, and different ideas.
                    </p>
                    <Image src={citb} alt='design-is-storytelling'
                    className='mt-[60px] w-[75%] relative'
                    />
                </div>
            </div>


    </>
    )
}