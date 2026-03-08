import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/spotify', label: 'Spotify' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">
        N Rayan<span className="dot">.</span>
      </NavLink>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end={to === '/'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
