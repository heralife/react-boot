import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import { HiOutlineMail, HiOutlineCheckCircle, HiOutlineClock, HiOutlineExclamation } from 'react-icons/hi'
import { teamMembers, activityLog, notifications } from '../data/mockData'
import { getInitials } from '../utils/helpers'

const roleColors = {
  'Senior Designer': 'bg-hynix-red-light text-hynix-red',
  'Lead Designer': 'bg-purple-100 text-purple-700',
  'Designer': 'bg-tech-blue-light text-tech-blue',
  'Design Reviewer': 'bg-amber-100 text-amber-700',
  'Simulation Engineer': 'bg-emerald-100 text-emerald-700',
  'Manager': 'bg-blue-100 text-blue-700',
  'Director': 'bg-navy text-white',
}

const avatarColors = ['#ED1C24', '#1B1F3B', '#00A0E9', '#10B981', '#8B5CF6', '#F59E0B', '#EC4899', '#14B8A6']

const notifIcons = {
  review: <HiOutlineClock className="text-amber-500" size={18} />,
  approved: <HiOutlineCheckCircle className="text-emerald-500" size={18} />,
  comment: <HiOutlineMail className="text-tech-blue" size={18} />,
  simulation: <HiOutlineCheckCircle className="text-purple-500" size={18} />,
  deadline: <HiOutlineExclamation className="text-red-500" size={18} />,
}

export default function TeamCollaborationPage() {
  const [roleFilter, setRoleFilter] = useState('All')

  const roles = ['All', 'Designer', 'Reviewer', 'Manager', 'Engineer']
  const filteredMembers = roleFilter === 'All'
    ? teamMembers
    : teamMembers.filter(m => m.role.toLowerCase().includes(roleFilter.toLowerCase()))

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy">Team & Collaboration</h1>
        <p className="text-sm text-gray-400 mt-1">{teamMembers.length} team members across departments</p>
      </div>

      <Tabs defaultActiveKey="directory" className="mb-4">
        {/* Team Directory Tab - Tailwind */}
        <Tab eventKey="directory" title="Team Directory">
          <div className="flex gap-2 mb-4 flex-wrap">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  roleFilter === role
                    ? 'bg-hynix-red text-white border-hynix-red'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member, i) => (
              <div key={member.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {getInitials(member.name)}
                  </div>
                  <h4 className="font-bold text-navy text-sm">{member.name}</h4>
                  <p className="text-xs text-gray-400 mb-2">{member.nameKr}</p>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${roleColors[member.role] || 'bg-gray-100 text-gray-600'}`}>
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-400 mt-2 mb-3">{member.department}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span><strong className="text-navy">{member.projects}</strong> projects</span>
                  </div>
                  <button className="mt-3 w-full py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-2 bg-white cursor-pointer">
                    <HiOutlineMail size={16} /> Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Tab>

        {/* Activity Log Tab - React-Bootstrap */}
        <Tab eventKey="activity" title="Activity Log">
          <div className="bg-white rounded-3 border" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <Table hover responsive className="mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th style={{ fontSize: 13 }}>Time</th>
                  <th style={{ fontSize: 13 }}>User</th>
                  <th style={{ fontSize: 13 }}>Action</th>
                  <th style={{ fontSize: 13 }}>Target</th>
                </tr>
              </thead>
              <tbody>
                {activityLog.map(item => (
                  <tr key={item.id}>
                    <td style={{ fontSize: 13, color: '#94a3b8', whiteSpace: 'nowrap' }}>{item.time}</td>
                    <td className="fw-semibold" style={{ fontSize: 13 }}>{item.user}</td>
                    <td style={{ fontSize: 13 }}>{item.action}</td>
                    <td style={{ fontSize: 13, color: '#ED1C24', fontWeight: 500 }}>{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>

        {/* Notifications Tab - React-Bootstrap */}
        <Tab eventKey="notifications" title={<>Notifications <Badge bg="danger" pill className="ms-1">{notifications.filter(n => !n.read).length}</Badge></>}>
          <ListGroup variant="flush" className="bg-white rounded-3 border" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            {notifications.map(notif => (
              <ListGroup.Item
                key={notif.id}
                className="d-flex align-items-start gap-3 py-3"
                style={{ background: notif.read ? 'white' : '#fafbff' }}
              >
                <div className="mt-1">
                  {notifIcons[notif.type] || notifIcons.comment}
                </div>
                <div className="flex-grow-1">
                  <div style={{ fontSize: 13 }} className={notif.read ? 'text-muted' : 'fw-semibold'}>
                    {notif.message}
                  </div>
                  <small className="text-muted">{notif.time}</small>
                </div>
                {!notif.read && (
                  <span className="bg-danger rounded-circle" style={{ width: 8, height: 8, marginTop: 6, flexShrink: 0 }}></span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </div>
  )
}
