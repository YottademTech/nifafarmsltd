export const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: '32,000', unit: 'MT', label: 'Annual Processing Capacity' },
  { value: '1,200+', unit: 'ha', label: 'Cocoa Farmland' },
  { value: '2018', unit: '', label: 'Year Founded' },
  { value: '9+', unit: '', label: 'Major Clients' },
]

export type ProductCategory = 'Cocoa' | 'Shea' | 'Services'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  description: string
  detail: string
  color: string
  textColor: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'cocoa-liquor',
    name: 'Cocoa Liquor',
    category: 'Cocoa',
    description: 'Pure ground cocoa mass — the foundation of premium chocolate production worldwide.',
    detail: 'Produced by grinding roasted cocoa nibs into a pure, smooth paste. Our cocoa liquor is rich in cocoa solids and cocoa butter, meeting the stringent requirements of global chocolate manufacturers.',
    color: '#2C1A0E',
    textColor: '#fff',
  },
  {
    id: 'cocoa-butter',
    name: 'Cocoa Butter',
    category: 'Cocoa',
    description: 'Premium natural fat extracted from cocoa beans, prized in confectionery and cosmetics.',
    detail: 'Cold-pressed to retain its natural aroma and quality. Our cocoa butter meets food-grade and cosmetic-grade specifications for international buyers across Europe and Asia.',
    color: '#F5E6C8',
    textColor: '#2C1A0E',
  },
  {
    id: 'cocoa-powder',
    name: 'Cocoa Powder',
    category: 'Cocoa',
    description: 'Finely milled cocoa solids — a staple ingredient for food and beverage industries globally.',
    detail: 'Available in natural and alkalized variants. Our cocoa powder is consistently processed to meet exacting pH, fat, and moisture specifications demanded by international buyers.',
    color: '#5C3317',
    textColor: '#fff',
  },
  {
    id: 'cocoa-shell',
    name: 'Cocoa Shell',
    category: 'Cocoa',
    description: 'Cleaned and processed cocoa husks — a valuable by-product for mulch, fertiliser and tea.',
    detail: 'Cocoa shell is gaining significant traction as an eco-friendly product in horticulture, animal feed, and specialty beverages. We supply cleaned, graded cocoa shell for export.',
    color: '#3D2409',
    textColor: '#E8CC6A',
  },
  {
    id: 'shea-butter',
    name: 'Shea Butter',
    category: 'Shea',
    description: 'Premium unrefined shea butter from West African shea nuts — prized in food and cosmetics.',
    detail: 'Hand-selected shea nuts processed to produce high-grade shea butter with exceptional moisturising and emulsifying properties. Supplied to cosmetics, confectionery, and food manufacturers.',
    color: '#F5ECD0',
    textColor: '#5C3317',
  },
  {
    id: 'shea-oil',
    name: 'Shea Oil',
    category: 'Shea',
    description: 'A light, non-greasy oil derived from shea butter — in high demand across the beauty industry.',
    detail: 'Extracted through cold pressing to preserve its beneficial fatty acid profile. Shea oil is used extensively in luxury skincare, hair care, and pharmaceutical formulations.',
    color: '#D4A843',
    textColor: '#1A0E00',
  },
  {
    id: 'shea-stearin',
    name: 'Shea Stearin',
    category: 'Shea',
    description: 'The harder fraction of shea butter — used as a cocoa butter equivalent in confectionery.',
    detail: 'Shea stearin is a critical ingredient in the confectionery industry as a cocoa butter equivalent (CBE). Our product meets the precise melting and hardness specifications required by global chocolate manufacturers.',
    color: '#EAE0D0',
    textColor: '#2C1A0E',
  },
  {
    id: 'shea-cake',
    name: 'Shea Cake',
    category: 'Shea',
    description: 'Residual press cake from shea butter extraction — a protein-rich animal feed ingredient.',
    detail: 'The by-product of shea oil extraction, shea cake is a high-protein ingredient used in animal feed and as an organic fertiliser. No part of our process goes to waste.',
    color: '#8B7355',
    textColor: '#fff',
  },
  {
    id: 'commodity-aggregation',
    name: 'Commodity Aggregation',
    category: 'Services',
    description: 'We aggregate maize, soybeans, dried cassava, shea nuts, and cashew nuts for off-takers.',
    detail: 'Our aggregation service connects smallholder farmers with large off-takers, creating a reliable supply chain for both buyers and sellers. We ensure quality grading, proper storage, and timely delivery.',
    color: '#183D22',
    textColor: '#A5D6A7',
  },
  {
    id: 'commodity-haulage',
    name: 'Commodity Haulage',
    category: 'Services',
    description: 'A fleet of 21 trucks hauling commodities from Ghana\'s hinterlands to major markets.',
    detail: 'We operate a modern fleet of 21 heavy-duty trucks, transporting cashew, maize, dried cassava, mangoes, soybeans, shea nuts, and dried cocoa beans across Ghana. Reliable, traceable, and on schedule.',
    color: '#112918',
    textColor: '#D4AF37',
  },
  {
    id: 'cocoa-farming',
    name: 'Cocoa Farming',
    category: 'Services',
    description: 'Over 1,200 hectares of cocoa farmland with plans to add 500 hectares every year.',
    detail: 'Our cocoa farms are strategically located in Ghana\'s cocoa forest belt. With 2-year-old trees on 1,200 hectares and an annual expansion target of 500 hectares, we are building a world-class backward-integrated supply chain.',
    color: '#1B5E20',
    textColor: '#E8F5E9',
  },
]

