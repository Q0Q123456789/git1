import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./font/iconfont.css"
import "./font/iconfont.js"
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link,IndexRedirect,browserHistory} from 'react-router'
 
import $ from "jquery";

import Home from "./components/Home.js"
import Discover from "./components/Discover.js"
import Mine from "./components/Mine.js"
import Order from "./components/Order.js"
import Search from "./components/Search.js"



import initReactFastclick from 'react-fastclick';
import Login from './components/Login/Login';
import SetLogin from './components/Login/SetLogin';
import UserCenter from './components/My/UserCenter';
import Username from './components/My/Username'; 
import Service from './components/My/Service/Service'; 
import Loginpassword from './components/Login/Loginpassword';
import Account from './components/My/Account'; 
import Problem from './components/My/Service/Problem';

// 全部订单
import Allorder from './components/Allorder.js';
import Sendfood from './components/Order/Sendfood.js';
import Breakfirst from './components/Order/Breakfirst.js';

// 去下单
import GoOrder from './components/GoOrder.js';
//详情
import Product1 from './components/Product1.js';
//收藏
import Collect from './components/Collect.js';

ReactDOM.render(
            <Router  history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/Home"  /> 
                    <Route path="Home" component={Home} />
                        <Route path="search" component={Search} />   
                    <Route path="Discover" component={Discover} />
                    <Route path="Mine" component={Mine} />
                    <Route path="Product1/:aid" component={Product1} />

                    <Route path="Collect" component={Collect} />
                    
                    <Route path="/Allorder" component={Allorder}>
                        <IndexRedirect to="/Allorder/Sendfood" />
                        <Route path="Sendfood" component={Sendfood} />
                        <Route path="Breakfirst" component={Breakfirst} />
                    </Route>
                    <Route path="/GoOrder/:title/:price/:img" component={GoOrder} />                    

                    <Route path="login" component={Login} />
                    <Route path="loginpassword" component={Loginpassword} />
                    <Route path="setlogin" component={SetLogin}/>
                    <Route path="usercenter" component={UserCenter}/>
                    <Route path="username" component={Username}/>
                    <Route path="service" component={Service}/>
                    <Route path="account" component={Account} />
                    <Route path="Order" component={Order} />
                    <Route path="service" component={Service}/>
                    <Route path="problem/:aid" component={Problem}/>
                    

                </Route>    
            </Router>

    , document.getElementById('root'));

    
registerServiceWorker();
