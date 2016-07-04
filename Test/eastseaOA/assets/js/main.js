$(document).ready(function() {
  	
  	//下拉菜单内链接变色
  	$(".nav-list a").hover(
		function(){
			$(this).css({backgroundColor: "#f5f5f5", color: "#222"});
		},
		function(){
			if($(this).hasClass("nav-selected"))
				$(this).css({backgroundColor: "#ecf0f1", color: "#222"});
			else
				$(this).css({backgroundColor: "#3498db", color: "#fff"});
		}
	);

  	//填补用户处下拉菜单与用户按钮间的间隙
  	//避免鼠标向下移动时下拉框收起
	$("#userDrop").hover(
		function(){
			$(this).css({height: "50px"});
		},
		function(){
			$(this).css({height: "30px"});
		}
	);

	//用户处下拉菜单链接变色
	$("#userDrop .sub-menu a").hover(
		function(){
			$(this).css({backgroundColor: "#3498db", color: "#fff"});
		},
		function(){
			$(this).css({backgroundColor: "#f5f5f5", color: "#222"});
		}
	);

	//为下拉菜单出现、收起设置动画效果
	//stop()，用于终止当前动画，避免队列存下动画后按序播放
	//不清空队列会导致的后果：鼠标在导航栏来回移动，经过几次，下拉菜单就会对应出现收起几次。
	//在那之前不能正常使用下拉菜单
	$( '.dropdown' ).hover(
	    function(){
	        $(this).children('.sub-menu').stop(true, true).slideDown(200);
	    },
	    function(){
	        $(this).children('.sub-menu').slideUp(200);
	    }
	);

	//按键变色
	$(".main .btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa", color: "#222"});
		},
		function(){
			$(this).css({backgroundColor: "#3498db", color: "#fff"});
		}
	);

	//用户按键变色
	$(".user-btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa"});
		},
		function(){
			$(this).css({backgroundColor: "#ecf0f1"});
		}
	);

	//当新短信数大于零时，显示通知
	if(parseInt($("#new_message_count").html()) > 0) {
		$("#new_message_count").show();
		$("#new_message_notify").show();
	}else{
		$("#new_message_count").hide();
		$("#new_message_notify").hide();
	}

	//显示更多按键变色
	$(".content-header .more-btn").hover(
		function(){
			$(this).css({textDecoration: "underline"});
		},
		function(){
			$(this).css({textDecoration: "none"});
		}
	);

	//替换selector样式
  	$(".selector").select2({
  		//设置十项内不显示搜索框
  		minimumResultsForSearch: 10
  	});

  	//为待办、已办事项中流程列表添加手风琴效果
	$(".tree-parent-btn").click(function(){
		if($(this).children(".icon").hasClass("fa-chevron-down"))
			$(this).children(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right icon-fix");
		else if($(this).children(".icon").hasClass("fa-chevron-right"))
			$(this).children(".icon").removeClass("fa-chevron-right icon-fix").addClass("fa-chevron-down");

		if($(this).children(".icon").hasClass("fa-minus-square"))
			$(this).children(".icon").removeClass("fa-minus-square").addClass("fa-plus-square");
		else if($(this).children(".icon").hasClass("fa-plus-square"))
			$(this).children(".icon").removeClass("fa-plus-square").addClass("fa-minus-square");

		$(this).next("ul").slideToggle(300).siblings("ul").slideUp("slow");
	});

	  	//为待办、已办事项中流程列表添加手风琴效果
	$(".parent-active-tree .tree-parent-btn").click(function(){
		$(this).parent().next("ul").slideToggle(300).siblings("ul").slideUp("slow");
	});

	//为待办、已办事项中流程列表添加手风琴效果
	$(".parent-active-tree li").each(function(){
		var currentIndent = 0;
		var e = $(this);

		while(true){

			if(e.parent().hasClass("parent-active-tree")){
				break;
			}else{
				currentIndent++;
				e = e.parent();
			}

		}

		$(this).css({paddingLeft: currentIndent / 2 + "em"});

	});

	var defaultColor;
	//为流程标题添加鼠标交互效果
	$(".tree-parent-btn").hover(
		function(){
			defaultColor = $(this).css("backgroundColor");
			$(this).css({backgroundColor: "#e5e8e9"});
		},
		function(){
			$(this).css({backgroundColor: defaultColor});
		}
	);

	$(".tree-parent-content").hover(
		function(){
			defaultColor = $(this).css("backgroundColor");
			$(this).css({backgroundColor: "#e5e8e9", color: "#3498db"});
		},
		function(){
			$(this).css({backgroundColor: defaultColor, color: "#222"});
		}
	);

	//为流程内容项添加鼠标交互效果
	$(".tree-child-btn").hover(
		function(){
			$(this).css({backgroundColor: "#fafafa", color: "#3498db"});
		},
		function(){
			$(this).css({backgroundColor: "#fff", color: "#222"});
		}
	);

	//统计每类事项有几项
	$(".tree-child-count").each(function(){
		var count =  $(this).parent().next().children().length;
		$(this).html(count);
	});

	// $(document).on("onchange",".tree-child-count",function(){
	// 	$(this).each(function(){
	// 		var count =  $(this).parent().next().children().length;
	// 		$(this).html(count);
	// 	});
	// });

	if(!$(".article-wrapper table").hasClass("layout-table")){

		//为表格项添加与鼠标的交互效果
		$(".article-wrapper table").find("tr").hover(
			function(){
				$(this).css({backgroundColor: "#ecf0f1"});
			},
			function(){
				if($(this).hasClass("tr-odd"))
					$(this).css({backgroundColor: "#fafafa"});
				else if($(this).hasClass("tr-red"))
					$(this).css({backgroundColor: "#ffdfcf"});
				else
					$(this).css({backgroundColor: "#fff"});
			}
		);

		//使表格项颜色交替		
		$(".article-wrapper table").find("tr:even").addClass("tr-odd");
	}

	$(".article-wrapper").find("table").each(function(){

		if(!$(this).hasClass("layout-table")){

			//为表格项添加与鼠标的交互效果
			$(this).find("tr").hover(
				function(){
					$(this).css({backgroundColor: "#ecf0f1"});
				},
				function(){
					if($(this).hasClass("tr-odd"))
						$(this).css({backgroundColor: "#fafafa"});
					else if($(this).hasClass("tr-red"))
						$(this).css({backgroundColor: "#ffdfcf"});
					else
						$(this).css({backgroundColor: "#fff"});
				}
			);

			//使表格项颜色交替		
			$(this).children().children("tr:even").addClass("tr-odd");
		}
	});

	$(".user-name div").click(function(){
		$("body").css({overflow: "hidden"});
		showLogin("#loginBox");
	})

	$("#loginBox #close_btn").click(function(){
		$("#loginBox").hide();
		$("#mask").hide();
		$("body").css({overflow: "auto"});
	})

	// $(".checkbox").iCheck({
	// 	checkboxClass: 'icheckbox_flat-blue',
 //    	radioClass: 'iradio_flat-blue'
	// });


});


