import React from "react";
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import ajax from "../../module/Ajax.js";
import axios from "axios";
class SetLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            passWord:"",
            random:"获取验证码"
        }
        
        this.change2=this.change2.bind(this)
        this.Submit=this.Submit.bind(this)
    }
    change2(e){
        this.setState({
            passWord:e.target.value
        })
    }
    Submit(){
        if(/^\w{6,20}$/.test(this.state.passWord) ){
            // console.log(JSON.parse(localStorage.getItem('userinfo')))
          var hei=JSON.parse(localStorage.getItem('userinfo'))
        var passWord=this.state.passWord;
         let aid=hei._id;
         let phoneNumber=hei.phoneNumber;
        //  console.log(aid)
        ajax.quire('post','http://60.205.226.107:8030/admin/user/setlogin',"_id="+aid+"&password="+this.state.passWord+"&phoneNumber="+phoneNumber,function(res){
            let  obj=res.data
            console.log(obj)
            if(obj.success=="1"){
                hei.password=passWord
              localStorage.setItem('userinfo',JSON.stringify(hei))
              console.log(JSON.parse(localStorage.getItem('userinfo')))
                      browserHistory.push('/Mine');
          }else{
              alert("服务器连接失败，请检查！")
          }
        })
        }else{
            alert("密码不符合要求，请重新输入")
        }
       
     }
    render(){
        return(
            <div id="login-main">
            <div className="login-head">
                    <Link className="iconfont" to="/Mine">&#xe601;</Link>
                    <span>设置登录密码</span>
                  
            </div>
            <div className="login-bottom1">
            <p>设置登录密码后,您可以使用手机号+密码登录，请牢记</p>
            </div>
            <input id="newpass" type="password" onChange={this.change2} defaultValue="" placeholder="密码" className="placeholder"/>
          
            <div className="login-bottom1">
                <p>密码长度6-20字符</p>
                <div className="user-login" onClick={this.Submit}>确定</div>
            </div>
        
        </div>
        )
    }
}

export default SetLogin;