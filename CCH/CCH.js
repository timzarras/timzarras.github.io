$(document).ready(function(){

  // getting prismic posts //

  Prismic.Api('https://cubiccableholder.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "gallery_image"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var order;
      var images = $("<div></div>");
      var image;

      for (var i = 0; i < results.length; i++) {
        
        image = results[i].getStructuredText("gallery_image.gallery_image").asHtml();
        images.addClass("imagegallery").insertBefore($(".contain"));
        images.append(image);
      }

      // add class to all images in the gallery 
      $(".imagegallery img").addClass("bigimage");


    });
  }, "MC5XVGN6bFNnQUFDZ0ExeDI4.Me-_ve-_vS4v77-9YwZ377-977-977-9ZwXvv73vv73vv70C77-977-977-9Iu-_vR1lFu-_vTLvv73vv71H77-9");

  Prismic.Api('https://cubiccableholder.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "description"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var description;

      for (var i = 0; i < results.length; i++) {
        
        description = results[i].getStructuredText("description.description").asText();
      
        var bodyElem = $("<p></p>");
        bodyElem.addClass("desc");
        $(bodyElem).insertBefore($(".imagegallery"));
        bodyElem.append(description);
      }

    });
  }, "MC5XVGN6bFNnQUFDZ0ExeDI4.Me-_ve-_vS4v77-9YwZ377-977-977-9ZwXvv73vv73vv70C77-977-977-9Iu-_vR1lFu-_vTLvv73vv71H77-9");


    var cartItems = [];
    var shopifyLink = "http://nihil-artikel.myshopify.com/cart/";

    $(".down,.arrow").click(function(){
      var one = $(".desc").offset();
      var two = $(window).height()*.33;
      $(".arrow").fadeOut();
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".purchase").click(function(){
      var one = $(".contain").offset();
      var two = $(window).height()*.15;
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".gallery").click(function(){
      var one = $(".imagegallery").offset();
      var two = $(window).height()*.05;
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".cart").click(function(){
      $(".cartpage").toggleClass("out");
    });

    $(".buyone").click(function(){

        $(".cartcount").html(function(i, val) { 
          return val*1+1 
        });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+40 
        });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Copper</p><p class='price'>$40</p><p class='removeone'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068487235:1');

    });

    
    $(".buytwo").click(function(){

        $(".cartcount").html(function(i, val) { 
          return val*1+1 });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+40 
          });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Brass</p><p class='price'>$40</p><p class='removetwo'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068360067:1');

    });

    
    $(".buythree").click(function(){

        $(".cartcount").html(function(i, val) {
          return val*1+1 
          });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+40 
          });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Stainless</p><p class='price'>$40</p><p class='removethree'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068492547:1');

    });

    //close cart page//

    $(".close").click(function(){
      $(".cartpage").removeClass("out");
    });

    //remove copper items from cart//
    
    $('.cartpage').on('click','.removeone',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-40 
        });

        var search_term = '35068487235:1';


        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }

    });

    //remove brass items from cart//

    $('.cartpage').on('click','.removetwo',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-40 
        });

        var search_term = '35068360067:1';


        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }


    });

    //remove stainless items from cart//

    $('.cartpage').on('click','.removethree',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-40 
        });

        var search_term = '35068492547:1';

        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }

    });

    $(".buyone,.buytwo,.buythree,.removeone,.removetwo,.removethree").click(function(){

       if( $('.cartitem').length = 0 ){
            $(".checkout").hide();
            $(".empty").show();
        } else {
            $(".checkout").show();
            $(".empty").hide();
        }

    });

    // generate final permalink //

    $(".checkout").click(function() {
        var link = shopifyLink;
        cartItems.forEach(function(item) {
            link += item + ',';
        });
        //direct browser to generated link//
        window.location.href = link;
    });


});