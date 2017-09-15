define(["jquery"], function($){

	$.ajax({
		url : "html/head.html",
		type : "get",
		success : function(data) {
			$(".index_header").html(data);
//			var _user = $.cookie("loginUser");
//			if (_user)
//				$(".login_reg").html(`欢迎 <a href="#">${_user}</a>`);
		}
	});
	
	$.ajax({
		url : "html/footer.html",
		type : "get",
		success : function(data) {
			$(".index_footer").html(data);
		}
	});

//	$(".index_footer").load("../html/footer.html");
});