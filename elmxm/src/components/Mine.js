import React, { Component } from 'react';

import {Link} from 'react-router';
import Logined from './My/Logined';
import Unlogin from './My/Unlogin';

class Mine extends Component {

    componentWillMount(){
        
    }
    render(){
       
        if(!localStorage.getItem('userinfo')||localStorage.getItem('userinfo')==""){
         var com=<Unlogin />
            }else{
                com=<Logined /> 
            }

        return(
        <div className="my">
            <div className="header min">
                <div className="hea">
                   <span>我的</span>
                   <Link to="usercenter"><i className="iconfont">&#xe63b;</i></Link>
                   <i className="iconfont">&#xe6ff;</i>
                </div>
               {com}
            </div>
            <ul className="youhui">
                <li>
                    <i className="iconfont">&#xe60a;</i>
                   <br /> 钱包
                </li>
                <li>
                    <i className="iconfont">&#xe68b;</i>
                    <br /> 优惠
                </li>
                <li>
                    <i className="iconfont">&#xe618;</i>
                    <br />积分
                </li>
            </ul>
            <ul className="ccent1">
                <li><i className="iconfont blue">&#xe607;</i>收货地址</li>
                <li> <Link to="/Collect"><i className="iconfont red">&#xe602;</i>我的收藏 </Link ></li>
            </ul>
            <ul className="ccent1">
                <li><i className="iconfont green">&#xe671;</i>积分商城</li>
                <li><i className="iconfont yellow">&#xe62c;</i>饿了么会员卡</li>
            </ul>
            <ul className="ccent2">
             <Link to="/service">   <li><i className="iconfont blue">&#xe61c;</i>服务中心</li></Link>
                <li><i className="iconfont blue">&#xe613;</i>欢迎评分</li>
                <li><i className="iconfont blue">&#xe614;</i>加盟合作</li>
            </ul>
    
        </div>
        )
    }
}
  
  export default Mine;
  