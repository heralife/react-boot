export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export const formatDateKr = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const getStatusConfig = (status) => {
  const configs = {
    draft: { label: 'Draft', color: '#94A3B8', bg: '#F1F5F9' },
    review: { label: 'In Review', color: '#F59E0B', bg: '#FEF3C7' },
    approved: { label: 'Approved', color: '#10B981', bg: '#D1FAE5' },
    rejected: { label: 'Rejected', color: '#EF4444', bg: '#FEE2E2' },
  }
  return configs[status] || configs.draft
}

export const truncateText = (text, maxLen = 30) => {
  if (text.length <= maxLen) return text
  return text.substring(0, maxLen) + '...'
}

export const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}
