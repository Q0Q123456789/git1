
//登录模式切换
$(function(){
	
	//普通登陆
	$(".clear_a").click(function(){
		
		$(".clear_a").css("borderBottom","2px solid #32beff")
		$(".pt_dl").css("display","block")
		$(".sj_dl").css("display","none")
		$(".clear_b").css("borderBottom","2px solid #e4e4e4")
		
	})
	
	//手机登陆
	$(".clear_b").click(function(){
		
		$(".clear_b").css("borderBottom","2px solid #32beff")
		$(".sj_dl").css("display","block")
		$(".pt_dl").css("display","none")
		$(".clear_a").css("borderBottom","2px solid #e4e4e4")
		
	})
})

//登录
$(function(){
	
	var false1 = false;
	var false2 = false;
		
	//账号
	$("#dl_zh").blur(function(){
		console.log(1)
		var arr1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;//邮箱检测
		var that = this
		if(arr1.test( $(this).val() )){
			false1 = true;
			$("#dl_zh_1").html("");
		}
		else{
			if($(that).val()== ""){
				$("#dl_zh_1").html("登录名不能为空").css({color:"red"});
				false1 = false;
			}
			else{
				false1 = false;
				$("#dl_zh_1").html("请输入登录名").css({color:"red"});
			}

		}
	})
	
	//密码
	$("#dl_mm").blur(function(){
		console.log(1)
		var arr2 = /^.{6,20}$/;//密码检测
		var that = this
		if(arr2.test( $(this).val() )){
			false2 = true;
			$("#dl_mm_1").html("");
		}
		else{
			if($(that).val()== ""){
				$("#dl_mm_1").html("密码不能为空").css({color:"red"});
				false2 = false;
			}
			else{
				false2 = false;
				$("#dl_mm_1").html("密码不能少于6位").css({color:"red"});
			}
			
		}
	})
	
	
	$(".zh_dl").click(function(){

		var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1/Html/php/login.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("username="+ $("#dl_zh").val() + "&password=" + $("#dl_mm").val());
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState==4 && xhr.status==200) {
                console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);
	                if (obj.status == 1) {
		                    alert("登录成功");
		                    
	                    if($("#mdl_input").attr("checked",true)){
	                    	
//							var d = new Date();
//							d.setDate(d.getDate()+14);
							$.cookie("usernema",$("#dl_zh").val(),{expires:14, path:"/"});
							console.log($.cookie("usernema"))
							$.cookie("password",$("#dl_mm").val(),{expires:14, path:"/"});
							location.href = "index.html";
					}
                }
                else {
                    alert("登陆失败");
                }
            }
        }
		
	})
	
})





