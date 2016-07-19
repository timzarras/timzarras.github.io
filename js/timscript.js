$(document).ready(function() {

      $('html').hide().fadeIn(900);
      $(".up").hide();


      // Scroll to selected project //

      $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html,body').stop().animate({
            'scrollTop': $target.offset().top - 76
        }, 500, function () {
            window.location.hash = target;
        });
      });
    
      // Hide and show up-arrow and car //

      $(window).scroll(function() {
        if ($(this).scrollTop() > 850) {
          $('.up').fadeIn(300);
          $('.links').css("top","76px");
          

        } else {
          $('.up').fadeOut(300);
          $('.link').removeClass('selected');
          $('.links').css("top","123px");
          
        }
      });

      // Make project title bold when its top line is reached //

      $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
      if (windscroll >= 300) {
        $('.projectlist img.line').each(function(i) {
            if ($(this).position().top <= windscroll - 500) {
                $('.links li.selected').removeClass('selected').find('span').hide();
                $('.links li').eq(i).addClass('selected').find('span').show();
            }
        });

      } else {
        $('.links li.selected').removeClass('selected').find('span').hide();
      }

      });


      // Auto scroll back to top of page //
  
      $('.up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 900);
      });
      
      // Move selected project to top of list //
      
      //
      
      //$('ul.links a').on('click', function() {
       // $(this).parent().prepend(this);
      //});
      

      // Resume and text toggle //

      $('.resumelink').click(function() {
        $('.resume').slideToggle(400);
        $('.resumelink').text(function(i, text){
          return text === "Resume" ? "Close" : "Resume";
        })
      });

     

      //$('.projectimage,.customimage').mouseover(function() {
        //$('.projectimage,.customimage,.links,p').not(this).toggleClass("pad");
        
        //setTimeout(function() {
        //$('html').toggleClass('background');
       
       //$('.links,.link,.line,p') .toggleClass('white');

        //}, 50);

      //});

      


      

 
   




  
    

});