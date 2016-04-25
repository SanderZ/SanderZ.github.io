$(document).ready(function(){

  	$(".selector").select2({
  		minimumResultsForSearch: 10
  	});

	$(".notice-item").hover(
		function(){
			$(this).css({backgroundColor: "#ecf0f1", color: "#3498db"});
		},
		function(){
			if($(this).hasClass("notice-item-odd"))
				$(this).css({backgroundColor: "#fafafa", color: "#222"});
			else
				$(this).css({backgroundColor: "#fff", color: "#222"});
		}
	);

	$(".process-btn").click(function(){
		if($(this).children(".icon").hasClass("fa-chevron-down"))
			$(this).children(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right icon-fix");
		else
			$(this).children(".icon").removeClass("fa-chevron-right icon-fix").addClass("fa-chevron-down");

		$(this).next("ul").slideToggle(300).siblings("ul").slideUp("slow");
	});

	$(".process-btn").hover(
		function(){
			$(this).css({backgroundColor: "#e5e8e9"});
		},
		function(){
			$(this).css({backgroundColor: "#ecf0f1"});
		}
	);

	$(".process-item-btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa", color: "#3498db"});
		},
		function(){
			$(this).css({backgroundColor: "#fff", color: "#222"});
		}
	);
});