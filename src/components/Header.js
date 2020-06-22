import React, { useEffect } from 'react';
import $ from 'jquery';
import '../stylesheets/hero.css'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Header({ data, ...props }) {
    
    const createNetwork = (social) => {
        return social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    useEffect(() => {
        $('#hero').css({ 'height': $(window).height()});
    }, [])

    
    return (
        <section 
            id="hero" 
            className="s-hero target-section"
            style={{ backgroundImage: "url('images/hero-bg-3000.jpg')", backgroundSize: 'cover', backgroundPosition: "center center" }}
        >

            <div className="row hero-content">

                <div className="column large-full">
                    <Fade top>
                        <h1>
                            Hello, I'm {data.name}, <br />
                            {data.occupation}, <br />
                            based in {data.address.city}, {data.address.province}.
                        </h1>
                    </Fade>
                    <Bounce left>
                        <ul className="hero-social">
                            {createNetwork(data.social)}
                        </ul>
                    </Bounce>

                </div>

            </div>


            <Bounce bottom>
                <div className="hero-scroll">
                    <Link to='about' spy={true} smooth={true}>
                        <Fade right big>
                            <div className="scroll-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z" /></svg>
                            </div>
                        </Fade>
                    </Link>
                </div>
            </Bounce>


        </section>


    )

}