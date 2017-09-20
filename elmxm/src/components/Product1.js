import React, { Component } from 'react';
import {Link} from 'react-router'
import axios  from 'axios';
import '../css/duke.css';
import storage from '../module/Storage.js'

import img1 from '../static/images/coll_1.png'
import img2 from '../static/images/coll_2.png'

console.log(storage)

class Product1 extends React.Component{


	 constructor(props){ /*构造函数     实例化的时候自动执行*/
            super(props);   /*父子组件传值必须这样写*/
        this.state={
			business:'',
			isColect:false
		}
        this.requsetData=this.requsetData.bind(this)
		this.collect=this.collect.bind(this)
        }
 

		componentWillMount(){
			var aid=this.props.params.aid;
			this.requsetData(aid);
			// console.log(aid)

			var collectStorageData = storage.get("collect")

			if(collectStorageData){

				if(storage.hasCollect(aid,collectStorageData)){
					//改变收藏的状态 
					this.setState({
						
								isColect:true
						})

					//重新写入数据
					storage.set("collect",collectStorageData)

				}else{/*没有数据*/ 
					this.setState({
								isColect:false
						})
					
				}
			}else{/**/


				//改变收藏状态
				this.setState({
					isColect:false
				})
			}
			
		}
		componentDidMount(){
				
		}
		
		collect(){

			var collData=[{

				aid:this.state.business._id,
				description:this.state.business.description,
				img:this.state.business.img,
				old_price:this.state.business.old_price,			
				price:this.state.business.price,			
				product_content:this.state.business.product_content,				
				status:this.state.business.status,		
				title:this.state.business.title
			
			}];
			// console.log(collData)
			var collectStorageData = storage.get("collect")

			if(collectStorageData){
				if(storage.hasCollect(collData[0].aid,collectStorageData)){
					for(var i=0;i<collectStorageData.length;i++){
						
						if(collData[0].aid==collectStorageData[i].aid){

							collectStorageData.splice(i,1)
						}
					}
					//改变收藏的状态 
					this.setState({
						
							 isColect:false
					 })

					//重新写入数据
					storage.set("collect",collectStorageData)

				}else{/*没有数据*/

					var newData= collData.concat(collectStorageData)
					
					storage.set('collect',newData);   
					//改变收藏的状态 
					this.setState({
						
							 isColect:true
					 })
					
				}
			}else{/**/

				storage.set("collect",collData)

				//改变收藏状态
				this.setState({
					isColect:true
				})
			}

		}


