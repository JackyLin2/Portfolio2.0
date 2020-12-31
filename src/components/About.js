import React from 'react';
import Me from '../images/me2.jpg'

class About extends React.Component {


    render() {
        return (
            <div id="About-Component">

                <div id="about-container">
                    <img className="profile-picture" src={Me} alt="me" />
                    <h3 className="about-me"> About Me</h3>
                    <p className="about-paragrah"> Hello! My name is Jacky, a full-stack software engineer based in NYC with a background in recruiting and neurology research.
                    I graduated from Flatiron School Full-Stack Software Engineer program in June 2020. Since then, I am looking for my first full-time job.  I cannot say with 100% confidence where I see myself in five years or what my big goal is. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things. However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
                    </p>
                </div>

                <div className="knowledge-section">
                    <h3 className="knowledge-header" > Technology:  </h3>

                    <i className="icon fab fa-js-square fa-5x">  <span style={{ fontSize: "25px" }}>  Javascript </span>    </i>
                    <i className="icon fab fa-react fa-5x">  <span style={{ fontSize: "25px" }}>  React </span></i>
                    <i className="icon fab fa-node-js fa-5x">  <span style={{ fontSize: "25px" }}>  NodeJS </span></i>
                    <i className="icon fab fa-html5 fa-5x">  <span style={{ fontSize: "25px" }}>  HTML5 </span></i>
                    <i className="icon fab fa-css3-alt fa-5x">  <span style={{ fontSize: "25px" }}>  CSS3 </span></i>
                    <i className="icon fab fa-bootstrap fa-5x">  <span style={{ fontSize: "25px" }}>  BootStrap </span></i>
                    <i className="icon fab fa-github fa-5x">  <span style={{ fontSize: "25px" }}>  Github </span></i>
                    <i className="icon fab fa-node fa-5x">  <span style={{ fontSize: "25px" }}>  NodeJS </span></i>
                </div>
            </div>
        );
    }
}

export default About