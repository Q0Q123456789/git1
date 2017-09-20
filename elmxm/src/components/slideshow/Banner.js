import React, { Component } from 'react';

class Banner extends Component {

         constructor(props){
    
            super(props);
        }

        render() {
            return (
              <div>
                  <div className="div_list1">
                        <a>
                            <div className="content-wrapper">
                                <h3 className="top">满20减10</h3>
                                <p className="bottom">广深大聚惠</p>
                            </div>
                            <img src={require("../../img/02.jpg")} />
                        </a>
                        <a>
                            <div className="content-wrapper">
                                <h3 className="top">霸王餐</h3>
                                <p className="bottom">领20元红包</p>
                            </div>
                            <img src={require("../../img/02.jpg")} />
                        </a>
                        <a>
                            <div className="content-wrapper">
                                <h3 className="top">营养快餐</h3>
                                <p className="bottom">15元吃饱</p>
                            </div>
                            <img src={require("../../img/02.jpg")} />
                        </a>
                        <a>
                            <div className="content-wrapper">
                                <h3 className="top">立减15元</h3>
                                <p className="bottom">周三菜系日</p>
                            </div>
                            <img src={require("../../img/02.jpg")} />
                        </a>
                  </div>
              </div> 
            );
        }
}
  
  export default Banner;