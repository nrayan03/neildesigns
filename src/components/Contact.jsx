import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-label"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span>03</span> Contact
      </motion.div>

      <div className="contact-inner">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="contact-heading">
            Let's build<br />
            <span className="italic-serif">something</span><br />
            weird.
          </h2>
          <p className="contact-sub">
            Open to freelance projects,<br />
            collabs, and interesting problems.
          </p>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a href="mailto:hello@neildesigns.xyz" className="contact-email">
            hello@neildesigns.xyz
            <span className="email-arrow">↗</span>
          </a>

          <div className="contact-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
              <span>GitHub</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
              <span>LinkedIn</span>
              <span className="link-arrow">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="contact-footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>© 2026 Neil Rayan — neildesigns.xyz</span>
        <span>Chicago, IL</span>
      </motion.div>
    </section>
  )
}