export const BOARD_MEMBERS = [
  {
    name: 'Frank Osei',
    role: 'Managing Director',
    experience: '28+ years',
    fields: 'Heavy Industrial Machinery, Oil & Gas, Commodity Trading',
    qualifications: ['MBA – USA', 'BSc Administration – USA'],
    image: '/images/leadership-01.jpg',
  },
  {
    name: 'Derick Tinkler Owusu Ntimgyakari',
    role: 'Board Member',
    experience: '24+ years',
    fields: 'Investment Banking, Accounting & Finance, Commodity Trading, Manufacturing',
    qualifications: ['CGIA', 'ACCA', 'MSc Accounting – UCL / University of London', 'MA Economic Policy – University of Ghana'],
    image: '/images/leadership-04.jpg',
  },
  {
    name: 'Frank Osei',
    role: 'Board Member',
    experience: '22+ years',
    fields: 'Audit & Legal Practice',
    qualifications: ['Barrister of Law – Ghana', 'ACCA', 'ICAG', 'CITG', 'MBA – University of Ghana'],
    image: '/images/legal-counsel.jpg',
  },
  {
    name: 'Emmanuel Ampofo',
    role: 'Board Member',
    experience: '36+ years',
    fields: 'Heavy Industry, Real Estates, Manufacturing & Food Processing',
    qualifications: ['Part I ACCA', 'BSc Administration'],
    image: '/images/leadership-02.jpg',
  },
  {
    name: 'John Duodu Anaman',
    role: 'Board Member',
    experience: '32+ years',
    fields: 'Accounting & Finance, Commodities Trading, Manufacturing & Processing',
    qualifications: ['Part II ACCA', 'HND – Kumasi Polytechnic'],
    image: '/images/leadership-03.jpg',
  },
]

export const MANAGEMENT_ROLES = [
  'Chief Executive Officer',
  'Chief Operating Officer',
  'Chief Finance Officer',
  'Production Manager',
  'Sustainability Manager',
  'Human Resource Manager',
  'Chief Engineer',
  'Health & Safety Manager',
  'Business Development Manager',
]

export const CORE_VALUES = [
  {
    title: 'Diversity',
    description: 'We embrace the unique perspectives and backgrounds of our team, clients, and communities — 122 employees spanning multiple nationalities.',
  },
  {
    title: 'High Performance',
    description: 'We strive for excellence by continuously improving our systems, services, and results. Every tonne processed is a statement of quality.',
  },
  {
    title: 'Honesty',
    description: 'Transparency is the foundation of every partnership we build. We say what we mean, and we deliver what we promise.',
  },
]

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'Health & Safety',
    body: 'We uphold a zero-incident policy and foster a culture of proactive risk management. Safety is not just a goal — it is a core value at every level of our operations.',
  },
  {
    title: 'Quality Assurance',
    body: 'We adopt global standards and best practices in every project, ensuring consistent delivery that meets client expectations and all regulatory requirements.',
  },
  {
    title: 'Environmental Responsibility',
    body: 'Nifa Farms integrates environmentally sound practices in all activities. We monitor our footprint and implement measures that minimise negative environmental impacts.',
  },
  {
    title: 'Community & Local Content',
    body: 'We prioritise local personnel, goods, and services. We actively promote skill development and employment within our communities, including at least 20 persons with disabilities.',
  },
]

export const MARKETS = [
  'West Africa', 'North Africa', 'Western Europe',
  'Eastern Europe', 'West Asia', 'East Asia', 'North America',
]

export const CLIENTS = [
  'Black Carbon', 'Denker', 'Premium', 'A2',
  'AgriCare', 'GAPFA', 'Julie Foods', 'Fortune Rock', 'GCX',
]

export const COMPANY_INFO = {
  phone: '+233 247 023 698',
  email: 'tinkler@nifafarms.com',
  address: 'Offinso – Ahenkro, Ashanti Region, Ghana, West Africa',
  poBox: 'P.O. Box SE 1598, Offinso Ahenkro',
  ghanaPostGps: 'AF-0626-4576',
  founded: '2018',
  solicitors: {
    name: 'ENE @ LAW',
    address: 'No. 8 Odanta Street, Asylum Down, Accra',
    phone: '059 115 8503',
    email: 'emelawgh@gmail.com',
  },
}
