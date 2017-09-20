import React, { Component } from 'react';

import Swiper from "swiper"
import "../../css/swiper.min.css"
import {Link} from 'react-router' 
class Swipe extends Component {

         constructor(props){
    
            super(props);
        }

        componentDidMount(){
            var mySwiper = new Swiper('.swiper-container',{
                pagination : '.swiper-pagination',                                                                                              
                // pagination : '#swiper-pagination1',
                autoplay: 5000,
            })
        }
        render() {
            return ( 
              <div>
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                            </div>
                            <div className="swiper-slide">
                                 <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                                <li className="list_li">
                                    <Link>
                                        <div className="container">
                                            <img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                                        </div>  
                                        <span>美食</span>    
                                     </Link>
                                </li>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="banner_img">
                        <img src={require("../../img/01.jpg")} />
                    </div>
              </div> 
            );
        }
}
  
  export default Swipe;