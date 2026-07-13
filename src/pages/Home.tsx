import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  const [heroScrollY, setHeroScrollY] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  const heroRef = useRef<HTMLElement>(null)

  /* Hero parallax — disabled when user prefers reduced motion test*/
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

  const videoParallax = reduceMotion ? 0 : heroScrollY * 0.45

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
        <section className="py-[96px] px-[var(--space-4)] md:px-[var(--space-6)] bg-[var(--color-surface-base)] text-[var(--color-text-secondary)] border-t border-[var(--color-border-subtle)]">
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
      </main>

      <Footer />
    </div>
  );
}

export default Home