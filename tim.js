
$(document).ready(function(){


Prismic.Api('https://timzarras.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))                                                                 // how it is in the custom type creator
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
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

      var $divs = $(".row").not(".row:first-child");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo("body");

      var $body= $('body').imagesLoaded( function() {
    				$body.masonry({
    	  		// options
    				columnWidth: 25,
    				percentPosition: true,
    				itemSelector: '.row',
    				horizontalOrder: true,
    				gutter: 20,
    				transitionDuration: '0s',
    				resize: true
    				});
       });


			if ($(window).width()>750) {

      $("html,body").hide();

				$("html,body").fadeIn(400);

        $(".row > .images > section:first-child > p > img").show();

					$(".row").click(function(){
						var height = $(window).height();
							$(".row").not(this).hide();
							$(".back").show();
							$(".filters").hide();
							$(this).addClass("white").css({"position":"absolute","top":"0","left":"15vw","width":"60vw"});
							$("body").animate({scrollTop:0},10);
								setTimeout(function(){
									$("img").fadeIn(900);
								},150);
					});

					$(".back").click(function(){
						$("body").animate({scrollTop:0},50);
						$("img,.back").hide();
            $(".row > .images > section:first-child > p > img").show()
						$(".row").removeClass("white").css({"position":"relative","top":"auto","left":"auto","width":"25vw"}).show();
						$(".filters").show();
							$body.masonry('reloadItems');
	      			$body.masonry('layout');
					});

				} else {

					$("body").css("margin-left","0");
					$(".row").css({"width":"85%","left":"7.5% !important","top":"10%","margin-bottom":"60px","padding-bottom":"40px","border-bottom":"2px solid #e2e2e2"});
					$("img").show();
				}


    });



  }, "MC5XVkFyMUNRQUFEU3M3eU1V.77-9Tu-_vQPvv71Q77-977-977-9cwZF77-977-9LO-_vQ3vv71JMgrvv71u77-977-9FO-_vXHvv71Q77-977-9");




//
}); // end of document ready //
