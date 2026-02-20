import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { HiOutlineChevronDown } from 'react-icons/hi'
import styled from 'styled-components'

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 7px 12px;
  background: white;
  border: 1px solid ${props => props.$isOpen ? '#ED1C24' : '#dee2e6'};
  border-radius: 8px;
  font-size: 14px;
  color: ${props => props.$hasValue ? '#1B1F3B' : '#6c757d'};
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  min-height: 38px;

  &:hover {
    border-color: ${props => props.$isOpen ? '#ED1C24' : '#adb5bd'};
  }

  &:focus {
    outline: none;
    border-color: #ED1C24;
    box-shadow: 0 0 0 3px rgba(237, 28, 36, 0.15);
  }

  &::after {
    display: none !important;
  }
`

const ChevronIcon = styled(HiOutlineChevronDown)`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
  color: ${props => props.$isOpen ? '#ED1C24' : '#94a3b8'};
  flex-shrink: 0;
`

const StyledMenu = styled(Dropdown.Menu)`
  border-radius: 10px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
  border: 1px solid #e2e8f0 !important;
  padding: 4px !important;
  max-height: 240px;
  overflow-y: auto;

  .dropdown-item {
    border-radius: 6px;
    font-size: 13px;
    padding: 8px 12px;
    color: #475569;
    transition: all 0.15s;

    &:hover {
      background: #FDE8E9;
      color: #ED1C24;
    }

    &.active-item {
      background: #ED1C24;
      color: white;
    }
  }
`

export default function AnimatedSelect({ value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedLabel = options.find(o => o.value === value)?.label || placeholder

  return (
    <Dropdown onToggle={(open) => setIsOpen(open)} show={isOpen}>
      <Dropdown.Toggle
        as={ToggleButton}
        $isOpen={isOpen}
        $hasValue={!!value}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selectedLabel}
        </span>
        <ChevronIcon size={16} $isOpen={isOpen} />
      </Dropdown.Toggle>

      <StyledMenu>
        {options.map(opt => (
          <Dropdown.Item
            key={opt.value}
            className={value === opt.value ? 'active-item' : ''}
            onClick={() => { onChange(opt.value); setIsOpen(false) }}
          >
            {opt.label}
          </Dropdown.Item>
        ))}
      </StyledMenu>
    </Dropdown>
  )
}
