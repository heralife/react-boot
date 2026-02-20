import styled from 'styled-components'
import { HiOutlineCheck, HiOutlineClock, HiOutlineX } from 'react-icons/hi'
import { fadeIn } from '../../styles/SharedStyles'

const FlowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 0;
  position: relative;
  overflow-x: auto;
  animation: ${fadeIn} 0.5s ease;
`

const FlowStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 120px;
  flex: 1;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 60%;
    right: -40%;
    height: 2px;
    background: ${props => props.$completed ? '#10B981' : '#e2e8f0'};
    z-index: 0;
  }
`

const StepCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  font-size: 18px;
  background: ${props => {
    if (props.$completed) return '#10B981';
    if (props.$active) return '#ED1C24';
    if (props.$rejected) return '#EF4444';
    return '#e2e8f0';
  }};
  color: ${props => (props.$completed || props.$active || props.$rejected) ? 'white' : '#94a3b8'};
  box-shadow: ${props => props.$active ? '0 0 0 4px rgba(237, 28, 36, 0.2)' : 'none'};
  transition: all 0.3s ease;
`

const StepLabel = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.$completed || props.$active) ? '#1B1F3B' : '#94a3b8'};
  text-align: center;
  max-width: 100px;
`

const StepMeta = styled.div`
  font-size: 11px;
  color: #94a3b8;
  text-align: center;
  margin-top: 4px;
`

const steps = [
  { label: 'Draft', reviewer: 'Designer' },
  { label: 'Design Review', reviewer: 'Jung Y.J.' },
  { label: 'Thermal Check', reviewer: 'Shin E.J.' },
  { label: 'SI Verification', reviewer: 'Lim W.J.' },
  { label: 'Final Approval', reviewer: 'Director Oh' },
]

export default function ApprovalFlow({ currentStep = 2 }) {
  return (
    <FlowContainer>
      {steps.map((step, i) => {
        const completed = i < currentStep
        const active = i === currentStep
        return (
          <FlowStep key={i} $completed={completed}>
            <StepCircle $completed={completed} $active={active}>
              {completed ? <HiOutlineCheck /> : active ? <HiOutlineClock /> : (i + 1)}
            </StepCircle>
            <StepLabel $completed={completed} $active={active}>{step.label}</StepLabel>
            <StepMeta>{step.reviewer}</StepMeta>
          </FlowStep>
        )
      })}
    </FlowContainer>
  )
}
