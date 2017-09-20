import React, { Component } from 'react';

import {Link} from 'react-router' 

import '../../App.css'
class History extends Component {

         constructor(props){
    
            super(props);

            this.state={
                
                searchInfor:[]
            }
            this.delete=this.delete.bind(this)
            this.pass=this.pass.bind(this)
            
        }

        componentWillMount(){
            
            var infor = localStorage.cart ? JSON.parse(localStorage.cart) : [];
            console.log(infor)
            this.setState({
                searchInfor: infor
                 
            })
                
            
    
        }
        delete(){
            // 清空历史搜索
            this.refs.remove.innerHTML = "";
            localStorage.removeItem('cart');
        }
        pass(infor){
            msg:infor
        }

        render() {
            return (
              <div>
                  <div className="his">
                    <div className="index_his">
                        <p className="index_his_p">历史搜索</p>
                        <a className="index_his_a">
                            <i className="iconfont" onClick={this.delete} >&#xe634;</i>
                        </a>
                    </div>
                    <div className="index_hist">
                        <div className="index_hist_div" ref="remove">
                            {
                                this.state.searchInfor.map((value,key)=> {

                                     
                                    return   <span onClick={this.state.msg} className="index_hist_span" key={key}>
                                                     {value.val}
                                            </span>
                                
                                 })
                            }
                                            
                        </div>
                    </div>
                  </div>
              </div> 
            );
        }
}
  
  export default History;