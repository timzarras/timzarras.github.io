$(document).ready(function() {

    var doStuff = (big, small) => {
      if ($(window).width() > 736) big();
      else small();
    };

    $(window).resize(function() {
      doStuff(() => {
        $("li:visible").css("height","3%");
      });
    });

    $(document).mousemove(function() {
      doStuff(() => {
        $yo = $("body").width();

      // if cursor is less than 15% from the left, slide list and expand button // 

        if (event.pageX < ($yo * .1)) {
          $("ul").addClass("left");
          $(".expand,.close,.mail").css("left","2%");

        } else {
          $("ul").removeClass("left");
          $(".expand,.close,.mail").css("left","-30px");
        }
      });
    });

    // expand "this" list element //

    $("li", this).click(function() {

      doStuff(() => {
        var h = $(".info", this).outerHeight();
        var i = $("img", this).outerHeight();

          // if paragraph is shorter than image, use image height //
      
        if (h < i ) {
           $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }
      });

    });

    // expand all list elements" 

    $(".expand").click(function() {

      doStuff(() => {
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
    });

  // reset all list element heights //

    $(".close").click(function() {

      doStuff(() => {
        $("li").css("height","3%");
        $(".close").hide();
        $(".expand").show();
      });

    });

    $("li",this).mouseover(function() {
       doStuff(() => {
        $(".me", this).css("color", "black");
      });
    }).mouseout(function() {
      doStuff(() => {
        $(".me", this).css("color", "#0078ff");
      });
    });

      // cycle images of the same class //

    $('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').click(function() {
         $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').first();
        next.show();
    });

});


