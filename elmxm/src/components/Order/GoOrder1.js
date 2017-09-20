import React from "react";


//引入路由
import { Link } from 'react-router';

import '../static/css/goOrder1.css';

class GoOrder extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <div className='goOrder'>
                <div className='top'>
                    <Link to='/Product1' className='iconfont'>&#xe651;</Link> <span>订单配送至</span>
                    <Link to=''>＋添加收货地址</Link>
                </div>
                <div className='bgColor'></div>
                <div className='send-time'>
                    <p>尽快送达 [预计　<span>12:15</span>　]</p>
                    <p><span>蜂鸟专送</span></p>
                    <i className='iconfont'>&#xe651;</i>
                </div>
                <div className='pay'>
                    在线支付
                </div>
                <div className='bgColor'></div>
                <div className=''></div>
            </div>
        )
    }
}

export default GoOrder;