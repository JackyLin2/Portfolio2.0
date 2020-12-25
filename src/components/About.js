import React from 'react';
import Me from '../images/me2.jpg'

class About extends React.Component {


    render() {
        return (
            <div id="About-Component">
            
                <div id="about-container">
                    <img className="profile-picture" src={Me} alt="me"/>
                    <h3 className="about-me"> About Me</h3>
                    <p className="about-paragrah"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet. Magna sit amet purus gravida quis blandit turpis cursus in. Gravida cum sociis natoque penatibus. Magna fringilla urna porttitor rhoncus dolor purus non enim. Mi in nulla posuere sollicitudin aliquam ultrices. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Odio euismod lacinia at quis risus sed. Justo donec enim diam vulputate ut pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Imperdiet nulla malesuada pellentesque elit eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Egestas tellus rutrum tellus pellentesque eu.  </p>
                </div>
                
                <div className="knowledge-section">
                    <h3 className="knowledge-header" > KNOWLEDGE IN:  </h3>
                 
                    <i className="icon fab fa-js-square fa-5x">  <span style={{ fontSize:"25px" }}>  Javascript </span>    </i>
                    <i className="icon fab fa-react fa-5x">  <span style={{ fontSize:"25px" }}>  React </span></i>
                    <i className="icon fab fa-node-js fa-5x">  <span style={{ fontSize:"25px" }}>  NodeJS </span></i>
                    <i className="icon fab fa-html5 fa-5x">  <span style={{ fontSize:"25px" }}>  HTML5 </span></i>
                    <i className="icon fab fa-css3-alt fa-5x">  <span style={{ fontSize:"25px" }}>  CSS3 </span></i>
                    <i className="icon fab fa-bootstrap fa-5x">  <span style={{ fontSize:"25px" }}>  BootStrap </span></i>
                    <i className="icon fab fa-github fa-5x">  <span style={{ fontSize:"25px" }}>  Github </span></i>
                   
             
                </div>
            </div>
        );
    }
}

export default About