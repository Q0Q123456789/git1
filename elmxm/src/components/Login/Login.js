import React from "react";
import { Link } from 'react-router';

import ajax from "../../module/Ajax";
import { browserHistory } from 'react-router';
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            phoneNumber:"",
            passWord:"",
            random:"获取验证码"
        }
        this.Prove=this.Prove.bind(this)
        this.change1=this.change1.bind(this)
        this.change2=this.change2.bind(this)
        this.Submit=this.Submit.bind(this)
    }
    componentDidMount(){
        
    }
    change1(e){
        this.setState({
        phoneNumber:e.target.value
        })
    }
    change2(e){
        this.setState({
            passWord:e.target.value
        })
    }
     Prove(e){
        if(this.state.phoneNumber.toString().length==11){
        let random=parseInt(Math.random()*8890+Math.random()*1000+Math.random()*100+Math.random()*10+680) 
       this.setState({
           random:random
       })
    }else{
        alert("手机号有误,请重新输入")
    }
     }
     Submit(){
        if(this.state.phoneNumber.toString().length==11){
            if(this.state.passWord==this.state.random){
                ajax.quire('post','http://60.205.226.107:8030/admin/user/login',"phoneNumber="+this.state.phoneNumber,function(res){
                    let  obj=res.data
                    if(obj.success=="1"){
                      localStorage.setItem('userinfo',JSON.stringify(obj.result[0]))
                              browserHistory.push('/Mine');
                  }else{
                      localStorage.setItem('userinfo',JSON.stringify(obj.result[0]))
                      browserHistory.push('/setlogin');
                      console.log(obj.result)
                  }
                })
            }else{
                alert("验证码有误,请重新输入")
                this.setState({
                    random:"获取验证码"
                })
            }
    }else{
        alert("手机号有误,请重新输入")
    }
     }
    render(){
        return(
        <div id="login-main">
            <div className="login-head">
                    <Link className="iconfont" to="/Mine">&#xe601;</Link>
                    <span>登录</span>
                   <Link id="passlogin" to="loginpassword"> 密码登录</Link>
            </div>
            <ul className="login">
                <li>
                    <input type="number" onChange={this.change1} defaultValue="" placeholder="手机号"/><span onClick={this.Prove} className="proving">{this.state.random}</span>
                </li>
                <li>
                    <input type="number" onChange={this.change2} defaultValue="" placeholder="验证码"/>
                </li>
            </ul>
            <div className="login-bottom">
                <p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意《用户服务协议》</p>
                <div className="user-login" onClick={this.Submit}>登录</div>
               
            </div>
            
            <img alt="hahaha" id="copy" src={require("../../static/images/xxx.jpg")} />
        
    
        </div>
        )
    }
}

export default Login;