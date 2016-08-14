
$(document).ready(function() {

	$('html').hide().fadeIn(500);

  $('a.title').click(function() {

       	$(".container,.hide,#rug").fadeIn(100); 
        $(".archivecontainer").hide();
        $(".navzone").css("opacity",".15");

		});
  
  $('.alternatetitle').click(function() {

       	$(".container,.hide,.alternatetitle").hide();
        $(".archivecontainer").show();
        $(".navzone").css("opacity","1");
        $('.blocker').hide();
		
		});

  // show alternate project title and corresponding slideshow, hide everything else

  $('.title').click(function(){
              var self = $(this);
              $('.alternatetitle,.cycle-slideshow').hide();
              $('.alternatetitle[rel=div' + self.attr('target') +'],.cycle-slideshow[rel=div' + self.attr('target') +']').show();
              $('.blocker').show();
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


  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		
    $('img, .description').hover(function() {

      $('img, .description').css('cursor','pointer');

	  });

  }

     

 });