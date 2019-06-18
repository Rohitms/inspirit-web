import React from 'react'
import NavBar from '../components/NavBar'
import ContactForm from '../components/ContactForm'
import '../stylesheets/pages/contact.css'
export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Contact">
          <div className="CDetails">
            <div className="">
              <div className="Ctitle">PHONE</div>
              <a href="tel:+91-9567713608">
                <div className="Ccont">+91-9567713608</div>
              </a>
            </div>
            <div className="">
              <div className="Ctitle">EMAIL</div>
              <a href="mailto:rohithmsasi@gmail.com">
                <div className="Ccont">inspiritdesignsinc@gmail.com</div>
              </a>
            </div>
            <div className="">
              <div className="Ctitle">ADDRESS</div>
              <div className="Ccont">Palarivattom, Kochi, India </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }
}
