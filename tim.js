$(document).ready(function(){


Prismic.Api('https://timzarras.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $(".arch");
      var table = $("table");



      for (var i = 0; i < results.length; i++) {

        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asText();
        year = results[i].getStructuredText("project.year").asText();
        materials = results[i].getStructuredText("project.materials").asHtml();
        type = results[i].getGroup("project.type").asHtml();
        image = results[i].getGroup("project.project_images").asHtml();

				var row = $("<div class='row'></div>");
        var titleD = $("<div class='title'></div>");
        var yearD = $("<div class='year'></div>");
        var materialsD = $("<div class='materials'></div>");
        var typeD = $("<div class='type'></div>");
        var imageD = $("<div class='images'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");

        titleD.append(title);
        yearD.append(year);
        materialsD.append(materials);
        typeD.append(type);
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,yearD,materialsD,imageD,numberD,typeD);
        body.append(row);

      }

      var $divs = $(".row");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo(".arch");

      $(".row:last").removeClass("row").addClass("last").css({"width":"40vw","margin-left":"0vw"}).appendTo(".upper");



			if ($(window).width()>750) {

        var $body= $('.arch').imagesLoaded( function() {

              $body.masonry({
              // options
              columnWidth: 50,
              percentPosition: true,
              itemSelector: '.row',
              horizontalOrder: true,
              gutter: 23,
              transitionDuration: '0s',
              resize: true
              });

              $(".load").fadeOut(200);

         });



        $(".upper").click(function(){
          var height = $(window).height();
          if ($(".upper").height() > height/2){
            $(".upper").css({"height":"50px","overflow":"hidden"}).scrollTop(0);
          } else {
            $(".upper").css({"height":"100vh","overflow":"scroll"});
          }
        });

        $(".last > .images > section > .block-img > img").css({"display":"inline","position":"absolute","top":"60px","left":"50vw","z-index":"999 !important"});


        $("html,body").hide();

				$("html,body").fadeIn(400);


        // $(".row > .images > section:first-child > .block-img > img").show();
        $(".row > .images > section > p").not(".block-img:first-child").hide();


					$(".row").click(function(){
						var height = $(window).height();
							$(".row").not(this).hide();
							$(".back").show();
              $(".row > .images > section > p").show();
							$(".upper,.about").hide();
							$(this).addClass("white").css({"position":"absolute","top":"0","left":"17.5vw","width":"50vw"});
							$("body").animate({scrollTop:0},10);
								setTimeout(function(){
									$("img").fadeIn(900);
								},150);
					});

					$(".back").click(function(){
            $(".row > .images > section > p").hide();
						$("body").animate({scrollTop:0},50);
						$("img,.back").hide();
            $(".row > .images > section:first-child > p > img,.last > .images > section > .block-img > img").show()
						$(".row").removeClass("white").css({"position":"relative","top":"auto","left":"auto","width":"25vw"}).show();
						$(".upper,.about").show();
							$body.masonry('reloadItems');
	      			$body.masonry('layout');
					});

				} else {
          $(".load").hide();
          $(".last > .images > section > .block-img > img").css({"display":"inline","position":"relative"});
          $(".last").css({"left":"7.5%","width":"85%","height":"auto !important"});
          $("body").css("margin-left","0");
          $(".arch").css({"margin-left":"0","width":"100%","top":"10px"});
          $(".about").css({"top":"10px"});
					$(".row").css({"width":"85%","left":"7.5%","top":"0","margin-bottom":"60px","padding-bottom":"40px","border-bottom":"2px solid #e2e2e2","margin-left":"0"});
					$("img").show();
          $(".upper").click(function(){
            var height = $(window).height();
            if ($(".upper").height() > height/2){
              $(".upper").css({"height":"50px","overflow":"hidden"}).scrollTop(0);
            } else {
              $(".upper").css({"height":"100%","overflow":"scroll"});
            }
          });
        }

        if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
          $(".last > .images > section > .block-img > img").css({"display":"inline","position":"relative"});
          $(".last").css({"left":"7.5%","width":"85%","height":"auto !important"});
          $("body").css("margin-left","0");
          $(".arch").css({"margin-left":"0","width":"100%","top":"10px"});
          $(".about").css({"top":"10px"});
          $(".row").css({"width":"85%","left":"7.5%","top":"0","margin-bottom":"60px","padding-bottom":"40px","border-bottom":"2px solid #e2e2e2","margin-left":"0"});
          $("img").show();
          $(".upper").click(function(){
            var height = $(window).height();
            if ($(".upper").height() > height/2){
              $(".upper").css({"height":"50px","overflow":"hidden"}).scrollTop(0);
            } else {
              $(".upper").css({"height":"100%","overflow":"scroll"});
            }
          });
				} else {

        }


    });



  }, "MC5XVkFyMUNRQUFEU3M3eU1V.77-9Tu-_vQPvv71Q77-977-977-9cwZF77-977-9LO-_vQ3vv71JMgrvv71u77-977-9FO-_vXHvv71Q77-977-9");

  $(".about").click(function(){
    var height = $(document).height();
    $("html,body").animate({scrollTop:height},500);
  });


//
});
