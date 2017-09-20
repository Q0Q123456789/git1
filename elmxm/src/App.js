import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style.css';
import {Link} from 'react-router' 
class App extends Component {
  render() {
    return (
      <div className="App">
         {this.props.children}

          <ul className="ul_list">
            <li><Link to="/home" activeClassName="active">
              <i className="iconfont">&#xe639;</i><br /><span>外卖</span>       
            </Link></li>
            <li><Link to="/discover" activeClassName="active">
              <i className="iconfont">&#xe678;</i><br /><span>发现</span>
            </Link></li>
            <li><Link to="/order" activeClassName="active">
              <i className="iconfont">&#xe682;</i><br /><span>订单</span>
            </Link></li>
            <li><Link to="/mine" activeClassName="active">
              <i className="iconfont">&#xe632;</i><br /><span>我的</span>
            </Link></li>
          </ul>
      </div>
    );
  }
}

export default App;
