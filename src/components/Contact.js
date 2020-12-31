import React from 'react';
import Swal from 'sweetalert2'


class Contact extends React.Component {

   state = {
      name: '',
      email: '',
      message: '',
   }

   enterName = (event) => {
      this.setState({
         name: event.target.value
      })
   }

   enterEmail = (event) => {
      this.setState({
         email: event.target.value
      })
   }

   enterMessage = (event) => {
      this.setState({
         message: event.target.value
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()
      const templateID = "Template"
      this.sendMessage(templateID, {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
      })
   }


   sendMessage = (templateID, variables) => {
      window.emailjs.send(
         'service_xnro0bb', templateID,
         variables
      ).then( res => {
         Swal.fire({
            title: "E-Mail Successfully Sent",
            icon: 'success'
         })
         })
         .catch(err => {
            Swal.fire({
               title: "E-Mail Failed to Send",
               icon: 'error'
            })
         })
   }


    render() {


      return (
         <div id="Contact-container">
            <h3 className="Contact-Header"> Contact Me  </h3>
            <h2 className= "Contact-h2">If you want to collaborate on any web or mobile applications, please feel free to reach out.
             I'm available for freelance projects and full-time employment. </h2>
            <div className="container">
               <form onSubmit={this.handleSubmit}>
                  <label value="name">Name</label>
                  <input  onChange={this.enterName} type="text" name="name" placeholder="Your Name" required />

                  <label value="email">E-Mail</label>
                  <input   onChange={this.enterEmail} type="e-mail" name="email" placeholder="Your E-Mail"required />


                  <label value="message">Message</label>
                  <textarea   onChange={this.enterMessage} name="message" placeholder="Your Message" style={{ height: "200px" }} required ></textarea>

                  <input className="submit" type="submit" value="Submit" />
               </form >
            </div>
            <br/>
           <div className="footer-icon">
            <a href="https://www.linkedin.com/in/jacky-lin-b6b0b5170/" target="_blank" rel="noopener noreferrer">  <i class=" fab fa-linkedin fa-2x" ></i></a>
            <a href="https://jacky-jia-lin.medium.com/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-medium fa-2x" ></i> </a>
            <a href="https://github.com/JackyLin2" target="_blank" rel="noopener noreferrer"> <i class="fab fa-github-square fa-2x" ></i></a>
            
            </div>
           
         </div>
      );
   }
}

 export default Contact