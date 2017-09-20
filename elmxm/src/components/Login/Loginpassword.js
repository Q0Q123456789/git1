import React from "react";
import { Link } from 'react-router';

import ajax from "../../module/Ajax.js";
import { browserHistory } from 'react-router';
class Loginpassword extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginNumber:"",
            passWord:"",
        }
        this.change1=this.change1.bind(this)
        this.change2=this.change2.bind(this)
        this.Submit=this.Submit.bind(this)
    }
    componentDidMount(){
        
    }
    change1(e){
        this.setState({
            loginNumber:e.target.value
        })
    }
    change2(e){
        this.setState({
            passWord:e.target.value
        })
    }
     Submit(){
        ajax.quire('post','http://60.205.226.107:8030/admin/user/loginpass',"loginNumber="+this.state.loginNumber+"&password="+this.state.passWord,function(res){
            let  obj=res.data
            if(obj.success=="1"){
              localStorage.setItem('userinfo',JSON.stringify(obj.result[0]))
                      browserHistory.push('/Mine');
          }else{
            alert("登录账号或密码错误")  
            console.log(obj.result)
          }
        })
    }
    render(){
        return(
        <div>
            <div className="login-head">
                <Link className="iconfont" to="/Mine">&#xe601;</Link>
                <span>密码登录</span> 
            </div>
            <ul className="login">
                <li>
                    <input type="text" onChange={this.change1} defaultValue="" placeholder="手机/邮箱/用户名"/>
                </li>
                <li>
                    <input type="password" onChange={this.change2} defaultValue="" placeholder="密码"/>
                </li>
            </ul>
            <div className="login-bottom">
                
                <div className="user-login" onClick={this.Submit}>登录</div>
               
            </div>
        
            
    
        
    
        </div>
        )
    }
}

export default Loginpassword;