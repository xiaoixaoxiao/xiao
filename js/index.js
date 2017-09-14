

var len = $(".left-bottom ul li").length;
$(".left-bottom ul").hover(function(){
	$(".banner_right").show();
	
},function(){
	$(".banner_right").hide();
})
for(let i=0;i<len;i++){
		$(".left-bottom ul li").eq(i).on("mouseenter",function(){
			$.getJSON("json/nav.json",function(data){
				$(".banner_right").html(`<p>${data[i].title}</p>`);
				for(var j=0;j<data[i].list.length;j++){
					var _list = `<span>${data[i].list[j]}</span>`;
					$(_list).appendTo(".banner_right");
				}
			})
		})
}	
