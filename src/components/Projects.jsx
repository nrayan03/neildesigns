import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    num: '001',
    title: 'Multi-Cloud DB Auditor',
    tags: ['PowerShell', 'AWS', 'GCP'],
    desc: 'Automated database & Redis version auditing across multi-cloud environments. Flags drift, generates compliance reports.',
    year: '2025',
  },
  {
    num: '002',
    title: 'Jira CR Automation',
    tags: ['Octopus Deploy', 'Slack', 'AWS Secrets'],
    desc: 'Full pipeline for change request automation — integrates deploy hooks, secret management, and Slack alerts.',
    year: '2025',
  },
  {
    num: '003',
    title: 'SumoLogic → Grafana Migration',
    tags: ['Grafana', 'API', 'Python'],
    desc: 'Org-wide observability migration. Built recursive folder traversal tooling for dashboard discovery and categorization.',
    year: '2025',
  },
  {
    num: '004',
    title: 'neildesigns.xyz',
    tags: ['React', 'Vite', 'Framer Motion'],
    desc: 'This very site. An experiment in breaking layout rules and building muscle memory back in React.',
    year: '2026',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="work" className="projects" ref={ref}>
      <motion.div
        className="projects-label"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span>02</span> Work
      </motion.div>

      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Selected<br /><span className="italic-serif">projects.</span>
      </motion.h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`project-row ${hovered === i ? 'is-hovered' : ''} ${hovered !== null && hovered !== i ? 'is-dimmed' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="proj-num">{p.num}</span>
            <div className="proj-main">
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
            </div>
            <div className="proj-tags">
              {p.tags.map((t, j) => (
                <span key={j} className="proj-tag">{t}</span>
              ))}
            </div>
            <span className="proj-year">{p.year}</span>
            <span className="proj-arrow">↗</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
