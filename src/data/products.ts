// Product Data Structure for SPFL Website
// Generated from checklist-client.txt

// ==================== PRODUCT IMAGES ====================
// Bag Filters
import hsb25Series from '../assets/bag-filters/hsb25-series.png';
import hsb35Series from '../assets/bag-filters/hsb35-series.webp';
import hsb55Series from '../assets/bag-filters/hsb55-series.png';
import lsb60Series from '../assets/bag-filters/lsb60-series.webp';
import lsb80Series from '../assets/bag-filters/lsb80-series.webp';
import lsb90Series from '../assets/bag-filters/lsb90-series.png';
import hq85Series from '../assets/bag-filters/hq85-series.png';
import hq98Series from '../assets/bag-filters/hq98-series.png';
import hdSeries from '../assets/bag-filters/hd-series.png';

// HEPA Filters
import hlaESeries from '../assets/hepa-filters/hla-e-series.webp';
import hlaGSeries from '../assets/hepa-filters/hla-g-series.webp';
import hlaLSeries from '../assets/hepa-filters/hla-l-series.webp';
import hpgSeries from '../assets/hepa-filters/hpg-series.png';
import hvgSeries from '../assets/hepa-filters/hvg-series.png';
import hvsSeries from '../assets/hepa-filters/hvs-series.png';
import pbSeries from '../assets/hepa-filters/pb-series.png';

// Panel Filters
import vPleatPanel from '../assets/panel-filters/v-pleat-panel.png';
import disposablePanel from '../assets/panel-filters/disposable-panel.png';
import flatPanel from '../assets/panel-filters/flat-panel.png';
import aquapleatPanel from '../assets/panel-filters/aquapleat-panel.webp';
import minipleatPanel from '../assets/panel-filters/minipleat-panel.png';
import ecoVPleat from '../assets/panel-filters/eco-v-pleat.webp';

// Grease Filters
import honeycombGrease from '../assets/grease-filters/honeycomb-grease.png';
import ssMeshGrease from '../assets/grease-filters/ss-mesh-grease.png';

// Holding Frames
import hfActivatedCarbon from '../assets/holding-frames/hf-activated-carbon.png';
import hfHepa from '../assets/holding-frames/hf-hepa.webp';
import universalHoldingFrames from '../assets/holding-frames/universal-holding-frames.webp';

// Home Ventilation
import hrvGen1 from '../assets/home-ventilation/hrv-gen1.webp';
import hrvGen2 from '../assets/home-ventilation/hrv-gen2.png';
import hrvSmartvent from '../assets/home-ventilation/hrv-smartvent.webp';
import hrvHv from '../assets/home-ventilation/hrv-hv.webp';

// Activated Carbon Filters
import ac12 from '../assets/activated-carbon-filters/ac12.png';
import activatedCarbonHoldingFrames from '../assets/activated-carbon-filters/activated-carbon-holding-frames.png';
import carbonCylinder from '../assets/activated-carbon-filters/carbon-cylinder.png';
import hpqAk from '../assets/activated-carbon-filters/hpq-ak.png';

// Compact Filters
import hpqSeries from '../assets/compact-filters/hpq-series.png';

// Spray Booth Filters
import andreaeFilters from '../assets/spray-booth-filters/andreae-filters.png';
import ceilingFilterMedia from '../assets/spray-booth-filters/ceiling-filter-media.png';
import customBagFilters from '../assets/spray-booth-filters/custom-bag-filters.png';
import fibreglassMediaRolls from '../assets/spray-booth-filters/fibreglass-media-rolls.png';
import vikingFilters from '../assets/spray-booth-filters/viking-filters.png';

// Filter Media
import evapPads from '../assets/filter-media/cooler-media/evap-pads.png';
import ceilingMedia560g from '../assets/filter-media/spray-booth-media/ceiling-media-560g.png';
import glassMedia from '../assets/filter-media/spray-booth-media/glass-media.png';
import syntheticmedia from '../assets/filter-media/synthetic-media/synthetic-media.png';

export interface CustomTable {
  headers: string[];
  rows: Record<string, string>[] | string[][];
}

export interface GeneralSpecs {
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  cardDescription: string;
  description: string;
  image?: string;
  advantages?: string[];
  generalSpecs?: GeneralSpecs;
  customTable?: CustomTable;
  classification?: string;
  specifications?: Record<string, string>;
  specsTable?: any[];
  technicalSpecs?: Record<string, any>[];
  specs?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  intro: string;
  products: Product[];
}

// ==================== BAG FILTERS CATEGORY ====================

