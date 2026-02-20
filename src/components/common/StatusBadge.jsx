import styled from 'styled-components'
import { DESIGN_STATUSES } from '../../utils/constants'

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  background: ${props => props.$bg};
  color: ${props => props.$color};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.$color};
  }
`

export default function StatusBadge({ status }) {
  const config = DESIGN_STATUSES[status] || DESIGN_STATUSES.draft
  return (
    <Badge $bg={config.bg} $color={config.color}>
      {config.label}
    </Badge>
  )
}
