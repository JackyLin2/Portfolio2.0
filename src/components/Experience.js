import React from 'react';


class Experience extends React.Component {

   render() {


      return (
         <div id="experience-container">
            <div id="the-list-here">
               <h1 className="education-header">EDUCATION</h1>
               <div className="line-under"></div>
               <p style={{ color: "#9ba4b4" }}>
                  UNIVERSITY AND INSTITUTIONS
               </p>
               <ul className="school-list">
                  <li>FLATIRON SCHOOL 2020
                    
                  </li>
                  <li>
                      STONY BROOK UNIVERSITY 2018
                </li>
               </ul>
               <div className="the-second-list">
                  <h1 className="experience-header"> EXPERIENCE </h1>
                  <div className="line-under green"></div>
                  <p style={{ color: "#394867" }}>
                     POSITIONS AND BACKGROUND
                    </p>
                  <ul className="experience-list" >
                     <li>
                        SELF-EMPLOYED FULL-STACK DEVELOPER
                      </li>
                     <li>
                        TALENT ACQUISTION COORDINATOR
                     </li>
                     <li>
                        RECRUITING ASSISTANT
                      </li>
                  </ul>
               </div>
               <a href="https://docs.google.com/document/d/16mhSl48oOh8uPRI-GrM9UzAjLlLkDQ-Wi6lRBaEEwV4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
               <button type="button" className="btn btn-outline-secondary"> View Resume</button>
               </a>
            </div>
         </div>
      );
   }
}

export default Experience