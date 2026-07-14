import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    <div className="min-h-screen bg-[var(--color-surface-strong)]">
      <Navbar />

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

          {/* Overlay content (slower parallax removed to fix button bug) */}
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="container-fd mx-auto w-full px-[var(--space-4)] sm:px-[var(--space-5)] lg:px-[var(--space-6)] grid grid-cols-1 md:grid-cols-12 gap-[24px] items-center">
              <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start text-left space-y-[32px]">
                <span
                  className="inline-block px-[12px] py-[6px] border border-[var(--color-text-accent-on-dark)] text-[var(--color-text-accent-on-dark)] text-[12px] leading-[16px] tracking-[0.05em] uppercase font-medium bg-[var(--color-text-accent-on-dark)]/10 rounded-[4px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Industrial Excellence
                </span>
                <h1
                  id="hero-heading"
                  className="m-0 text-[48px] leading-[56px] tracking-[-0.02em] font-[800] uppercase text-[var(--color-text-on-dark)]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Advanced Filtration Solutions for Every Industry
                </h1>
                <p
                  className="m-0 text-[16px] leading-[32px] text-[var(--color-text-muted-on-dark)] max-w-2xl font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Engineered for precision and built to withstand the most demanding environments. We provide comprehensive filtration systems for air, liquid, and gas applications.
                </p>
                <div className="flex flex-wrap gap-[16px] pt-[8px]">
                  <button
                    className="btn btn--primary uppercase text-[14px] leading-[20px] tracking-[0.02em] font-medium px-[40px] py-[16px] rounded-[4px] shadow-none"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    View Products
                  </button>
                  <button
                    className="btn btn--secondary-on-dark uppercase text-[14px] leading-[20px] tracking-[0.02em] font-medium px-[40px] py-[16px] rounded-[4px] shadow-none"
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
          className="py-[96px] px-[var(--space-4)] md:px-[var(--space-6)] bg-[var(--color-surface-base)] border-b border-[var(--color-border-subtle)]"
        >
          <div className="container-fd mx-auto grid grid-cols-1 md:grid-cols-12 gap-[64px] items-center">
            <div className="md:col-span-5 flex flex-col gap-[24px]">
              <h2
                className="m-0 text-[32px] leading-[40px] tracking-[-0.01em] font-[700] uppercase border-l-4 border-[var(--color-text-inverse)] pl-[24px] text-[var(--color-text-secondary)]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Who We Are
              </h2>
              <p
                className="m-0 text-[18px] leading-[28px] text-[var(--color-text-tertiary)] font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                South Pacific Filters Limited is a premier provider of industrial filtration technology. We deliver high-performance solutions designed to optimize critical processes across manufacturing, energy, and commercial sectors.
              </p>
              <p
                className="m-0 text-[18px] leading-[28px] text-[var(--color-text-tertiary)] font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our commitment to architectural rigor and technical precision ensures that every product meets stringent international standards, providing unmatched reliability and operational efficiency.
              </p>
              <div className="pt-[8px]">
                <a
                  className="inline-flex items-center gap-[12px] text-[var(--color-text-inverse)] uppercase text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:gap-[16px] transition-all no-underline"
                  href="#standards"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Learn more about our standards
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="md:col-span-7 relative">
              <div className="absolute -inset-[16px] border border-[var(--color-text-inverse)] opacity-10 translate-x-[16px] translate-y-[16px]"></div>
              <img
                className="relative z-10 w-full h-auto object-cover grayscale border border-[var(--color-border-subtle)] aspect-video rounded-[4px]"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Industrial Filtration Facility"
              />
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA */}
        <section id="catalogue" className="py-[96px] px-[var(--space-4)] md:px-[var(--space-6)] bg-[var(--color-surface-base)] text-[var(--color-text-secondary)] border-t border-[var(--color-border-subtle)]">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-[40px]">
            <h2
              className="m-0 text-[48px] leading-[56px] tracking-[-0.02em] font-[800] uppercase"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Ready to Optimize Your Systems?
            </h2>
            <p
              className="m-0 text-[18px] leading-[28px] text-[var(--color-text-tertiary)] max-w-2xl mx-auto font-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact our engineering team today to discuss technical specifications, bulk orders, or custom filtration requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-[24px] pt-[16px]">
              <button
                className="btn btn--secondary uppercase text-[14px] leading-[20px] tracking-[0.02em] font-medium px-[48px] py-[16px] rounded-[4px] border-[var(--color-text-inverse)] text-[var(--color-text-inverse)] hover:bg-[var(--color-text-inverse)] hover:text-[var(--color-border-default)]"
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
          className="py-[64px] px-[var(--space-4)] md:px-[var(--space-6)] bg-[#f0fdf4] border-t border-[var(--color-border-subtle)]"
        >
          <div className="container-fd mx-auto">
            {/* Section Header */}
            <div className="mb-[40px] text-center">
              <span
                className="inline-block px-[12px] py-[6px] border border-emerald-700 text-emerald-700 text-[11px] leading-[16px] tracking-[0.05em] uppercase font-medium bg-emerald-700/10 rounded-[4px] mb-[12px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Get in Touch
              </span>
              <h2
                className="m-0 text-[32px] leading-[40px] tracking-[-0.02em] font-[800] uppercase text-[var(--color-text-secondary)] mb-[12px]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Contact Our Team
              </h2>
              <p
                className="m-0 text-[16px] leading-[24px] text-[var(--color-text-tertiary)] max-w-xl mx-auto font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Tell us about your filtration requirements — our engineering team will recommend the right solutions for your facility.
              </p>
            </div>

            {/* Form and Contact Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-6xl mx-auto">
              {/* Left Side - Contact Form */}
              <div className="bg-white border border-slate-200 rounded-[4px] p-[32px] shadow-sm">
                <form className="space-y-[20px]">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-[12px] leading-[16px] font-medium text-[var(--color-text-secondary)] mb-[6px] uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-[12px] py-[10px] border border-slate-300 rounded-[4px] text-[14px] leading-[20px] text-[var(--color-text-secondary)] bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="Your full name"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-[12px] leading-[16px] font-medium text-[var(--color-text-secondary)] mb-[6px] uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-[12px] py-[10px] border border-slate-300 rounded-[4px] text-[14px] leading-[20px] text-[var(--color-text-secondary)] bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="your.email@company.com"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-phone" 
                      className="block text-[12px] leading-[16px] font-medium text-[var(--color-text-secondary)] mb-[6px] uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      className="w-full px-[12px] py-[10px] border border-slate-300 rounded-[4px] text-[14px] leading-[20px] text-[var(--color-text-secondary)] bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                      placeholder="+679 XXX XXXX"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-message" 
                      className="block text-[12px] leading-[16px] font-medium text-[var(--color-text-secondary)] mb-[6px] uppercase tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-[12px] py-[10px] border border-slate-300 rounded-[4px] text-[14px] leading-[20px] text-[var(--color-text-secondary)] bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors resize-none"
                      placeholder="Tell us about your filtration requirements..."
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn--primary uppercase text-[12px] leading-[16px] tracking-[0.02em] font-medium px-[32px] py-[12px] rounded-[4px] shadow-none"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col gap-[20px]">
                {/* Email & Phone Container */}
                <div className="bg-white border border-slate-200 rounded-[4px] p-[32px] shadow-sm">
                  <div className="mb-[24px]">
                    <div className="mb-[12px] flex h-[40px] w-[40px] items-center justify-center rounded-[4px] bg-[#065f46] text-emerald-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <h3
                      className="text-[16px] leading-[24px] font-[700] text-[var(--color-text-secondary)] mb-[8px] uppercase tracking-[-0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Email Us
                    </h3>
                    <p
                      className="text-[12px] leading-[18px] text-[var(--color-text-tertiary)] mb-[8px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      For general inquiries and quotes
                    </p>
                    <a
                      href="mailto:info@southpacificfilters.com"
                      className="inline-flex text-[12px] leading-[16px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors no-underline tracking-[0.02em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      info@southpacificfilters.com
                    </a>
                  </div>

                  <div className="border-t border-slate-200 pt-[24px]">
                    <div className="mb-[12px] flex h-[40px] w-[40px] items-center justify-center rounded-[4px] bg-[#065f46] text-emerald-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <h3
                      className="text-[16px] leading-[24px] font-[700] text-[var(--color-text-secondary)] mb-[8px] uppercase tracking-[-0.01em]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      Call Us
                    </h3>
                    <p
                      className="text-[12px] leading-[18px] text-[var(--color-text-tertiary)] mb-[8px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a
                      href="tel:+6793301234"
                      className="inline-flex text-[12px] leading-[16px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors no-underline tracking-[0.02em]"
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