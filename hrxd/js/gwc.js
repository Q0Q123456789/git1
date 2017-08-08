

//登录检测
$(function(){

	var pArr = $.cookie("usernema");
	 if(pArr){
	 	$("#ul_li_dl").html("欢迎您  <span class='s-username'>"+ pArr +"</span><a href='#' id='tc_dl'>退出</a>")
	 	$(".logo_up_1").css("display","none")
	 }else{
	 	$(".logo_up_1").css("display","block")
	 }
	 
	 $("#tc_dl").click(function(){
		console.log(1)
		$.cookie("usernema",$("#dl_zh").val(''),{expires:-1, path:"/"});
		$.cookie("password",$("#dl_mm").val(''),{expires:-1, path:"/"});
		location.reload();
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
	  
	$("#right").on("click","input",function(){
		
		location.href = "dl.html"
		
	})
	
	$("#logo_up").on("click",".s_span_dl2",function(){
		location.href = "dl.html"
	})
})

//获取cookie
$(function(){
	
	 fn()//调用函数
	function fn(){
		var  arr = $.cookie("cart");
		if(arr){
			arr = JSON.parse(arr);//解析cookie
			
			//先清空旧节点
			$("#form_a2").empty();
			
			//判断购物车中是否有商品
			if(arr.length>0){
				    $("#div_gwc").css("display","block")
					$("#header_center").css("display","none")
					$("#nav").css("display","none")
					$("#gwc_msp").css("display","none")
				

				var total = 0;
				var atotal = 0;
				for(var i=0;i<arr.length;i++){
					var obj = arr[i];
					
					//创建节点
					var li = $("<div class='form_a2'></div>").appendTo("#form_a2");
					
					if(obj.checked){
						$("<div class='div_a1'><input type='checkbox' checked='checked' class='check' /></div>").appendTo(li);
					}
					else{
						$("<div class='div_a1'><input type='checkbox' class='check' /></div>").appendTo(li);	
					}
					
					$("<div class='div_a2'><ul><li class='div_a2_li'><a href='#'><img src="+ obj.img+" /></a></li></ul><a href='#'class='div_a2_a'>"+ obj.name+"</a></div>").appendTo(li);
					$("<div class='div_a3'>支持</div>").appendTo(li);
					$("<div class='div_a4'><p class='div_a4_i'>￥"+ obj.em3 +"</p></div>").appendTo(li);
	                $("<div class='div_a5'><span class='span_jian'>-</span><input type='text' value="+obj.num +" class='div_a5_txt' /><span class='span_jia'>+</span><div class='div_a5_div'>有货</div></div>").appendTo(li);
					$("<div class='div_a6'><p class='div_a6_i'>￥0</p></div>").appendTo(li);
					$("<div class='div_a7'><p class='div_a7_i'>￥"+ obj.em3 +"</p></div>").appendTo(li);
					$("<div class='div_a8'><span class='div_a8_1'>移入收藏夹</span><br /><span class='div_a8_2'>删除</span></div>").appendTo(li);  
					
					//总价
					if(obj.checked){
						total += obj.em3 * obj.num
					}
					
					atotal = total + $("#div_all_2").val()-$("#div_all_3").val()
//					console.log(atotal)
				}
				$("#div_all_1").html(total)
				$("#div_all_4").html(atotal)
				$("#zzjg").html(atotal)
			}
			else{
				$("#div_all_1").html(0)
				$("#div_all_4").html(0)
				$("#zzjg").html(0)
				$("#div_gwc").css("display","none")
				$("#header_center").css("display","block")
				$("#nav").css("display","block")
				$("#gwc_msp").css("display","block")
				console.log("购物车没有商品2")
			}
	
		}
		else{
				console.log("购物车没有商品1")
			}	
	}
	//删除购物车中的商品
	$("#form_a2").on("click",".div_a8_2",function(){
		
		  var index = $(this).index("#form_a2 .div_a8_2");
//		  console.log(index)

          //删除cookie中的数据
          var arr = JSON.parse($.cookie("cart"));
          arr.splice(index,1);//删除数组arr中的第index个商品
          //从新保存商品信息
          $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})
          
    	  fnfn()//判断是否全选
          location.reload();
          //局部刷新
          fn()
	})
	
    //添加商品
    $("#form_a2").on("click",".span_jia",function(){
    	
    	var index = $(this).index("#form_a2 .span_jia");
//  	console.log(index)
        var arr = JSON.parse($.cookie("cart"));
        arr[index].num++;//增加商品数量
        //从新保存商品信息
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})
    	
    	fn();//局部刷新
    })
    //
    //添加商品
    $("#form_a2").on("click",".span_jian",function(){
    	
    	var index = $(this).index("#form_a2 .span_jian");
//  	console.log(index)
        var arr = JSON.parse($.cookie("cart"));
        arr[index].num--;//增加商品数量
        if(arr[index].num<1){
        	arr[index].num = 1;
        }
        //从新保存商品信息
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})
    	
    	fn();//局部刷新
    })
//  //勾选
    $("#gwc_list").on("click",".check",function(){ 
    	
    	var index = $(this).index("#gwc_list .check");
    	
    	//将cookie中对应的商品的选中状态改变
    	var arr = JSON.parse($.cookie("cart"));
    	arr[index].checked = !arr[index].checked;
        $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})
    	
    	fnfn()//判断是否全选
    	
    	fn();//局部刷新
    })
 
//     全选
    $("#gwc_list").on("click",".qx_input",function(){ 
    	
    	var arr = JSON.parse($.cookie("cart")); 
    	
    	for(var i=0;i<arr.length;i++){
    		if($(this).prop("checked")){
    			arr[i].checked = true;
    		} 
    		else{
    			arr[i].checked = false;
    		} 
    	}
    	
    	$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
    	
    	fn();//局部刷新 
    }) 

    //判断是否全选
    fnfn()  
    function fnfn(){
    	
    	var arr =$.cookie("cart")? JSON.parse($.cookie("cart")):[]; 
    	var sum = 0;
    	for(var i=0;i<arr.length;i++){
    		sum +=arr[i].checked;
    	}
    	
    	if(sum == arr.length && arr.length!=0){
    		$(".qx_input").prop("checked",true); 
	 
    	}
    	else{
    		$(".qx_input").prop("checked",false); 
 
    	}   
    	$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});    	   
    }

    //删除选中商品
    $("#sc_xz").click(function(){

    	var arr = JSON.parse($.cookie("cart"));
    	var Arr = [];
    	for(var i=0;i<arr.length;i++){
    		if(arr[i].checked == false){  
    			Arr.push(arr[i]);

    		}

    	} 
    	$.cookie("cart",JSON.stringify(Arr),{expires:30,path:"/"});
    	
    	fnfn()//判断是否全选
        location.reload(); 
    	fn();//局部刷新 
    })
    
    //返回详情页
    $("#form_a2").on("click",".div_a2_li",function(){
    	
    	var index = $(this).index("#form_a2 .div_a2_li");
//  	console.log(index)
        var arr = JSON.parse($.cookie("cart"));
        location.href = "xqy.html?id="+arr[index].id

    })
    
})