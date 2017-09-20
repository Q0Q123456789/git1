import React, { Component } from 'react';

import Header from "./slideshow/Header"
import Swipe from "./slideshow/Swipe"
import Banner from "./slideshow/Banner"
import Main from "./slideshow/Main"

class Home extends Component {

         constructor(props){
    
            super(props);
        }

        render() {
            return (
              <div>
                  
                 
                  <Header />
                  <Swipe />
                  <Banner />
                  <Main />
              </div> 
            );
        }
}
  
  export default Home;
  
