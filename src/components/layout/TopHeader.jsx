import { useState, forwardRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import { HiOutlineSearch, HiOutlineBell, HiOutlineCog, HiOutlineChevronDown } from 'react-icons/hi'
import { notifications } from '../../data/mockData'

const IconToggle = forwardRef(({ children, onClick, className = '' }, ref) => (
  <button
    ref={ref}
    onClick={e => { e.preventDefault(); onClick(e) }}
    className={className}
    style={{
      background: 'none',
      border: 'none',
      padding: '8px',
      borderRadius: '10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.2s',
      position: 'relative',
    }}
    onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
    onMouseLeave={e => e.currentTarget.style.background = 'none'}
  >
    {children}
  </button>
))

const UserToggle = forwardRef(({ onClick, 'aria-expanded': isOpen }, ref) => (
  <button
    ref={ref}
    onClick={e => { e.preventDefault(); onClick(e) }}
    aria-expanded={isOpen}
    style={{
      background: isOpen ? '#f8fafc' : 'none',
      border: `1px solid ${isOpen ? '#cbd5e1' : '#e2e8f0'}`,
      padding: '6px 12px 6px 6px',
      borderRadius: '12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1' }}
    onMouseLeave={e => { if (!isOpen) { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = '#e2e8f0' } }}
  >
    <div style={{
      width: 34, height: 34, background: '#ED1C24', color: 'white',
      fontSize: 13, fontWeight: 600, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      KJ
    </div>
    <div style={{ textAlign: 'left' }}>
      <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2, color: '#1B1F3B' }}>Kim J.H.</div>
      <div style={{ fontSize: 11, color: '#94a3b8' }}>Senior Designer</div>
    </div>
    <HiOutlineChevronDown
      size={14}
      color={isOpen ? '#ED1C24' : '#94a3b8'}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    />
  </button>
))

export default function TopHeader() {
  const [searchVal, setSearchVal] = useState('')
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <Navbar bg="white" className="border-bottom px-4 py-2" style={{ minHeight: 60 }}>
      <InputGroup style={{ maxWidth: 360 }}>
        <InputGroup.Text className="bg-white border-end-0">
          <HiOutlineSearch className="text-secondary" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search designs, projects..."
          className="border-start-0"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
        />
      </InputGroup>

      <div className="ms-auto d-flex align-items-center gap-2">
        {/* Notification Bell */}
        <Dropdown align="end">
          <Dropdown.Toggle as={IconToggle} id="notif-dropdown">
            <HiOutlineBell size={22} color="#475569" />
            {unreadCount > 0 && (
              <Badge bg="danger" pill style={{
                fontSize: 9, position: 'absolute', top: 2, right: 2,
                minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {unreadCount}
              </Badge>
            )}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: 340, borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
            <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
              <strong style={{ fontSize: 14 }}>Notifications</strong>
              <small className="text-primary" style={{ cursor: 'pointer', fontSize: 12 }}>Mark all read</small>
            </div>
            {notifications.slice(0, 4).map(n => (
              <Dropdown.Item key={n.id} className="py-2 px-3" style={{ whiteSpace: 'normal' }}>
                <div className="d-flex align-items-start gap-2">
                  {!n.read && <span className="bg-danger rounded-circle mt-1 flex-shrink-0" style={{ width: 8, height: 8 }} />}
                  {n.read && <span className="mt-1 flex-shrink-0" style={{ width: 8 }} />}
                  <div>
                    <div style={{ fontSize: 13, lineHeight: 1.4 }}>{n.message}</div>
                    <small className="text-muted">{n.time}</small>
                  </div>
                </div>
              </Dropdown.Item>
            ))}
            <div className="text-center py-2 border-top">
              <small className="text-primary" style={{ cursor: 'pointer', fontSize: 12 }}>View all notifications</small>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        {/* Settings */}
        <IconToggle>
          <HiOutlineCog size={22} color="#475569" />
        </IconToggle>

        {/* User Profile */}
        <Dropdown align="end">
          <Dropdown.Toggle as={UserToggle} id="user-dropdown" />
          <Dropdown.Menu style={{ borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0', minWidth: 180 }}>
            <Dropdown.Item className="py-2">My Profile</Dropdown.Item>
            <Dropdown.Item className="py-2">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="py-2 text-danger" href="/login">Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  )
}