		requsetData(aid){
			var  that= this
        	axios.get('http://60.205.226.107:8030/api/good?_id='+aid) 
			  .then(function (response) {
			//    console.log(response.data.result)
			    	 that.setState({

                		business:response.data.result[0]
					   });
					   
					   var collectStorageData = storage.get("collect")

					   if(storage.hasCollect(response.data.result[0].aid,collectStorageData)){
							// console.log(response.data.result[0].aid)

							that.setState({
								isColect:true
							})


					   }else{
							that.setState({
								isColect:false
							})
					   }


			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		}
         render(){   /*渲染模板*/
        //  console.log(this.state.business)
				var collectimg = this.state.isColect?img2:img1
	            return (



	            	<div id="Product1"> 
	            		<div className="header">
							<div className="hed-left">
								<Link to='/home'></Link>
							</div>
							<div className="hed-center">商家详情</div>
							<div className="hed-right">
								<a href="javascript:;" onClick={this.collect} ><img src={collectimg} /><sapn>收藏</sapn></a>
								<a href="javascript:;"><i className="iconfont">&#xe647;</i><sapn>导航</sapn></a>
							</div>
						</div>
						<div className="banner">
							<a href="javascript:;">
							<img src={"http://60.205.226.107:8030/"+this.state.business.img}/>
			
							</a>
							<p>
								<Link>
								<span>{this.state.business.title}</span>
								<span>单人自助晚餐</span>
								</Link>
							</p>
						</div>
	            	
						<div className="price">
							<div className="price-top">
								<h3>{this.state.business.price}元</h3>
								<span>门市价：{this.state.business.old_price}元</span>
								<Link to={'/goOrder/'+this.state.business.title+'/'+this.state.business.price+'/'+this.state.business.img+'/'}>立即抢购</Link>
							</div>
							<div className="price-bottom">
								<span><i className="iconfont">&#xe617;</i>不支持随时退款</span>
								<span><i className="iconfont">&#xe622;</i>支持过期自动退</span>
								<span><i className="iconfont">&#xe632;</i>已售17412</span>
							</div>
						</div>


						<div className="evaluate">
							<h3>
								<span className="l">
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<em>3.8</em>				
								</span>		
									<b className="r">821条评价</b>
							</h3>
							<p>
								<a href="javascript:;">味道赞98</a>
								<a href="javascript:;">点心好73</a>
								<a href="javascript:;">性价比高55</a>
								<a href="javascript:;">服务热情42</a>
								<a href="javascript:;">回头客19</a>
								<a href="javascript:;">价格实惠8</a>
								<a href="javascript:;" className="acolor">干净卫生5</a>
								<a href="javascript:;" className="acolor">早餐12</a>
								<a href="javascript:;" className="acolor">环境一般9</a>
								<a href="javascript:;" className="acolor">下午茶5</a>
							</p>
	
						</div>


						<div className="site">	
							<div className="site-text">
								<i className="iconfont">&#xe6fc;</i>
								<span>罗湖区东湖路鹏城花园84号商铺（近景亿山庄公交站）</span>
							</div>
							<div className="site-ri">
								<a href="tel" className="te-a">				
									<i className="iconfont">&#xe673;</i>				
								</a>
							</div>
						</div>

						<div className="combo">
							<h3>套餐</h3>
							<p>
								<span>单人自助晚餐</span>
								<span>1位</span>
								<span>198元</span>
							</p>
						
							<ul>
								<li>单人自助晚餐：17:30-21:30</li>
								<li>营业时间</li>
								<li>周一至周五午餐：11:30-14:30，周六周日午餐：11:30-15:00</li>
								<li>周一至周日晚餐：17:30-21:30</li>
								<li>该美团券供有效期内周一至周日晚餐17：30-21：30使用，如在午餐（周一至周五午餐：11:30-14:30，周六周日午餐：11:30-15:00 ）使用则不退回差价，逾期不置换、不延期。 法定节假日或特殊节假日商家调整价格，需补足美团券面值和商家当市对外挂牌价的差价方可使用。</li>
							</ul>
							<div className="imgdetails">
								<span>查看图文详情</span>
								<i className="iconfont r">&#xe605;</i>
							</div>
						</div>
						<div className="combo">
							<h3>购买须知</h3>
							
								<strong>有效期</strong>
								<b>2017.3.15至2017.9.17(周末，法定节假日通用)</b>
								<strong>使用规则</strong>
								

							
						
							<ul>
								<li>单人自助晚餐：17:30-21:30</li>
								<li>营业时间</li>
								<li>周一至周五午餐：11:30-14:30，周六周日午餐：11:30-15:00</li>
								<li>周一至周日晚餐：17:30-21:30</li>
								<li>该美团券供有效期内周一至周日晚餐17：30-21：30使用，如在午餐（周一至周五午餐：11:30-14:30，周六周日午餐：11:30-15:00 ）使用则不退回差价，逾期不置换、不延期。 法定节假日或特殊节假日商家调整价格，需补足美团券面值和商家当市对外挂牌价的差价方可使用。</li>
							</ul>
							
						</div>


						<div className="evaluate-txt">
							<h2>
								<span>评价</span>
								<span>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
									<i className="iconfont">&#xe616;</i>
								</span>
							</h2>
							<ul>
								<li>

									<dl>
										<dd><img src={require("../img/x1.png")}/></dd>
										<dt>
											<h5>windiv</h5>
											<p>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<em>2017-02-04</em>
											</p>
										</dt>
									</dl>
										<div className="evaluate-m">
											里面食物品种丰富多样可口，环境宽广舒适，整体十分干净整洁，服务态度好，能及时清盘，因为食物新鲜好吃没浪费，吃完想起门口有光盘活动，光盘还有小礼物领回家，就想参加

										</div>
										<div className="evaluate-p">
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>

										</div>
										<span>四海一家(益田假日广场店)</span>
									
								</li>
									<li>

									<dl>
										<dd><img src={require("../img/x1.png")}/></dd>
										<dt>
											<h5>windiv</h5>
											<p>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<i className="iconfont">&#xe616;</i>
												<em>2017-02-04</em>
											</p>
										</dt>
									</dl>
										<div className="evaluate-m">
											里面食物品种丰富多样可口，环境宽广舒适，整体十分干净整洁，服务态度好，能及时清盘，因为食物新鲜好吃没浪费，吃完想起门口有光盘活动，光盘还有小礼物领回家，就想参加

										</div>
										<div className="evaluate-p">
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>
											<img src={require("../img/x1.png")}/>

										</div>
										<span>四海一家(益田假日广场店)</span>
									
								</li>
							</ul>
							<a href="javascript:;">
								<span className="l">查看全部821条评价</span>
								<span className="r"> </span>
							</a>
						</div>


						<div className="tui">
							<h3>[四海一家]相关团购推荐</h3>
							<ul>
								<li>
									<i><img src={require("../img/tuan.png")}/></i>
									<p>
										<h5>【世界之窗】单人自助晚餐</h5>
										<b>183元</b><span>门市价：198元</span>
										<span>已售17899</span>
									</p>
									
								</li>
									<li>
									<i><img src={require("../img/tuan.png")}/></i>
									<p>
										<h5>【世界之窗】单人自助晚餐</h5>
										<b>183元</b><span>门市价：198元</span>
										<span>已售17899</span>
									</p>
									
								</li>
									<li>
									<i><img src={require("../img/tuan.png")}/></i>
									<p>
										<h5>【世界之窗】单人自助晚餐</h5>
										<b>183元</b><span>门市价：198元</span>
										<span>已售17899</span>
									</p>
									
								</li>
									<li>
									<i><img src={require("../img/tuan.png")}/></i>
									<p>
										<h5>【世界之窗】单人自助晚餐</h5>
										<b>183元</b><span>门市价：198元</span>
										<span>已售17899</span>
									</p>
									
								</li>
							</ul>
						</div>


						<div className="advertising">
							<h2>
								<span className="l">看了本团购的用户还看了</span>
								<span className="r">广告</span>
							</h2>
							<ul>
								<li>
									<dl>
										<dd><img src={require("../img/q1.png")}/></dd>
										<dt>
											<p><h5>青瓦台韩式烤肉</h5><span className="r">>5km</span></p>
											<p>[大小梅沙] 仅售106元！最高价值139元的2-3人美味套餐，提供免费WiFi。</p>
											<p className="advertising-p"><b>￥88</b><span className="r">已售31</span></p>
										</dt>
									</dl>
								</li>
								<li>
									<dl>
										<dd><img src={require("../img/q1.png")}/></dd>
										<dt>
											<p><h5>青瓦台韩式烤肉</h5><span className="r">>5km</span></p>
											<p>[大小梅沙] 仅售106元！最高价值139元的2-3人美味套餐，提供免费WiFi。</p>
											<p className="advertising-p"><b>￥88</b><span className="r">已售31</span></p>
										</dt>
									</dl>
								</li>

								<li>
									<dl>
										<dd><img src={require("../img/q1.png")}/></dd>
										<dt>
											<p><h5>青瓦台韩式烤肉</h5><span className="r">>5km</span></p>
											<p>[大小梅沙] 仅售106元！最高价值139元的2-3人美味套餐，提供免费WiFi。</p>
											<p className="advertising-p"><b>￥88</b><span className="r">已售31</span></p>
										</dt>
									</dl>
								</li>

								<li>
									<dl>
										<dd><img src={require("../img/q1.png")}/></dd>
										<dt>
											<p><h5>青瓦台韩式烤肉</h5><span className="r">>5km</span></p>
											<p>[大小梅沙] 仅售106元！最高价值139元的2-3人美味套餐，提供免费WiFi。</p>
											<p className="advertising-p"><b>￥88</b><span className="r">已售31</span></p>
										</dt>
									</dl>
								</li>

							</ul>
						</div>





					<div className="foot">
						<div className="dizhi">
							当前位置：深圳团购>幸福西饼生日蛋糕（田面点）团购
						</div>
						<div className="foot-bar">
							<p>
								<a href="#">登录</a>
								<a href="#">注册</a>
							</p>
							<p>
								<span>城市：</span>
								<a href="#">登录</a>
							</p>
						</div>
					

						<div className="foot-nav">
							<ul>
								<li><a href="#">首页</a></li>
								<li><a href="#">我的</a></li>
								<li><a href="#">美团下载</a></li>
								<li><a href="#">电脑版</a></li>
								<li className="b0"><a href="#">帮助</a></li>
							</ul>
						</div>

						<div className="foot-link">
							友情链接：
							<a href="#">猫眼电影</a>
							<a href="#">大众点评</a>
							<a href="#">大众点评下载</a>

						</div>
						<div className="foot-poty">
							<div className="hr"></div>
							<span className="poty-text">©2017 美团网 京ICP证070791号</span>
						</div>
					</div>



					<div className="pop-bj">
						<div className="pop">
							<div className="pop-left">
								<img src={require("../img/x1.png")}/>
								<p>9.9元看电影<br/>
								快来美团手机客户端</p>
							</div>
							<div className="pop-right">
								<a href="#">点击下载</a>
							</div>
							

							
						</div>
					
						<a href="#" className="bot">
									<i className="iconfont">
									&#xe618;
									</i>
								</a>
					</div>








	            	</div>






	            )


	    }




}


export default Product1;
