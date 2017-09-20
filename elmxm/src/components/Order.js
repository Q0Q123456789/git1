import React from "react";

//引入路由
import { Link } from 'react-router';

import OrderBeforeLongin from './Order/OrderBeforeLogin.js';
import OrderAfterLongin from './Order/OrderAfterLogin.js';

import '../static/css/order.css';

class Order extends React.Component{
    constructor(props){
        super(props)

        this.state={
            msg:''
        }
    }

    componentWillMount(){

        // localStorage.userinfo = 'zhangsan';

        if(localStorage.getItem('userinfo')){
            this.setState({
                msg:<OrderAfterLongin />
            })
            // console.log(111)
        }
        else{
            this.setState({
                msg:<OrderBeforeLongin />
            })
            // console.log(222)
        }
    }

    render(){
        return(
            <div className='order'>
                
                {this.state.msg}
                <div className='margin'></div>
                
            </div>
        )
    }
}

export default Order;