$(document).ready(function(){
	$(".menu_dropdown").on("click", function(){
			$(".hidden_menu_link").css("display", "flex");
			$(".menu_dropdown").css("display", "none");
	});
	
	$(".menu_dropdown_container").on("mouseleave", function(){
		$(".hidden_menu_link").css("display", "none");
		$(".menu_dropdown").css("display", "flex");
	});
});