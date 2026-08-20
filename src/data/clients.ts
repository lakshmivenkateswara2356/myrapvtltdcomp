export type ClientLogo = {
  name: string
  tagline: string
  accent: string
  sector: string
  initials: string
}

export const clients: ClientLogo[] = [
  { name: 'JSW', tagline: 'Energy & Infrastructure', accent: '#7c3aed', sector: 'Energy', initials: 'JSW' },
  { name: 'Adani', tagline: 'Integrated Logistics', accent: '#0ea5e9', sector: 'Logistics', initials: 'ADN' },
  { name: 'L&T', tagline: 'Engineering Excellence', accent: '#c084fc', sector: 'Construction', initials: 'L&T' },
  { name: 'Reliance', tagline: 'Industrial Innovation', accent: '#38bdf8', sector: 'Industrial', initials: 'RIL' },
  { name: 'Vedanta', tagline: 'Resource Leadership', accent: '#a855f7', sector: 'Resources', initials: 'VED' },

]
