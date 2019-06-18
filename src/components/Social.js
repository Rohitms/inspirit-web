import React from 'react'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import '../stylesheets/components/social.css'

export default class Social extends React.Component {
  render() {
    return (
      <div className="Social">
        <div className="Soc-fb">
          <a href="https://www.facebook.com/inspiritdesignz/">
            <img src={fb} alt="fb" />
          </a>
        </div>
        <div className="Soc-ig">
          <a href="https://www.instagram.com/designsinspirit/">
            <img src={ig} alt="instagram" />
          </a>
        </div>
      </div>
    )
  }
}
