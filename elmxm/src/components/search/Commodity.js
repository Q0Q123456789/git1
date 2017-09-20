import React, { Component } from 'react';

import {Link} from 'react-router' 
import $ from "jquery";


import '../../App.css'
class Commodity extends Component {

         constructor(props){
    
            super(props);

            this.state = {
                val:"",
                list:[]
            }
            
            
           
        }

        componentDidMount(){
            $(".com_div a").click(function(){
                
                if($(this).hasClass("active")){
                    $(this).removeClass("active")
                }else{
                    $(this).addClass('active').siblings().removeClass('active');
                }
            })
        }

        render() {
            return (
              <div>
                  <div className="commodity">
                        <div className="com_div">
                                <a className="filter-nav act" >
                                    <span>分类</span>
                                </a>
                                <a className="filter-nav act" >
                                    <span>排序</span>
                                </a>
                                <a className="filter-nav act" >
                                    <span>筛选</span>
                                </a>
                        </div>
                  </div>
              </div> 
            );
        }
}
  
export default Commodity;