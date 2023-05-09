import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='flex flex-col items-center mt-[100px] py-[20px] gap-5 mx-4 border-t-[2px] border-[#ddd] md:grid md:grid-cols-12 md:grid-rows-3 md:gap-5 md:mx-40'>
            <div className='row-start-1 w-8 h-auto'>
                    <Link id='' href='/'>
                        <Image
                        className="h-8 w-full"
                        src={require('../../../public/logo.png')}
                        alt="Logo"
                        />
                    </Link>
                </div>
            <div className='flex flex-col items-center w-full gap-5 md:flex md:flex-row md:row-start-2 md:col-start-1 md:col-end-6'>
                <Link href='/projects'>
                    <p className='rounded-lg py-3 font-medium text-lg'>
                        Projects
                    </p>
                </Link>

                <Link href='/about'>
                    <p className='rounded-lg py-3 font-medium text-lg'>
                        About
                    </p>
                </Link>

                <Link href='/learning'>
                    <p className='rounded-lg py-3 font-medium text-lg'>
                        Learning
                    </p>
                </Link>

                <Link className='' href='/contact'>
                <p className='rounded-lg py-3 font-medium text-lg text-primary md:py-2 md:px-4 md:hover:bg-[#f1f1f5]'>
                    Coffee?
                </p>
               </Link>
            </div>
            
            <h4 className='row-start-3 text-sm'>©RayMoon2023</h4>
    
        </div>
    );
};

export default Footer;