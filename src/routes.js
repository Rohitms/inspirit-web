import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './stylesheets/base.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Whatwedo from './pages/Whatwedo'
import Contact from './pages/Contact'

export function ApptRoutes() {
  return (
    <div className="Text-style">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/whatwedo" component={Whatwedo} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
