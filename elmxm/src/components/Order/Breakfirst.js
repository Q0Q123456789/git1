import React from "react";

//引入路由
import { Link } from 'react-router';

// import '../static/css/allorder.css';

class Breakfirst extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <div className='breakfirst'>
            
                <div className='sentfood-order'>
                    <img src={require('../../static/images/06.png')}/>
                    <div>
                        <h2><span>舌尖味道　></span><span>订单已完成</span></h2>
                        <p>2017-08-08 18:18</p>
                        <p>土豆丝等7件商品</p>
                        <p>￥<span>42.00</span></p>
                    </div>
                </div>
                <p className='show-order'>仅显示一年内订单</p>

            </div>
        )
    }
}

export default Breakfirst;