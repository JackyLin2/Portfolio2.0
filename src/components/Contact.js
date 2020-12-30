import React from 'react';


class Contact extends React.Component {

    render() {


      return (
         <div id="Contact-container">
            <h3 className="Contact-Header"> Contact Me  </h3>
            <div class="container">
               <form action="/action_page.php">
                  <label for="fname">First Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name" />

                  <label for="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name" />


                  <label for="subject">Subject</label>
                  <textarea id="subject" name="subject" placeholder="Your Message" style={{ height: 200 }} ></textarea>

                  <input className="submit" type="submit" value="Submit" />
               </form>
            </div>
         </div>
      );
   }
}

 export default Contact