import React, { Component } from 'react';

import Header from "./discover/Header"
import Activity from "./discover/Activity"
import Recommend from "./discover/Recommend"

class Discover extends Component {

         constructor(props){
    
            super(props);
        }

        render() {
            return (
              <div>
                  <Header />
                  <Activity />
                  <Recommend />
              </div> 
            );
        }
}
  
  export default Discover;
  