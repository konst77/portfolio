import Image from 'next/image'
import r1 from '../../../public/images/niet/r1.png'
import r2 from '../../../public/images/niet/r2.png'
import r3 from '../../../public/images/niet/r3.png'

export default function Niet () {
    return(
        <main>
            <div className="flex flex-col w-auto px-4 mt-[80px] gap-[30px] md:mt-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                        RESEARCH OUTCOME
                    </h4>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        Visually sensitive, mentally negative, and motivation lacking.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        Initially, I tested focus groups to understand specific behaviors, change cases, and 
                        <br></br>
                        <br></br>
                        
                    </p>
                </div>
                <Image src={r1} alt="r1"
                className='block w-full mt-[40px] md:col-start-1 md:col-end-5 md:row-start-2 md:mt-[60px] bg-[#f1f1f5] rounded-lg'
                />
                <Image src={r2} alt="r2"
                className='block w-full mt-[40px] md:col-start-5 md:col-end-9 md:row-start-2 md:mt-[60px] bg-[#f1f1f5] rounded-lg'
                />
                <Image src={r3} alt="r3"
                className='block w-full mt-[40px] md:col-start-9 md:col-end-13 md:row-start-2 md:mt-[60px] bg-[#f1f1f5] rounded-lg'
                />
            </div>
        </main>
    )
}