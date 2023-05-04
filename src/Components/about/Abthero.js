import Image from 'next/image'
import profile from '../../../Image/profile.png'

const Abthero = () => {
    return (
        <>
            <div class='abthero'>
                <div class='grids'>
                    <Image id='abtprofile' src={profile} />
                    <div class='abtherodiv'>
                        <h1 id='abthero' class='heroh1'>Self-taught designer based in Seattle.<br></br>
Currently @Human-Centered Studio.<br></br>
<br></br>
As a self-taught product designer, I am interested in contributing product development experiences that are carefully crafted and refined for a greater purpose.</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Abthero;