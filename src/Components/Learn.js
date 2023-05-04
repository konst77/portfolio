import React from 'react';

const Learn = ({title, head, time, learning}) => {
    const mytitle = title || 'default text';
    const myhead = head || 'default text';
    const mytime = time || 'default text';
    const mylearning = learning || 'default text';

    return(
        <>
            <div id='learn' className="grids">
                <h2 id='learnt'>Design Experiences</h2>

                <div className="minigrids">
                    <h5 className="learningh">Human-Centered Studio</h5>
                    <p className="learningp">Founder (2022-present)</p>
                    <p className="descp">Led design strategy planning, business consulting, user-centered product developments.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Stealth Contract Role</h5>
                    <p className="learningp">Designer (2022-2022)</p>
                    <p className="descp">Designed web interface in a cross-functional team.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">GDxUX</h5>
                    <p className="learningp">Designer (2022-2022)</p>
                    <p className="descp">Led responsive web design project by conducting research, wireframe, visual design.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Freelancer</h5>
                    <p className="learningp">Designer (2017-2017)</p>
                    <p className="descp">Designed visuals and assets for clients.</p>
                </div>

                <h2 id='learnt'>Other Experiences</h2>

                <div className="minigrids">
                    <h5 className="learningh">Restaurant Manager</h5>
                    <p className="learningp">Manager (2016-2023)</p>
                    <p className="descp">Conducted strategy planning, business consulting, customer-centric product developments.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Korean Student Union</h5>
                    <p className="learningp">Design Lead (2017-2019)</p>
                    <p className="descp">Led the team to create short videos and designs in fast-paced environment.</p>
                </div>

                <h2 id='learnt'>Projects/Activities</h2>

                <div className="minigrids">
                    <h5 className="learningh">Figmathon</h5>
                    <p className="learningp">Protothon (2022)</p>
                    <p className="descp">Led research on designing a mobile app to help environmental sustainability for everyone.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">INFO 200</h5>
                    <p className="learningp">School Project (2021)</p>
                    <p className="descp">Led the project on designing a mobile app to bring long-distance families closer for international students.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Adobe Creative Jam</h5>
                    <p className="learningp">Protothon (2022)</p>
                    <p className="descp">Designed a third party music streaming mobile app for SONOS.</p>
                </div>

                <h2 id='learnt'>Education</h2>

                <div className="minigrids">
                    <h5 className="learningh">Art History</h5>
                    <p className="learningp">B.A. (2016-2022)</p>
                    <p className="descp">Learned to identify people, culture, and behaviors.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Google UX Design</h5>
                    <p className="learningp">Coursera (2021-2021)</p>
                    <p className="descp">Learned UX Design method from Google Certification program.</p>
                </div>

                <div className="minigrids">
                    <h5 className="learningh">Design-led Strategy</h5>
                    <p className="learningp">Coursera (2021-2021)</p>
                    <p className="descp">Learned design thinking applied in business space with the University of Sydney.</p>
                </div>
            </div>
        </>
    )
}

export default Learn