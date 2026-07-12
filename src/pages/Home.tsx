/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useId, useRef, useState } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
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

const productLinks = [
  { label: 'Panel Filters', href: '#panel-filters' },
  { label: 'Pocket Filters', href: '#pocket-filters' },
  { label: 'HEPA Filters', href: '#hepa-filters' },
  { label: 'Filter Media', href: '#filter-media' },
  { label: 'Holding Frames', href: '#holding-frames' },
]

function Home() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAirOpen, setMobileAirOpen] = useState(false)
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false)
  const [heroScrollY, setHeroScrollY] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  const headerRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const airMenuId = useId()
  const mediaMenuId = useId()
  const mobileNavId = useId()

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

  return (
    <div className="min-h-screen bg-[var(--color-surface-strong)]">
      {/* Skip link — keyboard-first */}
      <a
        href="#main-content"
        className="sr-only skip-link rounded-[var(--radius-xs)] left-[var(--space-4)] top-[var(--space-4)] z-[100] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] shadow-[var(--shadow-1)]"
      >
        Skip to main content
      </a>

      {/* Sticky Navbar — slides out on scroll-down, back in on scroll-up */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface-elevated)] border-b border-[var(--color-border-subtle)] shadow-[var(--shadow-1)] will-change-transform ${reduceMotion ? '' : 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
          }`}
        style={{
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="flex items-center justify-between gap-[var(--space-4)] min-h-[96px] px-[var(--space-6)] w-full relative">
          <a
            href="#home"
            className="inline-flex items-center no-underline text-[var(--color-text-secondary)] min-h-[44px] py-[var(--space-2)]"
          >
            <img
              src={logo}
              alt="South Pacific Filters Limited"
              width={80}
              height={80}
              className="w-20 h-20 object-contain block"
            />
          </a>

          {/* Desktop navigation (primary of 3 nav regions) */}
          <nav
            aria-label="Primary"
            className="desktop-nav items-center gap-[var(--space-5)] absolute left-1/2 -translate-x-1/2"
          >
            <a href="/" className="nav-link">
              Home
            </a>

            <div className="relative">
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
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-75 ease-out ${openDropdown === "airFilters" ? 'rotate-180' : 'rotate-0'
                    }`}
                  aria-hidden="true"
                />
              </button>
              <ul
                id={airMenuId}
                role="menu"
                aria-label="Air Filters"
                className={`absolute right-0 top-full mt-[var(--space-2)] min-w-[220px] list-none m-0 py-[var(--space-2)] bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-[var(--radius-xs)] shadow-[var(--shadow-1)] z-[60] transition-opacity duration-75 ease-out transition-transform duration-75 ease-out ${openDropdown === "airFilters"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
              >
                {airFilterItems.map((item) => (
                  <li key={item.label} role="none">
                    <a
                      href={item.href}
                      role="menuitem"
                      className="text-link block py-[var(--space-3)] px-[var(--space-4)] no-underline text-[var(--color-text-secondary)] text-[length:var(--font-size-xs)] font-normal hover:bg-[color-mix(in_srgb,var(--color-text-inverse)_10%,transparent)] hover:text-[var(--color-text-inverse)]"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
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
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-75 ease-out ${openDropdown === "filterMedia" ? 'rotate-180' : 'rotate-0'
                    }`}
                  aria-hidden="true"
                />
              </button>
              <ul
                id={mediaMenuId}
                role="menu"
                aria-label="Filter Media"
                className={`absolute right-0 top-full mt-[var(--space-2)] min-w-[220px] list-none m-0 py-[var(--space-2)] bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-[var(--radius-xs)] shadow-[var(--shadow-1)] z-[60] transition-opacity duration-75 ease-out transition-transform duration-75 ease-out ${openDropdown === "filterMedia"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
              >
                {filterMediaItems.map((item) => (
                  <li key={item.label} role="none">
                    <a
                      href={item.href}
                      role="menuitem"
                      className="block py-[var(--space-3)] px-[var(--space-4)] no-underline text-[var(--color-text-secondary)] text-[length:var(--font-size-xs)] font-normal hover:bg-[color-mix(in_srgb,var(--color-text-inverse)_10%,transparent)] hover:text-[var(--color-text-inverse)]"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#catalogue" className="nav-link">
              Catalogue
            </a>
            <a href="#about" className="nav-link">
              About
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
            className="menu-toggle flex items-center justify-center min-w-[44px] min-h-[44px] rounded-[var(--radius-xs)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="w-[22px] h-[22px]" aria-hidden="true" /> : <Menu className="w-[22px] h-[22px]" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile navigation panel */}
        <div
          id={mobileNavId}
          className="mobile-nav-panel border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] overflow-auto transition-[max-height] duration-[var(--motion-duration-fast)] ease-out transition-opacity duration-[var(--motion-duration-fast)] ease-out"
          hidden={!mobileOpen}
          style={{
            maxHeight: mobileOpen ? "min(85vh, 720px)" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-[var(--space-1)] p-[var(--space-4)]"
          >
            <a
              href="#home"
              className="nav-link w-full"
              onClick={closeMobile}
            >
              Home
            </a>

            <div>
              <button
                type="button"
                className="nav-link w-full justify-between"
                aria-expanded={mobileAirOpen}
                onClick={() => setMobileAirOpen((prev) => !prev)}
              >
                Air Filters
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-75 ease-out ${mobileAirOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  aria-hidden="true"
                />
              </button>
              {mobileAirOpen && (
                <ul className="list-none m-0 pl-[var(--space-4)] border-l-2 border-[var(--color-text-inverse)] ml-[var(--space-3)]">
                  {airFilterItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        className="block py-[var(--space-3)] text-[var(--color-text-tertiary)] no-underline text-[length:var(--font-size-xs)] min-h-[44px]"
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
                className="nav-link w-full justify-between"
                aria-expanded={mobileMediaOpen}
                onClick={() => setMobileMediaOpen((prev) => !prev)}
              >
                Filter Media
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-75 ease-out ${mobileMediaOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  aria-hidden="true"
                />
              </button>
              {mobileMediaOpen && (
                <ul className="list-none m-0 pl-[var(--space-4)] border-l-2 border-[var(--color-text-inverse)] ml-[var(--space-3)]">
                  {filterMediaItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMobile}
                        className="block py-[var(--space-3)] text-[var(--color-text-tertiary)] no-underline text-[length:var(--font-size-xs)] min-h-[44px]"
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
              className="nav-link w-full"
              onClick={closeMobile}
            >
              About
            </a>
            <a
              href="#catalogue"
              className="nav-link w-full"
              onClick={closeMobile}
            >
              Catalogue
            </a>
            <a
              href="#contact"
              className="nav-link w-full"
              onClick={closeMobile}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Navbar height spacer — keeps content from sitting behind the fixed nav */}
      <div aria-hidden="true" className="h-[96px]" />

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
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        className="bg-[var(--color-surface-base)] text-[var(--color-text-muted-on-dark)]"
      >
        <div className="container-fd px-[var(--space-5)] py-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* Quick Links */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Quick links
              </h3>
              <ul className="list-none m-0 mt-2 p-0 grid gap-1">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
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
              <ul className="list-none m-0 mt-2 p-0 grid gap-1">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
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
                Socials
              </h3>
              <ul className="list-none m-0 mt-2 p-0 grid gap-2">
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
                  >
                    <FaFacebook className="w-[18px] h-[18px]" aria-hidden="true" /> South Pacific Filters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
                  >
                    <FaInstagram className="w-[18px] h-[18px]" aria-hidden="true" /> South Pacific Filters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
                  >
                    <FaLinkedin className="w-[18px] h-[18px]" aria-hidden="true" /> South Pacific Filters
                  </a>
                </li>
              </ul>
            </div>

            {/* Let's Connect */}
            <div>
              <h3 className="m-0 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Let's connect
              </h3>
              <ul className="list-none m-0 mt-2 p-0 grid gap-2">
                <li>
                  <a
                    href="tel:+6496345314"
                    className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
                  >
                    <Phone className="w-[18px] h-[18px]" aria-hidden="true" /> 09 634 5314
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer"
                  >
                    <Mail className="w-[18px] h-[18px]" aria-hidden="true" /> info@example.com
                  </a>
                </li>
              </ul>
              <h4 className="m-0 mt-6 text-[length:var(--font-size-xs)] font-semibold tracking-widest uppercase text-[var(--color-text-on-dark)]">
                Location
              </h4>
              <ul className="list-none m-0 mt-2 p-0 grid gap-2">
                <li>
                  <a className="inline-flex items-center gap-2 min-h-[30px] text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)] no-underline transition-colors duration-150 hover:text-[var(--color-text-on-dark)] cursor-pointer">
                    <MapPin className="w-[18px] h-[18px]" aria-hidden="true" />
                    Manila, Philippines
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider + copyright */}
          <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[length:var(--font-size-xs)] text-[var(--color-text-muted-on-dark)]">
            <p className="m-0">
              &copy; {new Date().getFullYear()} South Pacific Filters Limited. All rights reserved.
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
