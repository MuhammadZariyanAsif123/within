import { Fragment, useEffect, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { useI18n } from './i18n'
import type { Lang } from './dictionary'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
]

/** Renders *emphasis* markers from the dictionary as <em> (italic accent). */
function rich(text: string): ReactNode {
  return text.split('*').map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>))
}

/** Section photos: one still cut from a different stock clip per section. Decorative, so no alt text. */
function Photo({ src, pos = 'center', className = '' }: { src: string; pos?: string; className?: string }) {
  return (
    <div className={`photo ${className}`}>
      <img src={`/media/${src}.jpg`} alt="" loading="lazy" style={{ objectPosition: pos }} />
    </div>
  )
}

type SceneVariant = 'pass' | 'summit' | 'trail'

/** Decorative ridge illustrations in Within's palette. Static. */
function Scene({ variant, className = '' }: { variant: SceneVariant; className?: string }) {
  const id = `sky-${variant}`
  let body: ReactNode
  let box = '0 0 400 500'
  if (variant === 'pass') {
    body = (
      <>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#BFD8D2" />
            <stop offset="1" stopColor="#EAF0EE" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${id})`} />
        <circle cx="110" cy="130" r="34" fill="#E8C77B" />
        <path d="M0 500 V330 L90 260 L170 330 L260 210 L400 360 V500 Z" fill="#2D5A68" />
        <path d="M0 500 V430 L120 350 L210 420 L310 330 L400 410 V500 Z" fill="#0F2B3A" />
      </>
    )
  } else if (variant === 'summit') {
    box = '0 0 400 300'
    body = (
      <>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2D5A68" />
            <stop offset="1" stopColor="#BFD8D2" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${id})`} />
        <circle cx="270" cy="118" r="44" fill="#E8C77B" />
        <path d="M0 300 V210 L90 190 L150 230 L230 90 L330 220 L400 170 V300 Z" fill="#0F2B3A" />
        <path d="M0 300 V262 L120 244 L220 282 L320 252 L400 270 V300 Z" fill="#4F7C87" />
      </>
    )
  } else {
    box = '0 0 1000 300'
    body = (
      <>
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EAF0EE" />
            <stop offset="1" stopColor="#BFD8D2" />
          </linearGradient>
        </defs>
        <rect width="1000" height="300" fill={`url(#${id})`} />
        <path d="M0 300 V200 L150 150 L300 210 L450 120 L620 200 L780 110 L900 180 L1000 140 V300 Z" fill="#8DB3B3" />
        <path d="M0 300 V250 L200 220 L380 260 L560 210 L760 250 L1000 220 V300 Z" fill="#2D5A68" />
        <path
          d="M60 282 C200 250 260 270 360 226 S560 176 640 148 S800 100 860 76"
          fill="none"
          stroke="#E8C77B"
          strokeWidth="4"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
        <circle cx="360" cy="226" r="7" fill="#E8C77B" />
        <circle cx="640" cy="148" r="7" fill="#E8C77B" />
        <circle cx="880" cy="66" r="26" fill="#E8C77B" />
      </>
    )
  }
  return (
    <div className={`photo ${className}`}>
      <svg className="scene" viewBox={box} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        {body}
      </svg>
    </div>
  )
}

