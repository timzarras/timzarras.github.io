$(document).ready(function() {


    if ($(window).width() > 736) {

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
        $(".year").css("left","80%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        $(".bigimages").removeClass("big");
        
        setTimeout(function() {
            $(".preview").css("left","40%");
        },350);

    });

    // reset this list element height //

    $(".close",this).click(function() {
        
        var z = $("li");
        
        $(z).css("height", "2%");
        $(".year").css("left","80%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        $(".bigimages").removeClass("big");
        
        setTimeout(function() {
            $(".preview").css("left","40%");
        },350);
        
        event.stopPropagation();
    });


    // expand "this" list element //

    $("li,img", this).click(function() {
        var h = $(".info", this).outerHeight();
        var i = $(".projectzone", this).outerHeight();
        var c = $(".close",this);
        var y =  $(".year",this);
        $(".projectzone",this).show();
        $(".info",this).show();
        $(".preview").css("left","300%");
        $("img",this).css("width","58%");
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

      // cycle images of the same class //

    $('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').click(function() {
         $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.table,.displayobjects,.heater,.t21i,.chair,.connection,.fan,.TAB').first();
        next.show();
    });

    $(".bigimages").click(function() {
        $(".bigimages").addClass("big");
        $(".preview").css("left","300%");
        setTimeout(function() {
        var i = $("img", this).outerHeight();
        var l = $("li");
        $(l).not("li:first").not(".close:first").css("height", "100%");
        $(".projectzone").not(".projectzone:first").show();
        $("img").css("width","98%");
        $(".info").hide();
        $(".close").show();
        $(".year").css("left","85%");
    },200);
    });

} else {


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

}
    // for those pesky browsers, hope to update soon, but maybe not ha! //

    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        $('body > :not(.firefox)').hide();
        $('.firefox').appendTo('body').show();
    }

    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || $.browser.msie == 1)
    {
    $('body > :not(.ie)').hide();
        $('.ie').appendTo('body').show();
    }

});




