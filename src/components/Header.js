import React from 'react';
import Particles from 'react-particles-js';


class Header extends React.Component {



   render() {


      return (
         <div id="top-container">
            <div className="intro">
               <h1 className="name"> Jacky Lin</h1>
               <h2 className="position"> Full-Stack Developer</h2>
            </div>

            <Particles
               id="tsparticles"
               options={{
                  background: {
                     color: {
                        value: "#0d47a1",
                     },
                  },
                  fpsLimit: 60,
                  interactivity: {
                     detectsOn: "canvas",
                     events: {
                        onClick: {
                           enable: true,
                           mode: "push",
                        },
                        onHover: {
                           enable: true,
                           mode: "repulse",
                        },
                        resize: true,
                     },
                     modes: {
                        bubble: {
                           distance: 100,
                           duration: 2,
                           opacity: 0.8,
                           size: 40,
                        },
                        push: {
                           quantity: 50,
                        },
                        repulse: {
                           distance: 200,
                           duration: 0.4,
                        },
                     },
                  },
                  particles: {
                     color: {
                        value: "#ffffff",
                     },
                     links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                     },
                     collisions: {
                        enable: true,
                     },
                     move: {
                        direction: "random",
                        enable: true,
                        outMode: "bounce",
                        random: true,
                        speed: 6,
                        straight: false,
                     },
                     number: {
                        density: {
                           enable: true,
                           value_area: 800,
                        },
                        value: 80,
                     },
                     opacity: {
                        value: 0.5,
                     },
                     shape: {
                        type: "circle",
                     },
                     size: {
                        random: true,
                        value: 5,
                     },
                  },
                  detectRetina: true,
               }}
            />
         </div>
      );
   }
}

export default Header

