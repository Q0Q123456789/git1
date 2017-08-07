

//登录检测
$(function(){
	
//	var nema = $.cookie("usernema");
//	if(name){
//		$("欢迎您  <span class='s-username'>"+ name +"</span>").appendTo("#ul_li_dl")
//	}
	var pArr = $.cookie("usernema");
	if(pArr) {
		$("#ul_li_dl").html("欢迎您  <span class='s-username'>" + pArr + "</span><a href='#' id='tc_dl'>退出</a>")
	}
	$("#tc_dl").click(function(){
		console.log(1)
		$.cookie("usernema",$("#dl_zh").val(''),{expires:-1, path:"/"});
		$.cookie("password",$("#dl_mm").val(''),{expires:-1, path:"/"});
	})
	 
	 //小购物车
	 $(".gwc").mouseenter(function(){
		$("#div_mini_div").css("display","block")
		$(".gwc").css("background","#fff")
	})
	$(".gwc").mouseleave(function(){
		$("#div_mini_div").css("display","none")
		$(".gwc").css("background","")
	})
	
	var arr=$.cookie("cart")
	if(arr){
		
		//显示小购物车
		$("#div_mini").css("display","block")
		$("#mini_gwl").css("display","none")
	}else{
		$("#div_mini").css("display","none")
		$("#mini_gwl").css("display","block")
	}
	
	
	
})


onload =function(){
	//登陆
	var oinput = document.getElementsByTagName("input");
	oinput[0].onclick =function(){
		
		location.href = "dl.html"

	}
	
	//回到顶部
	var obox = document.getElementById("box_hddb");

	var timer;
	
	obox.onclick = function() {
	
		console.log("i")
	
		clearInterval(timer)
		timer = setInterval(function() {
	
			var current = document.documentElement.scrollTop || document.body.scrollTop;
	
			var speed = (0 - current) / 5
			speed = Math.floor(speed); 
	
			if(current == 0) {
				clearInterval(timer)
				return;
			}
	
			document.documentElement.scrollTop = document.body.scrollTop = current + speed
	
		}, 30)
	}
	
}

$(function(){
	$("#smallArea").width($("#smallImg").width()*$("#bigArea").width()/$("#bigImg").width());
	$("#smallArea").height($("#smallImg").height()*$("#bigArea").height()/$("#bigImg").height());
	
	//放大系数
	var scale = $("#bigImg").width()/$("#smallImg").width();
	
	//在小图中移动
	$("#smallImg").mousemove(function(e){
		$("#smallArea").show();//显示小区域
		$("#bigArea").show();//显示大区域
		
		var x = e.pageX - $("#smallImg").offset().left - $("#smallArea").width()/2;
		var y = e.pageY - $("#smallImg").offset().top - $("#smallArea").height()/2;
		
		//控制左右边界
		if(x<0){
			x=0;
		}
		else if(x>$("#smallImg").width() - $("#smallArea").width()){
			x=$("#smallImg").width() - $("#smallArea").width();
		}
		//控制上下边界
		if(y<0){
			y=0
		}
		else if(y>$("#smallImg").height() - $("#smallArea").height()){
			y=$("#smallImg").height() - $("#smallArea").height()
		}
		//小区域移动
		$("#smallArea").css({left:x,top:y});
		//大图移动
		$("#bigImg").css({left:-scale*x,top:-scale*y});
		
	})
	    
	    $("#smallImg").mouseleave(function(){
	    	$("#smallArea").hide();//隐藏小区域
	    	$("#bigArea").hide();//隐藏大区域
	    })
	
	
})


