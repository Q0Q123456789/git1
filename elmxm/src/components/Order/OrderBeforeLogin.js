import React, { Component } from 'react';

import { Link } from 'react-router';


class OrderBeforeLogin extends Component {
  constructor(props){
    super(props)

    this.state={

    }
    
  }
  render() {
    return (
        <div className='order-before-login'>
            <div className='header'>
                <span>订单</span>
            </div>
            <div className='order-content'>
                <img src={require("../../static/images/10.gif")}/>
                <p>登录后查看外卖订单</p>
                <Link to='login'>立即登录</Link>
            </div>
        </div>
    )
  }
 
}

export default OrderBeforeLogin;