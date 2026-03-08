import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const marqueeRef = useRef(null)

  return (
    <section id="hero" className="hero">
      {/* Grid background */}
      <div className="hero-grid" />

      {/* Floating tag */}
      <motion.div
        className="hero-tag"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="blink">▶</span> Available for projects
      </motion.div>

      {/* Main headline */}
      <div className="hero-headline">
        <motion.div
          className="headline-row"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="big-text">NEIL</span>
          <span className="serif-accent">designs</span>
        </motion.div>
        <motion.div
          className="headline-row row-2"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="big-text outline">THINGS</span>
          <span className="big-text">&amp;</span>
          <span className="big-text">BUILDS</span>
        </motion.div>
        <motion.div
          className="headline-row row-3"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="big-text accent-text">STUFF</span>
          <span className="hero-sub">DevOps & Web</span>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <motion.div
        className="marquee-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="marquee" ref={marqueeRef}>
          <span className="marquee-inner">
            {Array(3).fill('DESIGN · BUILD · DEPLOY · EXPERIMENT · ITERATE · SHIP · ').join('')}
          </span>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
