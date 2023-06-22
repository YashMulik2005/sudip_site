import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Events from './components/Events'
import Photos from './components/Photos'
import About from './components/About'
import Footer from './components/Footer'
import Event1 from './components/Event1'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/event1' element={<Event1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
