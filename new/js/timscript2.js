$(document).ready(function() {

    // let 'em know who ya are at the core //

    setTimeout(function() {
    var i = $(".projectzone:first").outerHeight();
    $("li:first").css("height",i);
    $(".projectzone:first,.info:first,.close:first").show();
    },500);

    if ($(window).width() > 1024) {

    $(window).resize(function() {
        $("li").css("height","2%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
    });

    // reset this list element height //

    $(".close",this).click(function() {
        $("li").css("height", "2%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        event.stopPropagation();
        });


    // expand "this" list element //

    $("li", this).click(function() {
        var h = $(".info", this).outerHeight();
        var i = $(".projectzone", this).outerHeight();
        var c = $(".close",this);
        $(".projectzone",this).show();
        $(".info",this).show();
          // if paragraph is shorter than image, use image height //
        if (h < i ) {
           $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }
        setTimeout(function() {
        $(c).fadeIn();
        },900);
    });

    // hey //

    //$("li", this).hover(function() {
        //$(this).css({"opacity":"1","background-color":"white"});
        //$("li").not(this).css({"opacity":".6","background-color":"#fbfbfb"});
    //});

      // cycle images of the same class //

    $('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').click(function() {
         $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').first();
        next.show();
    });

}

});




