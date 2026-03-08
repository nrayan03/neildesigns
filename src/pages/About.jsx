import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const disciplines = [
  {
    index: '01',
    title: 'Graphic Design\n& Digital Art',
    desc: 'Visual identity, digital illustration, and art direction. Designing things that have a point of view.',
  },
  {
    index: '02',
    title: 'Painting',
    desc: 'Traditional and mixed media. The physical counterpart to the digital work.',
  },
  {
    index: '03',
    title: '3D Printing\n& CAD',
    desc: 'Prototyping and fabrication on a Bambu Lab A1. Bridging digital design with physical objects.',
  },
  {
    index: '04',
    title: 'Coding &\nWeb Design',
    desc: 'Full-stack development, DevOps infrastructure, and building experiences for the web.',
  },
  {
    index: '05',
    title: 'And\nMore.',
    desc: 'Always exploring. Always building. The list keeps growing.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="about-page">
      {/* Hero intro */}
      <section className="about-hero">
        <motion.p
          className="about-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Chicago, IL
        </motion.p>

        <motion.h1
          className="about-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Neil Rayan
        </motion.h1>

        <motion.p
          className="about-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          I make things — digitally, physically,<br />
          <span className="italic">and everything in between.</span>
        </motion.p>
      </section>

      {/* Divider */}
      <motion.div
        className="about-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Disciplines */}
      <section className="about-disciplines" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          What I do
        </motion.p>

        <div className="disciplines-list">
          {disciplines.map((d, i) => (
            <motion.div
              key={i}
              className="discipline-row"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className="discipline-index">{d.index}</span>
              <h2 className="discipline-title">
                {d.title.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </h2>
              <p className="discipline-desc">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer line */}
      <footer className="about-footer">
        <span>neildesigns.xyz</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