function Nav() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-mark" href="#main">
          Within
        </a>
        <nav className="nav-links" aria-label="Main">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label={t.nav.langLabel}>
          {LANGS.map((l) => (
            <button key={l.code} type="button" lang={l.code} aria-pressed={lang === l.code} onClick={() => setLang(l.code)}>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

interface Clip {
  src: string
  poster: string
  pos: string
}

/** Each scene is a pair of clips shown side by side. The montage cuts from pair to pair. */
const SCENES: [Clip, Clip][] = [
  [
    { src: '/media/hero.mp4', poster: '/media/poster.jpg', pos: '30% 50%' },
    { src: '/media/hero-2.mp4', poster: '/media/poster-2.jpg', pos: '55% 50%' },
  ],
  [
    { src: '/media/clip-4803.mp4', poster: '/media/clip-4803.jpg', pos: '70% 50%' },
    { src: '/media/clip-43798.mp4', poster: '/media/clip-43798.jpg', pos: '50% 35%' },
  ],
  [
    { src: '/media/clip-33066.mp4', poster: '/media/clip-33066.jpg', pos: '50% 50%' },
    { src: '/media/clip-45874.mp4', poster: '/media/clip-45874.jpg', pos: '45% 50%' },
  ],
  [
    { src: '/media/clip-40766.mp4', poster: '/media/clip-40766.jpg', pos: '50% 60%' },
    { src: '/media/clip-43737.mp4', poster: '/media/clip-43737.jpg', pos: '50% 55%' },
  ],
]
const SCENE_MS = 5500

function HeroScene({
  clips,
  active,
  near,
  playing,
}: {
  clips: [Clip, Clip]
  active: boolean
  near: boolean
  playing: boolean
}) {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const wasActive = useRef(false)

  useEffect(() => {
    refs.current.forEach((v) => {
      if (!v) return
      if (active && playing) {
        // Restart the pair each time it comes back round.
        if (!wasActive.current) v.currentTime = 0
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
    wasActive.current = active
  }, [active, playing])

  return (
    <div className={`hero-scene${active ? ' is-active' : ''}`}>
      {clips.map((c, i) => (
        <video
          key={c.src}
          ref={(el) => {
            refs.current[i] = el
          }}
          className="hero-video"
          src={c.src}
          poster={c.poster}
          muted
          loop
          playsInline
          preload={near ? 'auto' : 'none'}
          style={{ objectPosition: c.pos }}
        />
      ))}
    </div>
  )
}

function Hero() {
  const { t } = useI18n()
  // Motion is optional: with reduced motion the first pair of poster frames stays still.
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const playing = !reduced && !paused

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCENES.length), SCENE_MS)
    return () => window.clearInterval(id)
  }, [playing])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-videos" aria-hidden="true">
        {SCENES.map((clips, i) => (
          <HeroScene
            key={clips[0].src}
            clips={clips}
            active={i === index}
            near={!reduced && (i === index || i === (index + 1) % SCENES.length)}
            playing={playing}
          />
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <Nav />
      <span className="hero-mark" aria-hidden="true">
        WITHIN
      </span>
      <div className="hero-body">
        <h1 id="hero-title">{rich(t.hero.title)}</h1>
        <a className="link-caps" href="#waitlist">
          {t.hero.cta}
        </a>
      </div>
      <a className="hero-down" href="#statement" aria-label={t.hero.tagline}>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4 V20 M5 13 L12 20 L19 13" />
        </svg>
      </a>
      {!reduced && (
        <button
          type="button"
          className="hero-toggle"
          aria-label={paused ? t.hero.play : t.hero.pause}
          onClick={() => setPaused((p) => !p)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {paused ? <path d="M8 5 L19 12 L8 19 Z" /> : <path d="M8 5 V19 M16 5 V19" />}
          </svg>
        </button>
      )}
    </section>
  )
}

function Statement() {
  const { t } = useI18n()
  return (
    <section className="statement" id="statement" aria-label={t.hero.tagline}>
      <div className="statement-text">
        <p className="statement-title">{t.hero.tagline}</p>
        <p className="statement-lead">{t.hero.lead}</p>
        <a className="arrow" href="#problem" aria-label={t.problem.title.replace(/\*/g, '')}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 4 V20 M5 13 L12 20 L19 13" />
          </svg>
        </a>
      </div>
      <Photo src="sec-statement" pos="45% 60%" className="statement-photo" />
    </section>
  )
}

function Problem() {
  const { t } = useI18n()
  return (
    <section className="block problem" id="problem" aria-labelledby="problem-title">
      <div className="intro">
        <Photo src="sec-problem" pos="38% 50%" className="intro-big" />
        <div className="intro-side">
          <Scene variant="summit" className="intro-small" />
          <div className="intro-text">
            <h2 id="problem-title">{rich(t.problem.title)}</h2>
            {t.problem.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a className="link-caps" href="#what">
              {t.offer.title.replace(/\*/g, '')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Offer() {
  const { t } = useI18n()
  return (
    <section className="block feature" id="what" aria-labelledby="offer-title">
      <div className="feature-grid">
        <div className="feature-text">
          <h2 id="offer-title">{rich(t.offer.title)}</h2>
          <p className="feature-intro">{t.offer.intro}</p>
          <div className="pillars">
            {t.offer.pillars.map((p) => (
              <article className="pillar" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
        <Photo src="sec-offer" pos="50% 50%" className="feature-photo" />
      </div>
    </section>
  )
}

function How() {
  const { t } = useI18n()
  return (
    <section className="block feature feature-flip" id="how" aria-labelledby="how-title">
      <div className="feature-grid">
        <Scene variant="pass" className="feature-photo" />
        <div className="feature-text">
          <h2 id="how-title">{rich(t.how.title)}</h2>
          <p className="draft-note">{t.how.draft}</p>
          <ol className="steps">
            {t.how.steps.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Fit() {
  const { t } = useI18n()
  return (
    <section className="block fit" id="fit" aria-labelledby="fit-title">
      <h2 id="fit-title">{rich(t.fit.title)}</h2>
      <div className="fit-grid">
        <article className="tile">
          <Photo src="sec-fit" pos="50% 50%" className="tile-photo" />
          <h3>{t.fit.forTitle}</h3>
          <ul className="list-for">
            {t.fit.forItems.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </article>
        <article className="tile">
          <Scene variant="trail" className="tile-photo" />
          <h3>{t.fit.notTitle}</h3>
          <ul className="list-not">
            {t.fit.notItems.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

function Next() {
  const { t } = useI18n()
  return (
    <section className="block next" aria-labelledby="next-title">
      <h2 id="next-title">{rich(t.next.title)}</h2>
      <p className="next-placeholder">{t.next.placeholder}</p>
      <p className="next-note">{t.next.note}</p>
      <a className="link-caps" href="#waitlist">
        {t.next.cta}
      </a>
    </section>
  )
}

function Waitlist() {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Preview only: nothing is stored or sent anywhere.
    setStatus('sent')
  }

  return (
    <section className="waitlist" id="waitlist" aria-labelledby="waitlist-title">
      <Photo src="sec-waitlist" pos="50% 40%" className="waitlist-photo" />
      <div className="waitlist-panel">
        <h2 id="waitlist-title">{rich(t.form.title)}</h2>
        <p className="waitlist-lead">{t.form.lead}</p>
        <form onSubmit={onSubmit} onChange={() => setStatus('idle')}>
          <div className="field">
            <label htmlFor="f-name">{t.form.name}</label>
            <input id="f-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="f-email">{t.form.email}</label>
            <input id="f-email" name="email" type="email" autoComplete="email" required />
          </div>
          <fieldset className="field choices">
            <legend>{t.form.help}</legend>
            <div className="choice-row">
              {t.form.options.map((o, idx) => (
                <label className="choice" key={o.value}>
                  <input type="radio" name="help" value={o.value} defaultChecked={idx === 0} />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button className="btn" type="submit">
            {t.form.submit}
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status === 'sent' ? t.form.sent : ''}
          </p>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  const { t } = useI18n()
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <div className="banner" role="note">
        {t.banner}
      </div>
      <main id="main">
        <Hero />
        <Statement />
        <Problem />
        <Offer />
        <How />
        <Fit />
        <Next />
        <Waitlist />
      </main>
      <footer className="footer">
        <span className="footer-mark">Within</span>
        <nav className="footer-links" aria-label="Footer">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="footer-line">{t.footer.line}</p>
        <p>{t.footer.owner}</p>
        <p className="footer-note">{t.footer.note}</p>
        <p className="footer-note">{t.footer.media}</p>
      </footer>
    </>
  )
}