const bagFiltersProducts: Product[] = [
  // 1. Synthetic Bag Filters
  {
    id: 'hsb25-series',
    name: 'HSB25-Series',
    image: hsb25Series,
    cardDescription: 'G3 (EN779) or ISO Coarse 50% - Totally combustible with lightweight frame',
    description: 'HSB25 Series Bag Filter is a synthetic bag filter suitable for dust loading applications in Commercial and Industrial environments. Featuring totally combustible construction with a lightweight plastic frame and synthetic media.',
    advantages: [
      'Totally combustible',
      'Lightweight frame'
    ],
    generalSpecs: {
      'Application': 'prefilters HVAC, industrial',
      'Frame': 'plastic',
      'Spacers': 'synthetic',
      'Bonding': 'N/A',
      'Media': 'Synthetic',
      'Gasket': 'continuous poured gasket',
      'Filter Classification according to EN779:2012': 'G3',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'BFHSB25A6-3', 'Dimensions WxHxD (mm)': '592X592X360', 'Filter Classification': 'G3', '# Pockets': '6', 'Filter Surface (m2)': '3', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '30' },
        { 'Type': 'BFHSB25B5-3', 'Dimensions WxHxD (mm)': '490X592X360', 'Filter Classification': 'G3', '# Pockets': '5', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '30' },
        { 'Type': 'BFHSB25C3-3', 'Dimensions WxHxD (mm)': '287x592x360', 'Filter Classification': 'G3', '# Pockets': '3', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '30' },
        { 'Type': 'BFHSB25A6-6', 'Dimensions WxHxD (mm)': '592X592X600', 'Filter Classification': 'G3', '# Pockets': '6', 'Filter Surface (m2)': '4.5', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '26' },
        { 'Type': 'BFHSB25C3-6', 'Dimensions WxHxD (mm)': '492X592X600', 'Filter Classification': 'G3', '# Pockets': '5', 'Filter Surface (m2)': '3.7', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '26' },
        { 'Type': 'BFHSB25B3-6', 'Dimensions WxHxD (mm)': '287X592X600', 'Filter Classification': 'G3', '# Pockets': '3', 'Filter Surface (m2)': '2.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '26' }
      ]
    }
  },
  {
    id: 'hsb35-series',
    name: 'HSB35-Series',
    image: hsb35Series,
    cardDescription: 'G4 (EN779) or ISO Coarse 70% - Pre-filter or fine-filter for air conditioning systems',
    description: 'HSB35 Series Bag Filter is used as a pre-filter or fine-filter in air conditioning systems among other things air treatment cabinets, air conditioning systems, public areas, and as a pre-filter in cleanrooms and the pharmaceuticals industry. The filter media are made from both polymer and glass fibres. They have ultrasonically welded leak-tight bags, assembled in a polyurethane frame. Bag filters are resistant to temperatures of up to 70°C.',
    advantages: [
      'Totally combustible',
      'Lightweight frame'
    ],
    generalSpecs: {
      'Application': 'pre-filters HVAC, industrial',
      'Frame': 'plastic',
      'Spacers': 'synthetic',
      'Bonding': 'N/A',
      'Media': 'Synthetic',
      'Gasket': 'continuous poured gasket',
      'Filter Classification according to EN779:2012': 'G4',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum Temperature': '70°C',
      'Maximum Relative Humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'BFHSB35A6-3', 'Dimensions WxHxD (mm)': '592X592X360', 'Filter Classification': 'G4', '# Pockets': '6', 'Filter Surface (m2)': '3', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '40' },
        { 'Type': 'BFHSB35B5-3', 'Dimensions WxHxD (mm)': '490X592X360', 'Filter Classification': 'G4', '# Pockets': '5', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '40' },
        { 'Type': 'BFHSB35C3-3', 'Dimensions WxHxD (mm)': '287X592X360', 'Filter Classification': 'G4', '# Pockets': '3', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '40' },
        { 'Type': 'BFHSB35HA6-6', 'Dimensions WxHxD (mm)': '592X592X600', 'Filter Classification': 'G4', '# Pockets': '6', 'Filter Surface (m2)': '4.5', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '34' },
        { 'Type': 'BFHSB35HC3-6', 'Dimensions WxHxD (mm)': '490x592x600', 'Filter Classification': 'G4', '# Pockets': '5', 'Filter Surface (m2)': '3.7', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '34' },
        { 'Type': 'BFHSB35HB5-6', 'Dimensions WxHxD (mm)': '287X592X600', 'Filter Classification': 'G4', '# Pockets': '3', 'Filter Surface (m2)': '2.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '34' }
      ]
    }
  },
  {
    id: 'hsb55-series',
    name: 'HSB55-Series',
    image: hsb55Series,
    cardDescription: 'M5 (EN779) or ISO Coarse 80% - Pre-filter or fine filter for air conditioning systems',
    description: 'HSB55 Series Bag Filter is used as a pre-filter or fine filter in air conditioning systems among other things, air treatment cabinets, air conditioning systems, public areas, and as a pre-filter in cleanrooms and the pharmaceuticals industry.',
    advantages: [
      'Totally combustible',
      'Lightweight frame'
    ],
    generalSpecs: {
      'Application': 'Prefilters HVAC, Industrial',
      'Frame': 'Plastic',
      'Spacers': 'Synthetic',
      'Bonding': 'N/A',
      'Media': 'Synthetic',
      'Gasket': 'Continuous poured gasket',
      'Filter Classification according to EN779:2012': 'M5',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum Temperature': '70°C',
      'Maximum Relative Humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'BFHSB55A6-3', 'Dimensions WxHxD (mm)': '592X592X360', 'Filter Classification': 'M5', '# Pockets': '6', 'Filter Surface (m2)': '3', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '60', 'Energy Label': 'F' },
        { 'Type': 'BFHSB55B5-3', 'Dimensions WxHxD (mm)': '490X592X360', 'Filter Classification': 'M5', '# Pockets': '5', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '60', 'Energy Label': 'F' },
        { 'Type': 'BFHSB55C3-3', 'Dimensions WxHxD (mm)': '287X592X360', 'Filter Classification': 'M5', '# Pockets': '3', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '60', 'Energy Label': 'F' },
        { 'Type': 'BFHSB55A6-6', 'Dimensions WxHxD (mm)': '592X592X600', 'Filter Classification': 'M5', '# Pockets': '6', 'Filter Surface (m2)': '5', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '45', 'Energy Label': 'D' },
        { 'Type': 'BFHSB55B5-6', 'Dimensions WxHxD (mm)': '490X592X600', 'Filter Classification': 'M5', '# Pockets': '5', 'Filter Surface (m2)': '4.1', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '45', 'Energy Label': 'D' },
        { 'Type': 'BFHSB55C3-6', 'Dimensions WxHxD (mm)': '287X592X600', 'Filter Classification': 'M5', '# Pockets': '3', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '45', 'Energy Label': 'D' }
      ]
    }
  },
  {
    id: 'lsb60-series',
    name: 'LSB60-Series',
    image: lsb60Series,
    cardDescription: 'M6 (EN779) or ePM10 70% - Pre-filter or fine filter for cleanrooms',
    description: 'LSB60 Series Bag Filter is a pre-filter or fine filter, used in air treatment cabinets, air conditioning systems, public areas, and as a pre-filter in cleanrooms and the pharmaceuticals industry.',
    advantages: [
      'Totally combustible',
      'Lightweight frame'
    ],
    generalSpecs: {
      'Application': 'fine filters HVAC, industrial',
      'Frame': 'plastic',
      'Spacers': 'synthetic',
      'Bonding': 'N/A',
      'Media': 'synthetic',
      'Gasket': 'continuous poured gasket',
      'Filter Classification according to EN779:2012': 'M6',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'BFLSB60A8-6', 'Dimensions WxHxD (mm)': '592X592X600', 'Filter Classification': 'M6', '# Pockets': '8', 'Filter Surface (m2)': '6.4', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '70', 'Energy Label': 'G' },
        { 'Type': 'BFLSB60B5-6', 'Dimensions WxHxD (mm)': '490X592X600', 'Filter Classification': 'M6', '# Pockets': '5', 'Filter Surface (m2)': '4.1', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '65', 'Energy Label': 'G' },
        { 'Type': 'BFLSB60C4-6', 'Dimensions WxHxD (mm)': '287X592X600', 'Filter Classification': 'M6', '# Pockets': '4', 'Filter Surface (m2)': '3.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '70', 'Energy Label': 'G' }
      ]
    }
  },
  {
    id: 'lsb80-series',
    name: 'LSB80-Series',
    image: lsb80Series,
    cardDescription: 'F7 (EN779) or ePM2.5 70% - Fine filter with constant efficiency',
    description: 'The filter media, made from both polymer and glass fibres, are assembled in a robust plastic, steel or aluminium frame.',
    advantages: [
      'Totally combustible',
      'Lightweight frame',
      'Constant efficiency'
    ],
    generalSpecs: {
      'Application': 'Fine filters HVAC, Industrial',
      'Frame': 'Plastic, optional galvinization',
      'Spacers': 'Synthetic',
      'Bonding': 'N/A',
      'Media': 'Synthetic',
      'Gasket': 'Continuous poured gasket',
      'Filter Classification according to EN779:2012': 'F7',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD(mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy label'],
      rows: [
        { 'Type': 'LSB80A6-6', 'Dimensions WxHxD(mm)': '592x592x600', 'Filter Classification': 'F7', '# Pockets': '6', 'Filter Surface (m2)': '5.0', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' },
        { 'Type': 'LSB80B5-6', 'Dimensions WxHxD(mm)': '490x592x600', 'Filter Classification': 'F7', '# Pockets': '5', 'Filter Surface (m2)': '4.1', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' },
        { 'Type': 'LSB80B6-6/90', 'Dimensions WxHxD(mm)': '592x490x600', 'Filter Classification': 'F7', '# Pockets': '6', 'Filter Surface (m2)': '4.2', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' },
        { 'Type': 'LSB80C3-6', 'Dimensions WxHxD(mm)': '287x592x600', 'Filter Classification': 'F7', '# Pockets': '3', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' },
        { 'Type': 'LSB80C6-6/90', 'Dimensions WxHxD(mm)': '592x287x600', 'Filter Classification': 'F7', '# Pockets': '6', 'Filter Surface (m2)': '2.8', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' },
        { 'Type': 'LSB80CC3-6', 'Dimensions WxHxD(mm)': '287x287x600', 'Filter Classification': 'F7', '# Pockets': '3', 'Filter Surface (m2)': '1.4', 'Airflow (m3/h)': '850', 'Airflow (L/s)': '236', 'Pressure Drop (Pa)': '75', 'Energy label': 'G' }
      ]
    }
  },
  {
    id: 'lsb90-series',
    name: 'LSB90-Series',
    image: lsb90Series,
    cardDescription: 'F8 (EN779) or ePM1 70% - Fine filter for cleanrooms and pharmaceuticals',
    description: 'Bag filters are used in air treatment cabinets, air conditioning systems, public areas, and as a pre-filter in cleanrooms and the pharmaceuticals industry.',
    advantages: [
      'Totally combustible',
      'Lightweight frame'
    ],
    generalSpecs: {
      'Application': 'fine filters HVAC, industrial',
      'Frame': 'Plastic',
      'Spacers': 'Synthetic',
      'Media': 'Synthetic',
      'Filter Classification according to EN779:2012': 'F8',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum Temperature': '70°C',
      'Maximum Relative Humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD(mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'BFLSB90A8-6', 'Dimensions WxHxD(mm)': '592x592x600', 'Filter Classification': 'F8', '# Pockets': '8', 'Filter Surface (m2)': '6.4', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '110' },
        { 'Type': 'BFLSB90B6-6', 'Dimensions WxHxD(mm)': '490x592x600', 'Filter Classification': 'F8', '# Pockets': '6', 'Filter Surface (m2)': '4.8', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '110' },
        { 'Type': 'BFLSB90C4-6', 'Dimensions WxHxD(mm)': '287x592x600', 'Filter Classification': 'F8', '# Pockets': '4', 'Filter Surface (m2)': '3.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '110' }
      ]
    }
  },
  // 2. Fibreglass Pocket Filters
  {
    id: 'hq85-series',
    name: 'HQ85-Series',
    image: hq85Series,
    cardDescription: 'F7 (EN779) or ePM2.5 70% - Lightweight with high dust-holding capacity',
    description: 'The HQ85 bag filter is used in air treatment cabinets, air conditioning systems, public areas, and as a pre-filter in cleanrooms and the pharmaceuticals industry. The filter media, made from both polymer and glass fibres, are assembled in a robust galvanised steel or aluminium frame.',
    advantages: [
      'Lightweight frame',
      'High dust-holding capacity',
      'Constant efficiency',
      'High energy efficiency'
    ],
    generalSpecs: {
      'Application': 'Fine filters HVAC, industrial',
      'Frame': 'Aluminium',
      'Bonding': 'N/A',
      'Media': 'Glasfiber',
      'Gasket': 'optional, continuous poured gasket',
      'Filter Classification according to EN779:2012': 'F7',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'BFHQ85A8-6', 'Dimensions WxHxD (mm)': '592X490X635', 'Filter Classification': 'F7', '# Pockets': '8', 'Filter Surface': '6', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '100', 'Energy Label': 'B' },
        { 'Type': 'BFHQ85B6-6', 'Dimensions WxHxD (mm)': '490X592X635', 'Filter Classification': 'F7', '# Pockets': '6', 'Filter Surface': '4.5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '100', 'Energy Label': 'B' },
        { 'Type': 'BFHQ85C4-6', 'Dimensions WxHxD (mm)': '287X592X635', 'Filter Classification': 'F7', '# Pockets': '4', 'Filter Surface': '3', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '100', 'Energy Label': 'B' }
      ]
    }
  },
  {
    id: 'hq98-series',
    name: 'HQ98-Series',
    image: hq98Series,
    cardDescription: 'F9 (EN779) or ePM1 85% - High efficiency with constant performance',
    description: 'HQ98-Series fibreglass pocket filter designed for fine filtration in HVAC and industrial applications. Features high dust-holding capacity and constant efficiency with glasfiber media in an aluminium frame.',
    advantages: [
      'Lightweight frame',
      'High dust-holding capacity',
      'Constant efficiency',
      'High energy efficiency'
    ],
    generalSpecs: {
      'Application': 'Fine filters HVAC, industrial',
      'Frame': 'Aluminium',
      'Bonding': 'N/A',
      'Media': 'Glasfiber',
      'Gasket': 'optional, continuous poured gasket',
      'Filter Classification according to EN779:2012': 'F9',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'BFHQ98A8-6', 'Dimensions WxHxD (mm)': '592x592x635', 'Filter Classification': 'F9', '# Pockets': '8', 'Filter Surface (m2)': '6', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '170', 'Energy Label': 'B' },
        { 'Type': 'BFHQ98B8-6', 'Dimensions WxHxD (mm)': '492x592x635', 'Filter Classification': 'F9', '# Pockets': '8', 'Filter Surface (m2)': '5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '170', 'Energy Label': 'D' },
        { 'Type': 'BFHQ98C4-6', 'Dimensions WxHxD (mm)': '287x592x635', 'Filter Classification': 'F9', '# Pockets': '4', 'Filter Surface (m2)': '3', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '170', 'Energy Label': 'B' }
      ]
    }
  },
  // 3. Rigid Pocket Filters
  {
    id: 'hd-series',
    name: 'HD-Series (High Airflow Rigid Bags)',
    image: hdSeries,
    cardDescription: 'G4, M5, M6, F7 - Withstands extreme pressure with unique self supporting filter medium',
    description: 'HD-Series bag filters are assembled within a polystyrene frame and a glasfiber media. Used for fine filters HVAC, industrial applications with high airflow requirements.',
    advantages: [
      'Withstands extreme pressure',
      'Totally combustible',
      'Lightweight frame',
      'High dust-holding capacity',
      'Unique self supporting filter medium'
    ],
    generalSpecs: {
      'Application': 'Fine filters HVAC, industrial',
      'Frame': 'Polystyrene',
      'Bonding': 'N/A',
      'Media': 'Glasfiber',
      'Gasket': 'optional, continuous poured gasket',
      'Filter Classification according to EN779:2012': 'G4, M5, M6, F7',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum Temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', '# Pockets', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        { 'Type': 'BFHD35A6-6', 'Dimensions WxHxD (mm)': '595x595x600', 'Filter Classification': 'G4', '# Pockets': '6', 'Filter Surface (m2)': '5', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '20', 'Energy Label': 'A' },
        { 'Type': 'BFHD35C3-6', 'Dimensions WxHxD (mm)': '288x595x600', 'Filter Classification': 'G4', '# Pockets': '3', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '20', 'Energy Label': 'A' },
        { 'Type': 'BFHD55A6-6', 'Dimensions WxHxD (mm)': '595x595x600', 'Filter Classification': 'M5', '# Pockets': '6', 'Filter Surface (m2)': '5', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '50', 'Energy Label': 'A' },
        { 'Type': 'BFHD55C3-6', 'Dimensions WxHxD (mm)': '288x595x600', 'Filter Classification': 'M5', '# Pockets': '3', 'Filter Surface (m2)': '2.5', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '50', 'Energy Label': 'A' },
        { 'Type': 'BFHD65A8-6', 'Dimensions WxHxD (mm)': '595x595x600', 'Filter Classification': 'M6', '# Pockets': '8', 'Filter Surface (m2)': '6.4', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '35', 'Energy Label': 'A' },
        { 'Type': 'BFHD65B6-6', 'Dimensions WxHxD (mm)': '493x595x600', 'Filter Classification': 'M6', '# Pockets': '6', 'Filter Surface (m2)': '4.8', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '35', 'Energy Label': 'A' },
        { 'Type': 'BFHD65C4-6', 'Dimensions WxHxD (mm)': '288x595x600', 'Filter Classification': 'M6', '# Pockets': '4', 'Filter Surface (m2)': '3.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '35', 'Energy Label': 'A' },
        { 'Type': 'BFHD65CC4-6', 'Dimensions WxHxD (mm)': '288x288x600', 'Filter Classification': 'M6', '# Pockets': '4', 'Filter Surface (m2)': '1.7', 'Airflow (m3/h)': '800', 'Airflow (L/s)': '222', 'Pressure Drop (Pa)': '35', 'Energy Label': 'A' },
        { 'Type': 'BFHD85A8-6', 'Dimensions WxHxD (mm)': '592x592x600', 'Filter Classification': 'F7', '# Pockets': '8', 'Filter Surface (m2)': '6.4', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '90', 'Energy Label': 'A' },
        { 'Type': 'BFHD85B6-6', 'Dimensions WxHxD (mm)': '493x595x600', 'Filter Classification': 'F7', '# Pockets': '6', 'Filter Surface (m2)': '4.8', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '90', 'Energy Label': 'A' },
        { 'Type': 'BFHD85C4-6', 'Dimensions WxHxD (mm)': '288x595x600', 'Filter Classification': 'F7', '# Pockets': '4', 'Filter Surface (m2)': '3.2', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '90', 'Energy Label': 'A' },
        { 'Type': 'BFHD85CC4-6', 'Dimensions WxHxD (mm)': '288x288x600', 'Filter Classification': 'F7', '# Pockets': '4', 'Filter Surface (m2)': '1.7', 'Airflow (m3/h)': '800', 'Airflow (L/s)': '222', 'Pressure Drop (Pa)': '90', 'Energy Label': 'A' }
      ]
    }
  }
];

// ==================== HEPA FILTERS CATEGORY ====================

const hepaFiltersProducts: Product[] = [
  // 1. Hepa HLA-E Series
  {
    id: 'hla-e-series',
    name: 'HEPA HLA-E Series',
    image: hlaESeries,
    cardDescription: 'H13, H14 - Lightweight construction for cleanrooms and operating rooms',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Lightweight construction',
      'Every filter is delivered with a test certificate',
      'HLA HEPA are fitted with 2 protection grids'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, operating rooms',
      'Frame': 'extruded aluminum',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glassfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HLA1113DBBE', 'Dimensions WxHxD (mm)': '305 x 305 x 68', 'Filter Classification': 'H13', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '120', 'Filter surface (m2)': '2.7' },
        { 'Type': 'HLA1113DBEE', 'Dimensions WxHxD (mm)': '305 x 610 x 68', 'Filter Classification': 'H13', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '120', 'Filter surface (m2)': '5.5' },
        { 'Type': 'HLA1114DBBE', 'Dimensions WxHxD (mm)': '305 x 305 x 68', 'Filter Classification': 'H14', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '140', 'Filter surface (m2)': '2.7' },
        { 'Type': 'HLA1114DBEE', 'Dimensions WxHxD (mm)': '305 x 610 x 68', 'Filter Classification': 'H14', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '140', 'Filter surface (m2)': '5.5' }
      ]
    }
  },
  // 2. Hepa HLA-G Series
  {
    id: 'hla-g-series',
    name: 'HEPA HLA-G Series',
    image: hlaGSeries,
    cardDescription: 'H13, H14 - Lightweight construction for cleanrooms and operating rooms',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Lightweight construction',
      'Every filter is delivered with a test certificate',
      'HLA HEPA are fitted with 2 protection grids'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, operating rooms',
      'Frame': 'extruded aluminum',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HLA1113DBBG', 'Dimensions WxHxD (mm)': '305 x 305 x 80', 'Filter Classification': 'H13', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '90', 'Filter surface (m2)': '2.9' },
        { 'Type': 'HLA1113DBEG', 'Dimensions WxHxD (mm)': '305 x 610 x 80', 'Filter Classification': 'H13', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '90', 'Filter surface (m2)': '6' },
        { 'Type': 'HLA1114DBBG', 'Dimensions WxHxD (mm)': '305 x 305 x 80', 'Filter Classification': 'H14', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '100', 'Filter surface (m2)': '2.9' },
        { 'Type': 'HLA1114DBEG', 'Dimensions WxHxD (mm)': '305 x 610 x 80', 'Filter Classification': 'H14', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '100', 'Filter surface (m2)': '6' }
      ]
    }
  },
  // 3. Hepa HLA-L Series
  {
    id: 'hla-l-series',
    name: 'HEPA HLA-L Series',
    image: hlaLSeries,
    cardDescription: 'H13, H14 - Lightweight construction for cleanrooms and operating rooms',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Lightweight construction',
      'Every filter is delivered with a test certificate',
      'HLA HEPA are fitted with 2 protection grids'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, operating rooms',
      'Frame': 'extruded aluminum',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HLA1113DBBL', 'Dimensions WxHxD (mm)': '305 x 305 x 150', 'Filter Classification': 'H13', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '120', 'Filter surface (m2)': '2.7' },
        { 'Type': 'HLA1113DBEL', 'Dimensions WxHxD (mm)': '305 x 610 x 150', 'Filter Classification': 'H13', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '120', 'Filter surface (m2)': '5.5' },
        { 'Type': 'HLA1114DBBL', 'Dimensions WxHxD (mm)': '305 x 305 x 150', 'Filter Classification': 'H14', 'Airflow (m3/h)': '150', 'Airflow (L/s)': '41', 'Pressure Drop (Pa)': '140', 'Filter surface (m2)': '2.7' },
        { 'Type': 'HLA1114DBEL', 'Dimensions WxHxD (mm)': '305 x 610 x 150', 'Filter Classification': 'H14', 'Airflow (m3/h)': '300', 'Airflow (L/s)': '83', 'Pressure Drop (Pa)': '140', 'Filter surface (m2)': '5.5' }
      ]
    }
  },
  // 4. Hepa HPG-Series
  {
    id: 'hpg-series',
    name: 'HEPA HPG-Series',
    image: hpgSeries,
    cardDescription: 'H13, H14 - Firm frame for cleanrooms, asbestos remediation, and operating rooms',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Firm frame',
      'Every filter is delivered with a test certificate'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, asbestos remediation, operating rooms',
      'Frame': 'galvanized steel',
      'Spacers': 'Aluminium',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HPG2113NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '500', 'Airflow (L/s)': '138', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '5.5' },
        { 'Type': 'HPG2113NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1200', 'Airflow (L/s)': '333', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '12.5' },
        { 'Type': 'HPG2113NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '2400', 'Airflow (L/s)': '666', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '22.5' },
        { 'Type': 'HPG2113NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '10.3' },
        { 'Type': 'HPG2113NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1850', 'Airflow (L/s)': '513', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '21.2' },
        { 'Type': 'HPG2114NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '500', 'Airflow (L/s)': '138', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '5.5' },
        { 'Type': 'HPG2114NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1000', 'Airflow (L/s)': '277', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '12.5' },
        { 'Type': 'HPG2114NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '2400', 'Airflow (L/s)': '666', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '22.5' },
        { 'Type': 'HPG2114NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '10.3' },
        { 'Type': 'HPG2114NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1850', 'Airflow (L/s)': '513', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '21.2' },
        { 'Type': 'HPG2113NBBL', 'Dimensions WxHxD (mm)': '305 x 305 x 150', 'Filter Classification': 'H13', 'Airflow (m3/h)': '225', 'Airflow (L/s)': '62', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '3.7' },
        { 'Type': 'HPG2113NBEL', 'Dimensions WxHxD (mm)': '305 x 610 x 150', 'Filter Classification': 'H13', 'Airflow (m3/h)': '450', 'Airflow (L/s)': '125', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '7.4' },
        { 'Type': 'HPG2113NEEL', 'Dimensions WxHxD (mm)': '610 X 610 X 150', 'Filter Classification': 'H13', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '14.9' },
        { 'Type': 'HPG2114NBBL', 'Dimensions WxHxD (mm)': '305 x 305 x 150', 'Filter Classification': 'H14', 'Airflow (m3/h)': '225', 'Airflow (L/s)': '62', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '3.7' },
        { 'Type': 'HPG2114NBEL', 'Dimensions WxHxD (mm)': '305 x 610 x 150', 'Filter Classification': 'H14', 'Airflow (m3/h)': '450', 'Airflow (L/s)': '125', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '7.4' },
        { 'Type': 'HPG2114NEEL', 'Dimensions WxHxD (mm)': '610 x 610 x 150', 'Filter Classification': 'H14', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '14.9' }
      ]
    }
  },
  // 5. Hepa HVG-Series
  {
    id: 'hvg-series',
    name: 'HEPA HVG-Series',
    image: hvgSeries,
    cardDescription: 'H13, H14 - Low pressure drop with high air flows',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Low pressure drop',
      'High air flows',
      'Every filter is delivered with a test certificate'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, asbestos remediation, operating rooms',
      'Frame': 'galvanized steel',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HVG1113NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '9' },
        { 'Type': 'HVG1113NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1750', 'Airflow (L/s)': '486', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '19' },
        { 'Type': 'HVG1113NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '38' },
        { 'Type': 'HCG1113NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1000', 'Airflow (L/s)': '277', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '10' },
        { 'Type': 'HCG1113NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '2000', 'Airflow (L/s)': '555', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '21' },
        { 'Type': 'HCG1113NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '4000', 'Airflow (L/s)': '1111', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '42' },
        { 'Type': 'HVG1113NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1550', 'Airflow (L/s)': '430', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '20' },
        { 'Type': 'HVG1113NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '3200', 'Airflow (L/s)': '888', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '49' },
        { 'Type': 'HVG1114NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '9' },
        { 'Type': 'HVG1114NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1750', 'Airflow (L/s)': '486', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '19' },
        { 'Type': 'HVG1114NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '38' },
        { 'Type': 'HCG1114NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1000', 'Airflow (L/s)': '277', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '10' },
        { 'Type': 'HCG1114NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '2000', 'Airflow (L/s)': '555', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '21' },
        { 'Type': 'HCG1114NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '4000', 'Airflow (L/s)': '1111', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '42' },
        { 'Type': 'HVG1114NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1800', 'Airflow (L/s)': '500', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '20' },
        { 'Type': 'HVG1114NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '49' }
      ]
    }
  },
  // 6. Hepa HVS-Series
  {
    id: 'hvs-series',
    name: 'HEPA HVS-Series',
    image: hvsSeries,
    cardDescription: 'H13, H14 - Low pressure drop with high air flows',
    description: 'The HEPA filters are checked for leak proofness at the end of the production process. It is advised to validate the functioning of the air-handling units after installation of the new HEPA filters, because of possible damages during transport or installation.',
    advantages: [
      'Low pressure drop',
      'High air flows',
      'Every filter is delivered with a test certificate'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, asbestos remediation, operating rooms',
      'Frame': 'galvanized steel',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Gasket': 'frothed polyerethane',
      'Filter Classification according to EN1822': 'H13, H14',
      'Maximum/recommended final pressure drop': '500 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'HVS1113NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '9' },
        { 'Type': 'HVS1113NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1750', 'Airflow (L/s)': '486', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '19' },
        { 'Type': 'HVS1113NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '38' },
        { 'Type': 'HCS1113NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1000', 'Airflow (L/s)': '277', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '10' },
        { 'Type': 'HCS1113NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '2000', 'Airflow (L/s)': '555', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '21' },
        { 'Type': 'HCS1113NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '4000', 'Airflow (L/s)': '1111', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '42' },
        { 'Type': 'HVS1113NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '1550', 'Airflow (L/s)': '430', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '20' },
        { 'Type': 'HVS1113NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H13', 'Airflow (m3/h)': '3200', 'Airflow (L/s)': '888', 'Pressure Drop (Pa)': '250', 'Filter surface (m2)': '49' },
        { 'Type': 'HVS1114NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '900', 'Airflow (L/s)': '250', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '9' },
        { 'Type': 'HVS1114NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1750', 'Airflow (L/s)': '486', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '19' },
        { 'Type': 'HVS1114NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '38' },
        { 'Type': 'HCS1114NBBM', 'Dimensions WxHxD (mm)': '305 x 305 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1000', 'Airflow (L/s)': '277', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '10' },
        { 'Type': 'HCS1114NBEM', 'Dimensions WxHxD (mm)': '305 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '2000', 'Airflow (L/s)': '555', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '21' },
        { 'Type': 'HCS1114NEEM', 'Dimensions WxHxD (mm)': '610 x 610 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '4000', 'Airflow (L/s)': '1111', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '42' },
        { 'Type': 'HVS1114NADM', 'Dimensions WxHxD (mm)': '288 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '1800', 'Airflow (L/s)': '500', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '20' },
        { 'Type': 'HVS1114NDDM', 'Dimensions WxHxD (mm)': '592 x 592 x 292', 'Filter Classification': 'H14', 'Airflow (m3/h)': '3750', 'Airflow (L/s)': '1041', 'Pressure Drop (Pa)': '280', 'Filter surface (m2)': '49' }
      ]
    }
  },
  // 7. PB Series
  {
    id: 'pb-series',
    name: 'PB Series',
    image: pbSeries,
    cardDescription: 'F8, F9, H10, H12, H13 - Compact construction for air conditioning and ventilation',
    description: 'HEPA Filter PB series is used for air conditioning and ventilation systems and for industrial processes, cleanrooms and operating rooms.',
    advantages: [
      'Compact construction'
    ],
    generalSpecs: {
      'Application': 'cleanrooms, operating rooms',
      'Frame': 'Galvanized steel',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'glasfibre paper',
      'Filter Classification according to EN1822': 'F8, F9, H10, H12, H13',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Filter surface (m2)'],
      rows: [
        { 'Type': 'PB-F8-V', 'Dimensions WxHxD (mm)': '202 x 600 x 86', 'Filter Classification': 'F8', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '40', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-F8-V/90', 'Dimensions WxHxD (mm)': '202 x 600 x 65', 'Filter Classification': 'F8', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '100', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-F9-V', 'Dimensions WxHxD (mm)': '202 x 600 x 86', 'Filter Classification': 'F9', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '50', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-F9-V/90', 'Dimensions WxHxD (mm)': '202 x 600 x 65', 'Filter Classification': 'F9', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '120', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H10-V', 'Dimensions WxHxD (mm)': '202 x 600 x 86', 'Filter Classification': 'H10', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '100', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H10-V/90', 'Dimensions WxHxD (mm)': '202 x 600 x 65', 'Filter Classification': 'H10', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '145', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H12-V', 'Dimensions WxHxD (mm)': '202 x 600 x 86', 'Filter Classification': 'H12', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '150', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H12-V/90', 'Dimensions WxHxD (mm)': '202 x 600 x 65', 'Filter Classification': 'H12', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '195', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H13-V', 'Dimensions WxHxD (mm)': '202 x 600 x 86', 'Filter Classification': 'H13', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '160', 'Filter surface (m2)': '3.5' },
        { 'Type': 'PB-H13-V/90', 'Dimensions WxHxD (mm)': '202 x 600 x 65', 'Filter Classification': 'H13', 'Airflow (m3/h)': '200', 'Airflow (L/s)': '55', 'Pressure Drop (Pa)': '200', 'Filter surface (m2)': '3.5' }
      ]
    }
  }
];

// ==================== PANEL FILTERS CATEGORY ====================

const panelFiltersProducts: Product[] = [
  // 1. V-Pleat Panel Filters
  {
    id: 'v-pleat-panel',
    name: 'V-Pleat Panel Filters',
    image: vPleatPanel,
    cardDescription: 'G2, G3, G4 & M5 - Custom Aluminium or S/S pleated panel filters',
    description: 'V-Pleat Panel filters are pleated filters which are assembled within a galvanized steel frame and a synthetic media.',
    advantages: [
      'Straightforward assembly',
      'Firm construction'
    ],
    generalSpecs: {
      'Application': 'prefilters HVAC, industry',
      'Frame': 'Aluminium or Stainless',
      'Spacers': 'n.a.',
      'Bonding': 'n.a.',
      'Media': 'Synthetic',
      'Gasket': 'optional Neoprene',
      'Filter Classification according to EN779:2012': 'G4',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'VPF 12x24x1', 'Dimensions WxHxD (mm)': '287x592x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.3', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 16x20x1', 'Dimensions WxHxD (mm)': '394x490x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.4', 'Airflow (m3/h)': '1880', 'Airflow (L/s)': '522', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 16x24x1', 'Dimensions WxHxD (mm)': '394x592x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.5', 'Airflow (m3/h)': '2250', 'Airflow (L/s)': '625', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 16x25x1', 'Dimensions WxHxD (mm)': '394x620x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.5', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 20x20x1', 'Dimensions WxHxD (mm)': '490x490x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.5', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 20x24x1', 'Dimensions WxHxD (mm)': '490x592x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.5', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 20x25x1', 'Dimensions WxHxD (mm)': '490x620x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.6', 'Airflow (m3/h)': '2900', 'Airflow (L/s)': '805', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 24x24x1', 'Dimensions WxHxD (mm)': '592x592x23', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.7', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '90' },
        { 'Type': 'VPF 12x24x2', 'Dimensions WxHxD (mm)': '287x592x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.6', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 16x20x2', 'Dimensions WxHxD (mm)': '394x490x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.7', 'Airflow (m3/h)': '1880', 'Airflow (L/s)': '522', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 16x24x2', 'Dimensions WxHxD (mm)': '394x592x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.8', 'Airflow (m3/h)': '2250', 'Airflow (L/s)': '625', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 16x25x2', 'Dimensions WxHxD (mm)': '394x620x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.8', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 20x20x2', 'Dimensions WxHxD (mm)': '490x490x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '0.8', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 20x24x2', 'Dimensions WxHxD (mm)': '490x592x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 20x25x2', 'Dimensions WxHxD (mm)': '490x620x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.1', 'Airflow (m3/h)': '2900', 'Airflow (L/s)': '805', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 24x24x2', 'Dimensions WxHxD (mm)': '592x592x45', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.2', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'VPF 12x24x4', 'Dimensions WxHxD (mm)': '287x592x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.1', 'Airflow (m3/h)': '1700', 'Airflow (L/s)': '472', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 16x20x4', 'Dimensions WxHxD (mm)': '394x490x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.2', 'Airflow (m3/h)': '1880', 'Airflow (L/s)': '522', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 16x24x4', 'Dimensions WxHxD (mm)': '394x592x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '2250', 'Airflow (L/s)': '625', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 16x25x4', 'Dimensions WxHxD (mm)': '394x620x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 20x20x4', 'Dimensions WxHxD (mm)': '490x490x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.5', 'Airflow (m3/h)': '2350', 'Airflow (L/s)': '652', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 20x24x4', 'Dimensions WxHxD (mm)': '490x592x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.9', 'Airflow (m3/h)': '2800', 'Airflow (L/s)': '777', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 20x25x4', 'Dimensions WxHxD (mm)': '490x620x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '1.9', 'Airflow (m3/h)': '2900', 'Airflow (L/s)': '805', 'Pressure Drop (Pa)': '55' },
        { 'Type': 'VPF 24x24x4', 'Dimensions WxHxD (mm)': '592x592x96', 'Filter Classification': 'G4', 'Filter Surface (m2)': '2.4', 'Airflow (m3/h)': '3400', 'Airflow (L/s)': '944', 'Pressure Drop (Pa)': '55' }
      ]
    }
  },
  // 2. Disposable Panel Filters
  {
    id: 'disposable-panel',
    name: 'Disposable Panel Filters',
    image: disposablePanel,
    cardDescription: 'G4 (EN799) or ISO coarse 70% - Versatile cardboard prefilters',
    description: 'DF Panel filter is used as a pre-filter for air spray booths, air conditioning systems and industrial systems. This panel filter is a pleated filter which is assembled within a moisture-resistant cardboard frame.',
    advantages: [
      'Straightforward assembly',
      'Lower pressure drop',
      'Larger dust-holding capacity'
    ],
    generalSpecs: {
      'Application': 'prefilters HVAC, industry, spray booth',
      'Frame': 'Firm cardboard frame',
      'Spacers': 'n.a.',
      'Bonding': 'n.a.',
      'Media': 'Synthetic',
      'Gasket': 'optional Neoprene',
      'Filter Classification according to EN779:2012': 'G4',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        ['DF 12x24x1', '289x594x23', 'G4', '0.4', '1700', '472', '70'],
        ['DF 16x20x1', '394x495x23', 'G4', '0.5', '1880', '522', '70'],
        ['DF 16x25x1', '394x622x23', 'G4', '0.7', '2350', '652', '70'],
        ['DF 20x20x1', '495x495x23', 'G4', '0.7', '2350', '652', '70'],
        ['DF 20x24x1', '495X594X23', 'G4', '0.7', '2800', '777', '70'],
        ['DF 20x25x1', '495x622x23', 'G4', '0.8', '2900', '805', '70'],
        ['DF 24x24x1', '594x594x23', 'G4', '0.9', '3400', '944', '70'],
        ['DF 12x24x2', '289x594x45', 'G4', '0.8', '1700', '472', '55'],
        ['DF 16x20x2', '394x495x45', 'G4', '0.9', '1880', '522', '55'],
        ['DF 16x25x2', '394x622x45', 'G4', '1', '2350', '652', '55'],
        ['DF 20x20x2', '495x495x45', 'G4', '1', '2350', '652', '55'],
        ['DF 20x24x2', '495X594X45', 'G4', '1.3', '2800', '777', '55'],
        ['DF 20x25x2', '495x622x45', 'G4', '1.4', '2900', '805', '55'],
        ['DF 24x24x2', '594x594x45', 'G4', '1.6', '3400', '944', '55'],
        ['DF 12x24x4', '289x594x94', 'G4', '1.7', '1700', '472', '45'],
        ['DF 16x20x4', '394x495x94', 'G4', '1.6', '1880', '522', '45'],
        ['DF 16x25x4', '394x622x94', 'G4', '2', '2350', '652', '45'],
        ['DF 20x20x4', '495x495x94', 'G4', '2', '2350', '652', '45'],
        ['DF 20x24x4', '495X594X94', 'G4', '2.5', '2800', '777', '45'],
        ['DF 20x25x4', '495x622x94', 'G4', '2.5', '2900', '805', '45'],
        ['DF 24x24x4', '594x594x94', 'G4', '3.1', '3400', '944', '45']
      ]
    }
  },
  // 3. Flat Panel Filters
  {
    id: 'flat-panel',
    name: 'Flat Panel Filters',
    image: flatPanel,
    cardDescription: 'G2, G3, G4 & M5 - Custom Aluminium flat panel filters',
    description: 'Our aluminum flat panel filters are manufactured on request to any dimension required. The panels can be manufactured with any of the filter media classifications listed below in an 8mm, 11mm and 22mm thick frame.',
    advantages: [
      'Synthetic polyester filter media',
      'Low initial pressure drop',
      'High economic efficiency',
      'Washable'
    ],
    generalSpecs: {
      'Application': 'prefilters HVAC, industry',
      'Media': 'Synthetic',
      'Maximum/recommended final pressure drop': '150 Pa',
      'Maximum airspeed': '1.2 m/s',
      'Filter Classification according to EN779: 2012': 'G2, G3, G4 and M5'
    },
    customTable: {
      headers: ['Article Code', 'Dimensions (mm)', 'Depth (mm)', 'IPD', 'FPD'],
      rows: [
        ['PF', 'On Request', '8', '15', '150'],
        ['PF', 'On Request', '11', '15', '150'],
        ['PF', 'On Request', '22', '15', '150']
      ]
    }
  },
  // 4. Aquapleat Panels
  {
    id: 'aquapleat-panel',
    name: 'AquaPleat Panels',
    image: aquapleatPanel,
    cardDescription: 'G4(EN799) or ISO coarse 70% - Unique plastic frame with hydrophobic media',
    description: 'AQUA Panel filter is a pleated filter which is assembled in a plastic frame. Its unique self-supporting filter medium protects the last filtration step from humidity.',
    advantages: [
      'Very low pressure drop',
      'Firm construction'
    ],
    generalSpecs: {
      'Application': 'HVAC, industrial',
      'Frame': 'Plastic',
      'Spacers': 'N/A',
      'Bonding': '2 component polyurethane',
      'Media': '100% Polyester, hydrophobic',
      'Gasket': 'Neroprene of Polyurethane',
      'Filter Classification according to EN779:2012': 'G4',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '100%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        ['AQUA', '287x592x48', 'G4', '0.6', '1700', '472', '70'],
        ['AQUA', '394x490x48', 'G4', '0.7', '1880', '522', '70'],
        ['AQUA', '394x592x48', 'G4', '0.8', '2250', '625', '70'],
        ['AQUA', '394x620x48', 'G4', '0.8', '2350', '652', '70'],
        ['AQUA', '490x490x48', 'G4', '0.8', '2350', '652', '70'],
        ['AQUA', '490x592x48', 'G4', '1', '2800', '777', '70'],
        ['AQUA', '490x620x48', 'G4', '1.1', '2900', '805', '70'],
        ['AQUA', '287x592x96', 'G4', '1.1', '1700', '472', '50'],
        ['AQUA', '394x490x96', 'G4', '1.2', '1880', '522', '50'],
        ['AQUA', '394x592x96', 'G4', '1.5', '2250', '625', '50'],
        ['AQUA', '394x620x96', 'G4', '1.5', '2350', '652', '50'],
        ['AQUA', '490x490x96', 'G4', '1.5', '2350', '652', '50'],
        ['AQUA', '490x592x96', 'G4', '1.9', '2800', '777', '50'],
        ['AQUA', '490x620x96', 'G4', '1.9', '2900', '805', '50']
      ]
    }
  },
  // 5. Minipleat Panel Filters
  {
    id: 'minipleat-panel',
    name: 'MiniPleat Panel Filters',
    image: minipleatPanel,
    cardDescription: 'F7 & F9 - High efficiency Panel Filters',
    description: 'CP Panel Filter and the panel filters are pleated filters which are assembled within a plastic frame.',
    advantages: [
      'Compact construction',
      'Firm construction'
    ],
    generalSpecs: {
      'Application': 'HVAC',
      'Frame': 'Plastic',
      'Spacers': 'Hotmelt',
      'Bonding': '2 component polyurethane',
      'Media': 'Synthetic',
      'Gasket': 'continuous poured gasket',
      'Filter Classification according to EN779:2012': 'M5, M6,F7, F9',
      'Maximum/recommended final pressure drop': '450 Pa',
      'Maximum temperature': '65°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)', 'Energy Label'],
      rows: [
        ['CP24x24x4-M5', '592x592x96', 'M5', '11', '3400', '944', '90', 'G'],
        ['CP20x24x4-M5', '490x592x96', 'M5', '9.1', '2800', '777', '90', 'G'],
        ['CP12x24x4-M5', '287x592x96', 'M5', '5.2', '1700', '472', '90', 'G'],
        ['CP24x24x4-M6', '592x592x96', 'M6', '11', '3400', '944', '120', 'G'],
        ['CP20x24x4-M6', '490x592x96', 'M6', '9.1', '2800', '777', '120', 'G'],
        ['CP12x24x4-M6', '287x592x96', 'M6', '5.2', '1700', '472', '120', 'G'],
        ['CP24x24x4-F7', '592x592x96', 'F7', '11', '3400', '944', '150', 'G'],
        ['CP20x24x4-F7', '490x592x96', 'F7', '9.1', '2800', '777', '150', 'G'],
        ['CP12x24x4-F7', '287x592x96', 'F7', '5.2', '1700', '472', '150', 'G'],
        ['CP24x24x4-F9', '592x592x96', 'F9', '11', '3400', '944', '215', 'G'],
        ['CP20x24x4-F9', '490x592x96', 'F9', '9.1', '2800', '777', '215', 'G'],
        ['CP12x24x4-F9', '287x592x96', 'F9', '5.2', '1700', '472', '215', 'G']
      ]
    }
  },
  // 6. Eco-V-Pleat
  {
    id: 'eco-v-pleat',
    name: 'Eco-V-Pleat',
    image: ecoVPleat,
    cardDescription: 'G4 (EN799) or ISO course 70% - Totally combustible with unique self-supporting filter medium',
    description: 'Eco-V-Pleat Panel filter is a pleated filter assembled in a plastic frame. Its unique self-supporting filter medium protects the last filtration step from humidity.',
    advantages: [
      'Very low pressure drop',
      'Firm construction',
      'Totally combustible'
    ],
    generalSpecs: {
      'Application': 'HVAC, industrial',
      'Frame': 'Plastic',
      'Spacers': 'N/A',
      'Bonding': '2 component polyurethane',
      'Media': 'Synthetic',
      'Gasket': 'Continuous poured gasket',
      'Filter Classification according to EN779:2012': 'G4',
      'Maximum/recommended final pressure drop': '250 Pa',
      'Maximum temperature': '70°C',
      'Maximum relative humidity': '90%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Filter Classification', 'Filter Surface (m2)', 'Airflow (m3/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        ['ECO-V-PLEAT', '287x592x45', 'G4', '0.6', '1700', '472', '70'],
        ['ECO-V-PLEAT', '394x490x45', 'G4', '0.7', '1880', '522', '70'],
        ['ECO-V-PLEAT', '394x592x45', 'G4', '0.8', '2250', '625', '70'],
        ['ECO-V-PLEAT', '394x620x45', 'G4', '0.8', '2350', '652', '70'],
        ['ECO-V-PLEAT', '490x490x45', 'G4', '0.8', '2350', '652', '70'],
        ['ECO-V-PLEAT', '490x592x45', 'G4', '1', '2800', '777', '70'],
        ['ECO-V-PLEAT', '490x620x45', 'G4', '1.1', '2900', '805', '70'],
        ['ECO-V-PLEAT', '592x592x45', 'G4', '1.2', '3400', '944', '70'],
        ['ECO-V-PLEAT', '287x592x95', 'G4', '1.1', '1700', '472', '50'],
        ['ECO-V-PLEAT', '394x490x95', 'G4', '1.2', '1880', '522', '50'],
        ['ECO-V-PLEAT', '394x592x95', 'G4', '1.5', '2250', '625', '50'],
        ['ECO-V-PLEAT', '394x620x95', 'G4', '1.5', '2350', '652', '50'],
        ['ECO-V-PLEAT', '490x490x95', 'G4', '1.5', '2350', '652', '50'],
        ['ECO-V-PLEAT', '490x592x95', 'G4', '1.9', '2800', '777', '50'],
        ['ECO-V-PLEAT', '490x620x95', 'G4', '1.9', '2900', '805', '50'],
        ['ECO-V-PLEAT', '592x592x95', 'G4', '2.4', '3400', '944', '50']
      ]
    }
  }
];

// ==================== GREASE FILTERS CATEGORY ====================

const greaseFiltersProducts: Product[] = [
  // 1. Honeycomb
  {
    id: 'honeycomb-grease',
    name: 'Honeycomb Grease Filter',
    image: honeycombGrease,
    cardDescription: 'The most preferred filter to capture cooking oils in kitchens',
    description: 'By far the most preferred filter to capture cooking oils used in kitchens today. This filter is a strong durable element and because it is fully washable it becomes a very economical choice. Available in a variety of sizes to suit most kitchen hoods.',
    advantages: [
      'Strong durable construction',
      'Fully washable',
      'Very economical choice',
      'Available in various sizes'
    ],
    generalSpecs: {
      'Application': 'Commercial kitchen extracts',
      'Typical 495mm x 495mm x 48mm': 'Rated capacity 1200 cfm, Clean resistance 20pa',
      'Typical 595mm x 595mm x 48mm': 'Rated capacity 1770 cfm, Clean resistance 22pa',
      'Note': 'Please contact our factory for a full list of sizes available'
    }
  },
  // 2. Stainless Steel Mesh
  {
    id: 'ss-mesh-grease',
    name: 'Stainless Steel Mesh Grease Filter',
    image: ssMeshGrease,
    cardDescription: 'Suitable for use in difficult operating conditions',
    description: 'Designed for Tough Applications - Filters Direct permanent metal filters are suitable for use in very difficult operating conditions including high velocity (up to 900 FPM), high temperature, high moisture, corrosive environments, oil or grease laden air. Permanent metal filters can be cleaned by flushing with a hose, washing in warm soapy water or steam cleaned. Allow filters to dry then re‐install. With proper care and handling, metal filters can provide years of dependable service.',
    advantages: [
      'Type HD – Steel construction',
      'Multiple layers of pleated and flat stainless steel screen wire',
      'Heavy gauge expanded metal grids on both sides',
      'Washable for repeated use',
      'Low resistance',
      '65 ‐ 70% arrestance',
      'Single piece frame with mitered corners',
      'Predrilled drainage holes'
    ],
    generalSpecs: {
      'Application': 'Ideal for high moisture or high velocity conditions',
      'Type': 'HD ‐ Steel Construction',
      'Media': 'Multiple layers of pleated and flat stainless steel screen wire',
      'Frame': '20 gauge stainless steel channels with mitered corners',
      'Washable': 'Washable for repeated use',
      'Resistance': 'Low resistance',
      'Arrestance': '65 ‐ 70%'
    }
  }
];

// ==================== HOLDING FRAMES CATEGORY ====================

const holdingFramesProducts: Product[] = [
  // 1. HF Activated Carbon
  {
    id: 'hf-activated-carbon',
    name: 'HF Activated Carbon Holding Frames',
    image: hfActivatedCarbon,
    cardDescription: 'Used for Airports, Museums and Industry',
    description: 'Activated Carbon holding frames have standard dimensions and are a good replacement for the used holding frames removed during the renovation of air treatment cabinets.',
    advantages: [
      'Straightforward assembly'
    ],
    generalSpecs: {
      'Application': 'Airports, Industry',
      'Frame': 'Galvanized steel, Stainless steel',
      'Filter Classification according to EN779:2012': 'N/a',
      'Maximum Temperature': 'N/a',
      'Maximum Relative Humidity': 'N/a'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Material', 'Number of Holes', '# Frames / Box'],
      rows: [
        ['AC.H.FR.A', '610x610x70', 'Galvanized steel', '16', '4'],
        ['AC.H.FR.B', '508x610x70', 'Galvanized steel', '12', '4'],
        ['AC.H.FR.C', '305x610x70', 'Galvanized steel', '8', '8'],
        ['AC.H.FR.CC', '305x305x70', 'Galvanized steel', '4', '16'],
        ['AC.H.FR.A.SS', '610x610x70', 'Stainless steel', '16', '4'],
        ['AC.H.FR.B.SS', '508x610x70', 'Stainless steel', '12', '4'],
        ['AC.H.FR.C.SS', '305x610x70', 'Stainless steel', '8', '8'],
        ['AC.H.FR.CC.SS', '305x305x70', 'Stainless steel', '4', '16']
      ]
    }
  },
  // 2. HF HEPA
  {
    id: 'hf-hepa',
    name: 'HF HEPA Holding Frames',
    image: hfHepa,
    cardDescription: 'Used for cleanrooms, hospitals and gas turbines',
    description: 'HF Hepa holding frames have standard dimensions and are a good replacement for the used holding frames removed during the renovation of air treatment cabinets.',
    advantages: [
      'Straightforward assembly',
      'Good seal between filter and frame by mounting accessories'
    ],
    generalSpecs: {
      'Application': 'Cleanrooms, Hospitals',
      'Frame': 'Stainless Steel',
      'Filter Classification according to EN779:2012': 'N/a',
      'Maximum Temperature': 'N/a',
      'Maximum Relative Humidity': 'N/a',
      'Comment': 'Assembly tools for filters with a depth of 292 mm are included standard. Assembly tools for filters with a depth of 60-150 mm can be delivered on request'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Montage Dimensions filter', 'Material', 'Frames / box'],
      rows: [
        ['HP.HOLD.FR.EE/SS', '625x625x125', '610x610x292', 'Stainless steel', '1'],
        ['HP.HOLD.FR.BE/SS', '320x625x125', '305x610x292', 'Stainless steel', '2'],
        ['HP.HOLD.FR.DD/SS', '607x607x125', '592x592x292', 'Stainless steel', '1'],
        ['HP.HOLD.FR.AD/SS', '303x607x125', '288x592x292', 'Stainless steel', '2']
      ]
    }
  },
  // 3. Universal Holding Frames
  {
    id: 'universal-holding-frames',
    name: 'Universal Holding Frames',
    image: universalHoldingFrames,
    cardDescription: 'Used for HVAC and industry',
    description: 'Filter holding frames suited to house an array of different filter combinations.',
    advantages: [
      'Very quick and Straightforward assembly',
      'Continuous poured gasket'
    ],
    generalSpecs: {
      'Application': 'HVAC',
      'Frame': 'Stainless Steel',
      'Gasket': 'frothed polyerethane',
      'Maximum temperature': 'N/a',
      'Maximum relative humidity': 'N/a',
      'Comment': 'When 3 or more frames are mounted together, the frames need to be reinforced'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Dimensions filter', 'Material', 'Frames / box'],
      rows: [
        ['Hold.Fr. A/Stainless steel-3', '610x610x97', '592x592x25 592x592x48 592x592x75', 'Stainless steel', '3'],
        ['Hold.Fr. B/Stainless steel-3', '508x610x97', '490x592x25 492x592x48 490x592x75', 'Stainless steel', '3'],
        ['Hold.Fr. C/Stainless steel-3', '305x610x97', '288x592x25 288x592x48 288x592x75', 'Stainless steel', '6'],
        ['Hold.Fr. CC/Stainless steel-3', '305x305x97', '288x288x25 288x288x48 288x288x75', 'Stainless steel', '12']
      ]
    }
  }
];

// ==================== HOME VENTILATION CATEGORY ====================

const homeVentilationProducts: Product[] = [
  // 1. HRV-Generation 1 Filter
  {
    id: 'hrv-gen1',
    name: 'HRV - Generation 1 Filter',
    image: hrvGen1,
    cardDescription: 'F7 / eMP1 60% - Latest filters for newest HRV home ventilation units',
    description: 'These are the latest filters for the newest HRV home ventilation units. Dimensions: 305x295x95mm',
    advantages: [
      'Designed for newest HRV units',
      'High filtration efficiency'
    ],
    generalSpecs: {
      'Application': 'HRV box units',
      'Frame': 'Firm cardboard frame',
      'Media': 'Synthetic',
      'Gasket': 'yes',
      'Filter Classification according to EN779:2012': 'F7',
      'Filter Classification according to ISO16890': 'eMP1 60%',
      'Dimensions': '305x295x95mm'
    }
  },
  // 2. HRV-Generation 2 Filter
  {
    id: 'hrv-gen2',
    name: 'HRV - Generation 2 Filter',
    image: hrvGen2,
    cardDescription: 'F8 / eMP1 70% - Latest filters for newest HRV home ventilation units',
    description: 'These are the latest filters for the newest HRV home ventilation units. Dimensions: 300x295x95mm',
    advantages: [
      'Designed for newest HRV units',
      'Higher filtration efficiency than Gen 1'
    ],
    generalSpecs: {
      'Application': 'HRV box units',
      'Frame': 'Firm cardboard frame',
      'Media': 'Synthetic',
      'Gasket': 'yes',
      'Filter Classification according to EN779:2012': 'F8',
      'Filter Classification according to ISO16890': 'eMP1 70%',
      'Dimensions': '300x295x95mm'
    }
  },
  // 3. HRV - Smartvent filter
  {
    id: 'hrv-smartvent',
    name: 'HRV - Smartvent Filter',
    image: hrvSmartvent,
    cardDescription: 'F8 / eMP1 70% - Second most common replacement filter for HRV units',
    description: 'Second most common replacement filter for the HRV units. Dimensions: 288x288x150mm',
    advantages: [
      'Compatible with Smartvent systems',
      'High filtration efficiency'
    ],
    generalSpecs: {
      'Application': 'HRV box units',
      'Frame': 'Firm cardboard frame',
      'Media': 'Synthetic',
      'Gasket': 'No',
      'Filter Classification according to EN779:2012': 'F8',
      'Filter Classification according to ISO16890': 'eMP1 70%',
      'Dimensions': '288x288x150mm'
    }
  },
  // 4. HRV - HV Filter
  {
    id: 'hrv-hv',
    name: 'HRV - HV Filter',
    image: hrvHv,
    cardDescription: 'F7 / eMP1 80% - The most common HRV Filter',
    description: 'This is the most common HRV Filter. Dimensions: 295x300x130mm',
    advantages: [
      'Most common HRV filter model',
      'Excellent filtration efficiency',
      'Wide compatibility'
    ],
    generalSpecs: {
      'Application': 'HRV box units',
      'Frame': 'Firm cardboard frame',
      'Media': 'Synthetic',
      'Gasket': 'No',
      'Filter Classification according to EN779:2012': 'F7',
      'Filter Classification according to ISO16890': 'eMP1 80%',
      'Dimensions': '295x300x130mm'
    }
  }
];

// ==================== FILTER MEDIA PRODUCTS ====================

// Activated Carbon Filters
const activatedCarbonFilters: Product[] = [
  {
    id: 'ac12',
    name: 'AC12',
    image: ac12,
    cardDescription: 'This activated carbon filter is designed to adsorb small amounts of gaseous impurities.',
    description: 'The AC12 activated carbon filter is designed to adsorb small amounts of gaseous impurities (<100 ppm vol.). At higher concentrations, there is a risk of spontaneous combustion.',
    advantages: ['Adsorbs gaseous impurities', 'Compact design', 'Easy installation'],
    generalSpecs: {
      'Application': 'Airports, museums, industry',
      'Frame': 'Galvanized steel',
      'Media': 'Activated carbon',
      'Filter Classification': 'Carbon filter',
      'Maximum Temperature': '40°C',
      'Maximum Relative Humidity': '70%'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Carbon Type', 'Initial Weight (kg)', 'Airflow (m³/h)', 'Airflow (L/s)', 'Pressure Drop (Pa)'],
      rows: [
        { 'Type': 'AC12-4/M-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'M-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m³/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'AC12-4/R-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'R-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m³/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' },
        { 'Type': 'AC12-4/S-CARB', 'Dimensions WxHxD (mm)': '296X296X292', 'Carbon Type': 'S-CARB', 'Initial Weight (kg)': '4.5', 'Airflow (m³/h)': '425', 'Airflow (L/s)': '118', 'Pressure Drop (Pa)': '70' }
      ]
    }
  },
  {
    id: 'activated-carbon-holding-frames',
    name: 'Activated Carbon Holding Frames',
    image: activatedCarbonHoldingFrames,
    cardDescription: 'Widely used in airports, record offices, museums and the semiconductor industry.',
    description: 'Holding frames designed specifically for activated carbon filters, widely used in airports, record offices, museums and the semiconductor industry.',
    advantages: ['Robust construction', 'Easy filter replacement', 'Universal compatibility'],
    generalSpecs: {
      'Application': 'Airports, museums, semiconductor industry',
      'Frame': 'Stainless steel',
      'Media': 'N/A (frame only)',
      'Maximum Temperature': '40°C'
    },
    customTable: {
      headers: ['Type', 'Dimensions WxHxD (mm)', 'Carbon Type', 'Initial Weight (kg)', 'Volume (m³)'],
      rows: [
        { 'Type': 'ACP', 'Dimensions WxHxD (mm)': '592X592X45', 'Carbon Type': 'M-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' },
        { 'Type': 'ACP', 'Dimensions WxHxD (mm)': '592X592X45', 'Carbon Type': 'R-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' },
        { 'Type': 'ACP', 'Dimensions WxHxD (mm)': '592X592X45', 'Carbon Type': 'S-CARB', 'Initial Weight (kg)': '5', 'Volume (m³)': '0.012' }
      ]
    }
  },
  {
    id: 'carbon-cylinder',
    name: 'Carbon Cylinder',
    image: carbonCylinder,
    cardDescription: 'Available in the form or elements, which can be filled with loose activated carbon pellets.',
    description: 'This activated carbon filter is designed to adsorb small amounts of gaseous impurities (<100 ppm vol.). At higher concentrations, there is a risk of spontaneous creation.',
    advantages: ['Refillable', 'High dust-holding capacity', 'Straightforward assembly'],
    generalSpecs: {
      'Application': 'Airports, industry, catering',
      'Frame': 'Galvanized steel or stainless steel',
      'Activated Carbon': 'Coal-based carbon (pellets)',
      'Gasket': 'Neoprene',
      'Maximum Temperature': '40°C',
      'Maximum Relative Humidity': '70%'
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
    image: hpqAk,
    cardDescription: 'Consisting of synthetic medium combined with activated carbon, resistant up to 65°C.',
    description: 'The HPQ-AK is an activated carbon filter suitable for use in air treatment cabinets, air conditioning systems, industrial systems, and as a pre-filter in cleanrooms.',
    advantages: ['Compact design (small construction space)', 'Low pressure drop'],
    generalSpecs: {
      'Application': 'HVAC, Industry',
      'Frame': 'Plastic',
      'Media': 'Synthetic medium combined with activated carbon',
      'Filter Classification according to EN779:2012': 'M6',
      'Maximum Temperature': '65°C',
      'Maximum Relative Humidity': '90%'
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
];

// Compact Filters
const compactFilters: Product[] = [
  {
    id: 'hpq-series',
    name: 'HPQ-Series',
    image: hpqSeries,
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
];

// Spray Booth Filters
const sprayBoothFilters: Product[] = [
  {
    id: 'andreae-filters',
    name: 'Andreae Filters',
    image: andreaeFilters,
    cardDescription: 'Efficient Overspray Filter Paper.',
    description: 'Overspray filter paper/dry paint booth filter. Made of two pleated and perforated linerboard walls glued by their edges. 900mm Wide in adjustable length to up to 11mtrs.'
  },
  {
    id: 'ceiling-filter-media',
    name: 'Ceiling Filter Media',
    image: ceilingFilterMedia,
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
    image: customBagFilters,
    cardDescription: 'Tailored Filters for Your Booth.',
    description: 'Our bag filters can be tailored to any width, depth, length, with any number of pockets and filtration class that is required for your spray booth.'
  },
  {
    id: 'disposable-panel-filters',
    name: 'Disposable Panel Filters',
    image: disposablePanel,
    cardDescription: 'Convenient Cardboard G4 Filters.',
    description: 'Cardboard G4 disposable filters. We have a large range of sizes to suit.'
  },
  {
    id: 'fibreglass-media-rolls',
    name: 'Fibreglass Media Rolls',
    image: fibreglassMediaRolls,
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
    image: vikingFilters,
    cardDescription: 'Patented Modular Spray Booth Filters.',
    description: 'The patented Viking modular spray booth filters. Available in 4-metre booth packs, 84 filters in the carton. Dimensions: 900mm long, 100mm wide, 50 mm deep.'
  }
];

// Cooler Media
const coolerMedia: Product[] = [
  {
    id: 'evap-pads',
    name: 'Evap-Pads',
    image: evapPads,
    cardDescription: 'Cooling pad with a high evaporation efficiency.',
    description: 'This unique design yields a cooling pad with a high evaporation efficiency while still operating with a very low pressure drop. In addition scaling is kept to a minimum and no water carry‐over occurs due to the fact that the water is directed to the air inlet side of the pad. This is where most of the evaporation takes place. The impregnation procedure for the cellulose paper ensures a strong self supporting product, with high absorbance, which is protected against decomposition and rotting and therefore increasing longevity. The distribution pad constitutes a vital part of a complete system and should always be placed on top of the cooling pad it ensures a uniform supply of the water to the cooling pad and minimises the risk of dry spots.',
    advantages: ['High evaporation efficiency', 'Superb wetting properties', 'Low pressure drop when wet, leading to lower operating costs', 'No water carryover', 'Low scaling', 'Self cleaning', 'Strong and self supporting', 'Long life time', 'Low running costs', 'Quick and easy to install', 'Environmentally friendly', 'Consistent high quality'],
    generalSpecs: {
      'Technology': 'Water is circulated via a pump station and supplied to the top of the cooling. A distribution pad on the top of the cooling pad ensures an even water distribution. The water flows down the corrugated surface of the EVAP-Pad. Part of the water is evaporated by the warm and dry air that passes through the pad. The rest of the water assists in washing the pad, and is drained back to the pump. The heat that is needed for the evaporation is taken from the air itself. The air that leaves the pad is therefore cooled and humidified simultaneously without any external energy supply for the evaporation process. This is nature\'s own cooling process.'
    }
  }
];

// Spray Booth Media
const sprayBoothMedia: Product[] = [
  {
    id: 'ceiling-media-560g',
    name: 'Ceiling Media 560G',
    image: ceilingMedia560g,
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
    image: glassMedia,
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
];

// Synthetic Media
const syntheticMedia: Product[] = [
  {
    id: 'synthetic-media',
    name: 'Synthetic Media',
    image: syntheticmedia,
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
];

// ==================== CATEGORIES ====================

export const categories: Category[] = [
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
  },
  {
    id: 'bag-filters',
    name: 'Bag Filters',
    slug: 'bag-filters',
    intro: 'Pocket Filters suitable for dust loading applications in Commercial and Industrial environments. Our range includes Synthetic, Fibreglass, and Rigid variants to meet diverse filtration requirements.',
    products: bagFiltersProducts
  },
  {
    id: 'hepa-filters',
    name: 'HEPA Filters',
    slug: 'hepa-filters',
    intro: 'HEPA stands for High Efficiency Particle Air filter. Our comprehensive range of HEPA filters includes HLA-E, HLA-G, HLA-L, HPG, HVG, HVS, and PB Series, designed for cleanrooms, operating rooms, and high-efficiency air filtration applications.',
    products: hepaFiltersProducts
  },
  {
    id: 'panel-filters',
    name: 'Panel Filters',
    slug: 'panel-filters',
    intro: 'Pre-filtration Panel Filters. Filters Direct panel filters are characterised by their superior filtration and customisability. Available in V-Pleat, Disposable, Flat, Aquapleat, Minipleat, and Eco-V-Pleat configurations.',
    products: panelFiltersProducts
  },
  {
    id: 'grease-filters',
    name: 'Grease Filters',
    slug: 'grease-filters',
    intro: 'Grease trapping filters suitable for commercial kitchen extracts. Our range includes Honeycomb and Stainless Steel Mesh filters designed for demanding kitchen environments.',
    products: greaseFiltersProducts
  },
  {
    id: 'holding-frames',
    name: 'Holding Frames',
    slug: 'holding-frames',
    intro: 'Filter holding frames in our s/s design to house the full range of HVAC filters. Available in HF Activated Carbon, HF HEPA, and Universal configurations.',
    products: holdingFramesProducts
  },
  {
    id: 'home-ventilation',
    name: 'Home Ventilation',
    slug: 'home-ventilation',
    intro: 'A special range of Home Ventilation filters including HRV Generation 1, Generation 2, Smartvent, and HV Filter options for residential ventilation systems.',
    products: homeVentilationProducts
  }
];

// ==================== UTILITY FUNCTIONS ====================

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug);
}

/**
 * Get a product by its ID within a specific category
 */
export function getProductById(categorySlug: string, productId: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.products.find(p => p.id === productId);
}

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return categories;
}

/**
 * Get all products from all categories
 */
export function getAllProducts(): Product[] {
  return categories.flatMap(cat => cat.products);
}

/**
 * Format product for card display - returns a concise version of product data
 */
export function formatProductForCard(product: Product): {
  id: string;
  name: string;
  description: string;
} {
  return {
    id: product.id,
    name: product.name,
    description: product.cardDescription
  };
}
