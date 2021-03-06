import React from 'react'
import '../stylesheets/components/contactform.css'
export default class ContactForm extends React.Component {
  render() {
    return (
      <div className="Contactform">
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div className="FormTitle">Name</div>
          <input type="text" name="name" placeholder="" />
          <div className="FormTitle">Email</div>
          <input type="email" name="email" />
          <div className="FormTitle">Number</div>
          <input type="tel" name="number" />
          <div className="FormTitle">Subject</div>
          <input type="text" name="subject" />
          <div className="FormTitle">Message</div>
          <textarea type="text" name="message" />

          <div className="FormTitle ">
            <input className="cfbutton" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}
