import React, { Component } from 'react';

import {Link} from 'react-router';
import storage from '../module/Storage.js'
class Collect extends Component {

         constructor(props){
    
            super(props);
            this.state={
                list:[]
                
            }

            
            this.deleteid=this.deleteid.bind(this) 
        }
        componentWillMount(){

            var infor = storage.get("collect")

            if(storage.get("collect") != " { } "){
                this.setState({
                    list: infor
                    
                })
            }

            
        }
        deleteid(){

                                        
            var collectStorageData = storage.get("collect")

                for(var i=0;i<collectStorageData.length;i++){
                    // console.log(collectStorageData[i].aid)
                    // console.log(this.state.list[i].aid)
                
                        if(this.state.list[i].aid==collectStorageData[i].aid){
                            
                            collectStorageData.splice(i,1)
                            this.refs.remove.innerHTML = "";
                        }
    
                }

                //重新写入数据
                storage.set("collect",collectStorageData)

        }

        render() {
            return (
              <div>
                  <div className="header_collect">
                      <Link to="/Mine">
                            <i className="iconfont">&#xe603;</i>
                      </Link>
                      <span>收藏</span>
                  </div>
                  <div >
                  {
                    this.state.list.map((value,key)=>{
                            return  <ul className="index_list" key={key} ref="remove">
                                        <div className="logo">
                                            <div className="logg_div">
                                                <img src={"http://60.205.226.107:8030/"+value.img} />
                                            </div>
                                        </div>
                                        <div className="index-main"> 
                                            <section className="index_section_1">
                                                <h3 className="index_h3">
                                                    <span>{value.title}</span>
                                                    
                                                </h3> 
                                                <span className="zslssc"><i className="iconfont" onClick={this.deleteid.bind(this)} >&#xe634;</i></span>
                                            </section>
                                            <section className="index_section_2" >
                                                <div className="div_icon">
                                                    <i className="iconfont">&#xe646;</i>
                                                </div>
                                                <span className="span_">5</span>
                                                <span>{value.status}</span>
                                            </section>
                                            <section className="index_section_3" >
                                                <div className="index_money">
                                                    <span>¥{value.old_price}起送 </span>
                                                    <span> 配送费¥{value.price}</span>
                                                    {/* <span></span> */}
                                                </div>
                                                <div className="index_mi">
                                                    <span>1.78km </span>
                                                    <span>  58分钟</span>
                                                </div>
                                            </section>
                                            <div className="index-div"></div>
                                            <section className="index_section_4">
                                                <div className="div_1">
                                                    <span> 新用户下单立减27.0元</span>
                                                </div>
                                                <div className="div_2">
                                                    <span>满25减11，满35减13，满50减20</span>                                   
                                                </div>
                                            </section>
                                        </div>
                                    </ul>
                    })

                  }
                  </div>
              </div> 
            )
        }
}
  
  export default Collect;