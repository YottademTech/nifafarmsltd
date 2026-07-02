export const IMAGES = {
  logo: '/images/logo.jpeg',
  hero: '/images/facility-nifa-building.jpg',
  facilityBuilding: '/images/facility-nifa-building.jpg',
  facilityProcessing: '/images/facility-processing-plant.jpg',
  facilityAerial: '/images/facility-aerial.jpg',
  farmCrops: '/images/farm-crops.jpg',
  cassavaProcessing: '/images/cassava-processing.jpg',
  haulageTruck: '/images/haulage-truck.jpg',
  warehouseSacks: '/images/warehouse-sacks.jpg',
  warehouseSacksAlt: '/images/warehouse-sacks-02.jpg',
  warehouseBoxes: '/images/warehouse-boxes.jpg',
  cocoaWarehouse: '/images/cocoa-butter-warehouse.jpg',
  productCocoaLiquor: '/images/product-cocoa-liquor.jpg',
  productCocoaPowder: '/images/product-cocoa-powder.jpg',
  productCocoaShell: '/images/product-cocoa-shell.jpg',
  productSheaButter: '/images/product-shea-butter.jpg',
  productSheaOil: '/images/product-shea-oil.jpg',
  productSheaStearin: '/images/product-shear-stearin.jpg',
  officeReception: '/images/office-reception.jpg',
  officeExecutive: '/images/office-executive.jpg',
  officeConference: '/images/office-conference-01.jpg',
  officeControl: '/images/office-control-center.jpg',
  officeTeam: '/images/office-team-wall.jpg',
  leadership01: '/images/leadership-01.jpg',
  leadership02: '/images/leadership-02.jpg',
  leadership03: '/images/leadership-03.jpg',
  leadership04: '/images/leadership-04.jpg',
  legalCounsel: '/images/legal-counsel.jpg',
} as const

export const PRODUCT_IMAGES: Record<string, string> = {
  'cocoa-liquor': IMAGES.productCocoaLiquor,
  'cocoa-butter': IMAGES.cocoaWarehouse,
  'cocoa-powder': IMAGES.productCocoaPowder,
  'cocoa-shell': IMAGES.productCocoaShell,
  'shea-butter': IMAGES.productSheaButter,
  'shea-oil': IMAGES.productSheaOil,
  'shea-stearin': IMAGES.productSheaStearin,
  'shea-cake': IMAGES.warehouseSacksAlt,
  'commodity-aggregation': IMAGES.warehouseSacks,
  'commodity-haulage': IMAGES.haulageTruck,
  'cocoa-farming': IMAGES.farmCrops,
}

export const OPERATIONS = [
  {
    image: IMAGES.farmCrops,
    label: 'Cocoa & Cassava Farms',
    caption: '1,200+ hectares across Ghana\'s cocoa forest belt',
  },
  {
    image: IMAGES.facilityProcessing,
    label: 'Processing Facility',
    caption: '32,000 MT annual capacity — commissioning June 2027',
  },
  {
    image: IMAGES.haulageTruck,
    label: 'Commodity Haulage',
    caption: '21-truck fleet connecting hinterlands to markets',
  },
  {
    image: IMAGES.cocoaWarehouse,
    label: 'Export Operations',
    caption: 'Quality-assured products ready for global markets',
  },
] as const

export const GALLERY = [
  { src: IMAGES.facilityAerial, alt: 'Aerial view of Nifa Farms facility in Offinso, Ghana' },
  { src: IMAGES.facilityBuilding, alt: 'Nifa Farms Limited processing and warehouse building' },
  { src: IMAGES.officeControl, alt: 'Modern operations control centre with farm monitoring systems' },
  { src: IMAGES.cassavaProcessing, alt: 'Community cassava processing at Nifa Farms' },
  { src: IMAGES.warehouseSacks, alt: 'Commodity storage warehouse with graded produce sacks' },
  { src: IMAGES.officeConference, alt: 'Executive conference room overlooking green farmland' },
] as const
