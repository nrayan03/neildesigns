import { motion } from 'framer-motion'
import './Placeholder.css'

export default function Projects() {
  return (
    <div className="placeholder-page">
      <motion.div
        className="placeholder-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="placeholder-label">02 — Projects</span>
        <h1 className="placeholder-heading">Coming<br /><span className="italic">soon.</span></h1>
        <p className="placeholder-sub">
          This is where personal and professional projects will live.<br />
          Check back once things are built out.
        </p>
      </motion.div>
    </div>
  )
}
