import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from '../assets/logo.png'

type DropdownKey = 'airFilters' | 'filterMedia' | null

const airFilterItems = [
  { label: 'Panel Filters', href: '/products/variants/panel-filters' },
  { label: 'Pocket Filters', href: '/products/variants/pocket-filters' },
  { label: 'HEPA Filters', href: '/products/variants/hepa-filters' },
  { label: 'Carbon Filters', href: '/products/variants/carbon-filters' },
  { label: 'HVAC Filters', href: '/products/variants/hvac-filters' },
]

const filterMediaItems = [
  { label: 'Synthetic Media', href: '/products/variants/synthetic-media' },
  { label: 'Glass Fiber', href: '/products/variants/glass-fiber' },
  { label: 'Activated Carbon', href: '/products/variants/activated-carbon' },
  { label: 'Nonwoven Media', href: '/products/variants/nonwoven-media' },
]

const locations = [
  'Suva, Fiji',
  'Nadi, Fiji',
  'Port Vila, Vanuatu',
  'Honiara, Solomon Islands',
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAirOpen, setMobileAirOpen] = useState(false)
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false)
    setMobileAirOpen(false)
    setMobileMediaOpen(false)
    setOpenDropdown(null)
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  function toggleDropdown(key: Exclude<DropdownKey, null>) {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  function closeMobile() {
    setMobileOpen(false)
    setMobileAirOpen(false)
    setMobileMediaOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-slate-900 antialiased">
      {/* Sticky Navbar */}
      <header
        ref={navRef}
        className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            <img
              src={logo}
              alt="South Pacific Filters Limited"
              className="h-9 w-9 rounded-sm object-contain sm:h-10 sm:w-10"
            />
            <span className="font-display hidden text-sm font-semibold tracking-tight text-slate-900 sm:block sm:text-base">
              South Pacific Filters
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link to="/home" className="nav-link">
              HOME
            </Link>

            <div className="relative">
              <button
                type="button"
                className="nav-link inline-flex items-center gap-1.5"
                aria-expanded={openDropdown === 'airFilters'}
                aria-haspopup="true"
                onClick={() => toggleDropdown('airFilters')}
              >
                AIR FILTERS
                <ChevronIcon open={openDropdown === 'airFilters'} />
              </button>
              <div
                className={`absolute right-0 top-full z-50 mt-2 w-56 origin-top-right rounded-lg border border-slate-200 bg-white py-2 shadow-lg shadow-slate-900/8 transition-all duration-200 ${
                  openDropdown === 'airFilters'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
                role="menu"
              >
                {airFilterItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                className="nav-link inline-flex items-center gap-1.5"
                aria-expanded={openDropdown === 'filterMedia'}
                aria-haspopup="true"
                onClick={() => toggleDropdown('filterMedia')}
              >
                FILTER MEDIA
                <ChevronIcon open={openDropdown === 'filterMedia'} />
              </button>
              <div
                className={`absolute right-0 top-full z-50 mt-2 w-56 origin-top-right rounded-lg border border-slate-200 bg-white py-2 shadow-lg shadow-slate-900/8 transition-all duration-200 ${
                  openDropdown === 'filterMedia'
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
                role="menu"
              >
                {filterMediaItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#about" className="nav-link">
              ABOUT
            </a>
            <a href="/#catalogue" className="nav-link">
              CATALOGUE
            </a>
            <a
              href="/#contact"
              className="ml-2 rounded-full bg-[#065f46] px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-50 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-out lg:hidden ${
            mobileOpen ? 'max-h-[min(85vh,720px)] opacity-100' : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            <Link to="/" className="mobile-link" onClick={closeMobile}>
              HOME
            </Link>

            <div>
              <button
                type="button"
                className="mobile-link flex w-full items-center justify-between"
                aria-expanded={mobileAirOpen}
                onClick={() => setMobileAirOpen((prev) => !prev)}
              >
                AIR FILTERS
                <ChevronIcon open={mobileAirOpen} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileAirOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-emerald-200 pl-3">
                  {airFilterItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="mobile-link flex w-full items-center justify-between"
                aria-expanded={mobileMediaOpen}
                onClick={() => setMobileMediaOpen((prev) => !prev)}
              >
                FILTER MEDIA
                <ChevronIcon open={mobileMediaOpen} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileMediaOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-emerald-200 pl-3">
                  {filterMediaItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="/#about" className="mobile-link" onClick={closeMobile}>
              ABOUT
            </a>
            <a href="/#catalogue" className="mobile-link" onClick={closeMobile}>
              CATALOGUE
            </a>
            <a
              href="/#contact"
              className="mt-2 rounded-full bg-[#065f46] px-4 py-3 text-center text-sm font-semibold tracking-wide text-white"
              onClick={closeMobile}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#064e3b] text-slate-300" role="contentinfo">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src={logo} alt="" className="h-9 w-9 object-contain" />
              <span className="font-display text-sm font-semibold text-white">South Pacific Filters</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Leading clean air solutions for industry, healthcare, and commercial facilities across the South Pacific.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white uppercase">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="transition hover:text-emerald-300">Home</Link></li>
              <li><a href="/#about" className="transition hover:text-emerald-300">About</a></li>
              <li><a href="/#industries" className="transition hover:text-emerald-300">Industries</a></li>
              <li><a href="/#catalogue" className="transition hover:text-emerald-300">Catalogue</a></li>
              <li><a href="/#contact" className="transition hover:text-emerald-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white uppercase">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/products/variants/hepa-filters" className="transition hover:text-emerald-300">HEPA Filters</Link></li>
              <li><Link to="/products/variants/hvac-filters" className="transition hover:text-emerald-300">HVAC Filters</Link></li>
              <li><Link to="/products/variants/synthetic-media" className="transition hover:text-emerald-300">Synthetic Media</Link></li>
              <li><Link to="/products/variants/activated-carbon" className="transition hover:text-emerald-300">Activated Carbon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-white uppercase">Locations</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {locations.map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p>&copy; {new Date().getFullYear()} South Pacific Filters Limited. All rights reserved.</p>
            <p>Clean air solutions for the Pacific region.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
