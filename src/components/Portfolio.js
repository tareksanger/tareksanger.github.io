/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { isMobile, isAndroid } from 'react-device-detect';

import '../stylesheets/portfolio.css'




export default function Portfolio({ data }) {


  function handleUrl(url, type) {
    if (type === 1) {
      window.open(url)
    } else {

      if (url.ios && !url.android) window.open(url.ios)
      else if (!url.ios && url.android) window.open(url.android)

      else {
        if(isMobile) {
          if(isAndroid) {
            window.open(url.android)
          } else {
            window.open(url.ios)
          }
        } else {
          window.open(url.android)
          
        }

      }
    }



  }

  const porfolioElements = (projects) => {
    return (
      projects.map(function (project, index) {
        return (
          <div className="column project-wrapper" style={{ zIndex: 2 }}>

            <div key={project.name} className={(project.type === 2 ? "portfolio-item-app" : "portfolio-item-website") + " portfolio-item"}>
              <Zoom
                left={project.type === 1 && index % 2 === 0}
                right={project.type === 1 && index % 2 !== 0}
                big
              >
                <div className="item-wrap">
                  <a href={'#'} onClick={() => handleUrl(project.url, project.type)} title={project.name}>
                    <img src={project.image} alt={project.name} />

                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{project.name}</h5>
                        <p>{project.category}</p>
                      </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </div>
                  </a>

                </div>
              </Zoom>
            </div>
          </div>

        )
      })
    )
  }



  return (
    <section id="portfolio" className="s-portfolio target-section">

      <div className="row s-portfolio__header">
        <div className="column large-6 medium-8 tab-full">
          <Fade left>
            <div className="section-intro" data-num="03">
              <h3 className="subhead">Portfolio</h3>
              <h1 className="display-1">
                {data.intro_header}
              </h1>
            </div>
          </Fade>

        </div>
      </div>

      <Fade right big>
        <div className="row">
          <div className="column">
            <h3>Websites & Web Apps</h3>
          </div>
        </div>
      </Fade>


      <div className="row s-portfolio__list block-large-1-2 block-900-full">
        {porfolioElements(data.websites)}
      </div>

      <Fade right big>
        <div className="row">
          <div className="column">
            <h3>Mobile Apps</h3>
          </div>
        </div>
      </Fade>

      <div className="row s-portfolio__list block-large-1-8 block-900-full">
        {porfolioElements(data.apps)}
      </div>

    </section>
  )
}