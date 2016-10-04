$(document).ready(function() {


    if ($(window).width() > 736) {

    // reset list heights when window is resized //

    $(window).resize(function() {
        $("li").css("height","2%");
        $(".year").css("left","85%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        $("img").css("width","58%");
        $(".big").removeClass("bigbig");
        
        setTimeout(function() {
            $(".preview").css("left","40%");
        },350);

    });

    // reset this list element height //

    $(".close",this).click(function() {
        
        var z = $("li");
        
        $(z).css("height", "2%");
        $(".year").css("left","85%");
        $(".close").hide();
        $(".info").hide();
        $(".projectzone").hide();
        $("img").css("width","58%");
        $(".big").removeClass("bigbig");
        
        setTimeout(function() {
            $(".preview").css("left","40%");
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
        $("img",this).css("width","58%");
        $(".year",this).css("left","60%");
        // if paragraph is shorter than image, use image height //
        if (h < i ) {
           $(this).css("height", i);
        } else {
          $(this).css("height", h);
        }
        setTimeout(function() {
        $(c).fadeIn();
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

    $(".big").click(function() {
        $(".big").addClass("bigbig");
        $(".preview").css("left","300%");
      // get list element heights //      
        $("li").css("height", function() {
          // compare paragraph to image height again to use larger //
          var h2 = $(".info", this).outerHeight();
          var i2 = $(".projectzone", this).outerHeight();
          return h2 > i2 ? h2 : i2;
        });
        $(".projectzone").show();
        $(".info").show();
        $(".close").show();
        $(".year").css("left","60%");
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




