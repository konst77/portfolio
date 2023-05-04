import profile from '/image/profile.png'
import Image from 'next/image'

const Personal = () => {
    return(
        <div class='personal'>
            <div class='grids'>
                <Image class='profile' src={profile} alt="profile" />

                <div class='personalmini'>
                    <h1 class='personalh'>I am a diligent, self-motivated, and design thinking minded product designer to help craft smooth experiences for digital products.</h1>
                    <button class='herobutton'>More About Ray →</button>
                </div>
            </div>
        </div>
    );
};

export default Personal;