$(document).ready(function(){

var makeSketch = function(numBox){

$(".row").remove();

$("#table").append("<tr class='row'></tr>");

for (var j = 0; j < numBox; j++) {
$(".row").append("<td class='column'></td>");
}

for (var i = 0; i < numBox; i++) {
$(".column").append("<div class='pixel' id = 'i'></div>");
}

var square = (300 / numBox);

$("#table").css({"padding":"0","margin":"0","border-collapse":"collapse"});
$(".pixel").css({"margin":"0","width": square + "px","height": square + "px","background":"white","float":"right"});

$(".pixel").hover(function(){
	$(this).css({"background":"black"});
})

};

makeSketch(5);



$("#button").click(function(){
	$(".pixel").css({"background":"white"});
	var a = prompt("how many squares?");
	makeSketch(a);
})


});