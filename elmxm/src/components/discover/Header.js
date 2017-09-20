import React, { Component } from 'react';

class Header extends Component {

         constructor(props){
    
            super(props);
        }

        render() {
            return (
              <div>
                  <header className="header">
                      <h2 className="header_index">发现</h2>
                  </header>
              </div> 
            );
        }
}
  
  export default Header;