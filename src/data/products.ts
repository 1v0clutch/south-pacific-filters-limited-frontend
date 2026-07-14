// Product data types and structures for South Pacific Filters Limited
// Auto-generated from product catalog data

export interface Product {
  id: string
  name: string
  cardDescription: string
  description: string
  advantages?: string[]
  generalSpecs?: Record<string, string>
  technicalSpecs?: Record<string, any>[]
  classification?: string
  specs?: string
  specifications?: Record<string, string>
  specsTable?: any[]
  customTable?: {
    headers: string[]
    rows: Record<string, string>[]
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  intro: string
  products: Product[]
}

// Air Filters Categories
const activatedCarbonFilters: Product[] = [
  {
    id: 'ac12',
    name: 'AC12',
    cardDescription: 'This activated carbon filter is designed to adsorb small amounts of gaseous impurities.',
    description: 'This activated carbon filter is designed to adsorb small amounts of gaseous impurities (<100 ppm vol.) At higher concentrations, a risk of spontaneous creation. For instructions on using these filters.',
    advantages: ['Compact design', 'Refillable', 'Low pressure drop', 'High dustholding capacity'],
    generalSpecs: {
      'Application': 'Museums, archives, industry',
      'Frame': 'Galvanized Steel',
      'Bonding': 'N/A',
      'Carbon': 'M-carb generic activated carbon. S-carb specific impregnated carbon used for museums and archives',
      'Gasket': 'Extruded rubber',
      'Maximum/recommended final pressure drop': 'N/A',
      'Maximum Temperature': '40°C',
      'Maximum Relative Humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Carbon Type', 'Initial Weight (kg)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'AC12-4/M-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'M-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m3/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'AC12-4/R-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'R-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m3/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'AC12-4/R-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'S-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m3/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' }
      ]
    }
  },
  {
    id: 'activated-carbon-holding-frames',
    name: 'Activated Carbon Holding Frames',
    cardDescription: 'Widely used in airports, record offices, museums and the semiconductor industry.',
    description: 'Fast fitting system for carbon cylinder filters.',
    advantages: ['Firm construction', 'High dustholding capacity'],
    generalSpecs: {
      'Application': 'Museums, archives, industry',
      'Frame Material': 'Stainless Steel',
      'Bonding': '2 component polyurethane',
      'Carbon Type/Impregnation': 'M-carb generic activated carbon; S-carb specific impregnated carbon used for museums and archives',
      'Gasket Material': 'Neopreen',
      'Maximum/Recommended Final Pressure Drop': 'N/A',
      'Maximum Temperature': '40°C',
      'Maximum Relative Humidity': '70%'
    },
    customTable: {
      headers: ['Type/Model', 'Dimensions WxHxD (mm)', 'Carbon Type', 'Initial Weight (kg)', 'Volume (m³)'],
      rows: [
        { 'Type/Model': 'ACP', 'Dimensions WxHxD (mm)': '592 x 592 x 45', 'Carbon Type': 'M-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' },
        { 'Type/Model': 'ACP', 'Dimensions WxHxD (mm)': '592 x 592 x 45', 'Carbon Type': 'R-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' },
        { 'Type/Model': 'ACP', 'Dimensions WxHxD (mm)': '592 x 592 x 45', 'Carbon Type': 'S-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' }
      ]
    }
  },
  {
    id: 'carbon-cylinder',
    name: 'Carbon Cylinder',
    cardDescription: 'Available in the form or elements, which can be filled with loose activated carbon pellets.',
    description: 'This activated carbon filter is designed to adsorb small amounts of gaseous impurities (<100 ppm vol.). At higher concentrations, there is a risk of spontaneous creation.',
    advantages: ['Refillable', 'High dust-holding capacity', 'Straightforward assembly'],
    generalSpecs: {
      'Application': 'Airports, industry, catering',
      'Frame': 'Galvanized steel or stainless steel',
      'Activated Carbon': 'Coal-based carbon (pellets)',
      'Gasket': 'Neoprene',
      'Maximum/Recommended Final Pressure Drop': 'N/A',
      'Maximum Temperature': '40°C',
      'Maximum Relative Humidity': '70%',
      'Comments': 'Possibility to apply impregnated carbon to filter specific gases'
    },
    customTable: {
      headers: ['Type', 'Dimensions (WxHxD)', 'Frame Material', 'Carbon Type', 'Initial Weight (kg)', 'Airflow (m³/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'AC-2-12', 'Dimensions (WxHxD)': 'Length 250 mm, Thickness 25 mm', 'Frame Material': 'Galvanized steel', 'Carbon Type': 'M2-3', 'Initial Weight (kg)': '1.7', 'Airflow (m³/h)': '85', 'Airflow (L/s)': '23', 'Pressure Drop (Pa)': '82' },
        { 'Type': 'AC-2-26', 'Dimensions (WxHxD)': 'Length 450 mm, Thickness 25 mm', 'Frame Material': 'Galvanized steel', 'Carbon Type': 'M2-3', 'Initial Weight (kg)': '2.6', 'Airflow (m³/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '80' },
        { 'Type': 'AC-2-26/SS', 'Dimensions (WxHxD)': 'Length 450 mm, Thickness 25 mm', 'Frame Material': 'Stainless steel', 'Carbon Type': 'M2-3', 'Initial Weight (kg)': '2.6', 'Airflow (m³/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '80' },
        { 'Type': 'AC-2-60', 'Dimensions (WxHxD)': 'Length 600 mm, Thickness 25 mm', 'Frame Material': 'Galvanized steel', 'Carbon Type': 'M2-3', 'Initial Weight (kg)': '3.5', 'Airflow (m³/h)': '205', 'Airflow (L/s)': '56', 'Pressure Drop (Pa)': '75' }
      ]
    }
  },
  {
    id: 'hpq-ak',
    name: 'HPQ-AK',
    cardDescription: 'Consisting of synthetic medium combined with activated carbon, resistant up to 65°C.',
    description: 'The HPQ-AK is an activated carbon filter suitable for use in air treatment cabinets, air conditioning systems, industrial systems, and as a pre-filter in cleanrooms.',
    advantages: ['Compact design (small construction space)', 'Low pressure drop'],
    generalSpecs: {
      'Application': 'HVAC, Industry',
      'Frame': 'Plastic',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'Medium consisting of synthetic medium combined with activated carbon',
      'Gasket': 'Continuous poured gasket',
      'Filter Classification according to EN779:2012': 'M6',
      'Maximum/recommended final pressure drop': '350 Pa',
      'Maximum Temperature': '65°C',
      'Maximum Relative Humidity': '90%',
      'Comment': 'It is preferred to use a prefilter with these products'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Carbon Type', 'Initial Weight (kg)', 'Airflow (m³/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'HPQ-AK-A', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Carbon Type': 'Synthetic + Activated Carbon', 'Initial Weight (kg)': 'N/A', 'Airflow (m³/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '120' },
        { 'Type': 'HPQ-AK-B', 'Dimensions WxHxD (mm)': '490 x 592 x 292', 'Carbon Type': 'Synthetic + Activated Carbon', 'Initial Weight (kg)': 'N/A', 'Airflow (m³/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '120' },
        { 'Type': 'HPQ-AK-C', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Carbon Type': 'Synthetic + Activated Carbon', 'Initial Weight (kg)': 'N/A', 'Airflow (m³/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '120' }
      ]
    }
  }
]

const compactFilters: Product[] = [
  {
    id: 'hpq-series',
    name: 'HPQ-Series',
    cardDescription: 'Used in air treatment cabinets, air conditioning systems, industrial systems.',
    description: 'HPQ compact filter is a filter used in air treatment cabinets, air conditioning systems, industrial systems and as a pre-filter in cleanrooms. Compact or HPQ filters are mini-pleat filters, which are assembled inside a polystyrene frame. This type of air filter is resistant to temperatures of up to 70°C.',
    advantages: ['Small construction space', 'Low pressure drop', 'Maximum airflow 45% above nominal value'],
    generalSpecs: {
      'Application': 'HVAC, Industry',
      'Frame': 'Plastic',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'Synthetic',
      'Gasket': 'Continuous poured gasket',
      'Filter Classification according to EN779:2012': 'M6, F7, F9',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '65°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'HPQ-65-A', 'Dimensions WxHxD (mm)': '592x592x292', 'Filter Classification': 'M6', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '75', 'Energy Label': 'C' },
        { 'Type': 'HPQ-65-B', 'Dimensions WxHxD (mm)': '490x592x292', 'Filter Classification': 'M6', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '75', 'Energy Label': 'C' },
        { 'Type': 'HPQ-65-C', 'Dimensions WxHxD (mm)': '288x592x292', 'Filter Classification': 'M6', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '75', 'Energy Label': 'C' },
        { 'Type': 'HPQ-85-A', 'Dimensions WxHxD (mm)': '592x592x292', 'Filter Classification': 'F7', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '95', 'Energy Label': 'A' },
        { 'Type': 'HPQ-85-B', 'Dimensions WxHxD (mm)': '490x592x292', 'Filter Classification': 'F7', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '95', 'Energy Label': 'A' },
        { 'Type': 'HPQ-85-C', 'Dimensions WxHxD (mm)': '288x592x292', 'Filter Classification': 'F7', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '95', 'Energy Label': 'A' },
        { 'Type': 'HPQ-98-A', 'Dimensions WxHxD (mm)': '592x592x292', 'Filter Classification': 'F9', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '110', 'Energy Label': 'A' },
        { 'Type': 'HPQ-98-B', 'Dimensions WxHxD (mm)': '490x592x292', 'Filter Classification': 'F9', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '110', 'Energy Label': 'A' },
        { 'Type': 'HPQ-98-C', 'Dimensions WxHxD (mm)': '288x592x292', 'Filter Classification': 'F9', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '110', 'Energy Label': 'A' }
      ]
    }
  }
]

const sprayBoothFilters: Product[] = [
  {
    id: 'andreae-filters',
    name: 'Andreae Filters',
    cardDescription: 'Efficient Overspray Filter Paper.',
    description: 'Overspray filter paper/dry paint booth filter. Made of two pleated and perforated linerboard walls glued by their edges. 900mm Wide in adjustable length to up to 11mtrs.'
  },
  {
    id: 'ceiling-filter-media',
    name: 'Ceiling Filter Media',
    cardDescription: 'High Dust Holding Capacity Rolls.',
    description: 'Available in rolls: 1500mm x 20mtrs, 2000mm x 20mtrs. We can cut to any dimensions required.',
    advantages: ['100% capture rate of dust particles larger than 10um', 'Long life with high dust holding capacity & stable structure', 'Low initial resistance', 'strong elasticity and silicone free'],
    generalSpecs: {
      'Main material': 'Polyester fibre',
      'Filtration Class': 'M5(EN799) iso coarse 85%',
      'Filter Application': 'Paint mist, oil mist dust particles',
      'Temperature resistance': '100 degrees C',
      'Final Resistance': '450pa (suggested)'
    }
  },
  {
    id: 'custom-bag-filters',
    name: 'Custom Bag Filters',
    cardDescription: 'Tailored Filters for Your Booth.',
    description: 'Our bag filters can be tailored to any width, depth, length, with any number of pockets and filtration class that is required for your spray booth.'
  },
  {
    id: 'disposable-panel-filters',
    name: 'Disposable Panel Filters',
    cardDescription: 'Convenient Cardboard G4 Filters.',
    description: 'Cardboard G4 disposable filters. We have a large range of sizes to suit.'
  },
  {
    id: 'fibreglass-media-rolls',
    name: 'Fibreglass Media Rolls',
    cardDescription: 'High Absorption Fibreglass Rolls.',
    description: 'Available in sizes: 760mm x 51mtrs, 1500mm x 51mtrs, 2000mm x 21mtrs. All fibreglass can be cut to any dimensions required.',
    advantages: ['High dusting holding capacity', 'Strong absorption of paint mist', 'Resistance to high temperatures'],
    generalSpecs: {
      'Main material': 'Woven Fiberglass',
      'Filtration Class': 'G4(EN799) iso coarse 70%',
      'Filter Application': 'Paint mist, oil mist dust particles',
      'Temperature resistance': '250 degrees C',
      'Final Resistance': '200pa (Suggested)'
    }
  },
  {
    id: 'viking-filters',
    name: 'Viking Filters',
    cardDescription: 'Patented Modular Spray Booth Filters.',
    description: 'The patented Viking modular spray booth filters. Available in 4-metre booth packs, 84 filters in the carton. Dimensions: 900mm long, 100mm wide, 50 mm deep.'
  }
]

// Filter Media Categories
const coolerMedia: Product[] = [
  {
    id: 'evap-pads',
    name: 'Evap-Pads',
    cardDescription: 'Cooling pad with a high evaporation efficiency.',
    description: 'This unique design yields a cooling pad with a high evaporation efficiency while still operating with a very low pressure drop. In addition scaling is kept to a minimum and no water carry‐over occurs due to the fact that the water is directed to the air inlet side of the pad. This is where most of the evaporation takes place. The impregnation procedure for the cellulose paper ensures a strong self supporting product, with high absorbance, which is protected against decomposition and rotting and therefore increasing longevity. The distribution pad constitutes a vital part of a complete system and should always be placed on top of the cooling pad it ensures a uniform supply of the water to the cooling pad and minimises the risk of dry spots.',
    advantages: ['High evaporation efficiency', 'Superb wetting properties', 'Low pressure drop when wet, leading to lower operating costs', 'No water carryover', 'Low scaling', 'Self cleaning', 'Strong and self supporting', 'Long life time', 'Low running costs', 'Quick and easy to install', 'Environmentally friendly', 'Consistent high quality'],
    generalSpecs: {
      'Technology': 'Water is circulated via a pump station and supplied to the top of the cooling. A distribution pad on the top of the cooling pad ensures an even water distribution. The water flows down the corrugated surface of the EVAP-Pad. Part of the water is evaporated by the warm and dry air that passes through the pad. The rest of the water assists in washing the pad, and is drained back to the pump. The heat that is needed for the evaporation is taken from the air itself. The air that leaves the pad is therefore cooled and humidified simultaneously without any external energy supply for the evaporation process. This is nature\'s own cooling process.'
    }
  }
]
const sprayBoothMedia: Product[] = [
  {
    id: 'ceiling-media-560g',
    name: 'Ceiling Media 560G',
    cardDescription: 'Used in spray booth ventilation in the ceiling filter.',
    description: 'These media rolls are used in spray booth ventilation in the ceiling filter. They can be cut to bespoke sizes to suit your needs.',
    advantages: ['High dustholding capacity', 'Easily custom fitted'],
    generalSpecs: {
      'Filter Classification according to EN779:2012': 'M5',
      'Fire Resistance Class': 'F1 acc. to DIN 53438',
      'Maximum Temperature': '100°C',
      'Maximum Relative Humidity': '100%'
    },
    customTable: {
      headers: ['Product', 'Airflow (m3/h)', 'Airflow (L/s)', 'Media Velocity (m/s)', 'Initial Pressure Drop (Pa)', 'Final Pressure Drop (Pa)', 'Average Efficiency at 0.4 μm (%)', 'Filter Classification', 'Maximum Temperature (°C)', 'Maximum Relative Humidity (%)'],
      rows: [
        { 'Product': 'F560G', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Media Velocity (m/s)': '0.25', 'Initial Pressure Drop (Pa)': '25', 'Final Pressure Drop (Pa)': '450', 'Average Efficiency at 0.4 μm (%)': '40-60', 'Filter Classification': 'M5', 'Maximum Temperature (°C)': '70', 'Maximum Relative Humidity (%)': '90' }
      ]
    }
  },
  {
    id: 'glass-media',
    name: 'Glass Media',
    cardDescription: 'Used for air treatment systems and spray painting booths.',
    description: 'Glass medium can be supplied either on a roll or in pre-cut sheets and is available in Filter Classification ISO Coarse 50%. It must be fitted correctly (fine side – dirty air side) and installed flat.',
    advantages: ['Very high dustholding capacity'],
    generalSpecs: {
      'Application': 'spray booth, prefilters gas turbines',
      'Media': 'Glassfibre',
      'Filter Classification according to EN779:2012': 'G3',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '80°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxLxD (m)', 'Filter Classification', 'Colour', 'Airflow (m3/h)', 'Pressure Drop (Pa)', 'Column_6'],
      rows: [
        { 'Type': 'PSG760x51', 'Dimensions WxLxD (m)': '760x51x80', 'Filter Classification': 'G3', 'Colour': 'Green/white', 'Airflow (m3/h)': '2500-6300', 'Pressure Drop (Pa)': '694-1750', 'Column_6': '14' },
        { 'Type': 'PSG1500x51', 'Dimensions WxLxD (m)': '1500x51x80', 'Filter Classification': 'G3', 'Colour': 'Green/White', 'Airflow (m3/h)': '2500-6300', 'Pressure Drop (Pa)': '694-1750', 'Column_6': '14' },
        { 'Type': 'PSG2000x20', 'Dimensions WxLxD (m)': '2000x20x80', 'Filter Classification': 'G3', 'Colour': 'Green/White', 'Airflow (m3/h)': '2500-6300', 'Pressure Drop (Pa)': '694-1750', 'Column_6': '14' },
        { 'Type': 'Andreae – Eco', 'Dimensions WxLxD (m)': '0.9×11', 'Filter Classification': 'n.a.', 'Colour': '', 'Airflow (m3/h)': '', 'Pressure Drop (Pa)': '', 'Column_6': '' }
      ]
    }
  }
]
const syntheticMedia: Product[] = [
  {
    id: 'synthetic-media',
    name: 'Synthetic Media',
    cardDescription: 'Used for air treatment systems and spray-painting booths.',
    description: 'Synthetic medium are used as pre filters for air treatment systems as well as spray-painting booths. Synthetic filter media are supplied either on a roll or in pre-cut sheets. Available in ISO Coarse, 50%, ISO Coarse 70%, ISO Coarse 80%.',
    advantages: ['High dustholding capacity', 'Easily custom fitted'],
    generalSpecs: {
      'Application': 'Prefilters in HVAC and industry',
      'Material': 'Polyester',
      'Media': 'Medium consisting of synthetic medium combined with activated carbon',
      'Filter Classification according to EN779:2012': 'G2, G3, G4, M5',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum Temperature': '70°C',
      'Maximum Relative Humidity': '90%'
    }
  }
]

// Categories collection
const categories: Category[] = [
  {
    id: 'activated-carbon-filters',
    name: 'Activated Carbon Filters',
    slug: 'activated-carbon-filters',
    intro: 'Specialized filters designed to adsorb gaseous impurities and odors using activated carbon technology.',
    products: activatedCarbonFilters
  },
  {
    id: 'compact-filters',
    name: 'Compact Filters',
    slug: 'compact-filters',
    intro: 'Mini-pleat filters assembled inside polystyrene frames for air treatment cabinets and HVAC systems.',
    products: compactFilters
  },
  {
    id: 'spray-booth-filters',
    name: 'Spray Booth Filters',
    slug: 'spray-booth-filters',
    intro: 'Specialized filtration solutions for paint spray booths and overspray applications.',
    products: sprayBoothFilters
  },
  {
    id: 'cooler-media',
    name: 'Cooler Media',
    slug: 'cooler-media',
    intro: 'Evaporative cooling media designed for high efficiency cooling applications.',
    products: coolerMedia
  },
  {
    id: 'spray-booth-media',
    name: 'Spray Booth Media',
    slug: 'spray-booth-media',
    intro: 'Filter media solutions for spray booth ventilation and paint mist capture.',
    products: sprayBoothMedia
  },
  {
    id: 'synthetic-media',
    name: 'Synthetic Media',
    slug: 'synthetic-media',
    intro: 'Polyester-based filter media for pre-filtration in HVAC and industrial applications.',
    products: syntheticMedia
  }
]
// Utility functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug)
}

export function getProductById(categorySlug: string, productId: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  
  return category.products.find(product => product.id === productId)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getAllProducts(): Product[] {
  return categories.flatMap(category => category.products)
}

// For backward compatibility with existing components
export function formatProductForCard(product: Product) {
  return {
    id: product.id,
    name: product.name,
    description: product.cardDescription,
    specs: product.classification || 'Filter',
    advantages: product.advantages || []
  }
}