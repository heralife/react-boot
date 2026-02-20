import styled from 'styled-components'
import { fadeInUp } from '../../styles/SharedStyles'
import { formatDate } from '../../utils/helpers'

const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: #e2e8f0;
  }
`

const TimelineItem = styled.div`
  position: relative;
  padding: 0 0 24px 20px;
  animation: ${fadeInUp} 0.4s ease forwards;
  animation-delay: ${props => props.$index * 0.1}s;
  opacity: 0;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.$index === 0 ? '#ED1C24' : '#cbd5e1'};
    border: 2px solid ${props => props.$index === 0 ? '#fde8e9' : '#f1f5f9'};
    z-index: 1;
  }
`

const Version = styled.span`
  font-weight: 700;
  color: #1B1F3B;
  font-size: 14px;
  margin-right: 10px;
`

const Meta = styled.span`
  font-size: 12px;
  color: #94a3b8;
`

const Changes = styled.p`
  font-size: 13px;
  color: #475569;
  margin: 4px 0 0 0;
  line-height: 1.5;
`

export default function RevisionHistory({ revisions }) {
  return (
    <Timeline>
      {revisions.map((rev, i) => (
        <TimelineItem key={rev.version} $index={i}>
          <div>
            <Version>{rev.version}</Version>
            <Meta>{rev.author} &middot; {formatDate(rev.date)}</Meta>
          </div>
          <Changes>{rev.changes}</Changes>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
