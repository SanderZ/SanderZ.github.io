$(document).ready(function(){

	//替换selector样式
  	$(".selector").select2({
  		//设置十项内不显示搜索框
  		minimumResultsForSearch: 10
  	});

  	//为新闻项添加与鼠标的交互效果
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

	//使新闻项颜色交替
	$("#notice_wrapper a:odd").addClass("notice-item-odd");

	//使已办事项默认收拢
	$("#done_list .tree-parent-btn").each(function(){
		if($(this).children(".icon").hasClass("fa-chevron-down"))
			$(this).children(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right icon-fix");
		else
			$(this).children(".icon").removeClass("fa-chevron-right icon-fix").addClass("fa-chevron-down");

		$(this).next("ul").toggle();
	});

	if(parseInt($("#to_do_count").html()) > 0) {
		$("#to_do_count").show();
	}else{
		$("#to_do_count").hide();
	}


	// $(".process-btn").each(function() { 
	// 	var elm = $(this).clone(true);
	// 	$(this).parent().append(elm);
	// 	elm.toggle();
	//     var startPos = $(this).offset().top; 
	//     // var elmWidth = $(this).width();
	//     $(window).scroll(function() { 
	//         var p = $(window).scrollTop(); 
	//         elm.css('position',((p) > startPos) ? 'fixed' : 'static'); 
	//         elm.css('top',((p) > startPos) ? '0px' : ''); 
	//         elm.css("width", $(".process-btn").width());
	// 		if(p > startPos){
	// 			elm.show();
	// 		}else{
	// 			elm.hide();
	// 		}
	//         // elm.css("width",elmWidth)
	//     }); 
	// }); 


	// $(".process-btn").each(function() { 
	// 	var elm = $(this);
	//     var startPos = $(this).offset().top - $(this).height(); 
	//     // var elmWidth = $(this).width();
	//     $(window).scroll(function() { 
	//         var p = $(window).scrollTop(); 
	//         elm.css('position',((p) > startPos) ? 'fixed' : 'static'); 
	//         elm.css('top',((p) > startPos) ? '0px' : ''); 
	//         // elm.css("width",elmWidth)
	//     }); 
	// // }); 
	// var event = $.Event('"DynamicLoaded');
	// $(document).trigger(event);

});


function pageLoad(sender, args){

	if(args.get_isPartialLoad()){

		//使已办事项默认收拢
		$("#done_list .tree-parent-btn").each(function(){
			if($(this).children(".icon").hasClass("fa-chevron-down"))
				$(this).children(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right icon-fix");
			else
				$(this).children(".icon").removeClass("fa-chevron-right icon-fix").addClass("fa-chevron-down");

			$(this).next("ul").toggle();
		});

		if(parseInt($("#to_do_count").html()) > 0) {
			$("#to_do_count").show();
		}else{
			$("#to_do_count").hide();
		}	

	}
}