import { motion } from 'framer-motion'
import './About.css'

const socials = [
  {
    label: 'neil.rayan03@gmail.com',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/neilrayan/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4"/>
        <path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 016 0v4"/>
      </svg>
    ),
  },
  {
    label: '@paintbyneil',
    href: 'https://instagram.com/paintbyneil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: '@rayan.neil',
    href: 'https://instagram.com/rayan.neil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div className="about-page">
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

        <motion.div
          className="about-socials"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {socials.map((s) => {
            const Tag = s.href ? 'a' : 'span'
            const linkProps = s.href ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' } : {}
            return (
              <Tag
                key={s.label}
                {...linkProps}
                className={`social-icon${s.href ? '' : ' no-link'}`}
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
                <span className="social-label">{s.label}</span>
              </Tag>
            )
          })}
        </motion.div>

        <motion.p
          className="about-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          I'm Neil. I hold a Computer Science degree from the University of Illinois at Chicago.
          I'm a DevOps engineer — Terraform, AWS, GCP, Python, scripting. Outside of that: CAD,
          3D printing, painting (six years), and digital art (four years). I have some creative
          goals I'm working toward and I'll be documenting the progress here.
        </motion.p>

      </section>

      <footer className="about-footer">
        <span>© 2026</span>
      </footer>
    </div>
  )
}