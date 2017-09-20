import React from "react";
import { Link } from 'react-router';
class Logined extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        
        // this.change2=this.change2.bind(this)
        // this.Submit=this.Submit.bind(this)
    }
    render(){
        let phone=JSON.parse(localStorage.getItem('userinfo')).phoneNumber.toString()
        phone=phone.replace(phone.substring(4,8), "****");
        return(
            <Link className="cont" to="/account">
                    <img alt="hahaha" src={require("../../static/images/icon.jpg")}/>
                    <div className="cent">
                    <p>{JSON.parse(localStorage.getItem('userinfo')).username}</p>
                    <span>{phone}</span>
                </div>
                <strong className="iconfont">&#xe605;</strong>
            </Link>
        )
    }
}

export default Logined;