import React, { Component } from 'react';

import axios from 'axios';
import ajax from "../../module/Ajax";
import NoOrder from './NoOrder.js';
import SendfoodOrder from './SendfoodOrder.js';

//引入路由
import { Link } from 'react-router';

class OrderAfterLogin extends Component {
    constructor(props){
        super(props)

        this.state={
            msg:''
        }
    
    }

    componentWillMount(){
        var phoneNumber = JSON.parse(localStorage.getItem('userinfo')).phoneNumber
        // 获取订单数据
        // console.log(JSON.parse(localStorage.getItem('userinfo')).phoneNumber)
        var that=this;        
        var  url90='http://60.205.226.107:8030/api/orderList'; 
        ajax.quire("post",url90,"tel="+phoneNumber,function(res){
            // console.log(res.data)
            if(res.data.success){
                that.setState({
                    msg:<SendfoodOrder />
                })
            }else{
                that.setState({
                    msg:<NoOrder />
                })
            }
        })
        
    }

    render() {
        return (
            <div className='order-after-login'>
                <div className='header__'>
                    <span>订单</span><span>早餐</span>
                </div>
                <div className='my-order'>
                    <p><span>我的订单</span><span><Link to='/Allorder'>全部订单></Link></span></p>  
                </div>
                {this.state.msg}
            </div>
        )
    }
 
}

export default OrderAfterLogin;