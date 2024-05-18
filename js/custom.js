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

  // EMAIL
  $('.submit-btn').click(function () {
    const name = $('#name').val(),
      email = $('#email').val(),
      msg = $('#message').val();

    if (name === '' || name === 'Your Name' || email === '' || email === 'Email'
      || msg === '' || msg === 'Message...') {
      alert('Invalid Details!');
      return;
    }

    const payload = {
      to: "pranjalisachan98@gmail.com",
      from: "support@opensourcedit.com",
      subject: `Contact Request from ${name}`,
      text: msg,
      html: `
          <html>
            <head></head>
            <body>
              <h4>New Contact Request from:<h4>
              <h3>Name: ${name}<h3>
              <h3>Email: ${email}<h3>
              <p>${msg}<p>
              <small>This email was sent via SMTP service from opensourcedit.com</small>
            </body>
          </html>
        `
    };

    $.post("http://smtp.opensourcedit.com", payload)
      .done(function (_) {
        $('#name').val('Your Name');
        $('#email').val('Email');
        $('#message').val('Message...');
        alert('Request Sent!');
      })
      .fail(function (_) {
        alert("error");
      });
  });

})(jQuery);
