import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Pagination from 'react-bootstrap/Pagination'
import StatusBadge from '../components/common/StatusBadge'
import ConfirmModal from '../components/common/ConfirmModal'
import AnimatedSelect from '../components/common/AnimatedSelect'
import { packageDesigns } from '../data/mockData'
import { PACKAGE_TYPES } from '../utils/constants'
import { formatDate } from '../utils/helpers'
import { HiOutlineSearch, HiOutlineEye, HiOutlinePencil, HiOutlineTrash, HiOutlinePaperAirplane, HiOutlinePlus } from 'react-icons/hi'

export default function PackageDesignListPage() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [showDelete, setShowDelete] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 8

  const filtered = packageDesigns.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.id.toLowerCase().includes(search.toLowerCase())
    const matchType = !typeFilter || d.type === typeFilter
    const matchStatus = !statusFilter || d.status === statusFilter
    return matchSearch && matchType && matchStatus
  })

  const totalPages = Math.ceil(filtered.length / perPage)
  const paged = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  const handleDelete = (design) => {
    setDeleteTarget(design)
    setShowDelete(true)
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h4 fw-bold mb-1" style={{ color: '#1B1F3B' }}>Package Designs</h1>
          <p className="text-muted mb-0" style={{ fontSize: 14 }}>{filtered.length} designs found</p>
        </div>
        <Button variant="danger" className="d-flex align-items-center gap-2">
          <HiOutlinePlus size={18} /> New Design
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-3 p-3 mb-4 border" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <div className="row g-3">
          <div className="col-md-4">
            <InputGroup>
              <InputGroup.Text className="bg-white"><HiOutlineSearch /></InputGroup.Text>
              <Form.Control placeholder="Search by name or ID..." value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1) }} />
            </InputGroup>
          </div>
          <div className="col-md-3">
            <AnimatedSelect
              value={typeFilter}
              onChange={val => { setTypeFilter(val); setCurrentPage(1) }}
              placeholder="All Package Types"
              options={[
                { value: '', label: 'All Package Types' },
                ...PACKAGE_TYPES.map(t => ({ value: t, label: t }))
              ]}
            />
          </div>
          <div className="col-md-3">
            <AnimatedSelect
              value={statusFilter}
              onChange={val => { setStatusFilter(val); setCurrentPage(1) }}
              placeholder="All Statuses"
              options={[
                { value: '', label: 'All Statuses' },
                { value: 'draft', label: 'Draft' },
                { value: 'review', label: 'In Review' },
                { value: 'approved', label: 'Approved' },
                { value: 'rejected', label: 'Rejected' },
              ]}
            />
          </div>
          <div className="col-md-2">
            <Button variant="outline-secondary" className="w-100" onClick={() => { setSearch(''); setTypeFilter(''); setStatusFilter(''); setCurrentPage(1) }}>
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3 border" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <Table hover responsive className="mb-0 align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ fontSize: 13 }}>Design ID</th>
              <th style={{ fontSize: 13 }}>Package Name</th>
              <th style={{ fontSize: 13 }}>Type</th>
              <th style={{ fontSize: 13 }}>Status</th>
              <th style={{ fontSize: 13 }}>Designer</th>
              <th style={{ fontSize: 13 }}>Last Modified</th>
              <th style={{ fontSize: 13, width: 160 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.map(design => (
              <tr key={design.id}>
                <td className="fw-semibold" style={{ fontSize: 13, color: '#1B1F3B' }}>{design.id}</td>
                <td style={{ fontSize: 13 }}>{design.name}</td>
                <td><span className="badge bg-light text-dark border" style={{ fontSize: 12 }}>{design.type}</span></td>
                <td><StatusBadge status={design.status} /></td>
                <td style={{ fontSize: 13 }}>{design.designer}</td>
                <td style={{ fontSize: 13, color: '#94a3b8' }}>{formatDate(design.modified)}</td>
                <td>
                  <div className="d-flex gap-1">
                    <Button variant="light" size="sm" title="View" onClick={() => navigate(`/designs/${design.id}`)}>
                      <HiOutlineEye size={16} />
                    </Button>
                    <Button variant="light" size="sm" title="Edit">
                      <HiOutlinePencil size={16} />
                    </Button>
                    {design.status === 'draft' && (
                      <Button variant="light" size="sm" title="Submit for Review" className="text-primary">
                        <HiOutlinePaperAirplane size={16} />
                      </Button>
                    )}
                    <Button variant="light" size="sm" title="Delete" className="text-danger" onClick={() => handleDelete(design)}>
                      <HiOutlineTrash size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center p-3 border-top">
            <Pagination className="mb-0">
              <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} />
              {Array.from({ length: totalPages }, (_, i) => (
                <Pagination.Item key={i + 1} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} />
            </Pagination>
          </div>
        )}
      </div>

      <ConfirmModal
        show={showDelete}
        onHide={() => setShowDelete(false)}
        onConfirm={() => { alert(`Deleted: ${deleteTarget?.id}`); setShowDelete(false) }}
        title="Delete Design"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
      />
    </div>
  )
}
