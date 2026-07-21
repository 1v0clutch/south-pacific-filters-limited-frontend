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
  return (
    <section
      id="certification"
      aria-labelledby="certification-heading"
      className="py-16 px-(--space-4) md:px-(--space-6) bg-[#f0fdf4] border-t border-(--color-border-subtle)"
    >
      <div className="container-fd mx-auto">
        {/* Section header — mirrors Contact section header pattern exactly */}
        <div className="mb-10 text-center">
          <span
            className="inline-block px-3 py-1.5 border border-emerald-700 text-emerald-700 text-[11px] leading-4 tracking-wider uppercase font-medium bg-emerald-700/10 rounded-sm mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Quality Assurance
          </span>
          <h2
            id="certification-heading"
            className="m-0 text-[32px] leading-10 tracking-[-0.02em] font-extrabold uppercase text-(--color-text-secondary) mb-3"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Our Certification
          </h2>
          <p
            className="m-0 text-[16px] leading-6 text-(--color-text-tertiary) max-w-xl mx-auto font-normal"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            South Pacific Filters Limited holds internationally recognised quality certification, reflecting our commitment to the highest standards of filtration engineering and manufacturing.
          </p>
        </div>

        {/* Viewer area */}
        <div className="max-w-4xl mx-auto">
          {/* Download / Open button — always visible regardless of viewport or embed support */}
          <div className="flex justify-center mb-4">
            <a
              href={PDF_URL}
              download={PDF_DOWNLOAD_NAME}
              className="btn btn--secondary uppercase text-[12px] leading-4 tracking-[0.02em] font-medium px-6 py-2.5 rounded-sm border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors no-underline"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              aria-label="Open or download the certification PDF"
            >
              <svg
                className="inline-block w-4 h-4 mr-2 -mt-px"
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
        </div>
      </div>
    </section>
  )
}

