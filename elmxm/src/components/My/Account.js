import React from "react";
import {Link} from "react-router";
import "../../App.css";
class Account extends React.Component{
    render(){
            let phone=JSON.parse(localStorage.getItem('userinfo')).phoneNumber.toString()
            phone=phone.replace(phone.substring(4,8), "****");
        return(
        <div id="account-main">
            <div className="login-head">
                    <Link className="iconfont" to="/Mine">&#xe601;</Link>
                    <span>账户与安全</span> 
            </div>
            <ul>
                <li>
                    头像  <img className="head-photo" alt="hahaha" src={require("../../static/images/icon.jpg")}/>
                </li>
                <Link to="/username">
                    <li>
                        用户名<strong>{JSON.parse(localStorage.getItem('userinfo')).username}</strong>
                    </li>
                </Link>
            </ul>
            <dl className="account-set">
                <dt>
                    账号绑定
                </dt>
                <dd>
                    <i className="iconfont blue">&#xe620;</i>手机<strong>{phone}</strong>
                </dd>
                <dd>
                    <i className="iconfont green">&#xe659;</i>微信<span>未绑定</span>
                </dd>
                <dd>
                    <i className="iconfont">&#xe6fe;</i>QQ<span>未绑定</span>
                </dd>
                <dd>
                    <i className="iconfont red">&#xe627;</i>微博<span>未绑定</span>
                </dd>
                <dd>
                    <i className="iconfont yellow">&#xe643;</i>淘宝<span>未绑定</span>
                </dd>
            </dl>
            <dl className="security-set">
                <dt>
                    安全设置
                </dt>
                <dd>
                    登录密码<span>修改</span>
                </dd>
                <dd>
                    支付密码<span>未设置</span>
                </dd>
                <dd>
                    小额免密支付
                </dd>
            </dl>
    
        </div>
        )
    }
}

export default Account;