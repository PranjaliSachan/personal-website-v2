(function ($) {
  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
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
    "componentarchitecture": "Angular is fundamentally built on a component-based architecture. This means the application is structured as a tree of reusable components.",
    "modularity": "Components promote modularity by encapsulating specific functionalities and UI elements. This makes it easier to manage and understand different parts of the application.",
    "reusability": "Components are designed to be reusable across different parts of the application, reducing code duplication and improving efficiency.",
    "maintenance": "Modular and reusable code is generally easier to maintain. Changes to one component are less likely to have unintended consequences on other parts of the application.",
    "scalability": "A well-structured component-based architecture is essential for long-term scalability. As the application grows in complexity, modularity and maintainability become increasingly important.",
    "secureweb": "This is a broad but accurate statement. It encompasses a range of security practices.",
    "formvalidation": "Form validation is a crucial security measure. It prevents malicious or malformed data from being submitted to the server, reducing the risk of vulnerabilities like SQL injection or cross-site scripting (XSS).",
    "dataencryption": "Data encryption is essential for protecting sensitive user data, both in transit (e.g., using HTTPS) and at rest (e.g., encrypting data stored in a database).",
    "privacy": "This acknowledges the importance of adhering to relevant privacy regulations, such as GDPR, CCPA, or other industry-specific standards.",
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
