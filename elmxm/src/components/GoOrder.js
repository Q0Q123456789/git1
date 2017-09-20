import React from "react";

import axios from 'axios';

import qs from 'qs';
//引入路由
import { Link } from 'react-router';

import '../static/css/goOrder.css';

class GoOrder extends React.Component{
    constructor(props){
        super(props)

        this.state={
            getdata:{},
            identifying_code:'获取验证码'
        }
        this.mius=this.mius.bind(this);
        this.add=this.add.bind(this);
        this.getchecknum=this.getchecknum.bind(this);
        this.postdata=this.postdata.bind(this);
    }
    componentWillMount(){
    
        console.log(this.props.params);  /*获取动态路由传值*/

        var title=this.props.params.title;
        var price=this.props.params.price;
        var img=this.props.params.img;
        console.log(img);
        this.setState({
            getdata:{
                title:title,
                price:price,
                allprice:price,
                img:img
            },
            str:'' 
        })
        

        var that=this;        
        var  url='http://10.36.142.136:3000/api/goods'; 
        axios.get(url)
        .then(function (response) {
            console.log(response.data.result);
          
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div className='goOrder'>
                <div className='header'>
                    <Link to='/home' className='iconfont'>&#xe601;</Link> <span>提交订单</span>
                </div>
                <div className='list-order'>
                    <p><span>{this.state.getdata.title}</span></p>
                    <p>单价：<span>{this.state.getdata.price}</span></p>
                    <p>数量:<b><span onClick={this.mius}>-</span><input ref='changeNum' type='text' defaultValue='1'/><span onClick={this.add}>+</span></b></p>
                    <p>总价：<span ref='all_price'>{this.state.getdata.allprice}</span></p>
                </div>
                <div className='list-order buy'>
                    <p><span>免登录直接购买</span></p>
                    <p>
                        <input type='text' placeholder='请输入手机号' ref='tel'/>
                        <span onClick={this.getchecknum} ref='identifying_code'>{this.state.identifying_code}</span>
                    </p>
                    <p><input type='text' placeholder='请输入手机短信中的验证码' ref='identifying_code_test'/></p>
                    
                </div>
                <div className='post-order'>
                    <Link to='/Order' onClick={this.postdata}>提交订单</Link>
                    <p>已有账号可以去<Link to='login'>登录</Link></p>
                    <p><span>登录</span><span>注册</span>城市：<span>深圳</span></p>
                </div>
            </div>
        )
    }
    mius(){
        if(this.refs.changeNum.value>1){
            this.refs.changeNum.value--;
        }
        var title=this.props.params.title;
        var price=this.props.params.price;
        var allprice = this.refs.changeNum.value*parseInt(price);
        //console.log(allprice);
        this.setState({
            getdata:{
                title:title,
                price:price,
                allprice:allprice
            }
        })
        
    }
    add(){
        this.refs.changeNum.value++;
        var title=this.props.params.title;
        var price= this.props.params.price ;
        var allprice =this.refs.changeNum.value*parseInt(price);
        //console.log(allprice);
        this.setState({
            getdata:{
                title:title,
                price:price,
                allprice:allprice
            }
        })
    }
    getchecknum(){
        var str='';
        for(var i=0; i<4; i++){
           var str = str.concat(parseInt(Math.random()*10));
        }
        this.setState({
            str:str
        })
        console.log(str);
        this.setState({identifying_code:60});
        var that = this;
        console.log(that.state.identifying_code);
        var timer = setInterval(function(){
            if(that.state.identifying_code>0){
                that.state.identifying_code--;
                console.log(that.state.identifying_code);
                that.setState({identifying_code:that.state.identifying_code});
            }else{
                that.setState({identifying_code:'获取验证码'});
                clearInterval(timer);
            }
            
        },1000)
        
    }
    postdata(){
        var reg = /^\d{11}$/;
        if(!reg.test(this.refs.tel.value)){
            alert('请输入正确的手机号')
            return;
        }
        if(this.refs.identifying_code_test.value != this.state.str ){
            alert('验证码不正确')
            return;
        }
        //提交订单数据
        var d = new Date();
        var t = d.getTime()+'a';
          
          
        var  url='http://10.36.142.136:3000/api/orderList'; 
        axios.post(url,qs.stringify({
            order_id:t,
            product_title:this.props.params.title,
            price:this.props.params.price,
            count:this.refs.changeNum.value,
            all_price:this.refs.all_price.innerHTML,
            add_time:d.toLocaleString(),
            status:'已下单',
            username:localStorage.getItem('userinfo'),
            tel:this.refs.tel.value,
            address:'11',
            img:'http://10.36.142.136:3000/'+this.props.params.img
        }))
        .then(function (response) {
            console.log(response.data.result);

          
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default GoOrder;