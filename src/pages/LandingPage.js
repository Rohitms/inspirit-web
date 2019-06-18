import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Social from '../components/Social'

import '../stylesheets/base.css'
import '../stylesheets/pages/landingpage.css'
export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Hero />
        <Social />
      </div>
    )
  }
}
