$(function() {

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
		location.reload();
	})
	
	$(".gwc").mouseenter(function(){
		$("#div_mini_div").css("display","block")
		$(".gwc").css("background","#fff")
	})
	$(".gwc").mouseleave(function(){
		$("#div_mini_div").css("display","none")
		$(".gwc").css("background","")
	})
	
})

onload = function() {

	//登陆
	var oinput = document.getElementsByTagName("input");
	oinput[0].onclick = function() {

		location.href = "dl.html"

	}

	//回到顶部
	/**********************************************************************/
	var obox = document.getElementById("box_hddb");

	var timer;

	obox.onclick = function() {

		//		console.log("i")

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

	/**********************************************************************/
	//切换商品
	var olist0 = document.getElementById("main_a");
	var olist1 = olist0.getElementsByTagName("dl");
	var olist3 = olist0.getElementsByTagName("ul");
	//	console.log(olist2)
	for(var i = 0; i < olist1.length; i++) {
		olist1[i].index = i
		//index = olist1[i].this

		olist1[i].onmouseenter = function() {

			console.log(this.index, olist3.length)

			for(var j = 0; j < olist3.length; j++) {
				//	               olist2[j].index = j
				console.log(this.index, j)
				if(this.index == j) {
					olist3[j].style.display = "block" //显示
				} else {
					olist3[j].style.display = "none" //隐藏
				}
			}
		}
	}

}
$(function() {

	$.get("json/lunbotu.json", function(d) {

		var arr1 = d.lbt; //轮播图
		var arr2 = d.zp; //展示品
		var arr3 = d.xp; //新品
		var arr4 = d.dz; //定制

		//轮播图
		for(var i = 0; i < arr1.length; i++) {

			var obj = arr1[i];

			$("<li><img src=" + obj.img + " ></li>").appendTo("#list");
			var li = $("<span></span>").appendTo("#list2");

			if(i == 0) {
				li.addClass("active");
			}
		}

		//展示品
		for(var i = 0; i < arr2.length; i++) {

			var obj = arr2[i];
			$("<li class='a1 yd'><a href=''><img src=" + obj.img + "/></a></li>").appendTo("#banner_ul");
		}
		//新品
		for(var i = 0; i < arr3.length; i++) {

			var obj = arr3[i];
			$("<li class='ul_li'><a href=''><img src=" + obj.img + "/></a></li>").appendTo("#main_ul_1");
		}
		//定制
		for(var i = 0; i < arr4.length; i++) {

			var obj = arr4[i];
			$("<li class='ul_li'><a href=''><img src=" + obj.img + "/></a></li>").appendTo("#main_ul_2");
		}

		//轮播
		lunbo();
	})

	//jQ轮播图
	function lunbo() {

		var list1 = $("#list")
		var list2 = $("#list2")
		var li1 = $("#list li")
		var li2 = $("#list2 span")

		//复制第一张图到最后
		li1.first().clone(true).appendTo(list1);

		//求出图的数量
		var size = $("#list li").size();
		list1.width(li1.width() * size)

		//开启定时器
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 3000);
		//移动并显示第i张图
		function move() {
			//左边界
			if(i < 0) {
				list1.css("left", -li1.width() * (size - 1)); //从第1张图瞬间变化(非动画)到最后一张图
				i = size - 2;
			}
			//右边界
			if(i >= size) {
				list1.css("left", 0); //从最后一张图瞬间变化(非动画)到第1张图
				i = 1;
			}
			//运动显示第i张图
			list1.stop().animate({
				left: -i * li1.width()
			},500 );
			//改变小按钮样式
			li2.eq(i).addClass("active").siblings().removeClass("active");
			if(i == size - 1) {
				li2.eq(0).addClass("active").siblings().removeClass("active");
			}
		}

		//上
		$("#left1").click(function() {
			i--;
			move();
		})

		//下
		$("#right1").click(function() {
			i++;
			move();
		})
		//小按钮的移入事件
		li2.mouseenter(function() {
			i = $(this).index();
			move();
		})
		//移入停止定时器
		$("#banner_a").hover(function() {
				clearInterval(timer);
		   },
			function() {
				timer = setInterval(function() {
					i++;
					move();
				}, 3000);
			})

	}

})


