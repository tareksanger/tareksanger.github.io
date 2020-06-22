import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga'
import $ from 'jquery';
import { Loading, Navbar, Header, About, Skills, Portfolio, Footer } from './components'
import './stylesheets/base.css';
import './stylesheets/main.css';

ReactGA.initialize('UA-161736507-1')
ReactGA.pageview(window.location.pathname + window.location.search)

export default function App() {



  let [isLoading, setIsLoading] = useState(true)
  let [data, setData] = useState()

  const pxShow = 800;
  const $WIN = $(window)
  const $toggleButton = $('.header-menu-toggle');
  const $siteBody = $("body");

  const handleScroll = function () {

    /*------------- Header ----------- */
    const triggerHeight = $('.s-hero').outerHeight() - 170;

    let loc = $WIN.scrollTop();

    if (loc > triggerHeight) {
      $('.s-header').addClass('sticky');
    } else {
      $('.s-header').removeClass('sticky');
    }

    if (loc > triggerHeight + 20) {
      $('.s-header').addClass('offset');
    } else {
      $('.s-header').removeClass('offset');
    }

    if (loc > triggerHeight + 150) {
      $('.s-header').addClass('scrolling');
    } else {
      $('.s-header').removeClass('scrolling');
    }

    /*------------- Footer ----------- */
    if ($(window).scrollTop() >= pxShow) {
      if (!$(".ss-go-top").hasClass('link-is-visible')) $(".ss-go-top").addClass('link-is-visible')
    } else {
      $(".ss-go-top").removeClass('link-is-visible')
    }

  };


  const handleResize = function () {
    $('#hero').css({ 'height': $(window).height() });
    $('body').css({ 'width': $(window).width() })
    // above 900px
    if (window.matchMedia('(min-width: 901px)').matches) {
      if ($siteBody.hasClass("menu-is-open")) $siteBody.removeClass("menu-is-open");
      if ($toggleButton.hasClass("is-clicked")) $toggleButton.removeClass("is-clicked");
    }

  };


  const getData = () => {
    $.ajax({
      url: '/tareksangerData.json',
      dataType: 'json',
      cache: false,
      success: function (r) {
        setData(r)
        setTimeout(() => {
          setIsLoading(false)
        }, 3000)
      },
      error: function (xhr, status, err) {
        alert(err)
      }
    })
  }

  useEffect(() => {
    $('#hero').css({ 'height': $(window).height() });
    $('body').css({ 'width': $(window).width() })

    window.addEventListener('scroll', handleScroll)

    if ($(window).scrollTop() >= pxShow) $(".ss-go-top").addClass('link-is-visible');
    window.addEventListener('resize', handleResize)
    getData()
  }, [])


  return (
    <div className="App">
      {isLoading ?
        <Loading />
        :
        <div>
          <Navbar data={data.main} sections={['about', 'resume', 'skills',
            'portfolio', 
            'contact']} />
          <Header data={data.main} />
          <About data={data.about} />
          <Skills data={data.skills} />
          <Portfolio data={data.portfolio} />
          <Footer data={data.main} />


        </div>
      }

    </div>
  );
}

