import React, { Component } from 'react';

import axios from 'axios';
import ajax from "../../module/Ajax";
class SendfoodOrder extends Component {
    constructor(props){
        super(props)

        this.state={
           list:[]
        }
    
    }

    componentWillMount(){
        var phoneNumber = JSON.parse(localStorage.getItem('userinfo')).phoneNumber
        // 获取订单数据
        console.log(JSON.parse(localStorage.getItem('userinfo')).phoneNumber)
        var that=this;        
        var  url98='http://60.205.226.107:8030/api/orderList'; 
        ajax.quire("post",url98,"tel="+phoneNumber,function(res){
          console.log(res.data.result)
          that.setState({
            list:res.data.result
          }) 
        })
    }

    render() {
        console.log(this.state.list);
        return (
            <div>
                {
                    this.state.list.map(function(value,key){ 
            
                        return <div className='sentfood-order' key={key}>
                            <img src={value.img}/>
                            <div>
                                <h2><span>{value.product_title}　></span><span>{value.status}</span></h2>
                                <p>{value.add_time}</p>
                                <p>{value.product_title}等{value.count}件商品</p>
                                <p>￥<span>{value.all_price}</span></p>
                            </div>
                        </div>
                    })

                }
            </div>
        )
    }
 
}

export default SendfoodOrder;