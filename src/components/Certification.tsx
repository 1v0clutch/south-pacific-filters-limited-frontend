import { useState, useEffect } from 'react'

// URL-encoded path so browsers handle the space in the filename correctly
const PDF_URL = '/certificate/South%20Pacific%20Filters%20Limited%20-%202026.pdf'
const PDF_DOWNLOAD_NAME = 'South Pacific Filters Limited - 2026.pdf'

/**
 * Certification section — displays the company ISO/quality certificate
 * inline on desktop, with a download fallback always visible.
 *
 * Strategy:
 *  - Desktop (≥ 768 px): native <object> embed + visible download button
 *  - Mobile (< 768 px): download button only (native embeds are unreliable
 *    on mobile — many Android browsers trigger a download, iOS Safari only
 *    renders page 1, so we skip the viewer entirely on small viewports)
 */
export default function Certification() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section
      id="certification"
      aria-labelledby="certification-heading"
      className="py-[64px] px-[var(--space-4)] md:px-[var(--space-6)] bg-[#f0fdf4] border-t border-[var(--color-border-subtle)]"
    >
      <div className="container-fd mx-auto">
        {/* Section header — mirrors Contact section header pattern exactly */}
        <div className="mb-[40px] text-center">
          <span
            className="inline-block px-[12px] py-[6px] border border-emerald-700 text-emerald-700 text-[11px] leading-[16px] tracking-[0.05em] uppercase font-medium bg-emerald-700/10 rounded-[4px] mb-[12px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Quality Assurance
          </span>
          <h2
            id="certification-heading"
            className="m-0 text-[32px] leading-[40px] tracking-[-0.02em] font-[800] uppercase text-[var(--color-text-secondary)] mb-[12px]"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Our Certification
          </h2>
          <p
            className="m-0 text-[16px] leading-[24px] text-[var(--color-text-tertiary)] max-w-xl mx-auto font-normal"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            South Pacific Filters Limited holds internationally recognised quality certification, reflecting our commitment to the highest standards of filtration engineering and manufacturing.
          </p>
        </div>

        {/* Viewer area */}
        <div className="max-w-4xl mx-auto">
          {/* Download / Open button — always visible regardless of viewport or embed support */}
          <div className="flex justify-end mb-[16px]">
            <a
              href={PDF_URL}
              download={PDF_DOWNLOAD_NAME}
              className="btn btn--secondary uppercase text-[12px] leading-[16px] tracking-[0.02em] font-medium px-[24px] py-[10px] rounded-[4px] border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors no-underline"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              aria-label="Open or download the certification PDF"
            >
              <svg
                className="inline-block w-4 h-4 mr-[8px] -mt-[1px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0-3-3m3 3 3-3M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 4v6"
                />
              </svg>
              Open / Download PDF
            </a>
          </div>

          {/* Inline viewer — desktop only */}
          {!isMobile ? (
            <div
              className="w-full border border-slate-200 rounded-[4px] shadow-sm overflow-hidden bg-white"
              style={{ height: 'min(80vh, 820px)' }}
            >
              <object
                data={PDF_URL}
                type="application/pdf"
                width="100%"
                height="100%"
                aria-label="South Pacific Filters Limited certification document"
                title="South Pacific Filters Limited - 2026 Certification"
              >
                {/* Fallback: if the browser cannot render the PDF inline */}
                <div className="flex flex-col items-center justify-center h-full gap-[16px] py-[48px] text-center px-[24px]">
                  <svg
                    className="w-12 h-12 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <p
                    className="text-[14px] leading-[20px] text-[var(--color-text-tertiary)]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Your browser cannot display PDFs inline.
                  </p>
                  <a
                    href={PDF_URL}
                    download={PDF_DOWNLOAD_NAME}
                    className="btn btn--primary text-[12px] leading-[16px] tracking-[0.02em] uppercase font-medium px-[24px] py-[10px] rounded-[4px] no-underline"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Download Certificate
                  </a>
                </div>
              </object>
            </div>
          ) : (
            /* Mobile: no inline viewer — just a descriptive card with the download action */
            <div className="bg-white border border-slate-200 rounded-[4px] p-[32px] shadow-sm flex flex-col items-center gap-[20px] text-center">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[4px] bg-[#065f46] text-emerald-200">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  className="text-[16px] leading-[24px] font-[700] text-[var(--color-text-secondary)] mb-[8px] uppercase tracking-[-0.01em]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  South Pacific Filters Limited — 2026
                </h3>
                <p
                  className="text-[13px] leading-[20px] text-[var(--color-text-tertiary)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tap the button above to open or save our quality certification document.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
