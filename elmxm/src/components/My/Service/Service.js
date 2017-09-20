import React from "react";
import {Link} from "react-router";
import { browserHistory } from 'react-router';
import ajax from "../../../module/Ajax.js";
class Service extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        
        // this.change2=this.change2.bind(this)
        this.requestData=this.requestData.bind(this)
    }
    componentWillMount(){       
        
    //ListStore.list 就是store里面的数据
 
        if(sessionStorage.getItem('article')){   /*liststore有数据*/


            this.setState({
                    list:JSON.parse(sessionStorage.getItem('article'))
            })
        }else{

            this.requestData();      
        }
    }
    //请求数据的方法
    requestData(){
        var that=this
        ajax.quire('get','http://60.205.226.107:8030/api/article',"",function(res){
            let  obj=res.data
            sessionStorage.setItem('article',JSON.stringify(obj.result))   
            that.setState({
                list:obj.result 
            })
             })
        }
    render(){
        console.log(this.state.list)
        
        return(
        <div id="service-main">
            <div className="login-head">
                    <Link className="iconfont" to="/Mine">&#xe62d;</Link>
                    <span>服务中心</span> 
            </div>
            <ul className="service-call">
                <li>
                    <i className="iconfont">&#xe628;</i>
                    在线客服
                </li>
                <li>
                    <i className="iconfont">&#xe673;</i>
                    客服热线
                </li>
            </ul>
            <dl className="hot-promble">
                <dt>热门问题 </dt>
                {
                     this.state.list.map(function(value,key){
                                return <Link key={key} to={"/problem/"+value._id}><dd >{value.title}<i className="iconfont">&#xe605;</i></dd></Link>
                        })
                    }
            </dl>
        </div>
        )
    }
}

export default Service;