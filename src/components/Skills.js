import React from 'react';
import '../stylesheets/skills.css'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function Skills({ data, ...props }) {

    const skillsList = (skills) => {
        return skills.map(function (skill, index) {
            if (index % 2 === 0) {
                return (<li className="skills-list__item grow" key={index}>{skill}</li>)
            }
            return (<li className="skills-list__item grow" key={index}>{skill}</li>)

        })
    }

    return (
        <section id="skills" className="s-skills target-section h-dark-bg">

            <div className="row s-skills__content">

                <Bounce down><div className="vert-line"/></Bounce>

                <div className="column large-7 s-skills__leftcol">
                    <Fade left>
                        <div className="section-intro" data-num="02">
                            <h3 className="subhead">Skills</h3>
                            <h1 className="display-1">{data.intro_header}</h1>
                        </div>
                    </Fade>
                </div>
                <div className="column large-5">
                    <Fade right>
                        <ul className="skills-list">{skillsList(data.list)}</ul>
                    </Fade>
                </div>
            </div>
        </section>
    )
}