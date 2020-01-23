$(document).ready(function(){

    $('.nav-link').click(function(){    
        var divId = $(this).attr('href');
         $('html, body').animate({
          scrollTop: $(divId).offset().top - 54
        }, 100);
      });

      $("#weatherButton").click(function() {

        window.open("https://nicholasmcconnell.github.io/homework-six/");
      });

      $("#plannerButton").click(function() {

        window.open("https://nicholasmcconnell.github.io/homework-five/");
      });

      $("#zillowButton").click(function() {

        window.open("https://nicholasmcconnell.github.io/project1_Group_Project/");
      });

      $(".fa-linkedin").click(function(){

        window.open("http://linkedin.com/in/nickmcconnellmusic/")

      });

      $(".fa-github").click(function(){

        window.open("https://github.com/nicholasmcconnell")

      });

    //   $(".button").click(function() {

    //     console.log(this.id);

    //     if (this.id = "weatherButton"){

    //         window.open("https://nicholasmcconnell.github.io/homework-six/")
    //     } 
    //     else if (this.id = "plannerButton"){

    //         window.open("https://nicholasmcconnell.github.io/homework-five/")
    //     }
    //     else if (this.id = "zillowButton") {
    //         window.open("https://nicholasmcconnell.github.io/project1_Group_Project/")
    //     }

    //   });


})
