import React, { Component } from 'react';


class NoOrder extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    
    }

    componentWillMount(){
        
    }

    render() {
        return (
            <div>
                <div className='no-order'>
                    <img src={require('../../static/images/11.png')}/>
                    <p>近三个月无外卖订单记录</p>
                    <p>查看三个月前的代买订单</p>
                </div>
                <div className='bgColor'></div>
                <div className='near-buy'>
                    <p><span className='active'>附近买过</span><span>附近收藏></span></p>
                    <img src={require('../../static/images/11.png')}/>
                    <p>附近暂无买过的商家</p>
                    <p>配送范围内买过的商家会出现在这里</p>
                </div>
                <div className='bgColor'></div>
            </div>
            
        )
    }
 
}

export default NoOrder;