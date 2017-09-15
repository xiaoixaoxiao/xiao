define(["jquery"], function($){
	console.log($);
	$.ajax({
		url : "html/header.html",
		type : "get",
		success : function(data) {
			$(".index_header").html(data);
//			var _user = $.cookie("loginUser");
//			if (_user)
//				$(".login_reg").html(`欢迎 <a href="#">${_user}</a>`);
		}
	});

	$(".index_footer").load("/html/floor.html");
});