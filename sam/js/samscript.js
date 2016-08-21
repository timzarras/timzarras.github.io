
$(document).ready(function() {

	$('html').hide().fadeIn(500);
  
  $('.alternatetitle').click(function() {

       	$(".container,.hide,.alternatetitle").hide();
        $(".archivecontainer").show();
        $(".navzone").css({"opacity":"1" , "position":"absolute"});
        $('.blocker').hide();
		
		});

  // show alternate project title and corresponding slideshow, hide everything else

  $('.title').click(function(){
              var self = $(this);
              $('.alternatetitle,.slideshow,.slide').hide();
              $('.alternatetitle[rel=div' + self.attr('target') +'],.slideshow[rel=div' + self.attr('target') +'],.slide[rel=div' + self.attr('target') +']').show();
              $('.blocker').show();
              $(".container").fadeIn(100); 
              $(".archivecontainer").hide();
              $(".navzone").css("opacity",".15");
              $(".slide").parent().find(self).first();
        });

  $('.info').click(function() {

       	$(".bio").toggle();
       	$(".archivecontainer").toggle();
       	$(".info").toggleClass("underline");
		
		});

  // cycle images of the same class //

  $('.slide').click(function () {
        $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.slide').first();
        next.show();
  });

  if ($(window).width() < 736) {
    $(".title").click(function() {
      $(".navzone").css("position","absolute");
    });
  }


  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		
    $('img, .description').hover(function() {

      $('img, .description').css('cursor','pointer');

	  });

  }

     

 });