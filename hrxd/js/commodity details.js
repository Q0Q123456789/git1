
//获取商品详情
$(function(){
	
	//动态获取商品数据
	$.get("json/dthq.json",function(d){
		
		var arr1 = d.mian8;//热卖品
		var arr2 = d.mian1;//冰箱
		var arr3 = d.mian2;//洗衣机
		var arr4 = d.mian3;//电视机
		var arr5 = d.mian4;//空调
		var arr6 = d.mian5;//热水器
		var arr7 = d.mian6;//厨房电器
		var arr8 = d.mian7;//生活家电
//      console.log(arr1)   
		//热卖品
		for(var i=0;i<arr1.length;i++){
			var obj = arr1[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_01")
		}
		
		//点击获取商品详情
		$("#ajax_01").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr1[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//冰箱
		for(var i=0;i<arr2.length;i++){
			var obj = arr2[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_02")
		}
		
		//点击获取商品详情
		$("#ajax_02").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr2[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//洗衣机
		for(var i=0;i<arr3.length;i++){
			var obj = arr3[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_03")
		}
		
		//点击获取商品详情
		$("#ajax_03").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr3[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//电视机
		for(var i=0;i<arr4.length;i++){
			var obj = arr4[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_04")
		}
		
		//点击获取商品详情
		$("#ajax_04").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr4[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//空调
		for(var i=0;i<arr5.length;i++){
			var obj = arr5[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_05")
		}
		
		//点击获取商品详情
		$("#ajax_05").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr5[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//热水器
		for(var i=0;i<arr6.length;i++){
			var obj = arr6[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_06")
		}
		
		//点击获取商品详情
		$("#ajax_06").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr6[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//厨房电器
		for(var i=0;i<arr7.length;i++){
			var obj = arr7[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_07")
		}
		
		//点击获取商品详情
		$("#ajax_07").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr7[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})
		
		//生活家电
		for(var i=0;i<arr8.length;i++){
			var obj = arr8[i]
			$("<li class='ul_li_a' ><h4 class='h4_ul_li'><a href='#' ><span class='span_a'>" + obj.span1 + "</span><em class='em_a'> " + obj.em1 
				+ "</em><span class='span_b'>"+obj.span2+"</span></a><em class='em_b'>"+obj.em2
				+"</em></h4>"+"<a href='#' class='a_a'><img src="+ obj.img +"/>"+"</a><a href='#'  class='a_b'>"+obj.a+"</a>").appendTo("#ajax_08")
		}
		
		//点击获取商品详情
		$("#ajax_08").on("click","li",function(){
			
//			console.log(1)
			var index = $(this).index();
			var obj = arr8[index];
//			console.log(obj.id)
			location.href = "xqy.html?id=" + obj.id;
		
		})

	})
	
	
})