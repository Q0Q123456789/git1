import React from "react";
import {Link} from "react-router";
import { browserHistory } from 'react-router';
import ajax from "../../../module/Ajax.js";
class Problem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            article:{}
        }
        
        this.getContent=this.getContent.bind(this)
        this.requestData=this.requestData.bind(this)
    }


    componentWillMount(){
        var aid=this.props.params.aid;
    
        if(sessionStorage.getItem('article'+aid)){   /*liststore有数据*/
     
                        this.setState({
                            article:JSON.parse(sessionStorage.getItem('article'+aid))
                        })
                      
                    }else{
            
                        this.requestData(aid);   
                    }
      
    }
    getContent(){
        
                return {__html:this.state.article.content};
        
    }
    //请求数据的方法
    requestData(aid){
        var that=this
        ajax.quire('get','http://60.205.226.107:8030/api/article/'+aid,"",function(res){
            let  obj=res.data
            sessionStorage.setItem('article'+aid,JSON.stringify(obj.result[0]))   
            that.setState({
                article:obj.result[0]
            })
             })
        }
    render(){
 
        return(
        <div id="service-main">
             <div className="login-head">
                    <Link className="iconfont" to="/service">&#xe62d;</Link>
                    <span>{this.state.article.title}</span> 
            </div>
            <div className="markdown">
                    {/*<div dangerouslySetInnerHTML={this.getContent()} />;*/}



                    <div dangerouslySetInnerHTML={{__html:this.state.article.content}} />;


              </div>
        </div>
        )
    }
}

export default Problem;