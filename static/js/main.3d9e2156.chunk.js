(this["webpackJsonptareksanger.github.io"]=this["webpackJsonptareksanger.github.io"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/logo.d4f48377.svg"},31:function(e,a,t){e.exports=t(55)},36:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),o=t.n(c),r=(t(36),t(6)),s=t(21),i=t(1),m=t.n(i);function d(e){return l.a.createElement("div",{className:"siteLoading",id:"siteLoading"},l.a.createElement("div",{className:"siteLoading-frame"},l.a.createElement("img",{className:"siteLoading-image",src:"images/loader.gif",alt:"loader"})))}var u=t(4),E=t(9),h=t(27),f=t.n(h),v=t(28),g=t.n(v),p=t(5),b=t.n(p);function w(e){var a=e.data,t=e.sections,c=void 0===t?[]:t,o=(Object(u.a)(e,["data","sections"]),Object(n.useState)(!0)),s=Object(r.a)(o,2),i=s[0],d=s[1],h=function(){window.matchMedia("(max-width: 900px)").matches&&(console.log("hello"),m()(".header-menu-toggle").removeClass("is-clicked"),m()("body").removeClass("menu-is-open"))};return l.a.createElement("header",{className:"s-header"},l.a.createElement("div",{className:"header-logo"},l.a.createElement(b.a,{right:!0},l.a.createElement("div",{className:"logo-border"},l.a.createElement("a",{className:"logo",href:"/",onMouseOver:function(){d(!i)}},l.a.createElement(g.a,{spy:i},l.a.createElement("img",{src:f.a,alt:"Homepage"})))))),l.a.createElement("div",{className:"header-content"},l.a.createElement("nav",{className:"row header-nav-wrap"},l.a.createElement("ul",{className:"header-nav"},l.a.createElement("li",null,l.a.createElement(E.Link,{to:"hero",spy:!0,smooth:!0,onClick:h},"Home")),function(e){return e.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement(E.Link,{to:e,spy:!0,smooth:!0,onClick:h},e.replace(/^\w/,(function(e){return e.toUpperCase()}))))}))}(c),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:"+a.email,title:"Contact us"},"Say Hello"))))),l.a.createElement(b.a,{left:!0},l.a.createElement("a",{className:"header-menu-toggle",href:"/#",onClick:function(e){e.preventDefault(),m()(".header-menu-toggle").toggleClass("is-clicked"),m()("body").toggleClass("menu-is-open")}},l.a.createElement("span",null,"Menu"))))}t(48);var N=t(2),k=t.n(N);function y(e){var a=e.data;Object(u.a)(e,["data"]);return Object(n.useEffect)((function(){m()("#hero").css({height:m()(window).height()})}),[]),l.a.createElement("section",{id:"hero",className:"s-hero target-section",style:{backgroundImage:"url('images/hero-bg-3000.jpg')",backgroundSize:"cover",backgroundPosition:"center center"}},l.a.createElement("div",{className:"row hero-content"},l.a.createElement("div",{className:"column large-full"},l.a.createElement(k.a,{top:!0},l.a.createElement("h1",null,"Hello, I'm ",a.name,", ",l.a.createElement("br",null),a.occupation,", ",l.a.createElement("br",null),"based in ",a.address.city,", ",a.address.province,".")),l.a.createElement(b.a,{left:!0},l.a.createElement("ul",{className:"hero-social"},a.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))))),l.a.createElement(b.a,{bottom:!0},l.a.createElement("div",{className:"hero-scroll"},l.a.createElement(E.Link,{to:"about",spy:!0,smooth:!0},l.a.createElement(k.a,{right:!0,big:!0},l.a.createElement("div",{className:"scroll-link"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 24l-8-9h6v-15h4v15h6z"}))))))))}var _=t(22),j=(t(49),t(29)),C=t.n(j),O=t(15),S=t.n(O),T=t(30),x=t.n(T);function L(e){var a=e.data,t=(Object(u.a)(e,["data"]),Object(n.useState)(!0)),c=Object(r.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(!1),m=Object(r.a)(i,2),d=m[0],E=m[1],h=function(){s(!o)},f=function(e){return e.map((function(e){var a={};return e.key>199&&(a.collapse=!0,a.when=d),l.a.createElement(k.a,Object.assign({right:!0},a,{key:e.key}),l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"position__header"},l.a.createElement("h6",null,l.a.createElement("span",{className:"position__co"},e.company?e.company:e.school),l.a.createElement("span",{className:"position__pos"},e.title?e.title:e.degree)),l.a.createElement("div",{className:"position__timeframe"},e.years?e.years:e.startDate+" - "+e.endDate)),e.description?l.a.createElement("ul",null,e.description.map((function(e,a){return l.a.createElement("li",{key:a},e)}))):null)))}))};return l.a.createElement("section",{id:"about",className:"s-about target-section"},l.a.createElement("div",{className:"s-about__section s-about__section--profile"},l.a.createElement("div",{className:"right-vert-line"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column large-6 medium-8 tab-full"},l.a.createElement(k.a,{left:!0},l.a.createElement("div",{className:"section-intro","data-num":"01"},l.a.createElement("h3",{className:"subhead"},"About Me"),l.a.createElement("h1",{className:"display-1"},a.intro_header))),l.a.createElement("div",{className:"profile-pic"},l.a.createElement(S.a,{big:!0},l.a.createElement(x.a,{spy:o},l.a.createElement("img",{src:a.image,alt:"tarek sanger",onMouseOver:h,onTouchStart:h,onTouchMove:h})))),l.a.createElement(k.a,{right:!0},l.a.createElement("h3",null,"Profile"),l.a.createElement("p",null,a.bio))))),l.a.createElement("div",{className:"s-about__section",id:"resume",style:{paddingTop:50}},l.a.createElement(k.a,{left:!0,big:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h3",null,"Education")))),l.a.createElement("div",{className:"row block-large-1-2 block-900-full work-positions"},f(a.education)),l.a.createElement(k.a,{left:!0,big:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h3",null,"Experience")))),l.a.createElement("div",{className:"row block-large-1-2 block-900-full work-positions"},f([].concat(Object(_.a)(a.experience),Object(_.a)(a.otherExperience)))),l.a.createElement("div",{className:"row",style:{visibility:"hidden"}},l.a.createElement(C.a,{right:!0},l.a.createElement("div",{className:"btn btn--primary btn--medium btn--pill",onClick:function(e){e.preventDefault(),E(!d)}},d?"Hide ":"Show ","Other Experience")))))}t(50);function M(e){var a=e.data;Object(u.a)(e,["data"]);return l.a.createElement("section",{id:"skills",className:"s-skills target-section h-dark-bg"},l.a.createElement("div",{className:"row s-skills__content"},l.a.createElement(b.a,{down:!0},l.a.createElement("div",{className:"vert-line"})),l.a.createElement("div",{className:"column large-7 s-skills__leftcol"},l.a.createElement(k.a,{left:!0},l.a.createElement("div",{className:"section-intro","data-num":"02"},l.a.createElement("h3",{className:"subhead"},"Skills"),l.a.createElement("h1",{className:"display-1"},a.intro_header)))),l.a.createElement("div",{className:"column large-5"},l.a.createElement(k.a,{right:!0},l.a.createElement("ul",{className:"skills-list"},a.list.map((function(e,a){return l.a.createElement("li",{className:"skills-list__item grow",key:a},e)})))))))}t(51);function A(e){var a=e.data,t=(Object(u.a)(e,["data"]),function(e){return e.map((function(e,a){return l.a.createElement("div",{className:"column",style:{zIndex:2}},l.a.createElement("div",{key:e.name,className:(2===e.type?"portfolio-item-app":"portfolio-item-website")+" portfolio-item"},l.a.createElement(S.a,{left:1===e.type&&a%2===0,right:1===e.type&&a%2!==0,big:!0},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.name},l.a.createElement("img",{src:e.image,alt:e.name}),1===e.type?l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.category)),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"}))):l.a.createElement(l.a.Fragment,null))))))}))});return l.a.createElement("section",{id:"portfolio",className:"s-portfolio target-section"},l.a.createElement("div",{className:"row s-portfolio__header"},l.a.createElement("div",{className:"column large-6 medium-8 tab-full"},l.a.createElement(k.a,{left:!0},l.a.createElement("div",{className:"section-intro","data-num":"03"},l.a.createElement("h3",{className:"subhead"},"Portfolio"),l.a.createElement("h1",{className:"display-1"},a.intro_header))))),l.a.createElement(k.a,{right:!0,big:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h3",null,"Websites & Web Apps")))),l.a.createElement("div",{className:"row s-portfolio__list block-large-1-2 block-900-full"},t(a.websites)),l.a.createElement(k.a,{right:!0,big:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement("h3",null,"Mobile Apps")))),l.a.createElement("div",{className:"row s-portfolio__list block-large-1-8 block-900-full"},t(a.apps)))}t(52);var W=t(20),H=t.n(W);function z(e){var a=e.data,t=(Object(u.a)(e,["data"]),Object(n.useState)(!0)),c=Object(r.a)(t,2),o=c[0],s=c[1],i=function(){s(!o)};return l.a.createElement("footer",{className:"s-footer h-dark-bg",id:"contact"},l.a.createElement(b.a,{bottom:!0},l.a.createElement("div",{className:"right-vert-line"})),l.a.createElement("div",{className:"row s-footer__main"},l.a.createElement("div",{className:"column large-6"},l.a.createElement("div",{className:"section-intro"},l.a.createElement(k.a,{left:!0,big:!0},l.a.createElement("h3",{className:"subhead"},"Get In Touch")),l.a.createElement(b.a,{bottom:!0},l.a.createElement("h1",{className:"display-1"},"Have an idea or a concept thats got you excited? Let's turn that idea into reality. Shoot me a message."))),l.a.createElement(H.a,null,l.a.createElement(H.a,{spy:o},l.a.createElement("div",{className:"footer-email-us"},l.a.createElement("a",{href:"mailto:"+a.email,onMouseOver:i,onTouchStart:i,onTouchMove:i,className:"btn btn--primary h-full-width"},"Let's Talk"))))),l.a.createElement("div",{className:"column large-5"},l.a.createElement("div",{className:"footer-contacts"},l.a.createElement(k.a,{bottom:!0,big:!0},l.a.createElement("div",{className:"footer-contact-block"},l.a.createElement("h5",{className:"footer-contact-block__header"},"Email"),l.a.createElement("p",{className:"footer-contact-block__content"},l.a.createElement("a",{href:"mailto:"+a.email},a.email)))),l.a.createElement(k.a,{bottom:!0,big:!0},l.a.createElement("div",{className:"footer-contact-block"},l.a.createElement("h5",{className:"footer-contact-block__header"},"Phone"),l.a.createElement("p",{className:"footer-contact-block__content"},l.a.createElement("a",{href:"tel:"+a.phone},a.phone)))),l.a.createElement("br",null),l.a.createElement("div",{className:"footer-contact-block"},l.a.createElement(k.a,{bottom:!0,big:!0},l.a.createElement("h5",{className:"footer-contact-block__header"},"Social")),l.a.createElement(k.a,{bottom:!0},l.a.createElement("ul",{className:"footer-contact-block__list"},a.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))))))),l.a.createElement("div",{className:"row s-footer__bottom"},l.a.createElement("div",{className:"column large-full ss-copyright"},l.a.createElement("span",null,"Design by ",l.a.createElement("a",{href:"https://www.styleshout.com/"},"StyleShout")," & Tarek Sanger")),l.a.createElement("div",{className:"ss-go-top"},l.a.createElement("a",{title:"Back to Top",href:"/#",onClick:E.animateScroll.scrollToTop},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 0l8 9h-6v15h-4v-15h-6z"}))))))}t(53),t(54);function D(){var e=Object(n.useState)(!0),a=Object(r.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(),s=Object(r.a)(o,2),i=s[0],u=s[1],E=m()(window),h=m()(".header-menu-toggle"),f=m()("body"),v=function(){var e=m()(".s-hero").outerHeight()-170,a=E.scrollTop();a>e?m()(".s-header").addClass("sticky"):m()(".s-header").removeClass("sticky"),a>e+20?m()(".s-header").addClass("offset"):m()(".s-header").removeClass("offset"),a>e+150?m()(".s-header").addClass("scrolling"):m()(".s-header").removeClass("scrolling"),m()(window).scrollTop()>=800?m()(".ss-go-top").hasClass("link-is-visible")||m()(".ss-go-top").addClass("link-is-visible"):m()(".ss-go-top").removeClass("link-is-visible")},g=function(){m()("#hero").css({height:m()(window).height()}),m()("body").css({width:m()(window).width()}),window.matchMedia("(min-width: 901px)").matches&&(f.hasClass("menu-is-open")&&f.removeClass("menu-is-open"),h.hasClass("is-clicked")&&h.removeClass("is-clicked"))};return Object(n.useEffect)((function(){m()("#hero").css({height:m()(window).height()}),m()("body").css({width:m()(window).width()}),window.addEventListener("scroll",v),m()(window).scrollTop()>=800&&m()(".ss-go-top").addClass("link-is-visible"),window.addEventListener("resize",g),m.a.ajax({url:"/tareksangerData.json",dataType:"json",cache:!1,success:function(e){u(e),setTimeout((function(){c(!1)}),3e3)},error:function(e,a,t){alert(t)}})}),[]),l.a.createElement("div",{className:"App"},t?l.a.createElement(d,null):l.a.createElement("div",null,l.a.createElement(w,{data:i.main,sections:["about","resume","skills","portfolio","contact"]}),l.a.createElement(y,{data:i.main}),l.a.createElement(L,{data:i.about}),l.a.createElement(M,{data:i.skills}),l.a.createElement(A,{data:i.portfolio}),l.a.createElement(z,{data:i.main})))}s.a.initialize("UA-161736507-1"),s.a.pageview(window.location.pathname+window.location.search);var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");P?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(a,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.3d9e2156.chunk.js.map