//获取商品详情数据
$(function(){

	var pid = location.search.substring(4);//截取id=后的 id
	var sid = pid.substring(2);
	var xid = pid.substring(0,1)
	var arr=[];
	$.get("json/dthq.json",function(d){
		
			if(xid == "0"){
				arr = d.mian8;
			}else if(xid == "1"){
				arr = d.mian1;
			}else if(xid == "2"){
				arr = d.mian2;
			}else if(xid == "3"){
				arr = d.mian3;
			}else if(xid == "4"){
				arr = d.mian4;
			}else if(xid == "5"){
				arr = d.mian5;
			}else if(xid == "6"){
				arr = d.mian6;
			}else if(xid == "7"){
				arr = d.mian7;
			}else if(xid == "8"){
				arr = d.mian8;
			}
			
			for(var i=0;i<arr.length;i++){
			   	var obj = arr[i];
			   	if(obj.id == pid){
                   $("#smallImg img").attr("src",obj.img)
                   $("#bigArea img").attr("src",obj.img) 
                   $(".li_xtp img").attr("src",obj.img) 
                   $(".p_h1").html(obj.name)
                   $(".P_h2_1").html(obj.name1)
                   $(".P_h2_2").html(obj.name2)
                   $(".s_strong").html(obj.jiage)
                   $(".s_strong_2").html(obj.sl)
			   	}
		   }
			
		//添加商品数量
		 var sl = $(".txt_p").val()
		$("#add").click(function(){
			console.log(1)
			sl++;
			$(".txt_p").val(sl)
		})
		$("#sub").click(function(){
			sl--;
			if(sl<1){
    	       sl = 1;
            }
			$(".txt_p").val(sl)
		})	
			
         var goodsArr = []
		$("#jrgwc").click(function(){
//			console.log("购物车")

			for(var i=0;i<arr.length;i++){
			   	var obj = arr[i];
			   	
			   	//删除多余数据减小cookie内存
			   	delete arr[i].span2
			   	delete arr[i].a
			   	delete arr[i].em1
			   	delete arr[i].em2
			   	delete arr[i].span1
			   	delete arr[i].name1
			   	delete arr[i].name2
			   	delete arr[i].jiage
			   	delete arr[i].sl

			   	if(obj.id == pid){
			   		var arrt = arr[i]
  
			   	}	
			}

//			console.log(arrt.length)
			var goodsArr =$.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
			var isExist = false;
			//console.log(goodsArr[i])
			for(var j=0;j<goodsArr.length;j++){
				
				if(goodsArr[j].id == arrt.id){
					
					goodsArr[j].num++;
					isExist  = true;
					
				}
			}
			if(!isExist){
				
				arrt.num =sl;
				obj.checked = true;//默认选中
			    goodsArr.push(arrt)
//			    console.log(1)
			}
//      	console.log(goodsArr)
//      	console.log(goodsArr.length)
			$.cookie("cart", JSON.stringify(goodsArr), {expires:30, path:"/"});
			console.log( $.cookie("cart") );
			
			//确认弹窗
		    $("#tc").css("display","block")
		    $("#hp").css("display","block")

		})
		//关闭确认弹窗1
		$("#gb").click(function(){
			$("#tc").css("display","none")
			$("#hp").css("display","none")
		})
        //关闭确认弹窗2
		$("#tcgb").click(function(){
			$("#tc").css("display","none")
			$("#hp").css("display","none")
		})
		//关闭确认弹窗3
		$("#js_gwc").click(function(){
			$("#tc").css("display","none")
			$("#hp").css("display","none")
			location.href = "gwc.html"
		})
	})
	
	
	
	//添加商品数量
		 var sl = $(".txt_p").val()
		$("#add").click(function(){
			console.log(1)
			sl++;
			$(".txt_p").val(sl)
		})
		$("#sub").click(function(){
			sl--;
			if(sl<1){
    	       sl = 1;
            }
			$(".txt_p").val(sl)
		})
	
	$("#ljgm").click(function(){
		
			for(var i=0;i<arr.length;i++){
			   	var obj = arr[i];
			   	
			   	//删除多余数据减小cookie内存
			   	delete arr[i].span2
			   	delete arr[i].a
			   	delete arr[i].em1
			   	delete arr[i].em2
			   	delete arr[i].span1
			   	delete arr[i].name1
			   	delete arr[i].name2
			   	delete arr[i].jiage
			   	delete arr[i].sl

			   	if(obj.id == pid){
			   		var arrt = arr[i]
  
			   	}	
			}

//			console.log(arrt.length)
			var goodsArr =$.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
			var isExist = false;
			//console.log(goodsArr[i])
			for(var j=0;j<goodsArr.length;j++){
				
				if(goodsArr[j].id == arrt.id){
					
					goodsArr[j].num++;
					isExist  = true;
					
				}
			}
			if(!isExist){
				
				arrt.num = sl;
				obj.checked = true;//默认选中
			    goodsArr.push(arrt)
//			    console.log(1)
			}
//      	console.log(goodsArr)
//      	console.log(goodsArr.length)
			$.cookie("cart", JSON.stringify(goodsArr), {expires:30, path:"/"});
			console.log( $.cookie("cart") );
			
			//跳转购物车
			location.href = "gwc.html"
	})

})
