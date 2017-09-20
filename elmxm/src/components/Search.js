import React, { Component } from 'react';

import Header from "./search/Header"
import History from "./search/History"
import Hot from "./search/Hot"

class Search extends Component {

         constructor(props){
    
            super(props);
        }
        componentDidMount(){

        }

        render() {
            return (
              <div>
                  <Header />
                  <History />
                  <Hot />
                 
              </div> 
            );
        }
}
  
  export default Search;