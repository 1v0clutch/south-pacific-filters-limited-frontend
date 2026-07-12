import Layout from '../components/Layout'

const stats = [
  { value: '25+', label: 'Years of excellence' },
  { value: '12', label: 'Locations across the Pacific' },
  { value: '500+', label: 'Industrial clients served' },
  { value: '98%', label: 'On-time delivery rate' },
]

const industries = [
  {
    title: 'Healthcare & Hospitals',
    description: 'Critical air quality for operating theatres, isolation wards, and sterile environments.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    description: 'Dust control and process air filtration that protects equipment, people, and product quality.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Food & Beverage',
    description: 'Hygienic filtration solutions that meet strict food-grade air quality standards.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
      </svg>
    ),
  },
  {
    title: 'Pharmaceuticals',
    description: 'Validated HEPA and cleanroom-grade systems for contamination-controlled production.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Mining & Resources',
    description: 'Heavy-duty filtration built for dust-laden, high-demand industrial environments.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: 'Commercial Buildings',
    description: 'Efficient HVAC filtration that improves indoor air quality and lowers energy costs.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 10.5h6m-6 3.75h6" />
      </svg>
    ),
  },
]

const locations = [
  'Suva, Fiji',
  'Nadi, Fiji',
  'Port Vila, Vanuatu',
  'Honiara, Solomon Islands',
]

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section
          id="home"
          className="relative overflow-hidden bg-[#064e3b] text-white"
          aria-labelledby="hero-heading"
        >
          {/* Filter-pleat mesh signature */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  105deg,
                  transparent 0,
                  transparent 14px,
                  rgba(45, 212, 191, 0.35) 14px,
                  rgba(45, 212, 191, 0.35) 15px
                ),
                radial-gradient(ellipse 80% 60% at 70% 20%, rgba(20, 184, 166, 0.35), transparent 55%),
                radial-gradient(ellipse 50% 40% at 10% 90%, rgba(14, 116, 144, 0.4), transparent 50%)
              `,
            }}
          />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-emerald-400/20 sm:h-[28rem] sm:w-[28rem]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-emerald-400/15 sm:h-80 sm:w-80" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-28">
            <div className="lg:col-span-7">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                South Pacific Filters Limited
              </p>
              <h1
                id="hero-heading"
                className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
              >
                Leading Clean Air{' '}
                <span className="bg-gradient-to-r from-emerald-300 to-green-200 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Engineered air filters and filter media for hospitals, factories, and commercial facilities across the South Pacific — protecting people, processes, and performance.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#catalogue"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#064e3b]"
                >
                  View Catalogue
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#064e3b]"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5" aria-label="Key highlights">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase">Why specify SPFL</p>
                <ul className="mt-5 space-y-4">
                  {[
                    'ISO-aligned manufacturing & testing',
                    'Regional stock for faster turnaround',
                    'Application engineering support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-200 sm:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300" aria-hidden="true">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Quick Stats / Trust */}
        <section className="border-b border-slate-200 bg-white" aria-labelledby="stats-heading">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <h2 id="stats-heading" className="sr-only">
              Company metrics
            </h2>
            <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-100 bg-[#f0fdf4] px-4 py-5 text-center sm:px-6 sm:py-6"
                >
                  <dt className="order-2 mt-1 text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
                    {stat.label}
                  </dt>
                  <dd className="font-display order-1 text-3xl font-bold tracking-tight text-[#065f46] sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About / Value Prop */}
        <section id="about" className="bg-[#f0fdf4]" aria-labelledby="about-heading">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">About us</p>
              <h2 id="about-heading" className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Clean air, engineered for the Pacific
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                South Pacific Filters Limited designs, supplies, and supports industrial air filtration systems for environments where air quality is non-negotiable. From HEPA-critical healthcare to heavy industry, we combine proven media technology with regional expertise.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'End-to-end product range — filters, media, and accessories',
                  'Technical guidance matched to your airflow and efficiency targets',
                  'Reliable supply chains across island and mainland markets',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-700 sm:text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#065f46] transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Talk to our team
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#065f46] via-[#047857] to-emerald-700 shadow-xl shadow-slate-900/10"
                role="img"
                aria-label="Industrial air filtration systems illustration"
              >
                <div
                  className="absolute inset-0 opacity-30"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      -18deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.08) 10px,
                      rgba(255,255,255,0.08) 11px
                    )`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                    <svg className="h-8 w-8 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <p className="font-display text-xl font-semibold text-white sm:text-2xl">Precision filtration</p>
                  <p className="mt-2 max-w-xs text-sm text-emerald-100/90">
                    Media, frames, and systems built for Pacific climates and industrial loads.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block" aria-hidden="true">
                <p className="text-xs font-medium text-slate-500">Efficiency range</p>
                <p className="font-display text-lg font-bold text-[#065f46]">G4 → H14</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid 
        <section id="industries" className="bg-white" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">Industries</p>
              <h2 id="industries-heading" className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Built for demanding environments
              </h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                From sterile healthcare suites to dust-heavy processing plants — filtration matched to your sector.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <li key={industry.title}>
                  <article className="group h-full rounded-2xl border border-slate-200 bg-[#f0fdf4] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-white hover:shadow-lg hover:shadow-emerald-900/5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#065f46] text-emerald-200 transition group-hover:bg-emerald-600 group-hover:text-white">
                      {industry.icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
*/}
        {/* Catalogue CTA band */}
        <section id="catalogue" className="bg-[#065f46]" aria-labelledby="catalogue-heading">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 id="catalogue-heading" className="font-display text-2xl font-bold text-white sm:text-3xl">
                Explore our product catalogue
              </h2>
              <p className="mt-2 max-w-xl text-sm text-emerald-100/90 sm:text-base">
                Spec sheets, efficiency ratings, and sizing guides for air filters and media — ready for your next project.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#065f46] transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#065f46]"
            >
              Get the catalogue
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="border-t border-slate-200 bg-[#f0fdf4]" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center lg:max-w-none">
              <p className="text-xs font-semibold tracking-[0.18em] text-emerald-700 uppercase">Get in touch</p>
              <h2 id="contact-heading" className="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Ready to improve your air quality?
              </h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Tell us about your application — our team will recommend the right filters and media for your facility.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Contact Form - Left Side */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="+679 XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                      placeholder="Tell us about your filtration requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#065f46] px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information - Right Side */}
              <div className="flex flex-col gap-5">
                {/* Email & Phone Container */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="mb-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#065f46] text-emerald-200">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">Email Us</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      For general inquiries and quotes
                    </p>
                    <a
                      href="mailto:info@southpacificfilters.com"
                      className="mt-3 inline-flex text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
                    >
                      info@southpacificfilters.com
                    </a>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#065f46] text-emerald-200">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">Call Us</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a
                      href="tel:+6793301234"
                      className="mt-3 inline-flex text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
                    >
                      +679 330 1234
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}
