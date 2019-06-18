import React from 'react'
import NavBar from '../components/NavBar'
import Doitem from '../components/Doitem'
import '../stylesheets/pages/whatwedo.css'

export default class Whatwedo extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="whatwedo">
          <Doitem
            title="Branding"
            subtitle="We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression."
          />
          <Doitem
            title="UI/UX Design"
            subtitle="Through a deep understanding of our audience's makeup and motivations, we design digital experiences that connect people."
          />
          <Doitem
            title="Video Production/ Photography"
            subtitle="Every brand is founded on powerful stories and truths; we create the branded content it takes to express these stories and truths."
          />
          <Doitem
            title="Digital Marketing"
            subtitle="With our sustainable digital marketing approach we deliver reliable solutions to increase brand awareness."
          />
        </div>
      </div>
    )
  }
}
