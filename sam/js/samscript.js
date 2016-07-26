$(document).ready(function() {

	$('html').hide().fadeIn(500);

	$('a').click(function() {

       	$(".container,.hide,#rug").fadeIn(100); 
        $(".archivecontainer").hide();
        $(".navzone").css("opacity",".15");

		});
  
  $('.alternatetitle').click(function() {

       	$(".container,.hide,.alternatetitle").hide();
        $(".archivecontainer").show();
        $(".navzone").css("opacity","1");
		
		});

  // show alternate project title and corresponding slideshow, hide everything else

  $('.title').click(function(){
              var self = $(this);
              $('.alternatetitle,.cycle-slideshow').hide();
              $('.alternatetitle[rel=div' + self.attr('target') +'],.cycle-slideshow[rel=div' + self.attr('target') +']').show();
        });

  $('.info').click(function() {

       	$(".bio").toggle();
       	$(".archivecontainer").toggle();
       	$(".info").toggleClass("underline");
		
		});

  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		$(".firefox").show();
		$(".archivecontainer,.container,.navzone").css("opacity", ".1");
	}

     

 });