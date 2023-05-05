import Image from 'next/image'
import profileimg from '/Image/profile.png'
import Link from 'next/link'

const Personal = () => {
    return(
        <div className='personal'>
            <div className='grids'>
                <Image className='profile' src={profileimg} alt="profile" />

                <div className='personalmini'>
                    <h1 className='personalh'>I am a diligent, self-motivated, and design thinking minded product designer to help craft smooth experiences for digital products.</h1>
                    <Link href='/about'>
                        <button className='herobutton' href='/about'>More About Ray →</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Personal;