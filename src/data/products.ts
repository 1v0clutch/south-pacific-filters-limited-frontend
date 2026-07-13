// Product data structure for the filtration site

export interface Product {
  id: string
  name: string
  category: string
  subcategory?: string
  specs: string
  description: string
  classification: string
  advantages: string[]
  specifications: {
    [key: string]: string
  }
  specsTable: Array<{
    type: string
    dimensions: string
    filterClassification: string
    pockets: string
    filterSurface: string
    airflowM3h: string
    airflowLs: string
    pressureDrop: string
    energyLabel: string
  }>
}

export interface Category {
  id: string
  name: string
  slug: string
  intro: string
  products: Product[]
}

// Air Filter Categories
export const airFilterCategories: Category[] = [
  {
    id: 'panel-filters',
    name: 'Panel Filters',
    slug: 'panel-filters',
    intro: 'High-efficiency panel filters for commercial and industrial HVAC systems.',
    products: [
      {
        id: 'pleated-panel-g4',
        name: 'Pleated Panel G4 Series',
        category: 'panel-filters',
        specs: 'G4, M5, F7',
        description: 'Standard pleated panel filters designed for general HVAC applications with excellent dust-holding capacity.',
        classification: 'ISO 16890 - ePM10 50%',
        advantages: [
          'High dust-holding capacity',
          'Low initial pressure drop',
          'Galvanized steel frame construction',
          'Moisture-resistant synthetic media'
        ],
        specifications: {
          'Application': 'Pre-filtration, HVAC systems',
          'Frame': 'Galvanized steel',
          'Bonding': 'Hot melt adhesive',
          'Media': 'Synthetic non-woven',
          'Gasket': 'Closed cell foam',
          'Filter Classification': 'G4 (ISO 16890)',
          'Max pressure drop': '250 Pa',
          'Max temperature': '70°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'PG4-592x592x48',
            dimensions: '592x592x48',
            filterClassification: 'G4',
            pockets: 'N/A',
            filterSurface: '0.35 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '75 Pa',
            energyLabel: 'A+'
          },
          {
            type: 'PG4-490x592x48',
            dimensions: '490x592x48',
            filterClassification: 'G4',
            pockets: 'N/A',
            filterSurface: '0.29 m²',
            airflowM3h: '2800',
            airflowLs: '778',
            pressureDrop: '75 Pa',
            energyLabel: 'A+'
          }
        ]
      },
      {
        id: 'cardboard-panel-m5',
        name: 'Cardboard Panel M5 Series',
        category: 'panel-filters',
        specs: 'M5, F7, F8',
        description: 'Economical cardboard frame panel filters suitable for standard commercial applications.',
        classification: 'ISO 16890 - ePM2.5 50%',
        advantages: [
          'Cost-effective solution',
          'Lightweight construction',
          'Easy installation and disposal',
          'Good filtration efficiency'
        ],
        specifications: {
          'Application': 'Commercial HVAC, office buildings',
          'Frame': 'Moisture-resistant cardboard',
          'Bonding': 'Water-based adhesive',
          'Media': 'Synthetic pleated media',
          'Gasket': 'None',
          'Filter Classification': 'M5 (ISO 16890)',
          'Max pressure drop': '200 Pa',
          'Max temperature': '60°C',
          'Max humidity': '95% RH'
        },
        specsTable: [
          {
            type: 'CM5-592x592x48',
            dimensions: '592x592x48',
            filterClassification: 'M5',
            pockets: 'N/A',
            filterSurface: '0.42 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '95 Pa',
            energyLabel: 'A'
          }
        ]
      },
      {
        id: 'metal-panel-f7',
        name: 'Metal Panel F7 Series',
        category: 'panel-filters',
        specs: 'F7, F8, F9',
        description: 'Heavy-duty metal frame panel filters for demanding industrial environments.',
        classification: 'ISO 16890 - ePM1 50%',
        advantages: [
          'Robust aluminum frame',
          'High temperature resistance',
          'Washable and reusable',
          'Long service life'
        ],
        specifications: {
          'Application': 'Industrial processes, cleanrooms',
          'Frame': 'Extruded aluminum',
          'Bonding': 'Mechanical fixing',
          'Media': 'Glass fiber pleated',
          'Gasket': 'EPDM rubber',
          'Filter Classification': 'F7 (ISO 16890)',
          'Max pressure drop': '300 Pa',
          'Max temperature': '100°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'MF7-592x592x96',
            dimensions: '592x592x96',
            filterClassification: 'F7',
            pockets: 'N/A',
            filterSurface: '0.85 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '125 Pa',
            energyLabel: 'A+'
          }
        ]
      }
    ]
  },
  {
    id: 'hepa-filters',
    name: 'HEPA Filters',
    slug: 'hepa-filters',
    intro: 'High-efficiency particulate air filters for critical contamination control applications.',
    products: [
      {
        id: 'mini-pleat-hepa',
        name: 'Mini-Pleat HEPA Filters',
        category: 'hepa-filters',
        specs: 'H13, H14, U15',
        description: 'Compact HEPA filters with high efficiency and low pressure drop for cleanroom applications.',
        classification: 'EN 1822 - H13 (≥99.95%)',
        advantages: [
          'Ultra-fine particle removal',
          'Compact pleated design',
          'Low pressure drop',
          'Gel-sealed construction'
        ],
        specifications: {
          'Application': 'Cleanrooms, pharmaceutical, electronics',
          'Frame': 'Galvanized steel',
          'Bonding': 'Polyurethane gel seal',
          'Media': 'Glass fiber HEPA media',
          'Gasket': 'Continuous gel seal',
          'Filter Classification': 'H13 (EN 1822)',
          'Max pressure drop': '250 Pa',
          'Max temperature': '70°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'MPH13-610x610x292',
            dimensions: '610x610x292',
            filterClassification: 'H13',
            pockets: 'N/A',
            filterSurface: '14.5 m²',
            airflowM3h: '1700',
            airflowLs: '472',
            pressureDrop: '220 Pa',
            energyLabel: 'B'
          }
        ]
      },
      {
        id: 'box-hepa-filters',
        name: 'Box HEPA Filters',
        category: 'hepa-filters',
        specs: 'H14, U15, U16',
        description: 'Robust box-style HEPA filters for high-volume air handling in critical environments.',
        classification: 'EN 1822 - H14 (≥99.995%)',
        advantages: [
          'High airflow capacity',
          'Rigid construction',
          'Superior efficiency',
          'Individual leak testing'
        ],
        specifications: {
          'Application': 'Nuclear, pharmaceutical, hospital OR',
          'Frame': 'Extruded aluminum',
          'Bonding': 'Polyurethane adhesive',
          'Media': 'Deep-pleat glass fiber',
          'Gasket': 'EPDM rubber',
          'Filter Classification': 'H14 (EN 1822)',
          'Max pressure drop': '450 Pa',
          'Max temperature': '100°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'BXH14-610x610x150',
            dimensions: '610x610x150',
            filterClassification: 'H14',
            pockets: 'N/A',
            filterSurface: '8.2 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '300 Pa',
            energyLabel: 'C'
          }
        ]
      },
      {
        id: 'ulpa-filters',
        name: 'ULPA Filters',
        category: 'hepa-filters',
        specs: 'U15, U16, U17',
        description: 'Ultra-low penetration air filters for the most demanding contamination control requirements.',
        classification: 'EN 1822 - U15 (≥99.9995%)',
        advantages: [
          'Highest efficiency available',
          'Ultra-clean manufacturing',
          'Individual DOP testing',
          'Zero bypass leakage'
        ],
        specifications: {
          'Application': 'Semiconductor, nanotechnology, research',
          'Frame': 'Stainless steel',
          'Bonding': 'Silicone-free assembly',
          'Media': 'PTFE membrane on glass',
          'Gasket': 'Silicone rubber',
          'Filter Classification': 'U15 (EN 1822)',
          'Max pressure drop': '400 Pa',
          'Max temperature': '60°C',
          'Max humidity': '95% RH'
        },
        specsTable: [
          {
            type: 'ULP15-610x610x150',
            dimensions: '610x610x150',
            filterClassification: 'U15',
            pockets: 'N/A',
            filterSurface: '12.8 m²',
            airflowM3h: '1700',
            airflowLs: '472',
            pressureDrop: '350 Pa',
            energyLabel: 'D'
          }
        ]
      }
    ]
  },
  {
    id: 'pocket-filters',
    name: 'Pocket / Bag Filters',
    slug: 'pocket-filters',
    intro: 'Multi-pocket bag filters for high-capacity air filtration in commercial and industrial systems.',
    products: [
      {
        id: 'synthetic-pocket-filters',
        name: 'Synthetic Pocket Filters',
        category: 'pocket-filters',
        specs: 'M5, M6, F7, F8',
        description: 'Synthetic media pocket filters offering excellent dust-holding capacity and energy efficiency.',
        classification: 'ISO 16890 - ePM2.5 60%',
        advantages: [
          'High dust-holding capacity',
          'Low pressure drop',
          'Moisture resistant synthetic media',
          'Galvanized steel header frame'
        ],
        specifications: {
          'Application': 'HVAC pre-filtration, commercial buildings',
          'Frame': 'Galvanized steel header',
          'Bonding': 'Ultrasonic welding',
          'Media': 'Synthetic non-woven',
          'Gasket': 'Continuous PU foam',
          'Filter Classification': 'M6 (ISO 16890)',
          'Max pressure drop': '450 Pa',
          'Max temperature': '70°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'SPF-592x592x600-6P',
            dimensions: '592x592x600',
            filterClassification: 'M6',
            pockets: '6',
            filterSurface: '3.2 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '95 Pa',
            energyLabel: 'A+'
          },
          {
            type: 'SPF-490x592x600-4P',
            dimensions: '490x592x600',
            filterClassification: 'M6',
            pockets: '4',
            filterSurface: '2.1 m²',
            airflowM3h: '2260',
            airflowLs: '628',
            pressureDrop: '95 Pa',
            energyLabel: 'A+'
          }
        ]
      },
      {
        id: 'fibreglass-pocket-filters',
        name: 'Fibreglass Pocket Filters',
        category: 'pocket-filters',
        specs: 'F7, F8, F9',
        description: 'Glass fiber media pocket filters for superior fine particle capture in critical applications.',
        classification: 'ISO 16890 - ePM1 70%',
        advantages: [
          'Superior fine particle efficiency',
          'High temperature resistance',
          'Excellent pleat stability',
          'Low media migration'
        ],
        specifications: {
          'Application': 'Final filtration, pharmaceutical, electronics',
          'Frame': 'Galvanized steel header',
          'Bonding': 'Hot melt adhesive',
          'Media': 'Micro-fiber glass',
          'Gasket': 'Continuous PU foam',
          'Filter Classification': 'F8 (ISO 16890)',
          'Max pressure drop': '450 Pa',
          'Max temperature': '100°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'FPF-592x592x600-8P',
            dimensions: '592x592x600',
            filterClassification: 'F8',
            pockets: '8',
            filterSurface: '4.8 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '165 Pa',
            energyLabel: 'A'
          }
        ]
      },
      {
        id: 'rigid-pocket-filters',
        name: 'Rigid Pocket Filters',
        category: 'pocket-filters',
        specs: 'F8, F9, H10',
        description: 'Rigid construction pocket filters for high-pressure applications and extended service life.',
        classification: 'ISO 16890 - ePM1 85%',
        advantages: [
          'Rigid plastic frame construction',
          'Extended service life',
          'High pressure resistance',
          'Minimal bypass leakage'
        ],
        specifications: {
          'Application': 'Pharmaceutical, cleanrooms, laboratories',
          'Frame': 'ABS plastic',
          'Bonding': 'Mechanical assembly',
          'Media': 'PTFE membrane on glass fiber',
          'Gasket': 'EPDM rubber',
          'Filter Classification': 'F9 (ISO 16890)',
          'Max pressure drop': '600 Pa',
          'Max temperature': '80°C',
          'Max humidity': '95% RH'
        },
        specsTable: [
          {
            type: 'RPF-610x610x292-6P',
            dimensions: '610x610x292',
            filterClassification: 'F9',
            pockets: '6',
            filterSurface: '2.8 m²',
            airflowM3h: '3060',
            airflowLs: '850',
            pressureDrop: '195 Pa',
            energyLabel: 'A'
          }
        ]
      }
    ]
  }
]

