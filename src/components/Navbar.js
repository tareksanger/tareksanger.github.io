import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import $ from 'jquery'
import logo from '../logo.svg'
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';

export default function Navbar({ data, sections = [], ...props }) {

    let [stretch, setStretch] = useState(true)

    const navburg = function (e) {
        e.preventDefault();
        $('.header-menu-toggle').toggleClass('is-clicked');
        $("body").toggleClass('menu-is-open');
    };

    const navbutton = function () {
        if (window.matchMedia('(max-width: 900px)').matches) {
            console.log('hello')
            $('.header-menu-toggle').removeClass('is-clicked');
            $("body").removeClass('menu-is-open');
        }
    }

    const createLinks = (sections) => {
        return (sections.map(function (section) {
            return (<li key={section}><Link to={section} spy={true} smooth={true} onClick={navbutton}>
                {section.replace(/^\w/, c => c.toUpperCase())}
            </Link></li>)
        })
        )
    }

    useEffect(() => {
        console.log(sections)
    }, [])

    const stretchMe = () => {
        setStretch(!stretch)
    }



    return (
        <header className="s-header">

            <div className="header-logo">
                <Bounce right>
                    <div className="logo-border">
                        <a className='logo' href="/" onMouseOver={stretchMe} >
                            <RubberBand spy={stretch}>
                                <img src={logo} alt="Homepage" />
                            </RubberBand>
                        </a>
                    </div>
                </Bounce>
            </div>

            <div className="header-content">
                <nav className="row header-nav-wrap">
                    <ul className="header-nav">
                        <li><Link to='hero' spy={true} smooth={true} onClick={navbutton}>Home</Link></li>
                        {createLinks(sections)}
                        <li><a href={"mailto:" + data.email} title="Contact us">Say Hello</a></li>
                    </ul>
                </nav>

                {/* <a href="#0" className="btn btn--stroke btn--small">Download CV</a> */}

            </div>
            <Bounce left>
                <a className="header-menu-toggle" href="/#" onClick={navburg}><span>Menu</span></a>
            </Bounce>
        </header>
    )
}