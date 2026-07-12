import { useParams, Link, Navigate } from 'react-router'
import Layout from '../../components/Layout'

// Product data structure
const productData: Record<string, any> = {
  // Panel Filters Variants
  'panel-filter-standard': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Panel Filters',
    title: 'Standard Panel Filter',
    tagline: 'Cost-effective filtration for general HVAC',
    description: 'Our standard panel filters feature cardboard frames with pleated synthetic media, offering reliable performance for moderate dust loads in commercial HVAC applications. An economical choice for facilities requiring dependable pre-filtration.',
    efficiency: 'G4 - M6 (ISO 16890)',
    features: [
      'Cardboard frame construction for easy disposal',
      'Pleated synthetic filter media',
      'Available depths: 25mm, 48mm',
      'Standard commercial sizes',
      'Low initial cost',
      'Suitable for moderate dust environments',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'G4, M5, M6' },
      { label: 'Frame Material', value: 'Moisture-resistant cardboard' },
      { label: 'Media Type', value: 'Synthetic polyester' },
      { label: 'Temperature Range', value: '-10°C to +60°C' },
      { label: 'Max Humidity', value: '90% RH' },
      { label: 'Frame Depths', value: '25mm, 48mm' },
    ],
    applications: [
      'Office building HVAC',
      'Retail ventilation systems',
      'Light commercial applications',
      'Pre-filtration stages',
      'General air conditioning',
      'Standard comfort cooling',
    ],
    industries: ['Commercial Buildings', 'Retail', 'Light Commercial'],
  },
  'panel-filter-rigid': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Panel Filters',
    title: 'Rigid Frame Panel Filter',
    tagline: 'Heavy-duty filtration for demanding applications',
    description: 'Premium panel filters with galvanized steel or aluminum frames and glass fiber media. Built for high-performance applications where durability and extended filter life are essential. Ideal for industrial and heavy commercial environments.',
    efficiency: 'M5 - F7 (ISO 16890)',
    features: [
      'Galvanized steel or aluminum frame',
      'Glass fiber or fine synthetic media',
      'Deep pleating for maximum surface area',
      'High dust-holding capacity',
      'Extended service life',
      'Rigid construction for structural integrity',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'M5, M6, F7' },
      { label: 'Frame Material', value: 'Galvanized steel, Aluminum' },
      { label: 'Media Type', value: 'Glass fiber, Fine synthetic' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
      { label: 'Frame Depths', value: '48mm, 96mm' },
    ],
    applications: [
      'Industrial HVAC systems',
      'Manufacturing facilities',
      'Data centers',
      'Heavy commercial buildings',
      'Process ventilation',
      'Demanding environments',
    ],
    industries: ['Manufacturing', 'Data Centers', 'Industrial', 'Commercial'],
  },
  'panel-filter-compact': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Panel Filters',
    title: 'Compact Panel Filter',
    tagline: 'High efficiency in a space-saving design',
    description: 'Advanced compact panel filters featuring deep pleating and fine micro-fiber media in a 96mm frame. Delivers high-efficiency filtration (F7-F9) while maintaining low pressure drop, perfect for systems requiring superior indoor air quality.',
    efficiency: 'F7 - F9 (ISO 16890)',
    features: [
      'Deep 96mm pleating for maximum media surface',
      'Micro-fiber synthetic media',
      'High-efficiency filtration',
      'Low pressure drop design',
      'Space-saving compact format',
      'Superior indoor air quality performance',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'F7, F8, F9' },
      { label: 'Frame Material', value: 'Galvanized steel' },
      { label: 'Media Type', value: 'Micro-fiber synthetic' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
      { label: 'Frame Depths', value: '96mm' },
    ],
    applications: [
      'Healthcare facilities',
      'Clean room pre-filtration',
      'Pharmaceutical environments',
      'High IAQ requirements',
      'Commercial buildings',
      'Premium office spaces',
    ],
    industries: ['Healthcare', 'Pharmaceuticals', 'Commercial', 'Clean Rooms'],
  },
  
  // Pocket Filters Variants
  'pocket-filter-economy': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Pocket Filters',
    title: 'Economy Pocket Filter',
    tagline: 'Cost-effective high-capacity filtration',
    description: 'Economical pocket filters with 3-6 synthetic media pockets in plastic frames. Designed for light to moderate dust loads in commercial HVAC applications, offering good dust-holding capacity at an attractive price point.',
    efficiency: 'F5 - F6 (ISO 16890)',
    features: [
      '3-6 filter pockets for increased surface area',
      'Synthetic polyester media',
      'Lightweight plastic frame',
      'Good dust-holding capacity',
      'Cost-effective solution',
      'Easy installation and replacement',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'F5, F6' },
      { label: 'Frame Material', value: 'ABS plastic' },
      { label: 'Pocket Numbers', value: '3, 4, 6 pockets' },
      { label: 'Pocket Depths', value: '360mm, 490mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
    ],
    applications: [
      'Commercial HVAC systems',
      'Office buildings',
      'Retail spaces',
      'Light industrial',
      'Schools and universities',
      'General ventilation',
    ],
    industries: ['Commercial Buildings', 'Education', 'Retail', 'Light Industrial'],
  },
  'pocket-filter-premium': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Pocket Filters',
    title: 'Premium Pocket Filter',
    tagline: 'Superior performance and extended service life',
    description: 'High-performance pocket filters featuring 6-8 pockets of fine synthetic media in rigid galvanized steel frames. Engineered for demanding applications requiring superior filtration efficiency and maximum service life.',
    efficiency: 'F7 - F8 (ISO 16890)',
    features: [
      '6-8 filter pockets for maximum capacity',
      'Fine micro-fiber synthetic media',
      'Rigid galvanized steel frame',
      'Extended service life',
      'Superior dust-holding capacity',
      'High-efficiency filtration',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'F7, F8' },
      { label: 'Frame Material', value: 'Galvanized steel' },
      { label: 'Pocket Numbers', value: '6, 8 pockets' },
      { label: 'Pocket Depths', value: '490mm, 600mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
    ],
    applications: [
      'Healthcare facilities',
      'Manufacturing clean areas',
      'Pharmaceutical facilities',
      'Food processing plants',
      'Data centers',
      'Critical commercial buildings',
    ],
    industries: ['Healthcare', 'Manufacturing', 'Food & Beverage', 'Pharmaceuticals'],
  },
  'pocket-filter-ultra': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'Pocket Filters',
    title: 'Ultra Pocket Filter',
    tagline: 'Maximum efficiency for critical applications',
    description: 'Top-tier pocket filters with 8-10 pockets of ultra-fine micro-fiber media achieving F9 efficiency. The ultimate choice for applications demanding the highest level of fine particle removal in a bag filter format.',
    efficiency: 'F9 (ISO 16890)',
    features: [
      '8-10 filter pockets for ultimate capacity',
      'Ultra-fine micro-fiber media',
      'Heavy-duty rigid frame construction',
      'F9 efficiency for submicron particles',
      'Maximum service life',
      'Lowest possible pressure drop for F9',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'F9' },
      { label: 'Frame Material', value: 'Galvanized steel, Stainless steel option' },
      { label: 'Pocket Numbers', value: '8, 10 pockets' },
      { label: 'Pocket Depths', value: '600mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
    ],
    applications: [
      'Clean room pre-filtration (ISO 7-8)',
      'Pharmaceutical production',
      'Hospital operating areas',
      'Electronics manufacturing',
      'Critical process environments',
      'High-value manufacturing',
    ],
    industries: ['Pharmaceuticals', 'Electronics', 'Healthcare', 'Clean Rooms'],
  },
  
  // HEPA Filters Variants
  'hepa-filter-standard': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'HEPA Filters',
    title: 'Standard HEPA H13',
    tagline: 'Proven HEPA performance for critical environments',
    description: 'Standard H13 HEPA filters with glass fiber media and aluminum frames. Removes 99.95% of particles at 0.3 microns, suitable for most hospital, pharmaceutical, and clean room applications requiring validated HEPA protection.',
    efficiency: 'H13 - 99.95% (ISO 29463)',
    features: [
      'H13 grade glass fiber media',
      'Aluminum frame with gel seal',
      'Individually scan tested',
      'Certificate of conformance included',
      'Standard depths for most applications',
      'Proven reliability',
    ],
    specifications: [
      { label: 'Filter Class', value: 'H13 (99.95% @ 0.3μm)' },
      { label: 'Frame Material', value: 'Aluminum' },
      { label: 'Media Type', value: 'Glass fiber' },
      { label: 'Separator', value: 'Aluminum' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Certification', value: 'Individual scan test report' },
    ],
    applications: [
      'Hospital operating rooms',
      'Pharmaceutical clean rooms (ISO 5-7)',
      'Laboratory facilities',
      'Terminal HEPA filtration',
      'Isolation rooms',
      'Sterile processing areas',
    ],
    industries: ['Healthcare', 'Pharmaceuticals', 'Laboratories', 'Clean Rooms'],
  },
  'hepa-filter-high': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'HEPA Filters',
    title: 'High-Efficiency HEPA H14',
    tagline: 'Ultimate HEPA protection',
    description: 'Premium H14 HEPA filters offering 99.995% efficiency with ultra-fine glass fiber media. Designed for the most stringent pharmaceutical and electronics manufacturing applications. Available with stainless steel frames for corrosive environments.',
    efficiency: 'H14 - 99.995% (ISO 29463)',
    features: [
      'H14 ultra-fine glass fiber media',
      'Choice of aluminum or stainless steel frame',
      'Deep pleat configuration',
      'Individual certification with full test data',
      'Lowest possible penetration',
      'Optional gel or gasket sealing',
    ],
    specifications: [
      { label: 'Filter Class', value: 'H14 (99.995% @ 0.3μm)' },
      { label: 'Frame Material', value: 'Aluminum, Stainless steel 304' },
      { label: 'Media Type', value: 'Ultra-fine glass fiber' },
      { label: 'Separator', value: 'Aluminum' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Certification', value: 'Individual test certificate' },
    ],
    applications: [
      'Pharmaceutical aseptic processing',
      'Electronics clean rooms (ISO 3-5)',
      'Semiconductor manufacturing',
      'Critical hospital areas',
      'Bio-safety laboratories',
      'Aerospace manufacturing',
    ],
    industries: ['Pharmaceuticals', 'Electronics', 'Aerospace', 'Bio-safety'],
  },
  'hepa-filter-compact': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    parentType: 'HEPA Filters',
    title: 'Compact HEPA',
    tagline: 'Space-saving HEPA filtration',
    description: 'Compact HEPA filters featuring mini-pleat technology for installations with limited plenum depth. Achieves H13-H14 efficiency in reduced depth frames, perfect for retrofit applications or space-constrained designs.',
    efficiency: 'H13 - H14 (ISO 29463)',
    features: [
      'Mini-pleat media configuration',
      'Reduced depth design',
      'H13 or H14 efficiency available',
      'Space-saving installation',
      'Low profile for retrofits',
      'Individual testing available',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'H13, H14' },
      { label: 'Frame Material', value: 'Aluminum' },
      { label: 'Media Type', value: 'Mini-pleat glass fiber' },
      { label: 'Frame Depths', value: '78mm, 150mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Certification', value: 'Scan test available' },
    ],
    applications: [
      'Retrofit installations',
      'Space-limited clean rooms',
      'Hospital renovation projects',
      'Modular clean rooms',
      'Portable HEPA units',
      'Laminar flow hoods',
    ],
    industries: ['Healthcare', 'Laboratories', 'Pharmaceuticals', 'Retrofit Projects'],
  },
  
  // Original products (for backward compatibility)
  'panel-filters': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    title: 'Panel Filters',
    tagline: 'Rigid frame filters for reliable pre-filtration',
    description: 'Our panel filters feature rigid frames with pleated media, offering consistent airflow and high dust-holding capacity. Ideal for HVAC systems and general ventilation applications where reliable pre-filtration is essential.',
    efficiency: 'G3 - F9 (ISO 16890)',
    features: [
      'Rigid galvanized steel or aluminum frame construction',
      'Pleated synthetic or glass fiber media',
      'Various depth options: 25mm, 48mm, 96mm',
      'Low initial pressure drop',
      'High dust-holding capacity',
      'Available in standard and custom sizes',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'G3, G4, M5, M6, F7, F8, F9' },
      { label: 'Frame Material', value: 'Galvanized steel, Aluminum' },
      { label: 'Media Type', value: 'Synthetic, Glass fiber' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
      { label: 'Frame Depths', value: '25mm, 48mm, 96mm' },
    ],
    applications: [
      'HVAC pre-filtration',
      'Office buildings',
      'Shopping centers',
      'Industrial facilities',
      'Data centers',
      'General ventilation systems',
    ],
    industries: ['Commercial Buildings', 'Manufacturing', 'Healthcare', 'Data Centers'],
  },
  'pocket-filters': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    title: 'Pocket Filters',
    tagline: 'High-capacity bag filters for extended service life',
    description: 'Pocket filters feature multiple filter bags that provide extended surface area and superior dust-holding capacity. The flexible bag design allows for maximum media utilization, resulting in longer filter life and reduced maintenance costs.',
    efficiency: 'F5 - F9 (ISO 16890)',
    features: [
      'Multiple pocket design for increased surface area',
      'Synthetic or glass fiber media options',
      'Rigid header construction',
      'Extended service life',
      'Low energy consumption',
      'Available in 3 to 10 pockets',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'F5, F6, F7, F8, F9' },
      { label: 'Frame Material', value: 'Galvanized steel, Plastic' },
      { label: 'Pocket Numbers', value: '3, 4, 6, 8, 10 pockets' },
      { label: 'Pocket Depths', value: '360mm, 490mm, 600mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Max Humidity', value: '100% RH' },
    ],
    applications: [
      'Commercial HVAC systems',
      'Clean room pre-filtration',
      'Manufacturing facilities',
      'Hospitals and healthcare',
      'Food processing plants',
      'Pharmaceutical production',
    ],
    industries: ['Healthcare', 'Manufacturing', 'Food & Beverage', 'Pharmaceuticals'],
  },
  'hepa-filters': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    title: 'HEPA Filters',
    tagline: 'Ultimate protection for critical environments',
    description: 'High-Efficiency Particulate Air (HEPA) filters provide the highest level of particulate filtration, removing 99.97% of particles 0.3 microns and larger. Essential for critical environments requiring the cleanest air quality.',
    efficiency: 'H13 - H14 (ISO 29463)',
    features: [
      'Glass fiber media with aluminum separators',
      'Minimum 99.97% efficiency at 0.3 microns',
      'Individual filter testing and certification',
      'Gel-sealed or gasket-sealed options',
      'Various frame materials available',
      'Scan testing capability',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'H13, H14' },
      { label: 'Frame Material', value: 'Aluminum, Galvanized steel, Stainless steel' },
      { label: 'Media Type', value: 'Glass fiber' },
      { label: 'Separator', value: 'Aluminum' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Certification', value: 'Individual scan tested' },
    ],
    applications: [
      'Hospital operating theatres',
      'Pharmaceutical cleanrooms',
      'Electronics manufacturing',
      'Laboratory facilities',
      'Isolation wards',
      'Sterile processing areas',
    ],
    industries: ['Healthcare', 'Pharmaceuticals', 'Electronics', 'Laboratories'],
  },
  'carbon-filters': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    title: 'Carbon Filters',
    tagline: 'Advanced molecular filtration for gas and odor control',
    description: 'Activated carbon filters utilize highly porous carbon media to remove gases, odors, and volatile organic compounds (VOCs) through adsorption. Essential for applications requiring molecular-level air purification.',
    efficiency: 'Molecular filtration (Gas & Odor)',
    features: [
      'Activated carbon granules or impregnated media',
      'High adsorption capacity',
      'Effective odor and VOC removal',
      'Various bed depths available',
      'Can be combined with particle filters',
      'Specialized impregnated carbons for specific gases',
    ],
    specifications: [
      { label: 'Media Type', value: 'Activated carbon, Impregnated carbon' },
      { label: 'Frame Material', value: 'Galvanized steel, Stainless steel' },
      { label: 'Bed Depths', value: '25mm, 50mm, 100mm' },
      { label: 'Carbon Form', value: 'Granular, Pellet, Powder on substrate' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Applications', value: 'VOCs, Odors, Specific gases' },
    ],
    applications: [
      'Food processing odor control',
      'Chemical plant emissions',
      'VOC removal in manufacturing',
      'Museum and archive preservation',
      'Wastewater treatment facilities',
      'Commercial kitchen exhaust',
    ],
    industries: ['Food & Beverage', 'Chemical', 'Manufacturing', 'Commercial'],
  },
  'hvac-filters': {
    category: 'Air Filters',
    categorySlug: 'air-filters',
    title: 'HVAC Filters',
    tagline: 'Complete filtration solutions for building systems',
    description: 'Comprehensive range of HVAC filters designed for heating, ventilation, and air conditioning systems. Available in various efficiencies to match your indoor air quality requirements and system specifications.',
    efficiency: 'G2 - F7 (ISO 16890)',
    features: [
      'Wide range of efficiency grades',
      'Cardboard, metal, or plastic frame options',
      'Pleated and flat panel designs',
      'Cost-effective filtration solutions',
      'Standard and custom sizes',
      'Easy installation and replacement',
    ],
    specifications: [
      { label: 'Filter Classes', value: 'G2, G3, G4, M5, M6, F7' },
      { label: 'Frame Material', value: 'Cardboard, Metal, Plastic' },
      { label: 'Media Type', value: 'Synthetic, Polyester' },
      { label: 'Frame Depths', value: '20mm, 25mm, 48mm' },
      { label: 'Temperature Range', value: '-20°C to +70°C' },
      { label: 'Standard Sizes', value: 'Multiple standard sizes available' },
    ],
    applications: [
      'Office buildings',
      'Retail spaces',
      'Residential HVAC',
      'Light commercial',
      'Schools and universities',
      'Hotel ventilation',
    ],
    industries: ['Commercial Buildings', 'Residential', 'Retail', 'Education'],
  },
  'synthetic-media': {
    category: 'Filter Media',
    categorySlug: 'filter-media',
    title: 'Synthetic Media',
    tagline: 'High-performance filtration media',
    description: 'Advanced synthetic filter media engineered from fine polymer fibers to deliver superior filtration efficiency and dust-holding capacity. Maintains consistent performance across varying humidity conditions, making it ideal for diverse climates.',
    efficiency: 'F5 - F9 (ISO 16890)',
    features: [
      'Synthetic polymer fiber construction',
      'Humidity-resistant performance',
      'High dust-holding capacity',
      'Low pressure drop',
      'Available in various grades',
      'Can be thermally bonded or needled',
    ],
    specifications: [
      { label: 'Material', value: 'Polyester, Polypropylene' },
      { label: 'Efficiency Range', value: 'F5, F6, F7, F8, F9' },
      { label: 'Thickness', value: '3mm - 25mm' },
      { label: 'Weight', value: '100 - 600 g/m²' },
      { label: 'Temperature Resistance', value: 'Up to 120°C' },
      { label: 'Format', value: 'Roll media, Cut sheets' },
    ],
    applications: [
      'HVAC filter manufacturing',
      'Pocket filter production',
      'Panel filter assembly',
      'Automotive filtration',
      'General ventilation',
      'Industrial air handling',
    ],
    industries: ['Filter Manufacturing', 'HVAC', 'Automotive', 'Industrial'],
  },
  'glass-fiber': {
    category: 'Filter Media',
    categorySlug: 'filter-media',
    title: 'Glass Fiber',
    tagline: 'Premium media for HEPA applications',
    description: 'Ultra-fine glass fiber media designed for high-efficiency particulate filtration. The micro-fine glass fibers create a dense matrix capable of capturing submicron particles with exceptional efficiency while maintaining optimal airflow.',
    efficiency: 'H10 - U17 (ISO 29463)',
    features: [
      'Micro-fine glass fiber construction',
      'Extremely high efficiency',
      'Low pressure drop for the efficiency',
      'Suitable for HEPA and ULPA filters',
      'Chemically inert',
      'Available in various grades',
    ],
    specifications: [
      { label: 'Material', value: 'Borosilicate glass fibers' },
      { label: 'Efficiency Range', value: 'H10 - U17 (99.95% - 99.999995%)' },
      { label: 'Fiber Diameter', value: '0.1 - 3.0 microns' },
      { label: 'Thickness', value: '0.3mm - 2.0mm' },
      { label: 'Temperature Resistance', value: 'Up to 260°C' },
      { label: 'Format', value: 'Roll media, Pleatable' },
    ],
    applications: [
      'HEPA filter manufacturing',
      'ULPA filter production',
      'Pharmaceutical cleanrooms',
      'Hospital operating rooms',
      'Electronics manufacturing',
      'Nuclear facilities',
    ],
    industries: ['Healthcare', 'Pharmaceuticals', 'Electronics', 'Nuclear'],
  },
  'activated-carbon': {
    category: 'Filter Media',
    categorySlug: 'filter-media',
    title: 'Activated Carbon',
    tagline: 'Molecular filtration excellence',
    description: 'Highly porous activated carbon media with an enormous internal surface area for maximum adsorption of gases, odors, and volatile organic compounds. Available in various forms and impregnations for specific applications.',
    efficiency: 'Molecular (Gas-phase)',
    features: [
      'Extremely high surface area',
      'Excellent adsorption capacity',
      'Available in multiple forms',
      'Impregnated options for specific gases',
      'Low pressure drop',
      'Long service life',
    ],
    specifications: [
      { label: 'Material', value: 'Coal-based, Coconut shell, Wood-based' },
      { label: 'Form', value: 'Granular, Pellet, Powder, Cloth' },
      { label: 'Surface Area', value: '500 - 1500 m²/g' },
      { label: 'Particle Size', value: '0.5mm - 4mm (granular)' },
      { label: 'Impregnation', value: 'Potassium permanganate, others' },
      { label: 'Format', value: 'Bulk, Bonded panels, Cloths' },
    ],
    applications: [
      'Carbon filter manufacturing',
      'VOC removal systems',
      'Odor control applications',
      'Food processing facilities',
      'Chemical vapor removal',
      'Museum air quality',
    ],
    industries: ['Food & Beverage', 'Chemical', 'Museums', 'Manufacturing'],
  },
  'nonwoven-media': {
    category: 'Filter Media',
    categorySlug: 'filter-media',
    title: 'Nonwoven Media',
    tagline: 'Versatile filtration solutions',
    description: 'Engineered nonwoven filter media combining mechanical strength with uniform pore structure. The versatile material offers consistent filtration performance across a wide range of applications from coarse pre-filtration to fine particle capture.',
    efficiency: 'G3 - F7 (ISO 16890)',
    features: [
      'Uniform pore structure',
      'High mechanical strength',
      'Good depth loading characteristics',
      'Various bonding methods available',
      'Customizable properties',
      'Cost-effective solution',
    ],
    specifications: [
      { label: 'Material', value: 'Polyester, Polypropylene, Blends' },
      { label: 'Efficiency Range', value: 'G3, G4, M5, M6, F7' },
      { label: 'Weight', value: '50 - 400 g/m²' },
      { label: 'Thickness', value: '2mm - 20mm' },
      { label: 'Bonding', value: 'Thermal, Chemical, Needle-punched' },
      { label: 'Format', value: 'Rolls, Sheets' },
    ],
    applications: [
      'Pre-filtration applications',
      'Paint booth filters',
      'Automotive cabin filters',
      'Industrial dust collection',
      'General HVAC filtration',
      'OEM filter manufacturing',
    ],
    industries: ['Automotive', 'Manufacturing', 'Paint Finishing', 'HVAC'],
  },
}