// Filter Media Categories
export const filterMediaCategories: Category[] = [
  {
    id: 'synthetic-media',
    name: 'Synthetic Media',
    slug: 'synthetic-media',
    intro: 'Advanced synthetic filter media for diverse industrial and commercial applications.',
    products: [
      {
        id: 'polyester-media',
        name: 'Polyester Filter Media',
        category: 'synthetic-media',
        specs: 'G2, G3, G4',
        description: 'Polyester-based filter media offering excellent durability and washability for general filtration.',
        classification: 'ISO 16890 - Coarse 60%',
        advantages: [
          'Washable and reusable',
          'Chemical resistance',
          'Low pressure drop',
          'Cost-effective solution'
        ],
        specifications: {
          'Application': 'Pre-filtration, paint booth, industrial',
          'Frame': 'Self-supporting',
          'Bonding': 'Heat-sealed edges',
          'Media': '100% polyester fiber',
          'Gasket': 'Not applicable',
          'Filter Classification': 'G3 (ISO 16890)',
          'Max pressure drop': '200 Pa',
          'Max temperature': '80°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'PM-G3-2M-WHITE',
            dimensions: '2000x1000x25',
            filterClassification: 'G3',
            pockets: 'N/A',
            filterSurface: '2.0 m²',
            airflowM3h: 'Variable',
            airflowLs: 'Variable',
            pressureDrop: '25 Pa/m/s',
            energyLabel: 'A+'
          }
        ]
      },
      {
        id: 'polypropylene-media',
        name: 'Polypropylene Depth Media',
        category: 'synthetic-media',
        specs: 'G4, M5, M6',
        description: 'Progressive density polypropylene media for high dust-loading applications.',
        classification: 'ISO 16890 - ePM10 65%',
        advantages: [
          'Progressive density structure',
          'High dust-holding capacity',
          'Moisture resistant',
          'Thermally bonded fibers'
        ],
        specifications: {
          'Application': 'HVAC pre-filtration, automotive',
          'Frame': 'Self-supporting',
          'Bonding': 'Thermal bonding',
          'Media': 'Progressive density PP',
          'Gasket': 'Not applicable',
          'Filter Classification': 'M5 (ISO 16890)',
          'Max pressure drop': '250 Pa',
          'Max temperature': '90°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'PPD-M5-20MM',
            dimensions: '2000x1000x20',
            filterClassification: 'M5',
            pockets: 'N/A',
            filterSurface: '2.0 m²',
            airflowM3h: 'Variable',
            airflowLs: 'Variable',
            pressureDrop: '35 Pa/m/s',
            energyLabel: 'A'
          }
        ]
      }
    ]
  }
]

