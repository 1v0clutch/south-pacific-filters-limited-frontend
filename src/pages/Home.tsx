import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import logo from '../assets/logo.png'

type DropdownKey = 'airFilters' | 'filterMedia' | null

const airFilterItems = [
  { label: 'Panel Filters', href: '#panel-filters' },
  { label: 'Pocket / Bag Filters', href: '#pocket-filters' },
  { label: 'HEPA Filters', href: '#hepa-filters' },
  { label: 'Carbon Filters', href: '#carbon-filters' },
  { label: 'HVAC Filters', href: '#hvac-filters' },
  { label: 'Holding Frames', href: '#holding-frames' },
]

const filterMediaItems = [
  { label: 'Synthetic Media', href: '#synthetic-media' },
  { label: 'Glass Fibre', href: '#glass-fibre' },
  { label: 'Activated Carbon Media', href: '#activated-carbon' },
  { label: 'Fibreglass Media Rolls', href: '#fibreglass-rolls' },
  { label: 'Spray Booth Filters', href: '#spray-booth' },
]

const stats = [
  { value: '1999', label: 'Year established' },
  { value: '1000+', label: 'Clients' },
  { value: '2', label: 'Locations' },
]

const industries = [
  {
    title: 'Commercial HVAC',
    description: 'Panel, pocket, and fine filters for air handling units in offices, retail, and education.',
  },
  {
    title: 'Healthcare',
    description: 'High-efficiency filtration for hospitals, clinics, and controlled care environments.',
  },
  {
    title: 'Industrial',
    description: 'Dust-load capable media and systems for manufacturing and process air.',
  },
  {
    title: 'Food & Beverage',
    description: 'Hygiene-focused filtration that supports food-grade production standards.',
  },
  {
    title: 'Residential & Light Commercial',
    description: 'Practical filter options for homes, small premises, and light plant rooms.',
  },
  {
    title: 'Spray Booth & Finishing',
    description: 'Media rolls and booth filters designed for paint mist and high dust holding.',
  },
]

const locations = [
  {
    city: 'Auckland',
    address: 'Unit 13, 273 Neilson Street, Onehunga, Auckland',
    phone: '09 634 5314',
    phoneHref: 'tel:+6496345314',
    email: 'auckland@spfilters.co.nz'
  },
  {
    city: 'Christchurch',
    address: 'Unit 3, 22 Sonter Road, Wigram, Christchurch',
    phone: '03 341 7229',
    phoneHref: 'tel:+6433417229',
    email: 'info@spfilters.co.nz'
  }
]

