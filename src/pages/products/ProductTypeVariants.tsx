import { Link, useParams, Navigate } from 'react-router'
import Layout from '../../components/Layout'

// Define variants for each product type
const variantData: Record<string, any> = {
  'panel-filters': {
    title: 'Panel Filters',
    category: 'Air Filters',
    categoryLink: '/products/air-filters',
    description: 'Rigid frame filters ideal for pre-filtration and general HVAC applications. Select from our range of panel filter configurations to find the perfect match for your system.',
    variants: [
      {
        id: 'panel-filter-standard',
        name: 'Standard Panel Filter',
        efficiency: 'G4 - M6',
        depth: '25mm - 48mm',
        description: 'Cost-effective panel filters for general HVAC applications with moderate dust loads.',
        features: ['Cardboard frame', 'Synthetic media', 'Standard sizes', 'Economy option'],
      },
      {
        id: 'panel-filter-rigid',
        name: 'Rigid Frame Panel Filter',
        efficiency: 'M5 - F7',
        depth: '48mm - 96mm',
        description: 'Heavy-duty panel filters with galvanized steel frames for demanding applications.',
        features: ['Metal frame', 'Glass fiber media', 'High capacity', 'Extended life'],
      },
      {
        id: 'panel-filter-compact',
        name: 'Compact Panel Filter',
        efficiency: 'F7 - F9',
        depth: '96mm',
        description: 'High-efficiency compact filters combining deep pleating with fine filtration media.',
        features: ['Deep pleating', 'High efficiency', 'Low pressure drop', 'Space saving'],
      },
    ],
  },
  'pocket-filters': {
    title: 'Pocket Filters',
    category: 'Air Filters',
    categoryLink: '/products/air-filters',
    description: 'High-capacity bag filters with extended surface area for superior dust-holding capacity and longer service life.',
    variants: [
      {
        id: 'pocket-filter-economy',
        name: 'Economy Pocket Filter',
        efficiency: 'F5 - F6',
        depth: '360mm - 490mm',
        description: 'Cost-effective pocket filters suitable for light to moderate dust loads in commercial applications.',
        features: ['3-6 pockets', 'Synthetic media', 'Plastic frame', 'Standard efficiency'],
      },
      {
        id: 'pocket-filter-premium',
        name: 'Premium Pocket Filter',
        efficiency: 'F7 - F8',
        depth: '490mm - 600mm',
        description: 'High-performance pocket filters with superior dust-holding capacity for demanding environments.',
        features: ['6-8 pockets', 'Fine synthetic media', 'Metal frame', 'Extended life'],
      },
      {
        id: 'pocket-filter-ultra',
        name: 'Ultra Pocket Filter',
        efficiency: 'F9',
        depth: '600mm',
        description: 'Maximum efficiency pocket filters for critical applications requiring fine particle filtration.',
        features: ['8-10 pockets', 'Micro-fiber media', 'Rigid construction', 'Highest efficiency'],
      },
    ],
  },
  'hepa-filters': {
    title: 'HEPA Filters',
    category: 'Air Filters',
    categoryLink: '/products/air-filters',
    description: 'High-Efficiency Particulate Air filters for critical environments requiring 99.97%+ particle removal efficiency.',
    variants: [
      {
        id: 'hepa-filter-standard',
        name: 'Standard HEPA H13',
        efficiency: 'H13 (99.95%)',
        depth: '78mm - 150mm',
        description: 'Standard HEPA filters suitable for most clean room and hospital applications.',
        features: ['Glass fiber media', 'Aluminum frame', 'Gel-sealed', 'Scan tested'],
      },
      {
        id: 'hepa-filter-high',
        name: 'High-Efficiency HEPA H14',
        efficiency: 'H14 (99.995%)',
        depth: '150mm - 292mm',
        description: 'Premium HEPA filters for the most demanding pharmaceutical and electronics applications.',
        features: ['Ultra-fine glass fiber', 'Stainless steel option', 'Individual certification', 'Deep pleat'],
      },
      {
        id: 'hepa-filter-compact',
        name: 'Compact HEPA',
        efficiency: 'H13 - H14',
        depth: '78mm - 150mm',
        description: 'Space-saving HEPA filters designed for installations with limited plenum depth.',
        features: ['Compact design', 'Mini-pleat media', 'Low profile', 'Easy installation'],
      },
    ],
  },
  'carbon-filters': {
    title: 'Carbon Filters',
    category: 'Air Filters',
    categoryLink: '/products/air-filters',
    description: 'Activated carbon filters for odor control, gas removal, and VOC reduction in various applications.',
    variants: [
      {
        id: 'carbon-filter-panel',
        name: 'Carbon Panel Filter',
        efficiency: 'Gas & Odor',
        depth: '25mm - 50mm',
        description: 'Economical carbon filters with activated carbon impregnated into synthetic media.',
        features: ['Bonded carbon', 'Panel design', 'Light odor control', 'Easy replacement'],
      },
      {
        id: 'carbon-filter-deep-bed',
        name: 'Deep Bed Carbon Filter',
        efficiency: 'Gas & VOC',
        depth: '100mm - 300mm',
        description: 'High-capacity carbon filters with loose-fill activated carbon for maximum adsorption.',
        features: ['Granular carbon', 'High capacity', 'Long service life', 'Heavy-duty frame'],
      },
      {
        id: 'carbon-filter-specialty',
        name: 'Specialty Impregnated Carbon',
        efficiency: 'Specific Gases',
        depth: '50mm - 100mm',
        description: 'Chemically impregnated carbon filters designed for specific gas removal applications.',
        features: ['Custom impregnation', 'Target specific gases', 'Potassium permanganate', 'Application specific'],
      },
    ],
  },
  'hvac-filters': {
    title: 'HVAC Filters',
    category: 'Air Filters',
    categoryLink: '/products/air-filters',
    description: 'Complete range of HVAC filtration solutions for heating, ventilation, and air conditioning systems.',
    variants: [
      {
        id: 'hvac-filter-disposable',
        name: 'Disposable HVAC Filter',
        efficiency: 'G2 - G4',
        depth: '20mm - 25mm',
        description: 'Cost-effective disposable filters for residential and light commercial HVAC systems.',
        features: ['Cardboard frame', 'Basic filtration', 'Single-use', 'Economy option'],
      },
      {
        id: 'hvac-filter-pleated',
        name: 'Pleated HVAC Filter',
        efficiency: 'M5 - M6',
        depth: '25mm - 48mm',
        description: 'Enhanced efficiency pleated filters for improved indoor air quality in commercial buildings.',
        features: ['Synthetic pleated media', 'Better IAQ', 'Moderate capacity', 'Standard sizes'],
      },
      {
        id: 'hvac-filter-high-capacity',
        name: 'High-Capacity HVAC Filter',
        efficiency: 'F7',
        depth: '48mm - 96mm',
        description: 'Premium HVAC filters with maximum dust-holding capacity and fine filtration performance.',
        features: ['Deep pleats', 'Extended life', 'Fine filtration', 'Energy efficient'],
      },
    ],
  },
  'synthetic-media': {
    title: 'Synthetic Media',
    category: 'Filter Media',
    categoryLink: '/products/filter-media',
    description: 'High-performance synthetic filter media offering superior dust holding capacity and consistent efficiency.',
    variants: [
      {
        id: 'synthetic-media-standard',
        name: 'Standard Synthetic Media',
        efficiency: 'F5 - F7',
        depth: '3mm - 10mm',
        description: 'General purpose synthetic media suitable for most HVAC and industrial filtration applications.',
        features: ['Polyester fibers', 'Thermal bonded', 'Roll format', 'Cost-effective'],
      },
      {
        id: 'synthetic-media-fine',
        name: 'Fine Synthetic Media',
        efficiency: 'F7 - F9',
        depth: '5mm - 15mm',
        description: 'High-efficiency synthetic media with fine fiber structure for superior particle capture.',
        features: ['Micro-fiber blend', 'High efficiency', 'Low pressure drop', 'Premium grade'],
      },
      {
        id: 'synthetic-media-gradient',
        name: 'Gradient Density Media',
        efficiency: 'F6 - F8',
        depth: '10mm - 25mm',
        description: 'Multi-layer gradient density media optimized for maximum dust-holding capacity.',
        features: ['Progressive density', 'Extended life', 'Depth loading', 'Heavy-duty'],
      },
    ],
  },
  'glass-fiber': {
    title: 'Glass Fiber',
    category: 'Filter Media',
    categoryLink: '/products/filter-media',
    description: 'Premium glass fiber media for HEPA and ULPA applications with exceptional efficiency.',
    variants: [
      {
        id: 'glass-fiber-hepa',
        name: 'HEPA Grade Glass Fiber',
        efficiency: 'H13 - H14',
        depth: '0.3mm - 0.6mm',
        description: 'Ultra-fine glass fiber media for HEPA filter manufacturing with 99.95%+ efficiency.',
        features: ['Submicron fibers', 'HEPA certified', 'Pleatable', 'Scan testable'],
      },
      {
        id: 'glass-fiber-ulpa',
        name: 'ULPA Grade Glass Fiber',
        efficiency: 'U15 - U17',
        depth: '0.4mm - 0.8mm',
        description: 'Ultra-low penetration air filter media for the most stringent cleanroom requirements.',
        features: ['Nano-scale fibers', 'ULPA grade', 'Highest efficiency', 'Critical applications'],
      },
      {
        id: 'glass-fiber-mini-pleat',
        name: 'Mini-Pleat Glass Fiber',
        efficiency: 'H10 - H13',
        depth: '0.4mm - 1.0mm',
        description: 'Specially formulated glass fiber media designed for mini-pleat filter applications.',
        features: ['Optimized for pleating', 'Compact filters', 'Stiffness control', 'Space-saving'],
      },
    ],
  },
  'activated-carbon': {
    title: 'Activated Carbon',
    category: 'Filter Media',
    categoryLink: '/products/filter-media',
    description: 'Highly porous activated carbon media for molecular filtration and gas removal applications.',
    variants: [
      {
        id: 'activated-carbon-granular',
        name: 'Granular Activated Carbon',
        efficiency: 'Molecular',
        depth: 'Bulk material',
        description: 'Loose granular activated carbon for deep-bed filter applications and high-volume gas treatment.',
        features: ['High surface area', 'Bulk fill', 'Regenerable', 'Multiple grades'],
      },
      {
        id: 'activated-carbon-bonded',
        name: 'Bonded Carbon Media',
        efficiency: 'Molecular',
        depth: '5mm - 25mm',
        description: 'Activated carbon bonded into panels or rolls for easy filter fabrication.',
        features: ['Panel format', 'Easy handling', 'Uniform distribution', 'Filter-ready'],
      },
      {
        id: 'activated-carbon-impregnated',
        name: 'Chemically Impregnated Carbon',
        efficiency: 'Specific Gases',
        depth: 'Variable',
        description: 'Specially impregnated activated carbon for targeted removal of specific gases and chemicals.',
        features: ['Custom chemistry', 'Target gases', 'Enhanced capacity', 'Specialty applications'],
      },
    ],
  },
  'nonwoven-media': {
    title: 'Nonwoven Media',
    category: 'Filter Media',
    categoryLink: '/products/filter-media',
    description: 'Versatile nonwoven filter media with excellent mechanical strength and uniform pore structure.',
    variants: [
      {
        id: 'nonwoven-media-needled',
        name: 'Needle-Punched Media',
        efficiency: 'G3 - M5',
        depth: '5mm - 20mm',
        description: 'Mechanically bonded nonwoven media with high strength and depth loading characteristics.',
        features: ['Needle-punched', 'High strength', 'Depth loading', 'Paint booths'],
      },
      {
        id: 'nonwoven-media-thermal',
        name: 'Thermally Bonded Media',
        efficiency: 'G4 - M6',
        depth: '3mm - 15mm',
        description: 'Heat-bonded nonwoven media offering clean construction and consistent performance.',
        features: ['Thermal bonding', 'Clean process', 'Uniform structure', 'Automotive'],
      },
      {
        id: 'nonwoven-media-spunbond',
        name: 'Spunbond Media',
        efficiency: 'M5 - F7',
        depth: '2mm - 10mm',
        description: 'Continuous filament spunbond media with excellent tensile strength and filtration efficiency.',
        features: ['Continuous filament', 'High strength', 'Fine filtration', 'Premium grade'],
      },
    ],
  },
}

