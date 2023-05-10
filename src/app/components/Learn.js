'use client';

import { Card, CardBody, CardTitle, CardText,  } from "reactstrap";


export default function Learn() {

    return(
        <main>
            <div className='flex flex-col justify-end w-auto px-4 h-[640px] mt-[80px] gap-[30px] 
            md:mx-40 md:px-0 md:grid md:grid-cols-12'>
                <div className='self-end md:col-start-1 md:col-end-6 md:self-end'>
                    <h1>
                        Ray is a Learner. With coffee, books, a digital device and life experience.
                        <br></br><br></br>
                        ↓
                        </h1>
                </div>
            </div>

            <div className="border border-[#ddd] mx-4 my-20  
            md:mx-40"></div>

            <div id='project' className="flex flex-column w-auto px-4 mt-[80px] 
            md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] 
                md:text-[40px] md:leading-[40px]">
                    Design Experience
                </h2>
            </div>

            <div className="flex flex-col w-auto px-4 mt-[40px] gap-[30px] md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-rows-4">
                <Card className='w-full md:row-start-1 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Human-Centered Studio</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Founder (2022-present)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Led design strategy planning, business consulting, user-centered product developments.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Stealth Contract Role</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Designer (2022-2022)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                        Designed web interface in a cross-functional team.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-3 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">GDxUX</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Designer (2022-2022)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Led responsive web design project by conducting research, wireframe, visual design.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-4 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                        <CardTitle className="text-[24px] font-medium">Freelancer</CardTitle>
                        <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Designer (2017-Present)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                        Designed visuals and assets for clients.
                        </CardText>
                    </CardBody>
                </Card>
            </div>

            <div id='project' className="flex flex-column w-auto px-4 mt-[80px] 
            md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] 
                md:text-[40px] md:leading-[40px]">
                    Other Experiences
                </h2>
            </div>

            <div className="flex flex-col w-auto px-4 mt-[40px] gap-[30px] md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-rows-2">
                <Card className='w-full md:row-start-1 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Restaurant Industry</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Manager (2016-2023)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Learned to manage people, learn leadership, and communicate effectively with others.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Korean Student Union</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Design Lead (2017-2019)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Led the team to create short videos and designs in fast-paced environment.
                        </CardText>
                    </CardBody>
                </Card>
            </div>

            <div id='project' className="flex flex-column w-auto px-4 mt-[80px] 
            md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] 
                md:text-[40px] md:leading-[40px]">
                    Projects/Activities
                </h2>
            </div>

            <div className="flex flex-col w-auto px-4 mt-[40px] gap-[30px] md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-rows-2">
                <Card className='w-full md:row-start-1 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Figmathon</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Protothon (2022)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Led research on designing a mobile app to help environmental sustainability for everyone.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">INFO 200</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">School Project (2021)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Led the project on designing a mobile app to bring long-distance families closer for international students.
                        </CardText>
                    </CardBody>
                </Card>
            </div>

            <div id='project' className="flex flex-column w-auto px-4 mt-[80px] 
            md:mx-40 md:px-0">
                <h2 className="text-[32px] leading-[32px] 
                md:text-[40px] md:leading-[40px]">
                    Education
                </h2>
            </div>

            <div className="flex flex-col w-auto px-4 mt-[40px] gap-[30px] md:mx-40 md:px-0 md:grid md:grid-cols-12 md:grid-rows-3">
                <Card className='w-full md:row-start-1 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Art History</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">B.A. (2016-2022)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Learned to identify people, culture, and behaviors.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-2 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Google UX Design</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Coursera (2021-2021)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Learned UX Design method from Google Certification program.
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='w-full md:row-start-3 md:col-start-1 md:col-end-6 border rounded-lg border-[#f1f1f5] p-[20px]'>
                    <CardBody>
                        <div className="block md:flex md:flex-row w-full gap-[30%] md:justify-between">
                            <CardTitle className="text-[24px] font-medium">Design-led Strategy</CardTitle>
                            <CardTitle className="text-[16px] font-medium text-[#767676] self-center">Coursera (2021-2021)</CardTitle>
                        </div>
                        <CardText className="text-[18px] mt-[20px] text-[#767676]">
                            Learned design thinking applied in business space with the University of Sydney.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </main>
    )
}