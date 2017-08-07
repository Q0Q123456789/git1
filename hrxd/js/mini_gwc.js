

//小购物车
$(function(){
	fn()
	function fn(){
		var arr=$.cookie("cart")
		if(arr){
			
			
			
			//解析
			arr = JSON.parse(arr);
			//先清空旧节点
			$("#x_ul_gwc1").empty();
			
			
				if(arr.length>0){
					
							//显示小购物车
					$("#div_mini").css("display","block")
					$("#mini_gwl").css("display","none")
					
					var total = 0;
					var atotal = 0;
					
					for(var i=0;i<arr.length;i++){
					
						var obj = arr[i];
						
						//创建节点
		
						var li = $("<li class='li_mini_gwc1'></li>").appendTo("#x_ul_gwc1");
						$("<a href='#' class='mini_a1'><img src="+ obj.img+"/></a>").appendTo(li)
						$("<a href='#' class='mini_a2'>"+obj.name+"</a>").appendTo(li)
						$("<span class='mini_span1'>￥<em class='mini_em1'>"+obj.em3+"</em>x <em class='mini_em2'>"+obj.num+"</em></span>").appendTo(li)
						$("<span class='mini_span2'>删除</span>").appendTo(li)
						
						total +=obj.em3 * obj.num
						atotal +=obj.num
					}
					$(".s_em1").html(atotal)
					$(".s_em2").html(total)
				}
				else{
					$("#div_mini").css("display","none")
					$("#mini_gwl").css("display","block")
		        }	
	        
		}
		
    }	
	//删除购物车中的商品
	$("#x_ul_gwc").on("click",".mini_span2",function(){
		
		  var index = $(this).index("#x_ul_gwc .mini_span2");
		  console.log(index)

          //删除cookie中的数据
          var arr = JSON.parse($.cookie("cart"));
          arr.splice(index,1);//删除数组arr中的第index个商品
          //从新保存商品信息
          $.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})

          //局部刷新
          fn()
          
	})
    //结算
    $(".mini_js").click(function(){
    	location.href = "gwc.html"
    })
})