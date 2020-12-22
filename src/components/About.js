import React from 'react';
import NavBar from './NavBar'
import Me from '../images/me2.jpg'

class About extends React.Component {


    render() {
        return (
            <div id="About-Component">
                <NavBar />
                <div id="about-container">
                    <img className="profile-picture" src={Me} alt="me"/>
                    <h3 className="about-me"> About Me</h3>
                    <p className="about-paragrah"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat semper viverra nam libero justo laoreet. Magna sit amet purus gravida quis blandit turpis cursus in. Gravida cum sociis natoque penatibus. Magna fringilla urna porttitor rhoncus dolor purus non enim. Mi in nulla posuere sollicitudin aliquam ultrices. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Odio euismod lacinia at quis risus sed. Justo donec enim diam vulputate ut pharetra. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Imperdiet nulla malesuada pellentesque elit eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Egestas tellus rutrum tellus pellentesque eu. Aliquam sem fringilla ut morbi tincidunt augue. Nibh praesent tristique magna sit. A erat nam at lectus urna duis convallis. Vitae congue eu consequat ac felis donec et. </p>
                </div>
                <div className="knowledge-section">
                    <h3> Knowledge In:  </h3>
                    
                </div>
            </div>
        );
    }
}

export default About