import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

// Import product images (using lowercase extension for TypeScript)
import panelFiltersImg from '../assets/panel-filters.PNG?url'
import bagFiltersImg from '../assets/bag-filters.PNG?url'
import hepaFiltersImg from '../assets/hepa-filters.PNG?url'
import activatedCarbonImg from '../assets/activated-carbon-filters.PNG?url'
import compactFiltersImg from '../assets/compact-filters.PNG?url'
import sprayBoothFiltersImg from '../assets/spray-booth-filters.PNG?url'
import greaseFiltersImg from '../assets/grease-filters.PNG?url'
import holdingFramesImg from '../assets/holding-frames.PNG?url'
import homeVentilationImg from '../assets/home-ventilation.PNG?url'
import coolerMediaImg from '../assets/cooler-media.PNG?url'
import sprayBoothMediaImg from '../assets/spray-booth-media.PNG?url'
import syntheticMediaImg from '../assets/synthetic-media.PNG?url'

type DropdownKey = 'airFilters' | 'filterMedia' | null

const airFilterItems = [
  { label: 'Panel Filters', href: '/products/panel-filters', image: panelFiltersImg },
  { label: 'Bag Filters', href: '/products/bag-filters', image: bagFiltersImg },
  { label: 'HEPA Filters', href: '/products/hepa-filters', image: hepaFiltersImg },
  { label: 'Activated Carbon Filters', href: '/products/activated-carbon-filters', image: activatedCarbonImg },
  { label: 'Compact Filters', href: '/products/compact-filters', image: compactFiltersImg },
  { label: 'Spray Booth Filters', href: '/products/spray-booth-filters', image: sprayBoothFiltersImg },
  { label: 'Grease Filters', href: '/products/grease-filters', image: greaseFiltersImg },
  { label: 'Holding Frames', href: '/products/holding-frames', image: holdingFramesImg },
  { label: 'Home Ventilation', href: '/products/home-ventilation', image: homeVentilationImg },
]

const filterMediaItems = [
  { label: 'Cooler Media', href: '/products/cooler-media', image: coolerMediaImg },
  { label: 'Spray Booth Media', href: '/products/spray-booth-media', image: sprayBoothMediaImg },
  { label: 'Synthetic Media', href: '/products/synthetic-media', image: syntheticMediaImg },
]

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAirOpen, setMobileAirOpen] = useState(false)
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  const headerRef = useRef<HTMLElement>(null)
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

  /* Reduced motion detection */
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(motionQuery.matches)
    syncMotion()
    motionQuery.addEventListener('change', syncMotion)
    return () => {
      motionQuery.removeEventListener('change', syncMotion)
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

  function toggleDropdown(key: Exclude<DropdownKey, null>) {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileAirOpen(false)
    setMobileMediaOpen(false)
  }

  return (
    <>
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
        <div className="flex items-center justify-between gap-[32px] min-h-[96px] px-[32px] lg:px-[64px] w-full relative">
          <a
            href="/"
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
            className="desktop-nav items-center gap-[32px] absolute left-1/2 -translate-x-1/2 text-[14px] leading-[20px] tracking-[0.02em] font-medium uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
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
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-[16px] w-[520px] list-none m-0 p-[24px] bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-[8px] shadow-lg z-[60] transition-all duration-150 ease-out ${openDropdown === "airFilters"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-[8px] pointer-events-none"
                  }`}
              >
                <div className="grid grid-cols-3 gap-[16px]">
                  {airFilterItems.map((item) => (
                    <li key={item.label} role="none" className="flex">
                      <a
                        href={item.href}
                        role="menuitem"
                        className="flex flex-col items-center justify-center text-center p-[12px] rounded-[8px] no-underline text-[var(--color-text-secondary)] hover:bg-[color-mix(in_srgb,var(--color-text-inverse)_5%,transparent)] hover:text-[var(--color-text-inverse)] transition-all duration-200 w-full min-h-[140px] group"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="mb-[8px] flex-shrink-0 w-full aspect-square max-w-[64px] overflow-hidden rounded-[6px] group-hover:border-[var(--color-text-inverse)] transition-all duration-200 group-hover:shadow-md">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span
                          className="text-[12px] leading-[16px] font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </div>
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
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-[16px] w-[520px] list-none m-0 p-[24px] bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] rounded-[8px] shadow-lg z-[60] transition-all duration-150 ease-out ${openDropdown === "filterMedia"
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-[8px] pointer-events-none"
                  }`}
              >
                <div className="grid grid-cols-3 gap-[16px]">
                  {filterMediaItems.map((item) => (
                    <li key={item.label} role="none" className="flex">
                      <a
                        href={item.href}
                        role="menuitem"
                        className="flex flex-col items-center justify-center text-center p-[12px] rounded-[8px] no-underline text-[var(--color-text-secondary)] hover:bg-[color-mix(in_srgb,var(--color-text-inverse)_5%,transparent)] hover:text-[var(--color-text-inverse)] transition-all duration-200 w-full min-h-[140px] group"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="mb-[8px] flex-shrink-0 w-full aspect-square max-w-[64px] overflow-hidden rounded-[6px] group-hover:border-[var(--color-text-inverse)] transition-all duration-200 group-hover:shadow-md">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span
                          className="text-[12px] leading-[16px] font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            <a href="/#catalogue" className="nav-link">
              Catalogue
            </a>        
            <a href="/#about" className="nav-link">
              About
            </a>
            <a
              href="/#contact"
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
              href="/#about"
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
              href="/#contact"
              className="nav-link w-full"
              onClick={closeMobile}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

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
    </>
  )
}

export default Navbar