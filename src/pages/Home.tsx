import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Certification from '../components/Certification'
import heroVideo from '../assets/Air_Purifier_Cropped_3m05s.mp4'

function Home() {
  const [heroScrollY, setHeroScrollY] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [enableParallax, setEnableParallax] = useState(false)

  const heroRef = useRef<HTMLElement>(null)

  /* Check screen size for parallax — only enable on larger screens */
  useEffect(() => {
    const checkScreenSize = () => {
      setEnableParallax(window.innerWidth >= 1024)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  /* Hero parallax — disabled when user prefers reduced motion or on small screens */
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(motionQuery.matches)
    syncMotion()
    motionQuery.addEventListener('change', syncMotion)

    let frame = 0
    function onScroll() {
      if (motionQuery.matches || !enableParallax) return
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
  }, [enableParallax])

  const videoParallax = (reduceMotion || !enableParallax) ? 0 : heroScrollY * 0.45

  return (
    <div className="min-h-screen bg-(--color-surface-strong) overflow-x-hidden">
      <Navbar />

      {/* Navbar height spacer — keeps content from sitting behind the fixed nav */}
      <div aria-hidden="true" className="h-24" />

      <main id="main-content">
        {/* Hero — fullscreen video + overlay + scroll parallaxs */}
        <section
          ref={heroRef}
          id="home"
          aria-labelledby="hero-heading"
          className="relative isolate h-svh min-h-128 w-full overflow-hidden bg-(--color-surface-base) text-(--color-text-on-dark)"
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
                src={heroVideo}
                type="video/mp4"
              />
            </video>
          </div>

          {/* Readable dark overlays */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/75 via-black/55 to-black/80"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
            aria-hidden="true"
          />

          {/* Overlay content (slower parallax removed to fix button bug) */}
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-12 flex flex-col items-center text-center space-y-8">
                <span
                  className="inline-block px-3 py-1.5 border border-(--color-text-accent-on-dark) text-(--color-text-accent-on-dark) text-[12px] leading-4 tracking-wider uppercase font-medium bg-(--color-text-accent-on-dark)/10 rounded-sm"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Industrial Excellence
                </span>
                <h1
                  id="hero-heading"
                  className="m-0 text-[32px] leading-10 sm:text-[40px] sm:leading-12 lg:text-[48px] lg:leading-14 tracking-[-0.02em] font-extrabold uppercase text-(--color-text-on-dark)"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Advanced Filtration Solutions for Every Industry
                </h1>
                <p
                  className="m-0 text-[14px] leading-6 sm:text-[16px] sm:leading-8 text-(--color-text-muted-on-dark) max-w-2xl font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Engineered for precision and built to withstand the most demanding environments. We provide comprehensive filtration systems for air, liquid, and gas applications.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 items-center justify-center">
                  <button
                    className="btn btn--primary uppercase text-[14px] leading-5 tracking-[0.02em] font-medium px-10 py-4 rounded-sm shadow-none"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    View Products
                  </button>
                  <button
                    className="btn btn--secondary-on-dark uppercase text-[14px] leading-5 tracking-[0.02em] font-medium px-10 py-4 rounded-sm shadow-none"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Technical Specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section
          id="about"
          className="py-24 px-4 sm:px-6 lg:px-16 bg-(--color-surface-base) border-b border-(--color-border-subtle)"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 flex flex-col gap-6">
              <h2
                className="m-0 text-[32px] leading-10 tracking-[-0.01em] font-bold uppercase border-l-4 border-(--color-text-inverse) pl-6 text-(--color-text-secondary)"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Who We Are
              </h2>
              <p
                className="m-0 text-[18px] leading-7 text-(--color-text-tertiary) font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                South Pacific Filters Limited is a premier provider of industrial filtration technology. We deliver high-performance solutions designed to optimize critical processes across manufacturing, energy, and commercial sectors.
              </p>
              <p
                className="m-0 text-[18px] leading-7 text-(--color-text-tertiary) font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our commitment to architectural rigor and technical precision ensures that every product meets stringent international standards, providing unmatched reliability and operational efficiency.
              </p>
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-3 text-(--color-text-inverse) uppercase text-[14px] leading-5 tracking-[0.02em] font-medium hover:gap-4 transition-all no-underline"
                  href="#standards"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Learn more about our standards
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="md:col-span-7 relative">
              <div className="absolute -inset-4 border border-(--color-text-inverse) opacity-10 translate-x-4 translate-y-4"></div>
              <img
                className="relative z-10 w-full h-auto object-cover grayscale border border-(--color-border-subtle) aspect-video rounded-sm"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Industrial Filtration Facility"
              />
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <Certification />

        {/* Pre-Footer CTA */}
        <section id="catalogue" className="py-24 px-4 sm:px-6 lg:px-16 bg-(--color-surface-base) text-(--color-text-secondary) border-t border-(--color-border-subtle)">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
            <h2
              className="m-0 text-[48px] leading-14 tracking-[-0.02em] font-extrabold uppercase"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Ready to Optimize Your Systems?
            </h2>
            <p
              className="m-0 text-[18px] leading-7 text-(--color-text-tertiary) max-w-2xl mx-auto font-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact our engineering team today to discuss technical specifications, bulk orders, or custom filtration requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button
                className="btn btn--secondary uppercase text-[14px] leading-5 tracking-[0.02em] font-medium px-12 py-4 rounded-sm border-(--color-text-inverse) text-(--color-text-inverse) hover:bg-(--color-text-inverse) hover:text-(--color-border-default)"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Download Catalog PDF
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section 
          id="contact" 
          className="py-16 px-4 sm:px-6 lg:px-16 bg-[#f0fdf4] border-t border-(--color-border-subtle)"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-10 text-center">
              <span
                className="inline-block px-3 py-1.5 border border-emerald-700 text-emerald-700 text-[11px] leading-4 tracking-wider uppercase font-medium bg-emerald-700/10 rounded-sm mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Get in Touch
              </span>
              <h2
                className="m-0 text-[32px] leading-10 tracking-[-0.02em] font-extrabold uppercase text-(--color-text-secondary) mb-3"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Contact Our Team
              </h2>
              <p
                className="m-0 text-[16px] leading-6 text-(--color-text-tertiary) max-w-xl mx-auto font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Tell us about your filtration requirements — our engineering team will recommend the right solutions for your facility.
              </p>
            </div>

            {/* Form and Contact Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Left Side - Contact Form */}
              <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
                <form className="space-y-5">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-[12px] leading-4 font-medium text-(--color-text-secondary) mb-1.5 uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-3 py-3 min-h-11 border border-slate-300 rounded-sm text-[14px] leading-5 text-(--color-text-secondary) bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="Your full name"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-[12px] leading-4 font-medium text-(--color-text-secondary) mb-1.5 uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-3 py-3 min-h-11 border border-slate-300 rounded-sm text-[14px] leading-5 text-(--color-text-secondary) bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="your.email@company.com"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-phone" 
                      className="block text-[12px] leading-4 font-medium text-(--color-text-secondary) mb-1.5 uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="w-full px-3 py-3 min-h-11 border border-slate-300 rounded-sm text-[14px] leading-5 text-(--color-text-secondary) bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="+679 XXX XXXX"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-[12px] leading-4 font-medium text-(--color-text-secondary) mb-1.5 uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-3 min-h-30 border border-slate-300 rounded-sm text-[14px] leading-5 text-(--color-text-secondary) bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors resize-none"
                      placeholder="Tell us about your filtration requirements..."
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn--primary uppercase text-[12px] leading-4 tracking-[0.02em] font-medium px-8 py-3 rounded-sm shadow-none"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col gap-5">
                {/* Email & Phone Container */}
                <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm">
                  <div className="mb-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-[#065f46] text-emerald-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <h3
                      className="text-[16px] leading-6 font-bold text-(--color-text-secondary) mb-2 uppercase tracking-[-0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Email Us
                    </h3>
                    <p
                      className="text-[12px] leading-4.5 text-(--color-text-tertiary) mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      For general inquiries and quotes
                    </p>
                    <a
                      href="mailto:info@southpacificfilters.com"
                      className="inline-flex text-[12px] leading-4 font-medium text-emerald-700 hover:text-emerald-800 transition-colors no-underline tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      info@southpacificfilters.com
                    </a>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-[#065f46] text-emerald-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <h3
                      className="text-[16px] leading-6 font-bold text-(--color-text-secondary) mb-2 uppercase tracking-[-0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Call Us
                    </h3>
                    <p
                      className="text-[12px] leading-4.5 text-(--color-text-tertiary) mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a
                      href="tel:+6793301234"
                      className="inline-flex text-[12px] leading-4 font-medium text-emerald-700 hover:text-emerald-800 transition-colors no-underline tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      +679 330 1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home