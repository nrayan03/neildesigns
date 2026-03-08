import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Nav from './components/Nav'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
