import React from 'react'
import '../stylesheets/components/navbar.css'
import logo from '../images/logo.png'
import search from '../images/search.png'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="Nav-items">
          <Link to="/">
            <div>HOME</div>
          </Link>
          <Link to="/whatwedo">
            <div>WHAT WE DO</div>
          </Link>
          <Link to="/about">
            <div>ABOUT</div>
          </Link>
          <Link to="/contact">
            <div>CONTACT</div>
          </Link>
          <div>
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
// <img src={search} alt="" />
