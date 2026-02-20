import { useState } from 'react'
import styled from 'styled-components'
import { HiOutlinePlus } from 'react-icons/hi'
import { projects } from '../data/mockData'
import { formatDate } from '../utils/helpers'
import { fadeInUp } from '../styles/SharedStyles'
import './ProjectManagement.scss'

const PageContainer = styled.div`
  animation: ${fadeInUp} 0.4s ease;
`

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #1B1F3B;
  margin-bottom: 16px;
`

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function ProjectManagementPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <PageContainer>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h4 fw-bold mb-1" style={{ color: '#1B1F3B' }}>Project Management</h1>
          <p className="text-muted mb-0" style={{ fontSize: 14 }}>{projects.length} active projects</p>
        </div>
        <button className="btn btn-danger d-flex align-items-center gap-2">
          <HiOutlinePlus size={18} /> New Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="d-flex gap-3 mb-4 overflow-auto pb-2">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card flex-shrink-0 ${selectedProject?.id === project.id ? 'border-primary' : ''}`}
            style={{ width: 280, borderWidth: selectedProject?.id === project.id ? 2 : 1 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <div className="fw-bold" style={{ fontSize: 14, color: '#1B1F3B' }}>{project.name}</div>
                <div className="text-muted" style={{ fontSize: 12 }}>{project.lead} &middot; {project.members} members</div>
              </div>
              <span className={`project-card__status project-card__status--${project.status}`}>
                {project.status.replace('-', ' ')}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span style={{ fontSize: 13, fontWeight: 600, color: '#1B1F3B' }}>{project.progress}%</span>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </span>
            </div>
            <div className="project-card__progress">
              <div
                className={`project-card__progress-fill project-card__progress-fill--${project.status}`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gantt Chart */}
      {selectedProject && (
        <>
          <SectionTitle>Timeline - {selectedProject.name}</SectionTitle>
          <div className="gantt-container mb-4">
            <div className="gantt-header">
              <div className="gantt-header__label">Task</div>
              {months.map(m => (
                <div key={m} className="gantt-header__month">{m}</div>
              ))}
            </div>
            {selectedProject.tasks.map((task, i) => (
              <div key={i} className="gantt-row">
                <div className="gantt-row__task">{task.name}</div>
                <div className="gantt-row__timeline">
                  <div
                    className={`gantt-bar gantt-bar--${task.status}`}
                    style={{
                      left: `${((task.start - 1) / 12) * 100}%`,
                      width: `${((task.end - task.start) / 12) * 100}%`,
                    }}
                  >
                    {task.status === 'completed' ? '100%' : task.status === 'in-progress' ? 'Active' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <SectionTitle>Milestones</SectionTitle>
          <div className="bg-white rounded-3 p-3 border" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div className="milestone-list">
              {selectedProject.milestones.map((ms, i) => (
                <div key={i} className="milestone-list__item">
                  <div className={`milestone-list__dot milestone-list__dot--${ms.done ? 'done' : 'pending'}`} />
                  <div className="milestone-list__info">
                    <div className="milestone-list__name">{ms.name}</div>
                    <div className="milestone-list__date">{formatDate(ms.date)}</div>
                  </div>
                  {ms.done && <span className="badge bg-success-subtle text-success" style={{ fontSize: 11 }}>Completed</span>}
                  {!ms.done && <span className="badge bg-light text-muted border" style={{ fontSize: 11 }}>Pending</span>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </PageContainer>
  )
}
