import React, { useState } from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import '../stylesheets/footer.css'
// import Swing from 'react-reveal/Swing';
import Wobble from 'react-reveal/Wobble';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Footer({ data, ...props }) {
    let [letsTalk, setLetsTalk] = useState(true)

    const wabbleLetsTalk = () => {
        setLetsTalk(!letsTalk)
    }

    const createNetwork = (social) => {
        return social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }


    return (
        <footer className="s-footer h-dark-bg" id="contact">
            <Bounce bottom>
                <div className="right-vert-line" />
            </Bounce>


            <div className="row s-footer__main">
                <div className="column large-6">
                    <div className="section-intro">
                        <Fade left big>
                            <h3 className="subhead">Get In Touch</h3>
                        </Fade>

                        <Bounce bottom>
                            <h1 className="display-1">
                                Have an idea or a concept thats got you excited?
                                Let's turn that idea into reality. Shoot me a message.
                        </h1>
                        </Bounce>
                    </div>
                    <Wobble>
                        <Wobble spy={letsTalk}>
                            <div className="footer-email-us">
                                <a href={"mailto:" + data.email} onMouseOver={wabbleLetsTalk} onTouchStart={wabbleLetsTalk} onTouchMove={wabbleLetsTalk} className="btn btn--primary h-full-width">Let's Talk</a>
                            </div>
                        </Wobble>
                    </Wobble>


                </div>

                <div className="column large-5">
                    <div className="footer-contacts">
                        <Fade bottom big>
                            <div className="footer-contact-block">
                                <h5 className="footer-contact-block__header">
                                    Email
                            </h5>
                                <p className="footer-contact-block__content">
                                    <a href={"mailto:" + data.email}>{data.email}</a>
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom big>
                            <div className="footer-contact-block" >
                                <h5 className="footer-contact-block__header">Phone</h5>
                                <p className="footer-contact-block__content">
                                    <a href={"tel:" + data.phone}>{data.phone}</a>
                                </p>
                            </div>
                        </Fade>


                        <br />

                        <div className="footer-contact-block">
                            <Fade bottom big>
                                <h5 className="footer-contact-block__header">
                                    Social
                            </h5>
                            </Fade>

                            <Fade bottom>
                                <ul className="footer-contact-block__list">
                                    {createNetwork(data.social)}
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row s-footer__bottom">
                <div className="column large-full ss-copyright">
                    <span>Design by <a href="https://www.styleshout.com/">StyleShout</a> & Tarek Sanger</span>
                </div>

                <div className="ss-go-top">
                    <a title="Back to Top" href='/#' onClick={scroll.scrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z" /></svg>
                    </a>
                </div>
            </div>

        </footer>

    )
}