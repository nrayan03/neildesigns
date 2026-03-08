import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const skills = [
  { cat: 'Cloud', items: ['AWS', 'GCP', 'Kubernetes', 'Terraform'] },
  { cat: 'Code', items: ['React', 'Python', 'PowerShell', 'Bash'] },
  { cat: 'Tools', items: ['TeamCity', 'Octopus Deploy', 'Grafana', 'Vault'] },
  { cat: 'Also', items: ['3D Printing', 'UI Design', 'Cooking', 'Basketball'] },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-label"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span>01</span> About
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="about-heading">
            I build infrastructure<br />
            <span className="italic-serif">and</span> interfaces.
          </h2>
          <p className="about-body">
            DevOps engineer at Crate & Barrel by day — building multi-cloud
            infrastructure across AWS and GCP. By night, I design things that
            live on the web. CS grad from UIC. Based in Chicago.
          </p>
          <p className="about-body">
            This site is my sandbox. Expect experiments.
          </p>
        </motion.div>

        <motion.div
          className="about-skills"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {skills.map((group, i) => (
            <div key={i} className="skill-group">
              <span className="skill-cat">{group.cat}</span>
              <div className="skill-items">
                {group.items.map((item, j) => (
                  <span key={j} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative number */}
      <div className="about-bg-num">ABOUT</div>
    </section>
  )
}
