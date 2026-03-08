import { useState, useEffect } from 'react'
import './Nav.css'

const links = ['about', 'work', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">ND<span>.</span></a>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`}>
              <span className="link-text">{l}</span>
              <span className="link-under" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
