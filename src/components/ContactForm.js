import React from 'react'
import '../stylesheets/components/contactform.css'
export default class ContactForm extends React.Component {
  render() {
    return (
      <div className="Contactform">
        <input type="hidden" name="form-name" value="contact" />
      </div>
    )
  }
}
