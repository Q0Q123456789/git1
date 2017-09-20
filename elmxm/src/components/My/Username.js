import React from "react";
import {Link} from "react-router";
import ajax from "../../module/Ajax.js";
import { browserHistory } from 'react-router';
class Username extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bgClass:"",
            isSure:false,
            username:""
        }
        this.Sure=this.Sure.bind(this)
        this.change=this.change.bind(this)
    }
    Sure(){
        var het=JSON.parse(localStorage.getItem('userinfo'))
       let username=this.state.username
        if(this.state.isSure){
            ajax.quire("post","http://60.205.226.107:8030/admin/user/setlogin","_id="+JSON.parse(localStorage.getItem('userinfo'))._id+"&username="+ this.state.username ,function(res){
                let  obj=res.data
                console.log(obj)
                if(obj.success=="1"){
                    het.username=username
                  localStorage.setItem('userinfo',JSON.stringify(het))
                  console.log(JSON.parse(localStorage.getItem('userinfo')))
                          browserHistory.push('/account');
              }else if(obj.success=="0"){
                alert("用户名已存在，请重新输入！")
              }
              else{
                  alert("服务器连接失败，请检查！")
              }
            })
        //  JSON.parse(localStorage.getItem('userinfo')).username=this.state.username 

        //     localStorage.setItem('userinfo',)
        //     browserHistory.push('/account');
        }
    }
    change(e){
        if(/^[\u4e00-\u9fa5|\w]{5,24}$/.test(e.target.value)){
            this.setState({
                isSure:true,
                bgClass:" account-bottom-active",
                username:e.target.value
            })
        }else{
            this.setState({
                isSure:false,
                bgClass:""
            }) 
        }
    }
    render(){
        return(
        <div id="username-main">
            <div className="login-head">
                    <Link className="iconfont" to="/account">&#xe601;</Link>
                    <span>用户名</span> 
            </div>
           <input type="text" onChange={this.change} defaultValue="" placeholder="用户名"/>
            <p>用户名只能修改一次(5-24个字)</p>
            <div className={"account-bottom"+this.state.bgClass}  onClick={this.Sure}>确认修改</div>
    
        </div>
        )
    }
}

export default Username;