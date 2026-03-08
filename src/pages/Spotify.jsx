import { motion } from 'framer-motion'
import './Placeholder.css'

export default function Spotify() {
  return (
    <div className="placeholder-page">
      <motion.div
        className="placeholder-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="placeholder-label">03 — Spotify App</span>
        <h1 className="placeholder-heading">In<br /><span className="italic">progress.</span></h1>
        <p className="placeholder-sub">
          A Spotify listening habits dashboard.<br />
          Being built here before it gets its own home.
        </p>
      </motion.div>
    </div>
  )
}
