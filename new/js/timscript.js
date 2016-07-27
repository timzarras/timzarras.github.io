$(document).ready(function() {

  $("li",this).click(function() {

        var h3 = $(".info", this).outerHeight();
        var i3 = $("img", this).outerHeight();
        
        $(this).css("height", h3 + i3);

    });


  if ($(window).width() > 736) {

    $(document).mousemove(function() {

        $yo = $("body").width();

        // if cursor is less than 15% from the left, slide list and expand button // 

        if (event.pageX < ($yo * .1)) {

          $("ul").addClass("left");
          $(".expand,.close").css("left","2%");

        } else {

          $("ul").removeClass("left");
          $(".expand,.close").css("left","-30px");

        }

    });

    // expand "this" list element //

    $("li",this).click(function() {

        var h = $(".info", this).outerHeight();
        var i = $("img", this).outerHeight();

        // if paragraph is shorter than image, use image height //
        
        if (h < i ) {
          $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }

    });

    // expand all list elements" 

    $(".expand").click(function() {

      // get list element heights //
      
        $("li").css("height", function() {

          // compare paragraph to image height again to use larger //

          var h2 = $(".info", this).outerHeight();
          var i2 = $("img", this).outerHeight();
          return h2 > i2 ? h2 : i2;
        });

        $(".close").show();
        $(".expand").hide();

    });

    // reset all list element heights //

    $(".close").click(function() {

        $("li").css("height","8%");
        $(".close").hide();
        $(".expand").show();

    });

    // cycle images of the same class //

    $('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').click(function () {
        $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').first();
        next.show();
    });

    $("li",this).mouseover(function() {

        $(".me", this).css("color", "white"); 

    }).mouseout(function() {

      $(".me", this).css("color", "#0078ff");

      });

    $(window).resize(function() {
      $("li:visible").css("height","8%");
    });

  } 



});