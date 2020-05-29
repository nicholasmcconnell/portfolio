$(document).ready(function () {

  $('.nav-link').click(function () {
    var divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 54
    }, 100);
  });

  $(".navbar-toggler").toggleClass('show');

  $(".fa-linkedin").click(function () {

    window.open("http://linkedin.com/in/nickmcconnellmusic/")

  });

  $(".fa-github").click(function () {

    window.open("https://github.com/nicholasmcconnell")

  });
  $(".fa-file-pdf-o").click(function () {

    window.open("assets/images/Nick McConnell Coding Resume - 5_18_20.pdf")

  });

})
