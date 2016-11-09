$(document).ready(function(){

	$("li").mouseenter(function(){
		$(this).fadeTo("slow", 0.25);

	});


	$("li").mouseleave(function(){
		$(this).fadeTo("slow", 1);

	});

	$("li").click(function(){
		$(this).text("Clicked!", 1);

	});


});