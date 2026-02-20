import styled, { keyframes } from 'styled-components'

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
`

export const pulseRed = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(237, 28, 36, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(237, 28, 36, 0); }
`

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const HynixGradientText = styled.span`
  background: linear-gradient(135deg, #ED1C24, #1B1F3B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`

export const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1B1F3B;
  margin: 0;
`

export const PageSubtitle = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 4px 0 0 0;
`

export const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: ${props => props.$padding || '24px'};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: ${props => props.$hoverable ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.$hoverable ? '0 8px 24px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.08)'};
  }
`

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  background: ${props => {
    switch (props.$status) {
      case 'approved': return '#10B981';
      case 'review': return '#F59E0B';
      case 'rejected': return '#EF4444';
      case 'draft': return '#94A3B8';
      default: return '#94A3B8';
    }
  }};
`

export const FlexRow = styled.div`
  display: flex;
  align-items: ${props => props.$align || 'center'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '12px'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
`
