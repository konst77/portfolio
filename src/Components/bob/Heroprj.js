import Image from 'next/image'
import Link from 'next/link'
import bobphone from '../../../Image/thebob/bobphone.png'

const Heroprj = () => {

    return (
        <div class='prjhero'>
            <div class='grids'>
                    <div class='prjheroimg'>
                        <Image class='bobphone' src={bobphone} alt="bobphone" />
                    </div>

                    <div class='prjheader'>
                        <h1 class='thebobh'>How we turned a menu into a decison-making tool and the most effective system for the restaurant operation.</h1>
                        <button class='herobutton' href="Prototype">Final Prototype ↓</button>
                    </div>
                    <div id='filler'></div>
                </div>

                <hr id='prjintro'></hr>
                
                <div class='prjintro'>
                    <div class='Introdiv1'>
                        <p>Client: <em>The BoB</em></p>
                    </div>

                    <div class='Introdiv2'>
                        <p>Duration: <em>60 Days</em></p>
                    </div>

                    <div class='Introdiv3'>
                        <p>Budget: <em>$0</em></p>
                    </div>

                    <div class='Introdiv4'>
                        <p>Team: <em>Sole Designer</em></p>
                    </div>
                </div>

                <hr id='prjintro'></hr>

        </div>

    );

};

export default Heroprj