import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Home.css'

const entries = [
  {
    id: 'e1',
    date: null,
    category: '3D Printing',
    title: 'Housewares, Lighting & Acetone Finishes',
    tags: ['BambuLab A1', 'Fabrication', 'ABS'],
    body: 'Working on housewares and lighting with my BambuLab A1. Researching ABS printers to start using acetone treatment for mirror finishes. This is the process I\'m most at home in.',
    link: null,
  },
  {
    id: 'e2',
    date: 'Jan 2022',
    category: 'Digital Art',
    title: 'BLANKFACEKING — EP Cover',
    tags: ['Album Art', 'Photoshop', 'Design'],
    body: 'Designed the cover for BLANKFACEVILLAIN & G. King\'s collab EP \'BLANKFACEKING.\'',
    image: '/src/assets/blankfaceking.png',
    link: { label: 'Listen on Spotify ↗', url: 'https://open.spotify.com/album/4fc9fascer8RyMsZBt8uXe' },
  },
  {
    id: 'e3',
    date: null,
    category: 'Painting',
    title: 'Album Covers in My Own Style',
    tags: ['Painting', 'Mixed Media'],
    body: 'Painting album covers in my own style. Where the digital work gets a physical counterpart.',
    link: null,
  },
  {
    id: 'e4',
    date: null,
    category: 'Coding & Web',
    title: 'Built This Site',
    tags: ['React', 'Vite', 'Framer Motion'],
    body: 'Built this site. React + Vite + Framer Motion. No templates — still exploring modern web design beyond the basics.',
    link: null,
  },
]

function EntryCard({ entry, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`entry-card glass-card-subtle ${open ? 'is-open' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="entry-card-header">
        <div className="entry-card-meta">
          <span className="entry-cat">{entry.category}</span>
          {entry.date && <span className="entry-date-label">{entry.date}</span>}
        </div>
        <h3 className="entry-card-title">{entry.title}</h3>
        <div className="entry-card-tags">
          {entry.tags.map((t, i) => <span key={i} className="tag tag-sm">{t}</span>)}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="entry-card-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-divider" />
            {entry.image && (
              <div className="entry-card-image-wrap">
                <img src={entry.image} alt={entry.title} className="entry-card-image" />
              </div>
            )}
            <p className="entry-card-prose">{entry.body}</p>
            {entry.link && (
              <a
                className="entry-link"
                href={entry.link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                {entry.link.label}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button className="card-toggle" aria-label={open ? 'Collapse' : 'Expand'}>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }}>+</motion.span>
      </button>
    </motion.div>
  )
}

export default function Home() {
  const archiveRef = useRef(null)
  const archiveInView = useInView(archiveRef, { once: true, margin: '-60px' })

  return (
    <div className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="blink-dot" /> Chicago, IL · Design / Fabrication / Code
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          My personal<br /><span className="name-italic">archive.</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Built for me. Open to anyone.
        </motion.p>

        <motion.div
          className="hero-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="scroll-line" />
          <span>scroll</span>
        </motion.div>
      </section>

      {/* Archive */}
      <section className="timeline-section" ref={archiveRef}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={archiveInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Archive</span>
          <h2 className="section-heading">What I've<br /><em>been building.</em></h2>
          <p className="section-sub">Click any entry to read more.</p>
        </motion.div>

        <div className="entries-grid">
          {entries.map((entry, i) => (
            <EntryCard key={entry.id} entry={entry} index={i} inView={archiveInView} />
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span>© 2026</span>
      </footer>
    </div>
  )
}