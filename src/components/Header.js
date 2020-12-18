import React from 'react';
import BrooklynBridge from '../images/brooklyn-bridge.png'





class Header extends React.Component {


    render() {
       return (
          <div className="top-container">
              <div>
              <h1 className="name"> Jacky Lin</h1>
              <h2 className="position"> Full-Stack Developer</h2>
              {/* <img src={BrooklynBridge} alt="bridge"/> */}
              </div>
          </div>
       );
    }
 }

 export default Header