// Helper functions
export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find(cat => cat.slug === slug)
}

export function getProductById(categorySlug: string, productId: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug)
  return category?.products.find(product => product.id === productId)
}

// Additional categories to append to airFilterCategories
const additionalAirFilterCategories: Category[] = [
  {
    id: 'carbon-filters',
    name: 'Carbon Filters',
    slug: 'carbon-filters',
    intro: 'Activated carbon filters for odor, gas, and vapor removal in air handling systems.',
    products: [
      {
        id: 'granular-carbon',
        name: 'Granular Carbon Filters',
        category: 'carbon-filters',
        specs: 'GAC-1000, GAC-2000',
        description: 'Granular activated carbon filters for effective removal of odors, gases, and organic vapors.',
        classification: 'ASHRAE 145.2 - Class 2',
        advantages: [
          'High adsorption capacity',
          'Low pressure drop',
          'Replaceable carbon media',
          'Corrosion-resistant frame'
        ],
        specifications: {
          'Application': 'Commercial buildings, hospitals, laboratories',
          'Frame': 'Galvanized steel',
          'Bonding': 'Mechanical retention',
          'Media': 'Granular activated carbon',
          'Gasket': 'EPDM rubber',
          'Filter Classification': 'GAC-1000',
          'Max pressure drop': '200 Pa',
          'Max temperature': '60°C',
          'Max humidity': '95% RH'
        },
        specsTable: [
          {
            type: 'GAC-592x592x100',
            dimensions: '592x592x100',
            filterClassification: 'GAC-1000',
            pockets: 'N/A',
            filterSurface: '0.35 m²',
            airflowM3h: '3400',
            airflowLs: '944',
            pressureDrop: '150 Pa',
            energyLabel: 'A'
          }
        ]
      },
      {
        id: 'pellet-carbon',
        name: 'Pellet Carbon Filters',
        category: 'carbon-filters',
        specs: 'PAC-500, PAC-750',
        description: 'Pelletized activated carbon filters for enhanced gas-phase contaminant removal.',
        classification: 'ASHRAE 145.2 - Class 3',
        advantages: [
          'Superior gas removal',
          'Extended service life',
          'Low dust generation',
          'High mechanical strength'
        ],
        specifications: {
          'Application': 'Chemical processing, pharmaceutical, food',
          'Frame': 'Stainless steel',
          'Bonding': 'Welded construction',
          'Media': 'Pelletized activated carbon',
          'Gasket': 'Viton rubber',
          'Filter Classification': 'PAC-750',
          'Max pressure drop': '250 Pa',
          'Max temperature': '80°C',
          'Max humidity': '90% RH'
        },
        specsTable: [
          {
            type: 'PAC-610x610x150',
            dimensions: '610x610x150',
            filterClassification: 'PAC-750',
            pockets: 'N/A',
            filterSurface: '0.37 m²',
            airflowM3h: '2550',
            airflowLs: '708',
            pressureDrop: '180 Pa',
            energyLabel: 'B'
          }
        ]
      },
      {
        id: 'carbon-cloth',
        name: 'Carbon Cloth Filters',
        category: 'carbon-filters',
        specs: 'CC-100, CC-200, CC-300',
        description: 'Activated carbon cloth filters for lightweight, high-efficiency gas filtration.',
        classification: 'ASHRAE 145.2 - Class 1',
        advantages: [
          'Lightweight construction',
          'Fast kinetics',
          'Washable and reusable',
          'Low pressure drop'
        ],
        specifications: {
          'Application': 'Electronics, cleanrooms, aerospace',
          'Frame': 'Aluminum extruded',
          'Bonding': 'Ultrasonic welding',
          'Media': 'Activated carbon cloth',
          'Gasket': 'Closed cell foam',
          'Filter Classification': 'CC-200',
          'Max pressure drop': '100 Pa',
          'Max temperature': '150°C',
          'Max humidity': '100% RH'
        },
        specsTable: [
          {
            type: 'CC-490x592x25',
            dimensions: '490x592x25',
            filterClassification: 'CC-200',
            pockets: 'N/A',
            filterSurface: '0.29 m²',
            airflowM3h: '2800',
            airflowLs: '778',
            pressureDrop: '75 Pa',
            energyLabel: 'A+'
          }
        ]
      }
    ]
  }
]

// Update airFilterCategories to include additional categories  
const updatedAirFilterCategories = [...airFilterCategories, ...additionalAirFilterCategories]

// Combine all categories
export const allCategories = [...updatedAirFilterCategories, ...filterMediaCategories]