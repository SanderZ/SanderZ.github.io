$(document).ready(function() {
  	
  	$(".nav-list a").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa", color: "#222"});
		},
		function(){
			if($(this).hasClass("nav-selected"))
				$(this).css({backgroundColor: "#ecf0f1", color: "#222"});
			else
				$(this).css({backgroundColor: "#3498db", color: "#fff"});
		}
	);

  	$(".selector").select2();

	$( '.dropdown' ).hover(
	    function(){
	        $(this).children('.sub-menu').slideDown(200);
	    },
	    function(){
	        $(this).children('.sub-menu').slideUp(200);
	    }
	);

	$(".main .btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa", color: "#222"});
		},
		function(){
			$(this).css({backgroundColor: "#3498db", color: "#fff"});
		}
	);

	$(".user-btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa"});
		},
		function(){
			$(this).css({backgroundColor: "#ecf0f1"});
		}
	);

	$(".content-header .more-btn").hover(
		function(){
			$(this).css({textDecoration: "underline"});
		},
		function(){
			$(this).css({textDecoration: "none"});
		}
	);

});