
require(["config"], function(){
	require(["jquery", "load","template"], function($,a,template){
		$(function(){
			// 从 json 文件中加载商品数据
			$.getJSON("json/inde.json", function(abc){
				// 渲染模板
				
				var html = template("moban",{data:abc});
				// 显示
				$("#box").html(html);
			});
		});
		






	});
});




//var len = $(".left-bottom ul li").length;
//$(".left-bottom ul").hover(function(){
//	$(".banner_right").show();
//	
//},function(){
//	$(".banner_right").hide();
//})
//var _data = "";
//$.getJSON("json/nav.json",function(data){
//	_data = data;
//}
//for(let i=0;i<len;i++){
//		$(".left-bottom ul li").eq(i).on("mouseenter",function(){
//			
//				$(".banner_right").html(`<p>${data[i].title}</p>`);
//				for(var j=0;j<_data[i].list.length;j++){
//					var _list = `<span>${_data[i].list[j]}</span>`;
//					$(_list).appendTo(".banner_right");
//				}
//			
//		})
//}	
