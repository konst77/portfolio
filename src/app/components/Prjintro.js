import Image from 'next/image'

const Prjintro = ({ src, text, description, header}) => {

    return(
        <>
        <div className="flex flex-col w-auto px-4 mt-[80px] md:mt-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

            <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                    {header}
                </h4>
                <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                    {text}
                </h1>

                <p key={description} className='text-[#767676] mt-[10px] md:mt-[40px]'>
                    {description}
                </p>
            </div>
            <Image src={src} alt="HeaderImage"
            className='block w-full mt-[40px] md:col-span-6 md:row-start-2 md:mt-[60px]'
            />
        </div>

        <div className="border border-[#ddd] mx-4 my-20  
        md:mx-40"></div>
        </>
    )
}

export default Prjintro;