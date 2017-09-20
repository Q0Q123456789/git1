import React from "react";
import { Link } from 'react-router';
class Unlogin extends React.Component{
    render(){
        return(
            <Link className="cont" to="/login">
                    <img alt="hahaha" src={require("../../static/images/icon.jpg")}/>
                    <div className="cent">
                    <p>立即登录</p>
                    <span>登录后可享受更多特权</span>
                </div>
                <strong className="iconfont">&#xe605;</strong>
            </Link>
        )
    }
}

export default Unlogin;