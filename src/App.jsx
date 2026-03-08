import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Projects from './pages/Projects'
import Spotify from './pages/Spotify'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/spotify" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  )
}
