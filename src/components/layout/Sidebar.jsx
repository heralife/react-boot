import { NavLink } from 'react-router-dom'
import { HiOutlineViewGrid, HiOutlineCube, HiOutlineChartBar, HiOutlineClipboardList, HiOutlineUserGroup, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import './Sidebar.scss'

const navItems = [
  { path: '/', label: 'Dashboard', icon: <HiOutlineViewGrid /> },
  { path: '/designs', label: 'Package Designs', icon: <HiOutlineCube /> },
  { path: '/simulations', label: 'Simulations', icon: <HiOutlineChartBar /> },
  { path: '/projects', label: 'Projects', icon: <HiOutlineClipboardList /> },
  { path: '/team', label: 'Team', icon: <HiOutlineUserGroup /> },
]

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">SK</div>
        <div className="sidebar__logo-text">
          <h2>SK hynix</h2>
          <span>PKG Design Platform</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar__nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span className="sidebar__nav-label">{item.label}</span>
            {collapsed && <span className="sidebar__tooltip">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <button className="sidebar__toggle" onClick={onToggle}>
        {collapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
        <span className="sidebar__toggle-label">Collapse</span>
      </button>
    </aside>
  )
}
