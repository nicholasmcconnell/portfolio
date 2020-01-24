$(document).ready(function(){

    $('.nav-link').click(function(){    
        var divId = $(this).attr('href');
         $('html, body').animate({
          scrollTop: $(divId).offset().top - 54
        }, 100);
      });

    // $("#weatherButton").click(function() {

    //   window.open("https://nicholasmcconnell.github.io/homework-six/");
    // });

    // $("#weatherButtonRepo").click(function() {

    //   window.open("https://github.com/nicholasmcconnell/homework-six");
    // });

    // $("#plannerButton").click(function() {

    //   window.open("https://nicholasmcconnell.github.io/homework-five/");
    // });

    // $("#plannerButtonRepo").click(function() {

    //   window.open("https://github.com/nicholasmcconnell/homework-five");
    // });

    // $("#zillowButton").click(function() {

    //   window.open("https://nicholasmcconnell.github.io/project1_Group_Project/");
    // });

    // $("#zillowButton").click(function() {

    //   window.open("https://github.com/nicholasmcconnell/project1_Group_Project");
    // });

  //   $('#bt1').click(function() {
  //     $('#contact-form').attr('action',
  //                    'mailto:nicholas.mcconnell@gmail.com?subject=' +
  //                    $('#subject').val() + '&body=' + $('#message').val());
  //     $('#contact-form').submit();
  // });

    $(".fa-linkedin").click(function(){

      window.open("http://linkedin.com/in/nickmcconnellmusic/")

    });

    $(".fa-github").click(function(){

      window.open("https://github.com/nicholasmcconnell")

    });

    // $("#pdf").click(function(){

    //   window.open(this.href);
    // });

    // $(".button").click(function() {

    //   // let id = JSON.stringify(this.id);
    //   // console.log(id);

    //   if (this.id === "weatherButton"){

    //       window.open("https://nicholasmcconnell.github.io/homework-six/");

    //   } else if (this.id === "plannerButton"){

    //       window.open("https://nicholasmcconnell.github.io/homework-five/");

    //   } else if (this.id === "zillowButton") {

    //       window.open("https://nicholasmcconnell.github.io/project1_Group_Project/");

    //   } else if (this.id === "weatherButtonRepo"){

    //     window.open("https://github.com/nicholasmcconnell/homework-six");

    // } else if (this.id === "plannerButtonRepo"){

    //     window.open("https://github.com/nicholasmcconnell/homework-five");

    // } else if (this.id === "zillowButtonRepo") {

    //     window.open("https://github.com/nicholasmcconnell/project1_Group_Project/");
    // }

    // });


})
