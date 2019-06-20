$(document).ready(function(){


Prismic.Api('https://robertoconnell.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $(".arch");
      var bodys = $("body");
      var table = $("table");



      for (var i = 0; i < results.length; i++) {

        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asHtml();
        year = results[i].getStructuredText("project.year").asHtml();
        materials = results[i].getStructuredText("project.Description").asHtml();
        image = results[i].getGroup("project.project_images").asHtml();

        var targ = $("<p class='mover'></p>");
        var row = $("<div class='row'></div>").attr("name",i+1);
        var titleD = $("<div class='title'></div>").attr("name",i+1);
        var yearD = $("<div class='year'></div>");
        var materialsD = $("<div class='materials'></div>");
        var typeD = $("<div class='type'></div>");
        var imageD = $("<div class='images'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");
        var span = $("<span class='text'>Text</>");
        var spans = $("<span class='i'>Images</>");

        titleD.append(title,year);
        materialsD.append(materials);
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,spans,span,imageD,materialsD,numberD);
        body.append(row);

      }


      var targSpace = $("<div class='moverS'><p class='proj'>Projects</p></div>");

      $(targSpace).appendTo(".arch");

      var $divs = $(".row");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo(".arch");


      $(".title").clone().appendTo(".moverS");

      $(".moverS > .title > h1:nth-child(2)").remove();


      if ($(window).width()>737) {

                    $(".moverS > .title").click(function(){
                      var self = $(this);
                      $('.row').hide();
                      $(".row[name=" + self.attr("name") + "]").show();
                    });


        } else {


                    $(".moverS > .title").click(function(){
                      var self = $(this);
                      var arch = $(window).height();
                      $("html,body").animate({scrollTop:arch},500);
                      setTimeout(function(){
                        $(".up").show();
                      },450);
                      $('.row').hide();
                      $(".row[name=" + self.attr("name") + "]").show();
                    });

                    $(".up").click(function(){
                      $("html,body").animate({scrollTop:0},300);
                      $(this).hide();
                    });


        }

                  $(".i").click(function(){
                    $(".images").show();
                    $(".materials").hide();
                    $(".text").css("text-decoration","underline");
                    $(".i").css("text-decoration","none");
                    });

                  $(".text").click(function(){
                    $(".materials").show();
                    $(".images").hide();
                    $(".i").css("text-decoration","underline");
                    $(".text").css("text-decoration","none");
                  });

                  $(".proj").click(function(){
                    $(this).toggleClass("no");
                    $(".moverS > .title").toggle();
                  });


    });



  }, "MC5YUXB5RlJJQUFPNHgxcHVD.S--_ve-_ve-_vXfvv71677-9Fnnvv73vv71DD0k677-977-977-9PO-_vSM277-9O--_ve-_ve-_vTTvv73vv70w");

  
});