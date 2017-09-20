import React, { Component } from 'react';
import {Link} from 'react-router'
import axios from 'axios'

import InfiniteScroll from 'react-infinite-scroller';

class Main extends Component {

         constructor(props){
    
            super(props);

            this.state={
                list:[],
                page:1
            }

            this.requestData = this.requestData.bind(this)
            this.loadFunc=this.loadFunc.bind(this)
        }

        componentWillMount(){
            // this.requestData()
        }

        render() {
            return (
              <div>
                  <main className="main">
                        <h2 className="index-title">推荐商家</h2>
                        <InfiniteScroll pageStart={0} loadMore={this.loadFunc} hasMore={true || false} loader={<div className="loader">Loading ...</div>}>
                            {
                        
                                this.state.list.map(function(value,key){     
                                                            
                                    return<Link to={"/Product1/"+value._id}>
                                        <ul className="index_list" key={key}>
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
                                    </Link>
                                 })

                            }
                        </InfiniteScroll>

                  </main>
              </div> 
            );
        }


        requestData(){

            var that = this
            var url='http://60.205.226.107:8030/api/merchant?page='+that.state.page;

            axios.get(url)
            .then(function (response) { 
            //   console.log(response.data.result);
            var pa = that.state.page;

            var listData = that.state.list.concat(response.data.result)
                    that.setState({
                            list:listData,

                            page:++pa
                    })
    
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        loadFunc(){
            // console.log(loadFunc)
            this.requestData()
        }
}
  
  export default Main;