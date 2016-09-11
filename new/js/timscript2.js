$(document).ready(function() {


    if ($(window).width() > 1024) {

    // lil oval trick //

    $(window).mousemove(function() {
        var bodywidth = $("body").width();              
        var y = event.pageY/-10+24;
    
        setTimeout(function() {
            $(".preview").css({
            transform: 'rotate(' + y + 'deg)'
            });
        },500);
    });

    // reset list heights when window is resized //

    $(window).resize(function() {
        $("li").css("height","2%");
        $(".year").css("left","30%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        
        setTimeout(function() {
            $(".preview").css("left","50%");
        },350);

    });

    // reset this list element height //

    $(".close",this).click(function() {
        
        var z = $("li");
        
        $(z).css("height", "2%");
        $(".year").css("left","30%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        
        setTimeout(function() {
            $(".preview").css("left","50%");
        },350);
        
        event.stopPropagation();
    });


    // expand "this" list element //

    $("li", this).click(function() {
        var h = $(".info", this).outerHeight();
        var i = $(".projectzone", this).outerHeight();
        var c = $(".close",this);
        var y =  $(".year",this);
        $(".projectzone",this).show();
        $(".info",this).show();
        $(".preview").css("left","300%");
          // if paragraph is shorter than image, use image height //
        if (h < i ) {
           $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }
        setTimeout(function() {
        $(c).fadeIn();
        $(y).css("left","60%");
        },150);
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

} else {

    $(".projectzone").show();
        $(".info").show();


    setTimeout(function() {
        var h = $(".info", this).outerHeight();
        var i = $(".projectzone", this).outerHeight();
        var c = $(".close",this);
        var y =  $(".year",this);
        $(".projectzone").show();
        $(".info").show();
          // if paragraph is shorter than image, use image height //
        if (h < i ) {
           $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }
    },500);

    $('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').click(function() {
         $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').first();
        next.show();
    });

    $(window).resize(function() {
        $("li").css("height","2%");
        $(".year").css("left","30%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        
        setTimeout(function() {
            $(".preview").css("left","50%");
        },350);
    });

}

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        $('body > :not(.firefox)').hide(); //hide all nodes directly under the body
        $('.firefox').appendTo('body').show();
    }

});




