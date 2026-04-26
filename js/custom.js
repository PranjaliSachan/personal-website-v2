(function ($) {
  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  });

  // HEADER
  $(".navbar").headroom({
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      "pinned": "headroom--pinned",
      "unpinned": "headroom--unpinned"
    }
  });

  // PROJECT CAROUSEL
  var $owl = $('.project-carousel');
  $owl.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 }
    }
  });



  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  // TIPPY
  const anchors = {
    "11ty": "11ty (Eleventy) is a static site generator for fast, simple, and flexible website development using JavaScript templates.",
    "bootstrap": "Bootstrap is a popular front-end framework for building responsive, mobile-first websites with pre-styled components and a grid system.",
    "angular": "Angular is a powerful, component-based framework for building scalable single-page applications with TypeScript.",
    "tailwind": "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development with predefined classes.",
    "performance": "Performance refers to the speed and efficiency of a web application, including load times, responsiveness, and overall user experience.",
    "responsiveness": "Responsiveness ensures a website adapts to different screen sizes and devices, providing a consistent user experience.",
    "api": "An API (Application Programming Interface) allows different software systems to communicate and share data.",
    "modularcomponents": "Modular components are self-contained, reusable building blocks in an application, promoting clean, maintainable code.",
    "pageloadspeed": "Page load speed is the time it takes for a web page to fully display its content, impacting user experience and SEO rankings.",
    "seo": "SEO (Search Engine Optimization) involves optimizing web pages to improve their visibility in search engine results.",
    "workflows": "Workflows automate complex business processes, improving efficiency and consistency in enterprise systems.",
    "salesforce": "Salesforce is a leading CRM platform that helps businesses manage customer relationships and streamline operations.",
    "mulesoft": "MuleSoft is an integration platform for connecting applications, data, and devices with APIs.",
    "figma": "Figma is a collaborative design tool used for creating UI designs and prototypes.",
    "reactcomponents": "React.js components are reusable, self-contained building blocks for building complex UIs in React applications.",
    "figma2": "Figma is a powerful design tool for creating user interfaces and prototypes collaboratively.",
    "react": "React.js is a JavaScript library for building user interfaces using reusable components.",
    "html": "HTML (Hypertext Markup Language) is the standard language for creating web pages and web applications.",
    "css": "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and positioning.",
    "javascript": "JavaScript is a versatile programming language for adding interactive behavior to web pages.",
    "singlepageapps": "Single-page apps (SPAs) are web applications that load a single HTML page and dynamically update as the user interacts.",
    "apis": "APIs allow different software systems to exchange data, enabling seamless backend and frontend communication.",
  };

  for (let key in anchors) {
    tippy(`#${key}`, {
      content: anchors[key],
      theme: 'light',
      placement: 'right',
      arrow: true,
      arrowType: 'round',
      animateFill: false,
      animation: 'scale',
    });
  }

})(jQuery);