export default function ProductDetail() {
  const { category, productType, variantId } = useParams<{ category: string; productType: string; variantId: string }>()
  
  const product = variantId ? productData[variantId] : null

  if (!product) {
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
            <Link 
              to={`/products/${product.categorySlug}`} 
              className="transition hover:text-emerald-700"
            >
              {product.category}
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link 
              to={`/products/variants/${productType}`} 
              className="transition hover:text-emerald-700"
            >
              {product.parentType || productType?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="font-medium text-slate-900">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#f0fdf4]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Product Image Placeholder */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-[#065f46] via-[#047857] to-emerald-700 shadow-xl">
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                      <svg className="h-10 w-10 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <p className="font-display text-lg font-semibold text-white">{product.title}</p>
                    <p className="mt-2 text-sm text-emerald-100/90">Product Image</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
                <p className="text-xs font-medium text-slate-500">Efficiency</p>
                <p className="font-display text-lg font-bold text-[#065f46]">{product.efficiency}</p>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-wide text-emerald-800 uppercase">
                {product.category}
              </p>
              <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-3 text-lg text-emerald-700">{product.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#065f46] px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Request Quote
                </a>
                <a
                  href="/#catalogue"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Download Specs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Key Features
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature: string, index: number) => (
              <li key={index} className="flex gap-3 rounded-xl border border-slate-200 bg-[#f0fdf4] p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-700">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-sm text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-[#f0fdf4]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Technical Specifications
              </h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
                <dl className="divide-y divide-slate-200">
                  {product.specifications.map((spec: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-4 px-6 py-4">
                      <dt className="text-sm font-medium text-slate-500">{spec.label}</dt>
                      <dd className="text-sm text-slate-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Applications
              </h2>
              <ul className="mt-6 space-y-3">
                {product.applications.map((app: string, index: number) => (
                  <li key={index} className="flex gap-3 text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span className="text-sm">{app}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Industries Served
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.industries.map((industry: string) => (
                    <span
                      key={industry}
                      className="rounded-full bg-[#065f46] px-3 py-1.5 text-xs font-medium text-white"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-[#f0fdf4] px-6 py-10 text-center sm:px-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to order or need more information?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Our technical team is ready to help you select the right product for your specific requirements.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#065f46] px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Contact Sales
              </a>
              <Link
                to={`/products/${product.categorySlug}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                View All {product.category}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
