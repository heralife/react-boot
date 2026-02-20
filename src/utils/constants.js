export const COLORS = {
  HYNIX_RED: '#ED1C24',
  HYNIX_RED_DARK: '#C41920',
  HYNIX_RED_LIGHT: '#FDE8E9',
  NAVY: '#1B1F3B',
  NAVY_LIGHT: '#2D325A',
  TECH_BLUE: '#00A0E9',
  TECH_BLUE_LIGHT: '#E0F4FD',
  BG: '#F5F6FA',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  DANGER: '#EF4444',
}

export const PACKAGE_TYPES = ['BGA', 'QFP', 'SOP', 'CSP', 'WLP', 'Fan-Out WLP', 'PoP', 'SiP']

export const DESIGN_STATUSES = {
  draft: { label: 'Draft', color: '#94A3B8', bg: '#F1F5F9' },
  review: { label: 'In Review', color: '#F59E0B', bg: '#FEF3C7' },
  approved: { label: 'Approved', color: '#10B981', bg: '#D1FAE5' },
  rejected: { label: 'Rejected', color: '#EF4444', bg: '#FEE2E2' },
}

export const RECHARTS_COLORS = ['#ED1C24', '#1B1F3B', '#00A0E9', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#14B8A6']

export const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/designs', label: 'Package Designs', icon: 'designs' },
  { path: '/simulations', label: 'Simulations', icon: 'simulations' },
  { path: '/projects', label: 'Projects', icon: 'projects' },
  { path: '/team', label: 'Team', icon: 'team' },
]
