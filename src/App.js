import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ContactForm from './pages/contact'
import AboutPage from './pages/about'
import Footer from './components/Footer'
import './app.scss'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkNav, setDarkNav] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar
          toggle={toggle}
          darkNav={darkNav}
          setDarkNav={() => {
            setDarkNav(false)
          }}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactForm} />
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
