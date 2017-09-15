
require(["config"],function(){
	require(["jquery"],function($){
		$("#footer").load("../html/footer.html")
		$(function(){
			$.ajax({
				type:"get",
				url:"http://route.showapi.com/932-2",
				data:{
					showapi_appid:"43657",
					showapi_sign:"e352c9c20451406e92b5a13363d83339"
				},
				dataType : "json",
				success:function(data){
//					console.log(data);
					var sc=data.showapi_res_body;
					console.log(sc.image)
//					img=`<img src="sc.image"/>`		
					$("#yzmimg").attr("src",sc.image);
//					$("#yzmimg").attr("src");   获取
//					$(".check_box").prop("checked");多选框选中状态
				}
			});
			var numbers1,numbers2,numbers3;
			$(".key2").blur(function(){
				var _len=$(".key2").val().length;
					
				if(!_len){
					$(".kk22").fadeIn();
					$(".kk23").hide();
					numbers1 = false;
//					return;
				}else{	
					numbers1=/^\d{11}$/.test($(".key2").val());
						
					if(!numbers1){
						$(".kk22").hide();
						$(".kk23").hide();
						$(".kk2").fadeIn();
						
					}else{
						$(".kk2").hide();
						$(".kk22").hide();
						$(".kk23").fadeIn();
						
					}
				}
			});
			
			$(".key3").blur(function(){
				var _len=$(".key3").val().length;
				if(!_len){
					$(".kk32").fadeIn();
					$(".kk33").hide();
					numbers2 =false;
//					return;
				}else{	
					numbers2=/^\w{6,20}$/.test($(".key3").val());
					if(!numbers2){
						$(".kk32").hide();
						$(".kk33").hide();
						$(".kk3").fadeIn();
					}else{
						$(".kk3").fadeOut();
						$(".kk32").hide();
						$(".kk33").fadeIn();
						
					}
				}
			});
			
			
			$(".key4").blur(function(){
				var _var=$(".key4").val();
				var _len=$(".key4").val().length;
				if(!_len){
					$(".kk42").fadeIn();
					$(".kk43").hide();
					numbers3 = false;
				}else if(_var!==$(".key3").val()){
					$(".kk4").fadeIn();
					numbers3 = false;
				}else{
					$(".kk42").fadeOut();
					$(".kk4").hide();
					$(".kk43").fadeIn();
					numbers3 = true;
					
				}
				
			})
			$("#register_reg").on("click",function(){
				if(numbers1 && numbers2 && numbers3){
					console.log("success");
				}
				else console.log("false");
			})
//			$(".key4").blur(function(){
//				var _len=$(".key4").val().length;
//				if(!_len){
//					$(".kk42").fadeIn();
//					$(".kk43").hide();
////					return;
//				}else{	
//					var numbers=/^\d{11}$/.test($(".key4").val());
//					if(!numbers){
//						$(".kk42").hide();
//						$(".kk43").hide();
//						$(".kk4").fadeIn();
//					}else{
//						$(".kk4").fadeOut();
//						$(".kk42").hide();
//						$(".kk43").fadeIn();
//					}
//				}
//			});
			
			
		
			
			
			
			
		})
	});
})
