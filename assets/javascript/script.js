$(document).ready(function () {

  $('.nav-link').click(function () {
    var divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 54
    }, 100);
  });

  $(".navbar-toggler").toggleClass('show');

  $(".fa-linkedin").click(function () {

    window.open("http://linkedin.com/in/nickmcconnell611/")

  });

  $(".fa-github").click(function () {

    window.open("https://github.com/nicholasmcconnell")

  });
  $(".fa-file-pdf-o").click(function () {

    window.open("https://nicholasmcconnell.github.io/portfolio/assets/images/Nick%20McConnell%20Coding%20Resume.pdf")

  });

})
