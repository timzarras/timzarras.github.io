
$(document).ready(function(){
	var top = Math.floor(Math.random() * 60) + 20;
	var bottom = Math.floor(Math.random() * 60) + 20;
	var left = Math.floor(Math.random() * 55) + 25;
	var right = Math.floor(Math.random() * 55) + 25;
	$(".lPerson").css("top",top+"vh");
	$(".rPerson").css("bottom",bottom+"vh");
	$(".tPerson").css("left",left+"vw");
	$(".bPerson").css("right",right+"vw");

		var max = 2;
	for (var i=0; i<max; i++) {
    $(".lPerson").clone().appendTo("body");
	}


	setInterval(function(){
		var time = Math.floor(Math.random() * 6000) + 4000;
		var left = Math.floor(Math.random() * 7) + 7;
		var top = Math.floor(Math.random() * 50) + 25;
		var eLeft = Math.floor(Math.random() * 15) + 13;
		var eTop = Math.floor(Math.random() * 90) + 10;
		var lastRan = Math.floor(Math.random() * 90) + 10;
		$(".lPerson").animate({"left":"12vw","top":top+"vh"},time)
		.delay(time).animate({"left": "-110px","top": eTop+"vh"},4000).animate({"left": "-110px","top": lastRan+"vh"},10);
	},2400);

	setInterval(function(){
		var time = Math.floor(Math.random() * 6000) + 4000;
		var left = Math.floor(Math.random() * 7) + 7;
		var top = Math.floor(Math.random() * 50) + 25;
		var eLeft = Math.floor(Math.random() * 15) + 13;
		var eTop = Math.floor(Math.random() * 90) + 10;
		var lastRan = Math.floor(Math.random() * 90) + 10;
		$(".rPerson").animate({"right":"12vw","bottom":top+"vh"},time)
		.delay(time).animate({"right": "-110px","bottom": eTop+"vh"},4000).animate({"right": "-110px","bottom": lastRan+"vh"},10);
	},2500);

	setInterval(function(){
		var time = Math.floor(Math.random() * 6000) + 4000;
		var left = Math.floor(Math.random() * 7) + 7;
		var top = Math.floor(Math.random() * 50) + 25;
		var eLeft = Math.floor(Math.random() * 15) + 13;
		var eTop = Math.floor(Math.random() * 80) + 20;
		var lastRan = Math.floor(Math.random() * 80) + 20;
		$(".tPerson").animate({"left":top+"vw","top":"12vh"},time)
		.delay(time).animate({"top": "-110px","left": eTop+"vw"},4000).animate({"top": "-110px","left": lastRan+"vw"},10);
	},2000);

	setInterval(function(){
		var time = Math.floor(Math.random() * 6000) + 4000;
		var left = Math.floor(Math.random() * 7) + 7;
		var top = Math.floor(Math.random() * 50) + 25;
		var eLeft = Math.floor(Math.random() * 15) + 13;
		var eTop = Math.floor(Math.random() * 50) + 25;
		var lastRan = Math.floor(Math.random() * 50) + 25;
		$(".bPerson").animate({"right":top+"vw","bottom":"12vh"},time)
		.delay(time).animate({"bottom": "-110px","right": eTop+"vw"},4000).animate({"bottom": "-110px","right": lastRan+"vw"},10);
	},2300);







});
