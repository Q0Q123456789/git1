import React from "react";
import {Link} from "react-router";
import { browserHistory } from 'react-router';
class UserCenter extends React.Component{
    out(){
        localStorage.removeItem('userinfo');
        browserHistory.push('/Mine');
    }
    render(){
        if(!localStorage.getItem('userinfo')||localStorage.getItem('userinfo')==""){
            var om="/login"
            var ocm=""
               }else{
                 ocm=<div className="set-bottom" onClick={this.out}>退出登录</div>
                   om="/account"
               }

        return(
        <div id="set-main">
            <div className="login-head">
                    <Link className="iconfont" to="/Mine">&#xe601;</Link>
                    <span>设置</span> 
            </div>
            <ul className="set-accounts">
            <Link to={om}>    
                <li>
                    账户与安全<span>开启小额免密支付</span>
                </li>
            </Link>
                <li>
                    通用
                </li>
            </ul>
            <div className="elm-about">关于饿了么</div>
            {ocm}
    
        </div>
        )
    }
}

export default UserCenter;