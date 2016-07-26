$(document).ready(function() {


      $("li",this).click(function() {

        $(this).toggleClass("height");

    });

      $(document).mousemove(function() {

        $yo = $("body").width();

        if (event.pageX < ($yo * .15)) {

          $("ul").addClass("left");
          $(".expand,.close").css("left","1%");

        } else {

          $("ul").removeClass("left");
          $(".expand,.close").css("left","-30px");

        }

      });

      $(".expand").click(function() {

        $("li").addClass("height");
        $(".close").show();
        $(".expand").hide();

    });

      $(".close").click(function() {

        $("li").removeClass("height");
        $(".close").hide();
        $(".expand").show();


    });




});