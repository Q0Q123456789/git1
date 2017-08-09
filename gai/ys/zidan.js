




class Bullet{
	
	
	//方法
	init(){
		//属性
		this.ele = document.createElement("div");
		this.key = parseInt(Math.random()*100000000)+"";//key
		
//		console.log(gameEngine.allbullet)
		//添加子弹节点
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top =  myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
//		console.log( myPlane.ele.OffsetTop)

        //将新创建的子弹对象添加到所以子弹当中
        gameEngine.allbullet[this.key] = this;
//      console.log(gameEngine.allbullet)
		return this;
		
	}
	
	//子弹移动
	move(){
		
		let that = this;
		this.timer = setInterval(()=>{
			
			let y = that.ele.offsetTop - 8;
			if(y<-18){
				clearInterval(that.timer)
				gameEngine.ele.removeChild(that.ele);
				//当子弹从页面上移除，则将allbullet移除
				delete gameEngine.allbullet[that.key];
			}
			else{
				that.ele.style.top = y +"px"; 
			}

		},30)
		
	}
	
	//爆炸
	boom(){
		//停止移动
		clearInterval(this.timer)

		this.ele.className = "bullet-die";
		//爆炸动画
		let [dieimg,i]=[["img/die1.png","img/die2.png"],0]
		const that =this;
		let dietimer = setInterval(()=>{
			
			if(i>=1){
				clearInterval(dietimer);
				gameEngine.ele.removeChild(that.ele);//移除
			}
			else{
			    that.ele.style.background = "url("+dieimg[++i] +") no-repeat"
			}
			
		},100)
	}
	
}
