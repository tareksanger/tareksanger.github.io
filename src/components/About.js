import React, { useState } from 'react';
import '../stylesheets/about.css'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

export default function About({ data, ...props }) {

    const [imageShake, setImageShake] = useState(true)
    const [showOtherXP, setOtherXP] = useState(false)

    const handleMouseOverImg = () => {
        setImageShake(!imageShake)
    }

    const experience = (experience) => {
        return experience.map(function (job) {
            let fadeProps = {}
            if(job.key > 199) { 
                fadeProps['collapse'] = true
                fadeProps['when'] = showOtherXP
            }

            return (
                <Fade right {...fadeProps} key={job.key}>
                    <div className="column">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">{job.company ? job.company : job.school}</span>
                                    <span className="position__pos">{job.title ? job.title : job.degree}</span>
                                </h6>
                                <div className="position__timeframe">
                                    {job.years ? job.years : (job.startDate + " - " + job.endDate)}
                                </div>
                            </div>
                            {(job.description ?
                                <ul>
                                    {job.description.map(function (d, i) {
                                        return <li key={i}>{d}</li>
                                    })}
                                </ul>
                                : null
                            )}

                        </div>


                    </div>


                </Fade>

            )
        })
    }

    const handleOtherClick = (event) => {
        event.preventDefault();
        setOtherXP(!showOtherXP)
    }

    return (
        <section id="about" className="s-about target-section">

            <div className="s-about__section s-about__section--profile">

                <div className="right-vert-line"/>

                <div className="row">

                    <div className="column large-6 medium-8 tab-full">
                        <Fade left>
                            <div className="section-intro" data-num="01">
                                <h3 className="subhead">About Me</h3>
                                <h1 className="display-1">{data.intro_header}</h1>
                            </div>

                        </Fade>

                        <div className="profile-pic">
                            <Zoom big>
                                <Tada spy={imageShake}>
                                    <img src={data.image} alt="tarek sanger" onMouseOver={handleMouseOverImg} onTouchStart={handleMouseOverImg} onTouchMove={handleMouseOverImg} />
                                </Tada>
                            </Zoom>
                        </div>

                        <Fade right>
                            <h3>Profile</h3>
                            <p>{data.bio}</p>
                        </Fade>


                    </div>
                </div>

            </div>

            <div className="s-about__section" id="resume" style={{ paddingTop: 50 }}>
                <Fade left big>
                    <div className="row">
                        <div className="column">
                            <h3>Education</h3>
                        </div>
                    </div>
                </Fade>

                <div className="row block-large-1-2 block-900-full work-positions">

                    {experience(data.education)}

                </div>
                <Fade left big>
                    <div className="row">
                        <div className="column">
                            <h3>Experience</h3>
                        </div>
                    </div>
                </Fade>


                <div className="row block-large-1-2 block-900-full work-positions">
                    {experience([...data.experience, ...data.otherExperience])}
                </div>
                <div className="row" style={{visibility: 'hidden'}}>
                    <Flip right>
                       <div className="btn btn--primary btn--medium btn--pill" onClick={handleOtherClick}>{(!showOtherXP) ? 'Show ' : 'Hide '}Other Experience</div> 
                    </Flip>
                </div>
            </div>
        </section>
    )

}