function showMask(){  
    $("#mask").css("height",$(document).height());  
    $("#mask").css("width",$(document).width());  
    $("#mask").show();  
}
 
function showLogin(divName){  
    showMask();  
    $(divName).show(); 
} 

function pageLoad(sender, args){
	
	if(args.get_isPartialLoad()){

	  	//为待办、已办事项中流程列表添加手风琴效果
		$(".tree-parent-btn").click(function(){
			if($(this).children(".icon").hasClass("fa-chevron-down"))
				$(this).children(".icon").removeClass("fa-chevron-down").addClass("fa-chevron-right icon-fix");
			else if($(this).children(".icon").hasClass("fa-chevron-right"))
				$(this).children(".icon").removeClass("fa-chevron-right icon-fix").addClass("fa-chevron-down");

			if($(this).children(".icon").hasClass("fa-minus-square"))
				$(this).children(".icon").removeClass("fa-minus-square").addClass("fa-plus-square");
			else if($(this).children(".icon").hasClass("fa-plus-square"))
				$(this).children(".icon").removeClass("fa-plus-square").addClass("fa-minus-square");

			$(this).next("ul").slideToggle(300).siblings("ul").slideUp("slow");
		});

		  	//为待办、已办事项中流程列表添加手风琴效果
		$(".parent-active-tree .tree-parent-btn").click(function(){
			$(this).parent().next("ul").slideToggle(300).siblings("ul").slideUp("slow");
		});

		//为待办、已办事项中流程列表添加手风琴效果
		$(".parent-active-tree li").each(function(){
			var currentIndent = 0;
			var e = $(this);

			while(true){

				if(e.parent().hasClass("parent-active-tree")){
					break;
				}else{
					currentIndent++;
					e = e.parent();
				}

			}

			$(this).css({paddingLeft: currentIndent / 2 + "em"});

		});

		var defaultColor;
		//为流程标题添加鼠标交互效果
		$(".tree-parent-btn").hover(
			function(){
				defaultColor = $(this).css("backgroundColor");
				$(this).css({backgroundColor: "#e5e8e9"});
			},
			function(){
				$(this).css({backgroundColor: defaultColor});
			}
		);

		$(".tree-parent-content").hover(
			function(){
				defaultColor = $(this).css("backgroundColor");
				$(this).css({backgroundColor: "#e5e8e9", color: "#3498db"});
			},
			function(){
				$(this).css({backgroundColor: defaultColor, color: "#222"});
			}
		);

		//为流程内容项添加鼠标交互效果
		$(".tree-child-btn").hover(
			function(){
				$(this).css({backgroundColor: "#fafafa", color: "#3498db"});
			},
			function(){
				$(this).css({backgroundColor: "#fff", color: "#222"});
			}
		);

		//统计每类事项有几项
		$(".tree-child-count").each(function(){
			var count =  $(this).parent().next().children().length;
			$(this).html(count);
		});

	}
}