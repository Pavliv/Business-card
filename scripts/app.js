$("#fishEagles").click(function () {
	$("#fishEagles").css("color", "#fcd93f");
	$(".fishLine").css("background-color", "#fcd93f");
	$("#bootedEagles, #snakeEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".bootedLine, .snakeLine, .harpLine, .otherLine").css("background-color", "#cfceca");
});

$("#bootedEagles").click(function () {
	$("#bootedEagles").css("color", "#fcd93f");
	$(".bootedLine").css("background-color", "#fcd93f");
	$("#fishEagles, #snakeEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .snakeLine, .harpLine, .otherLine").css("background-color", "#cfceca");
});

$("#snakeEagles").click(function () {
	$("#snakeEagles").css("color", "#fcd93f");
	$(".snakeLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #harpEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .harpLine, .otherLine").css("background-color", "#cfceca");
});

$("#harpEagles").click(function () {
	$("#harpEagles").css("color", "#fcd93f");
	$(".harpLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #snakeEagles, #otherEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .snakeLine, .otherLine").css("background-color", "#cfceca");
});

$("#otherEagles").click(function () {
	$("#otherEagles").css("color", "#fcd93f");
	$(".otherLine").css("background-color", "#fcd93f");
	$("#fishEagles, #bootedEagles, #snakeEagles, #harpEagles").css("color", "#cfceca");
	$(".fishLine, .bootedLine, .snakeLine, .harpLine").css("background-color", "#cfceca");
});