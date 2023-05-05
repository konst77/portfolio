import Image from 'next/image'
import ds from '../../../Image/libraryimg/design-sociology.jpg'
import f from '../../../Image/libraryimg/factfulness.jpg'
import i from '../../../Image/libraryimg/intellectual-property.jpg'
import ls from '../../../Image/libraryimg/the-ls.jpg'
import s from '../../../Image/libraryimg/sapiens.jpg'
import cs from '../../../Image/libraryimg/creative-selection.jpg'
import sub from '../../../Image/libraryimg/sub.png'
import ta from '../../../Image/libraryimg/ta.png'
import hgw from '../../../Image/libraryimg/hgw.png'
import ed from '../../../Image/libraryimg/ed.png'
import dis from '../../../Image/libraryimg/dis.png'
import af from '../../../Image/libraryimg/af.png'
import sd from '../../../Image/libraryimg/shoe-dog.jpg'
import spr from '../../../Image/libraryimg/sprint.jpg'
import doet from '../../../Image/libraryimg/doet.jpg'

export default function Shelf() {

    const Books = ({title, description, src}) => {

        const Bookimg = ({src}) => {
            return (
            <Image className='position' src={src} width={215} />
            )
        }
    
        return(
        <div>
            <h5 className="learningh">{title}</h5>
            <p>{description}</p>
            <Bookimg src={src} />
        </div>
        )
    }

    return (
        <>
            <h2>Book List</h2>
        <div id='margin'>
            <div id='bookshelf'>
                <div id='card' className='bookcard'>
                    <Books title='Design Sociology' 
                    description='Ten facts that helped me realize that the world you know is different from what you actually experience on your own.'
                    src={ds} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Factfulness' 
                    description='Helped me learn the relevance between the needs of people during the time enforced more design solutions to meet the people’s needs.'
                    src={f} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Intellectual Capital Theory' 
                    description='Learned the mutualism between the customer and the content to create customer fit values by presenting changes in lifestyle from the product.'
                    src={i} 
                    />
                </div>
            </div>

            <div id='bookshelf'>
                <div id='card' className='bookcard'>
                    <Books title='The Lean Startup' 
                    description='Helped me learn that the lean startup model focuses on values and insights rather than perfectionist approaches to product development.'
                    src={ls} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Sapiens' 
                    description='Helped me learn that there are always that one new paradigm that changes the way we live, the way we work, and the way we bring futurization.'
                    src={s} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Creative Selection' 
                    description='Helped me learn that actions are stronger than words, demos over process decks, feedbacks allow speedy insights, and foster developing values.'
                    src={cs} 
                    />
                </div>
            </div>

            <div id='bookshelf'>
                <div id='card' className='bookcard'>
                    <Books title='How Google Works' 
                    description='Helped me learn the perspectives from working at a big company like Google, how to become a smart hire, and how much focus I should have in communication.'
                    src={hgw} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Shoe Dog' 
                    description='Helped me change how I view  entrepreneurial success from starting with nothing to becoming the sports giant today.'
                    src={sd} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Sprint' 
                    description='Helped me learn agile development measuring specific metrics followed by key decisions, members involved, and learnings throughout.'
                    src={spr} 
                    />
                </div>
            </div>

            <div id='bookshelf'>
                <div id='card' className='bookcard'>
                    <Books title='Design of Everyday Things' 
                    description='Helped me learn how our everyday objects are designed with many methods presented by the author to create similar products consisting psychology and engineering.'
                    src={doet} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Emotional Design' 
                    description='Helped me learn that psychology in design is a powerful way to create a loveable product.'
                    src={ed} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='About Face' 
                    description='Helped me learn how to utilize Goal-Directed design process to create psychological and purposeful design through collaborations.'
                    src={af} 
                    />
                </div>
            </div>

            <div id='bookshelf'>
                <div id='card' className='bookcard'>
                    <Books title='Subliminal' 
                    description='Helped me learn how to use my subconscious to reach my goals by ruling my behaviors.'
                    src={sub} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='The Alchemist' 
                    description='Helped me learn that the dream is the motivation of a journey, and the journey is what gives you growth.'
                    src={ta} 
                    />
                </div>

                <div id='card' className='bookcard'>
                    <Books title='Design is Storytelling' 
                    description='Helped me learn that stories are what makes design change people’s lives.'
                    src={dis} 
                    />
                </div>
            </div>
        </div>
        
        </>
    )
}