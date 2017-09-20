import React from "react";

//引入路由
import { Link } from 'react-router';

import '../static/css/allorder.css';

class Allorder extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return(
            <div className='all-order'>
                <div className='header'>
                    <Link to='/order' className='iconfont'>&#xe601;</Link> <span className="all">全部订单</span>
                </div>

                <div className='order-list'>
                    <Link to='/Allorder/Sendfood' activeClassName='active'>外卖</Link><Link to='/Allorder/Breakfirst' activeClassName='active'>早餐</Link>
                    {/*动态加载的组件显示的地方*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Allorder;