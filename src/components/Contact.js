import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


class Contact extends React.Component {

   state = {
      name: '',
      email: '',
      subject: '',
      message: '',
   }

   handleSubmit = (e) => {
      e.preventDefault()
      emailjs.sendForm('service_xnro0bb', 'template_tstruct', e.target, 'user_nxAX5bsboFNtTwcx6luKA')
      .then((event) => {
         event.value = 'Send Email';
         alert('Will Get Back To You ASAP!');
      }, (error) => {
          console.log(error.text);
      });
   }


    render() {


      return (
         <div id="Contact-container">
            <h3 className="Contact-Header"> Contact Me  </h3>
            <div className="container">
               <form onSubmit={this.handleSubmit}>
                  <label value="name">Name</label>
                  <input type="text" name="name" placeholder="Your name" />

                  <label value="email">E-Mail</label>
                  <input type="e-mail" name="email" placeholder="Your E-Mail" />


                  <label value="message">Message</label>
                  <textarea name="message" placeholder="Your Message" style={{ height: "200px" }} ></textarea>

                  <input className="submit" type="submit" value="Submit" />
               </form >
            </div>
         </div>
      );
   }
}

 export default Contact