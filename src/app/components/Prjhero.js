import Image from 'next/image'

const Prjhero = ({ src, text, intro1, intro2 ,intro3, intro4}) => {

    return(
        <div className="flex flex-col w-auto px-4 mt-[80px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">
            <Image src={src} alt="HeaderImage"
            className='block md:col-start-7 md:col-span-6 md:row-span-2 border rounded-lg'
            />

            <div className='mt-[40px] md:mt-0 md:col-start-1 md:col-end-6 md:row-start-1 md:self-center md:row-span-2 md:mb-[80px]'>
                <h1 className='text-[32px] leading-[32px] md:text-[48px] md:leading-[56px]'>
                    {text}
                </h1>

                <div 
            className='grid grid-cols-2 grid-rows-2 gap-[20px] text-[#767676] py-[10px] border-t border-b border-[#ddd] mt-[20px] md:col-span-6 md:flex-row md:justify-between md:self-baseline md:mt-[40px] md:py-[20px]'
            >
                    <p key={intro1}>
                    {intro1}
                    </p>

                    <p key={intro2}>
                    {intro2}
                    </p>

                    <p key={intro3}>
                    {intro3}
                    </p>

                    <p key={intro4}>
                    {intro4}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Prjhero;