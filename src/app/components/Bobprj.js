'use client';

import Image from 'next/image'
import Link from 'next/link'
import em from '../../../public/images/thebob/empathymap.png'
import { Card, CardBody, CardTitle, CardText,  } from "reactstrap"
import identity from '../../../public/images/thebob/identity.png'
import clutter from '../../../public/images/thebob/clutter.png'
import overload from '../../../public/images/thebob/overload.png'
import chart from '../../../public/images/thebob/chart.png'
import chart2 from '../../../public/images/thebob/chart2.png'
import wireframe from '../../../public/images/thebob/wireframe.png'
import recommend from '../../../public/images/thebob/recommend.png'
import staff from '../../../public/images/thebob/staff.png'
import nophoto from '../../../public/images/thebob/nophoto.png'
import photo from '../../../public/images/thebob/photo.png'

export default function Bob () {
    return(
        <>
            <div className="flex flex-col w-auto px-4 mt-[80px] md:mt-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

            <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                    RESEARCH
                </h4>
                <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                    Concerning revenue despite overworking.
                </h1>

                <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                    As the restaurant desparately needed helping hands, I decided to volunteer and experience all aspects of work in evevery positions. This way, I was able to
                    communicate and discover ways to understand pain points, identify problems, and tackle opportunities.
                    <br></br>
                    <br></br>
                    I learned that they were critically shorthanded while menus consisted labors of ten workers. However, our client consisted of five including himself,
                     making around $10K in gross sales per month. I immediately held a meeting with the client to inform my findings and ideate solutions.
                </p>
            </div>
            <Image src={em} alt="graph"
            className='block w-full mt-[40px] md:col-span-12 md:row-start-2 md:mt-[60px]'
            />
            </div>

            <div className="flex flex-col w-auto px-4 mt-[80px] gap-[30px] md:mt-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        Every line leads to lacking identity.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        I conducted a competitive market analysis in the local area to find out the different strategies managing a restaurant.
                        This would fasten the process of gaining customer insights, strategizing, and planning new ideas.
                        <br></br>
                        <br></br>
                        I learned that they held strict identity with specific menu, helping customers imagine a specific expectations. However, The BoB’s 
                        lacking identity broadened ordering categories. Leading to unorganized system in the kitchen, worker's having time constraints, and 
                        customers disliking the unmet expectation from unspecialized menus.
                    </p>
                </div>
                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-5 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px]">Lack of <br></br>Identity</CardTitle>
                        </div>
                        <Image src={identity} className='h-[160px] w-auto my-[40px]' />
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Customers always questioned the best food the restaurant served. We were known to be good, but not specifically what.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className='w-full md:row-start-2 md:col-start-5 md:col-end-9 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px]">Cluttered <br></br>Information</CardTitle>
                        </div>
                        <Image src={clutter} className='h-[160px] w-auto my-[40px]' />
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            The BoB’s menu consisted with 54 choices with 7 page worth of photo selections. Overwhelming customers to make clear choices.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className='w-full md:row-start-2 md:col-start-9 md:col-end-13 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px]">Overloaded <br></br>Work</CardTitle>
                        </div>
                        <Image src={overload} className='h-[160px] w-auto my-[40px]' />
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Kitchen or serving, they all needed to work more than they could manage. Leading to mistakes, delaying outflows, and stress.
                        </CardText>
                    </CardBody>
                </Card>
            </div>


            <div className="flex flex-col w-auto px-4 mt-[80px] gap-[30px] md:mt-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        Ordering data explained customer choices.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        Upon my part-time experience and gathering data of the orders, such as time it takes to prep and cook and number of mistakes, 
                        I created a chart to show my client about the insights. After several meetings and conversations, I realized the importance of 
                        confidence required for the client to take action.
                        <br></br>
                        <br></br>
                        For me to give him clarity and straightforward decision making, I made a chart of order datas in the last 12-months with insights 
                        learned from the experience. Customers loved our BibimBap despite the category having the least amount of selections to choose from. 
                        With these insights and data, I was able to convince the client that reducing the menu selections will help control labor, branding, 
                        and expenditures.
                    </p>
                </div>
                <Image src={chart} alt="graph"
                className='block w-full mt-[20px] rounded-lg md:col-span-7 md:row-start-2 md:mt-[40px]'
                />
                <Image src={chart2} alt="graph"
                className='block w-full rounded-lg md:col-span-5 md:row-start-2 md:mt-[40px]'
                />
            </div>

            <div className="border border-[#ddd] mx-4 my-20 
            md:mx-40"></div>

            <div className="flex flex-col w-auto px-4 my-[80px] gap-[30px] md:my-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                    DEFINE
                    </h4>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        The real challenge was to overlap the written memory to what's more important.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        As a small business without any vision or a goal, it was difficult to have a focus. I took this as an opportunity to 
                        bring an objective to the people. I constantly held sessions with the client and actively listened to his thoughts.
                        <br></br>
                        <br></br>
                        Later, we came to a conclusion that we would be better off by pivoting into BiBimBap specialized restaurant adapting 
                        fast-casual while remaining popular maintainable menus.
                    </p>
                </div>
            </div>

            <div className="border border-[#ddd] mx-4 my-20 
            md:mx-40"></div>

            <div className="flex flex-col w-auto px-4 my-[80px] gap-[30px] md:my-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-2">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                        IDEATION
                    </h4>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        Informative, clear, and static.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        After carefully observing customer behaviors, we noticed that 99% of the customers had their mobile devices. Our customers usually
                        came in individuals or couples due to our single tray serving model. We focused on utilizing digital QR menu methods to automize 
                        customer seating process and focus on the food outflow.
                        <br></br>
                        <br></br>
                        I utilized nudge principles in the menu to fasten the decision making process and focus on one main experience to hook customers.
                    </p>
                </div>
                <Image src={wireframe} alt="wireframe"
                className='block w-full mt-[20px] rounded-lg md:col-span-12 md:row-start-2 md:mt-[40px] border border-[#f1f1f5]'
                />
            </div>

            <div className="border border-[#ddd] mx-4 my-20 
            md:mx-40"></div>

            <div className="flex flex-col w-auto px-4 my-[80px] gap-[30px] md:my-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-3">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                        DESIGN & TESTING
                    </h4>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]'>
                        Intentional information, satisfying food, and increase retention rate.
                    </h1>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        I conducted observation sessions with users to understand their skills in utilizing web features. I wanted to discover the level of skills for
                        our core customer's for evidence. Most of our customers were familiar with zoom, tab, and even accessibility features. <em>No usability problems were
                        defined for the first 7 days of testing.</em>
                        <br></br>
                        <br></br>
                        I identified that customers first looked at the image, then the name, then the description. Mainly deciding upon images. <em>This helped orders to be 
                        focused on image-included menus, and reduced orders in non-image menus by 40%.</em>
                        <br></br>
                        <br></br>
                        Upon client feedback, they wanted to include Korean pronounciations to add some fun in the ordering process. I included a small 16px textbox for the names.
                    </p>
                </div>
                <Image src={recommend} alt="recommend"
                className='block w-full mt-[20px] rounded-lg md:col-span-6 md:row-start-2 md:mt-[40px] border border-[#f1f1f5]'
                />
                <Image src={staff} alt="staff"
                className='block w-full mt-[20px] rounded-lg md:col-span-6 md:row-start-2 md:mt-[40px] border border-[#f1f1f5]'
                />
                <Image src={photo} alt="photo"
                className='block w-full mt-[20px] rounded-lg md:col-span-6 md:row-start-3 md:mt-[0px] border border-[#f1f1f5]'
                />
                <Image src={nophoto} alt="nophoto"
                className='block w-full mt-[20px] rounded-lg md:col-span-6 md:row-start-3 md:mt-[0px] border border-[#f1f1f5]'
                />
            </div>

            <div className="border border-[#ddd] mx-4 my-20 
            md:mx-40"></div>

            <div className="flex flex-col w-auto px-4 my-[80px] gap-[30px] md:my-[200px] md:px-0 md:grid md:grid-cols-12 md:mx-40 md:grid-row-3">

                <div className='md:col-start-1 md:col-end-5 md:row-start-1'>
                    <h4 className='text-primary text-[18px] tracking-widest font-medium'>
                        IMPACT
                    </h4>
                    <h1 className='mt-[10px] text-[32px] leading-[32px] md:text-[40px] md:leading-[40px] mb-[40px]'>
                        Systemized order process, increased productivity, and focused order funnel.
                    </h1>

                    <Link href={'https://the-bob-seattle.webflow.io/menu'}
                    className='py-[8px] px-[24px] bg-none text-[#000] border border-[#ddd] duration-300 hover:border-none hover:duration-300 hover:bg-primary hover:text-[#fff] font-medium text-[18px] rounded-lg'
                    >Go to Website</Link>

                    <p className='text-[#767676] mt-[10px] md:mt-[40px]'>
                        What kind of impact I left here?
                        <br></br>
                        <br></br>
                        Here are the list:
                    </p>
                </div>
                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-4 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px] text-primary">Focused Menu Order Rate</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            <em>BiBimBoB ordering rate increased by 50%.</em>
                            <br></br>
                            <br></br>
                            Instead of focusing on high-effort competitive soups, we focused on low-effort unique BiBimBoBs.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className='w-full md:row-start-2 md:col-start-4 md:col-end-7 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px] text-primary">Reduced Prep Time</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            <em>Average preparation time was reduced by 4 minutes.</em>
                            <br></br>
                            <br></br>
                            We were able to systemize high-order menus by making small steps efficient.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className='w-full md:row-start-2 md:col-start-7 md:col-end-10 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px] text-primary">Increased Satisfaction Rate</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            <em>Growing number of people being recommended of our BiBimBoB.</em>
                            <br></br>
                            <br></br>
                            New incoming customers increased in number and they stated that they were recommended by a friend.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className='w-full md:row-start-2 md:col-start-10 md:col-end-13 border rounded-lg border-[#f1f1f5] p-[40px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium leading-[24px] text-primary">Increased Profit</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            <em>Increased profit margin by 20%.</em>
                            <br></br>
                            <br></br>
                            Upon focusing on high-margin low-effort menus, we were able to achieve growth in margins.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}