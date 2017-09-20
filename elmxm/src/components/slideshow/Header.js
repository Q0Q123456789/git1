import React, { Component } from 'react';

import {Link} from 'react-router' 
class Header extends Component {

         constructor(props){
    
            super(props);
        }

        render() {
            return (
              <div>
                 {this.props.children}
                  <header className="header">
                      <div className="search">
                        <Link to="/search" className="content">
                          <i className="iconfont">&#xe651;</i>
                          <span className="">搜索商家、商品名称</span>
                        </Link>
                      </div>
                  </header>
              </div> 
            );
        }
}
  
  export default Header;