


	$(function(){
		//普通用户正常
		//邮箱注册
	 	$("#span_a_sj").click(function(e){
			$("#yx_a1").css({display:"none"})
 			$("#sj_a1").css({display:"block"})
 			$("#sj_a2").css({display:"block"})
 			$("#span_a_sj").css({display:"none"})
	 		$("#span_a_sj_1").css({display:"block"})	

	 		})
	 	//手机注册
	 	$("#span_a_sj_1").click(function(e){
	 		$("#yx_a1").css({display:"block"})
 			$("#sj_a1").css({display:"none"})
 			$("#sj_a2").css({display:"none"})
 			$("#span_a_sj_1").css({display:"none"})
	 		$("#span_a_sj").css({display:"block"})	
	 	})
	 	
	 	//普通用户注册和顺逛微店主注册切换
          //普通用户注册
	 	$(".input_pt").on("click","label",function(){
	 		$(".zc_box").css({display:"block"})
	 		$(".sj_zc_box").css({display:"none"})
	 	})

	 	//顺逛微店主注册切换
	 	$(".input_vip").on("click","label",function(){
	 		$(".zc_box").css({display:"none"})	 		
	 		$(".sj_zc_box").css({display:"block"})	 		
	 	})
	})
	
	
	//注册
	$(function(){
		
		var false1 = false;
		var false2 = false;
		var false3 = false;
		var false4 = false;
		
		
		
		//账号
		$("#yx_input").blur(function(){
			console.log(1)
			var arr1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;//邮箱检测
			var that = this
			if(arr1.test( $(this).val() )){
				false1 = true;
				$("#yx_input_1").html("");
			}
			else{
				if($(that).val()== ""){
					$("#yx_input_1").html("邮箱不能为空").css({color:"red"});
					false1 = false;
				}
				else{
					false1 = false;
					$("#yx_input_1").html("请输入正确邮箱").css({color:"red"});
				}
				
			}
		})
		
		//密码
		$("#mm_ipnut").blur(function(){
			console.log(1)
			var arr2 = /^.{6,20}$/;//密码检测
			var that = this
			if(arr2.test( $(this).val() )){
				false2 = true;
				$("#mm_input_1").html("");
			}
			else{
				if($(that).val()== ""){
					$("#mm_input_1").html("密码不能为空").css({color:"red"});
					false2 = false;
				}
				else{
					false2 = false;
					$("#mm_input_1").html("请输入正确密码").css({color:"red"});
				}
				
			}
		})
		
		//验证密码
		$("#yzmm_input").blur(function(){
			
			var that =this;
			if($(this).val() == $("#mm_ipnut").val() ){
				
				false3 = true;
				$("#yzmm_input_1").html("");
				
			}else{
				
				if($(that).val()== ""){
					$("#yzmm_input_1").html("密码不能为空").css({color:"red"});
					false3 = false;
				}
				else{
					false3 = false;
					$("#yzmm_input_1").html("请再次确认登录密码").css({color:"red"});
				}				
			}
		})
		
		//随机生存验证码
		$("#sjsz_input").click(function(){
			
			var arr=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
			var arr1=arr[parseInt(Math.random()*36)] 
			var arr2=arr[parseInt(Math.random()*36)] 
			var arr3=arr[parseInt(Math.random()*36)] 
			var arr4=arr[parseInt(Math.random()*36)] 
			
			var attr = arr1+arr2+arr3+arr4
			console.log(attr)
			$("#sjsz_input").val(attr)
			
		})
		
		//验证码检测
		$("#yzm_input").blur(function(){
			
			var that = this
			
			if($(this).val() == $("#sjsz_input").val() ){
				false4 = true;
				$("#yzm_input_1").html("");
			}else{
				if($(that).val()== ""){
					$("#yzm_input_1").html("验证码不能为空").css({color:"red"});
					false4 = false;
				}
				else{
					$("#yzm_input_1").html("请输入验证码").css({color:"red"});
					false4 = false;
				}
			}

		})
		
		//注册
		$("#zc_input").click(function(){
			
			if( false1 && false2 && false3 && false4 ){
				
				var  xhr = new XMLHttpRequest();
				xhr.open("POST","http://127.0.0.1/Html/php/register.php",true);				
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send("username="+$("#yx_input").val()+"&password="+$("#mm_ipnut").val())
				
				xhr.onreadystatechange = function(){
					
					if(xhr.readyState == 4 && xhr.status == 200){
						console.log(xhr.responseText);
						 var obj = JSON.parse(xhr.responseText);
                        if (obj.status == 1) {
                            alert("注册成功");
                            location.href = "dl.html";
                        }
                        else {
                            alert("注册失败");
                        }
					}
					
				}
			}
			
		})
		
		
	})
