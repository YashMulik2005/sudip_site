import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Events from './Events'
import Photos from './Photos'
import About from './About'
import Footer from './Footer'

function Layout() {
    return (
        <div>
            <Navbar />
            <Home />
            <Events />
            <Photos />
            <About />
            <Footer />
        </div>
    )
}

export default Layout