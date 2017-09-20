import React, { Component } from 'react';

import {Link,browserHistory} from 'react-router' 
import $ from "jquery";
import axios from 'axios'

import Commodity from "./Commodity"

import '../../App.css'
class Header extends Component {

         constructor(props){
    
            super(props);

            this.state={
                val:"",
                list:[]
            }

    
            this.run=this.run.bind(this)
            this.requestData=this.requestData.bind(this)
            // this.goSearch=this.goSearch.bind(this)
        }
        run(){
            
            var val=this.refs.sCon.value
            this.requestData(val)
           if(val.length>0){

                var goodsArr = localStorage.cart?JSON.parse(localStorage.cart):[]
                // localStorage.setItem('cart',val)
                // console.log(arr)
                var isExist = false;
           
                var obj={val} 
                
                if(goodsArr.length<0){
                    for(var i=0;i<goodsArr.length;i++){
                        
                        if(goodsArr[i]==obj.val){
                            isExist = true//有相同的
                            // goodsArr.push(obj)
                        }
        
                    }

                }else{
                    goodsArr.push(obj)
                }
                
                localStorage.cart=JSON.stringify(goodsArr)
           }
            
           
            // this.goSearchDetail(val);            
            // console.log(localStorage.getItem('cart'))


        }
        componentWillMount(){  
        }
        componentDidMount(){

            $(".search_2").click(function(){

                if($("input").val().length>0){
                    // console.log("2")
                    $(".his").css("display","none")
                    $(".hot").css("display","none")
                    $(".com_div").css("display","block")
                    $(".index_list").css("display","flex")
                }

            })

            $("input").bind("input propertychange change",function(event){
                if($("input").val().length<1){
                    $(".his").css("display"," block")
                    $(".hot").css("display"," block")
                    $(".index_list").css("display"," none")
                    // $(".index_list").html(" ")
                    $(".com_div").css("display","none")
                }
             });
        }

        render() {
            console.log(this.state.list)
            return (
              <div>
                 
                  <header className="header_">
                        <Link to="/home" className="return">
                          <i className="iconfont">&#xe604;</i>
                        </Link> 
                        <div className="search_">
                            <form action="" method="get">
                                <img src={require("../../static/images/1.png")} className="img" />
                                <input type="text" className="search_1" placeholder="索搜商家、商品名称" ref="sCon"   defaultValue="" />
                            </form>
                        </div>
                        <button type="submit" className="search_2" onClick={this.run} >搜索</button>


                  </header>

                        <Commodity />
                            {
                                this.state.list.map(function(value,key){
                                 return <ul className="index_list" key={key}>
                                            <div className="logo">
                                                <div className="logg_div">
                                                    <img src={"http://60.205.226.107:8030/"+value.img} />
                                                </div>
                                            </div>
                                            <div className="index-main">
                                                <section className="index_section_1">
                                                    <h3 className="index_h3">
                                                        <span>{value.title}</span>
                                                    </h3> 
                                                </section>
                                                <section className="index_section_2" >
                                                    <div className="div_icon">
                                                        <i className="iconfont">&#xe646;</i>
                                                    </div>
                                                    <span className="span_">5</span>
                                                    <span>{value.status}</span>
                                                </section>
                                                <section className="index_section_3" >
                                                    <div className="index_money">
                                                        <span>¥{value.old_price}起送 </span>
                                                        <span> 配送费¥{value.price}</span>
                                                        {/* <span></span> */}
                                                    </div>
                                                    <div className="index_mi">
                                                        <span>1.78km </span>
                                                        <span>  58分钟</span>
                                                    </div>
                                                </section>
                                                <div className="index-div"></div>
                                                <section className="index_section_4">
                                                    <div className="div_1">
                                                        <span> 新用户下单立减27.0元</span>
                                                    </div>
                                                    <div className="div_2">
                                                        <span>满25减11，满35减13，满50减20</span>                                   
                                                    </div>
                                                </section>
                                            </div>
                                    </ul>
                                 })
                            }
              </div> 
              
            );

        }


        requestData(val){
            // 获取数据
            var url = "http://60.205.226.107:8030/api/search?val=" + val;
            axios.get(url) 
            .then(response => {
              console.log(response.data.result);
                this.setState({
                    list:response.data.result,
                })
                
              
            })
            .catch(function (error) {
              console.log(error);
            });
    
        }
    

}
  
  export default Header;