const productLinks = [
  { label: 'Panel Filters', href: '#panel-filters' },
  { label: 'Pocket Filters', href: '#pocket-filters' },
  { label: 'HEPA Filters', href: '#hepa-filters' },
  { label: 'Filter Media', href: '#filter-media' },
  { label: 'Holding Frames', href: '#holding-frames' },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transition: `transform var(--motion-duration-instant) ease`,
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <path d="M2 4l10 8 10-8" />
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Home() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAirOpen, setMobileAirOpen] = useState(false)
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [heroScrollY, setHeroScrollY] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  const headerRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const airMenuId = useId()
  const mediaMenuId = useId()
  const mobileNavId = useId()
  const emailInputId = useId()
  const emailErrorId = useId()

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /* Hero parallax — disabled when user prefers reduced motion */
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(motionQuery.matches)
    syncMotion()
    motionQuery.addEventListener('change', syncMotion)

    let frame = 0
    function onScroll() {
      if (motionQuery.matches) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const hero = heroRef.current
        if (!hero) return
        const rect = hero.getBoundingClientRect()
        // Only track while hero is in/near the viewport
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setHeroScrollY(window.scrollY)
        }
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      motionQuery.removeEventListener('change', syncMotion)
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /* Scroll-direction navbar hide/show */
  useEffect(() => {
    const THRESHOLD = 8 // px — ignore tiny jitter
    let frame = 0

    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const currentY = window.scrollY
        const diff = currentY - lastScrollYRef.current

        if (Math.abs(diff) < THRESHOLD) return // ignore micro-scrolls

        if (diff > 0 && currentY > 80) {
          // Scrolling DOWN and past the top area → hide nav
          setNavVisible(false)
        } else {
          // Scrolling UP (or near top) → show nav
          setNavVisible(true)
        }
        lastScrollYRef.current = currentY
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const videoParallax = reduceMotion ? 0 : heroScrollY * 0.45
  const contentParallax = reduceMotion ? 0 : heroScrollY * 0.18

  function toggleDropdown(key: Exclude<DropdownKey, null>) {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileAirOpen(false)
    setMobileMediaOpen(false)
  }

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEmailSuccess(false)

    const value = email.trim()
    if (!value) {
      setEmailError('Enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Enter a valid email address.')
      return
    }

    setEmailError('')
    setEmailLoading(true)

    window.setTimeout(() => {
      setEmailLoading(false)
      setEmailSuccess(true)
      setEmail('')
    }, 600)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-surface-strong)",
      }}
    >
      {/* Skip link — keyboard-first */}
      <a
        href="#main-content"
        className="sr-only skip-link"
        style={{
          borderRadius: "var(--radius-xs)",
          left: "var(--space-4)",
          top: "var(--space-4)",
          zIndex: 100,
          backgroundColor: "var(--color-surface-elevated)",
          color: "var(--color-text-secondary)",
          boxShadow: "var(--shadow-1)",
        }}
      >
        Skip to main content
      </a>

      {/* Sticky Navbar — slides out on scroll-down, back in on scroll-up */}
      <header
        ref={headerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "var(--color-surface-elevated)",
          borderBottom: "1px solid var(--color-border-subtle)",
          boxShadow: "var(--shadow-1)",
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
          transition: reduceMotion
            ? "none"
            : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "transform",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            minHeight: "96px",
            paddingInline: "var(--space-6)",
            width: "100%",
            position: "relative",
          }}
        >
          <a
            href="#home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "var(--color-text-secondary)",
              minHeight: "44px",
              padding: "var(--space-2) 0",
            }}
          >
            <img
              src={logo}
              alt="South Pacific Filters Limited"
              width={80}
              height={80}
              style={{ width: 80, height: 80, objectFit: "contain", display: "block" }}
            />
          </a>

          {/* Desktop navigation (primary of 3 nav regions) */}
          <nav
            aria-label="Primary"
            className="desktop-nav"
            style={{
              alignItems: "center",
              gap: "var(--space-1)",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <a href="#home" className="nav-link">
              Home
            </a>

            <div style={{ position: "relative" }}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={openDropdown === "airFilters"}
                aria-haspopup="menu"
                aria-controls={airMenuId}
                onClick={() => toggleDropdown("airFilters")}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpenDropdown("airFilters");
                  }
                }}
              >
                Air Filters
                <ChevronIcon open={openDropdown === "airFilters"} />
              </button>
              <ul
                id={airMenuId}
                role="menu"
                aria-label="Air Filters"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  marginTop: "var(--space-2)",
                  minWidth: 220,
                  listStyle: "none",
                  margin: 0,
                  padding: "var(--space-2) 0",
                  backgroundColor: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-xs)",
                  boxShadow: "var(--shadow-1)",
                  opacity: openDropdown === "airFilters" ? 1 : 0,
                  transform:
                    openDropdown === "airFilters"
                      ? "translateY(0)"
                      : "translateY(-4px)",
                  pointerEvents:
                    openDropdown === "airFilters" ? "auto" : "none",
                  transition: `opacity var(--motion-duration-instant) ease, transform var(--motion-duration-instant) ease`,
                  zIndex: 60,
                }}
              >
                {airFilterItems.map((item) => (
                  <li key={item.label} role="none">
                    <a
                      href={item.href}
                      role="menuitem"
                      className="text-link"
                      style={{
                        display: "block",
                        padding: "var(--space-3) var(--space-4)",
                        textDecoration: "none",
                        color: "var(--color-text-secondary)",
                        fontSize: "var(--font-size-xs)",
                        fontWeight: 400,
                      }}
                      onClick={() => setOpenDropdown(null)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "color-mix(in srgb, var(--color-text-inverse) 10%, transparent)";
                        e.currentTarget.style.color =
                          "var(--color-text-inverse)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: "relative" }}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={openDropdown === "filterMedia"}
                aria-haspopup="menu"
                aria-controls={mediaMenuId}
                onClick={() => toggleDropdown("filterMedia")}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpenDropdown("filterMedia");
                  }
                }}
              >
                Filter Media
                <ChevronIcon open={openDropdown === "filterMedia"} />
              </button>
              <ul
                id={mediaMenuId}
                role="menu"
                aria-label="Filter Media"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  marginTop: "var(--space-2)",
                  minWidth: 220,
                  listStyle: "none",
                  margin: 0,
                  padding: "var(--space-2) 0",
                  backgroundColor: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-xs)",
                  boxShadow: "var(--shadow-1)",
                  opacity: openDropdown === "filterMedia" ? 1 : 0,
                  transform:
                    openDropdown === "filterMedia"
                      ? "translateY(0)"
                      : "translateY(-4px)",
                  pointerEvents:
                    openDropdown === "filterMedia" ? "auto" : "none",
                  transition: `opacity var(--motion-duration-instant) ease, transform var(--motion-duration-instant) ease`,
                  zIndex: 60,
                }}
              >
                {filterMediaItems.map((item) => (
                  <li key={item.label} role="none">
                    <a
                      href={item.href}
                      role="menuitem"
                      style={{
                        display: "block",
                        padding: "var(--space-3) var(--space-4)",
                        textDecoration: "none",
                        color: "var(--color-text-secondary)",
                        fontSize: "var(--font-size-xs)",
                        fontWeight: 400,
                      }}
                      onClick={() => setOpenDropdown(null)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "color-mix(in srgb, var(--color-text-inverse) 10%, transparent)";
                        e.currentTarget.style.color =
                          "var(--color-text-inverse)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#catalogue" className="nav-link">
              Catalogue
            </a>
            <a
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((prev) => !prev)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              minWidth: 44,
              minHeight: 44,
              borderRadius: "var(--radius-xs)",
              border: "1px solid var(--color-border-subtle)",
              background: "var(--color-surface-elevated)",
              color: "var(--color-text-secondary)",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile navigation panel */}
        <div
          id={mobileNavId}
          className="mobile-nav-panel"
          hidden={!mobileOpen}
          style={{
            borderTop: "1px solid var(--color-border-subtle)",
            backgroundColor: "var(--color-surface-elevated)",
            maxHeight: mobileOpen ? "min(85vh, 720px)" : 0,
            opacity: mobileOpen ? 1 : 0,
            overflow: "auto",
            transition: `max-height var(--motion-duration-fast) ease, opacity var(--motion-duration-fast) ease`,
          }}
        >
          <nav
            aria-label="Mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-1)",
              padding: "var(--space-4)",
            }}
          >
            <a
              href="#home"
              className="nav-link"
              style={{ width: "100%" }}
              onClick={closeMobile}
            >
              Home
            </a>

            <div>
              <button
                type="button"
                className="nav-link"
                style={{ width: "100%", justifyContent: "space-between" }}
                aria-expanded={mobileAirOpen}
                onClick={() => setMobileAirOpen((prev) => !prev)}
              >
                Air Filters
                <ChevronIcon open={mobileAirOpen} />
              </button>
              {mobileAirOpen && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: `0 0 0 var(--space-4)`,
                    borderLeft: "2px solid var(--color-text-inverse)",
                    marginLeft: "var(--space-3)",
                  }}
                >
                  {airFilterItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        style={{
                          display: "block",
                          padding: "var(--space-3)",
                          color: "var(--color-text-tertiary)",
                          textDecoration: "none",
                          fontSize: "var(--font-size-xs)",
                          minHeight: 44,
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                type="button"
                className="nav-link"
                style={{ width: "100%", justifyContent: "space-between" }}
                aria-expanded={mobileMediaOpen}
                onClick={() => setMobileMediaOpen((prev) => !prev)}
              >
                Filter Media
                <ChevronIcon open={mobileMediaOpen} />
              </button>
              {mobileMediaOpen && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: `0 0 0 var(--space-4)`,
                    borderLeft: "2px solid var(--color-text-inverse)",
                    marginLeft: "var(--space-3)",
                  }}
                >
                  {filterMediaItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        style={{
                          display: "block",
                          padding: "var(--space-3)",
                          color: "var(--color-text-tertiary)",
                          textDecoration: "none",
                          fontSize: "var(--font-size-xs)",
                          minHeight: 44,
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="#about"
              className="nav-link"
              style={{ width: "100%" }}
              onClick={closeMobile}
            >
              About
            </a>
            <a
              href="#catalogue"
              className="nav-link"
              style={{ width: "100%" }}
              onClick={closeMobile}
            >
              Catalogue
            </a>
            <a
              href="#contact"
              className="nav-link"
              style={{ width: "100%" }}
              onClick={closeMobile}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Navbar height spacer — keeps content from sitting behind the fixed nav */}
      <div aria-hidden="true" style={{ height: "96px" }} />

      <main id="main-content">
        {/* Hero — fullscreen video + overlay + scroll parallax */}
        <section
          ref={heroRef}
          id="home"
          aria-labelledby="hero-heading"
          className="relative isolate h-svh min-h-[32rem] w-full overflow-hidden bg-[var(--color-surface-base)] text-[var(--color-text-on-dark)]"
        >
          {/* Parallax video layer (scaled so edges never show while translating) */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 h-[120%] w-full will-change-transform"
            style={{
              transform: `translate3d(0, ${videoParallax}px, 0) scale(1.08)`,
            }}
            aria-hidden="true"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23000000' width='100%25' height='100%25'/%3E%3C/svg%3E"
            >
              <source
                src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Readable dark overlays */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/80"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
            aria-hidden="true"
          />

          {/* Overlay content (slower parallax) */}
          <div
            className="relative z-10 flex h-full w-full items-center will-change-transform"
            style={{
              transform: `translate3d(0, ${contentParallax}px, 0)`,
            }}
          >
            <div className="container-fd mx-auto w-full px-[var(--space-4)] sm:px-[var(--space-5)] lg:px-[var(--space-6)] flex flex-col items-center text-center">
              <div className="max-w-3xl flex flex-col items-center">
                <p className="mb-[var(--space-3)] text-[length:var(--font-size-sm)] font-medium uppercase tracking-[0.1em] text-[var(--color-text-accent-on-dark)]">
                  New Zealand owned &amp; operated
                </p>
                <h1
                  id="hero-heading"
                  className="m-0 text-[length:clamp(var(--font-size-3xl),5vw,var(--font-size-4xl))] font-bold leading-[1.1] text-[var(--color-text-on-dark)] tracking-tight"
                >
                  Leading Clean Air Solutions
                </h1>
                <p className="mt-[var(--space-4)] max-w-xl text-[length:var(--font-size-md)] font-light leading-relaxed text-[var(--color-text-muted-on-dark)]">
                  New Zealand’s leading air filtration specialists. HVAC filters
                  and filter media that conform to ISO16890 — for commercial,
                  residential, and industrial customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating quick stats — straddles Hero / About boundary */}
        <div
          id="stats"
          role="region"
          aria-labelledby="stats-heading"
          className="relative z-20 mx-auto -mt-14 w-full max-w-5xl px-[var(--space-4)] sm:-mt-16 sm:px-[var(--space-5)] md:-mt-20 lg:-mt-24"
        >
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-[var(--space-4)] py-[var(--space-5)] shadow-xl sm:px-[var(--space-5)] sm:py-[var(--space-6)]">
            <h2 id="stats-heading" className="sr-only">
              Company metrics
            </h2>
            <dl className="stats-grid m-0 grid grid-cols-2 gap-[var(--space-4)] lg:grid-cols-3 lg:gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-[var(--space-3)] py-[var(--space-2)] text-center sm:px-[var(--space-4)] ${index > 0
                    ? "lg:border-l lg:border-[var(--color-border-subtle)]"
                    : ""
                    }`}
                >
                  <dd className="m-0 mt-[var(--space-2)] text-[length:var(--font-size-2xl)] font-bold leading-tight text-[var(--color-text-inverse)]">
                    {stat.value}
                  </dd>
                  <dt className="m-0 text-[length:var(--font-size-md)] font-bold text-[var(--color-text-tertiary)]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* About / value prop — top padding so content clears the floating card */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative z-0 -mt-14 bg-[var(--color-surface-strong)] pt-20 sm:-mt-16 sm:pt-24 md:-mt-20 md:pt-28 lg:-mt-24 lg:pt-32 min-h-[100vh] flex flex-col justify-center"
        >
          <div className="container-fd section-pad py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="m-0 text-[length:var(--font-size-sm)] font-semibold tracking-widest uppercase text-[var(--color-text-inverse)]">
                  Who we are
                </p>
                <h2
                  id="about-heading"
                  className="m-0 mt-4 text-[length:var(--font-size-3xl)] font-bold leading-tight text-[var(--color-text-secondary)]"
                >
                  Locally owned filtration experts since 1999
                </h2>
                <p className="m-0 mt-6 text-[length:var(--font-size-md)] text-[var(--color-text-tertiary)] leading-relaxed max-w-2xl">
                  South Pacific Filters Limited is a New Zealand owned and
                  operated business specialising in air filters and related
                  products for commercial, residential, and industrial
                  customers. We supply quality HVAC air filtration equipment
                  that conforms to the latest global standard, ISO16890.
                </p>
                <a
                  href="#contact"
                  className="btn btn--primary mt-10 shadow-md hover:shadow-lg transition-shadow"
                >
                  Talk to our team
                </a>
              </div>

              {/*TODO: put the image here for about section */}
            </div>
          </div>
        </section>


        {/* Locations section */}
        <section
          aria-labelledby="contact-heading"
          className="bg-[var(--color-surface-strong)] py-24 border-t border-[var(--color-border-subtle)]"
        >
          <div className="container-fd flex flex-col items-center text-center">
            <h2
              className="m-0 mb-12 text-[length:var(--font-size-3xl)] font-bold text-[var(--color-text-secondary)] tracking-wider"
            >
              OUR LOCATIONS
            </h2>
            <ul
              className="list-none m-0 p-0 flex flex-row justify-center flex-wrap md:flex-nowrap gap-8 w-full"
            >
              {locations.map((loc) => (
                <li
                  key={loc.city}
                  className="flex-1 min-w-[280px] max-w-[400px] p-8 border border-[var(--color-border-subtle)] rounded-lg shadow-sm flex flex-col gap-[var(--space-4)] text-left bg-[var(--color-surface-elevated)] hover:shadow-md transition-shadow duration-300"
                >
                  <h3
                    className="m-0 text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-secondary)]"
                  >
                    {loc.city}
                  </h3>

                  <div className="flex items-start gap-[var(--space-3)] text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
                    <span className="text-[var(--color-text-inverse)] mt-1"><AddressIcon /></span>
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-[var(--space-3)] text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
                    <span className="text-[var(--color-text-inverse)]"><PhoneIcon /></span>
                    <a
                      href={loc.phoneHref}
                      className="text-link text-[length:var(--font-size-sm)]"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-[var(--space-3)] text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)]">
                    <span className="text-[var(--color-text-inverse)]"><EmailIcon /></span>
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-link text-[length:var(--font-size-sm)]"
                    >
                      {loc.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="bg-[var(--color-surface-base)] text-[var(--color-text-muted-on-dark)]"
      >
        <div className="container-fd px-[var(--space-5)] py-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* Quick Links */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Quick links
              </h3>
              <ul className="list-none m-0 mt-4 p-0 grid gap-1">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center min-h-[36px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Products
              </h3>
              <ul className="list-none m-0 mt-4 p-0 grid gap-1">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center min-h-[36px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Social Media
              </h3>
              <ul className="list-none m-0 mt-4 p-0 grid gap-2">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-2 min-h-[36px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)]"
                  >
                    <FacebookIcon /> South Pacific Filters
                  </a>
                </li>
              </ul>
            </div>

            {/* Let's Connect */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Let's connect
              </h3>
              <ul className="list-none m-0 mt-4 p-0 grid gap-2">
                <li>
                  <a
                    href="tel:+6496345314"
                    className="inline-flex items-center gap-2 min-h-[36px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)]"
                  >
                    <PhoneIcon /> 09 634 5314
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="inline-flex items-center gap-2 min-h-[36px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)]"
                  >
                    <EmailIcon /> info@example.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider + copyright */}
          <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)]">
            <p className="m-0">
              &copy; {new Date().getFullYear()} South Pacific Filters Limited. All rights reserved.
            </p>
            <p className="m-0">
              New Zealand owned &amp; operated since 1999
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        .skip-link:focus {
          position: absolute;
          width: auto;
          height: auto;
          padding: var(--space-3) var(--space-4);
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        .desktop-nav { display: none; }
        .menu-toggle { display: inline-flex; }
        .mobile-nav-panel { display: block; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
          .menu-toggle { display: none; }
          .mobile-nav-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default Home