export default function ProductTypeVariants() {
  const { productType } = useParams<{ productType: string }>()
  
  const data = productType ? variantData[productType] : null

  if (!data) {
    return <Navigate to="/" replace />
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-600" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-emerald-700">
              Home
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link to={data.categoryLink} className="transition hover:text-emerald-700">
              {data.category}
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="font-medium text-slate-900">{data.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#064e3b] text-white">
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
              radial-gradient(ellipse 80% 60% at 70% 20%, rgba(20, 184, 166, 0.35), transparent 55%)
            `,
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {data.category}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Variants Grid */}
      <section className="bg-[#f0fdf4]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Choose Your {data.title} Type
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select the configuration that best suits your application requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.variants.map((variant: any) => (
              <Link
                key={variant.id}
                to={`/products/${data.category.toLowerCase().replace(' ', '-')}/${productType}/${variant.id}`}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="mb-4">
                  <h3 className="font-display text-xl font-semibold text-slate-900">
                    {variant.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {variant.description}
                  </p>
                </div>

                <div className="mb-4 space-y-2 border-y border-slate-100 py-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">Efficiency:</span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                      {variant.efficiency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">Depth:</span>
                    <span className="font-semibold text-slate-700">{variant.depth}</span>
                  </div>
                </div>

                <div className="mb-5 flex-1">
                  <p className="text-xs font-medium text-slate-500 mb-2">Features:</p>
                  <ul className="space-y-1.5">
                    {variant.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#065f46] transition group-hover:text-emerald-700">
                  View Details
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-[#f0fdf4] px-6 py-10 text-center sm:px-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Need help choosing the right {data.title.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Our technical team can help you select the optimal configuration for your specific requirements.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#065f46] px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Contact Our Team
              </a>
              <Link
                to={data.categoryLink}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                View All {data.category}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
