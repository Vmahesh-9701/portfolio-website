import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Dsa from './components/Dsa'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-full">
         <Navbar />
         <Home />
         <About />
         <Skills />
         <Projects />
         <Certificates />
         <Dsa />
         <Contact />
    </div>
    </>
  )
}

export default App
