import { useParams, useNavigate } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import { HiOutlineArrowLeft, HiOutlinePencil, HiOutlinePaperAirplane, HiOutlineDownload } from 'react-icons/hi'
import StatusBadge from '../components/common/StatusBadge'
import DesignSpecTable from '../components/design/DesignSpecTable'
import ApprovalFlow from '../components/design/ApprovalFlow'
import RevisionHistory from '../components/design/RevisionHistory'
import FileAttachments from '../components/design/FileAttachments'
import CommentThread from '../components/design/CommentThread'
import { packageDesigns, designRevisions, designComments, designAttachments } from '../data/mockData'
import { fadeInUp } from '../styles/SharedStyles'

const DetailContainer = styled.div`
  animation: ${fadeInUp} 0.5s ease;
`

const HeaderCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  margin-bottom: 24px;
`

const ContentCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;

  .nav-tabs {
    border-bottom: 2px solid #f1f5f9;
    margin-bottom: 20px;
  }

  .nav-tabs .nav-link {
    color: #94a3b8;
    font-weight: 600;
    font-size: 14px;
    border: none;
    padding: 10px 20px;

    &.active {
      color: #ED1C24;
      border-bottom: 2px solid #ED1C24;
      background: transparent;
    }

    &:hover {
      color: #1B1F3B;
    }
  }
`

export default function DesignDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const design = packageDesigns.find(d => d.id === id) || packageDesigns[0]
  const statusStep = { draft: 0, review: 2, approved: 5, rejected: 2 }

  return (
    <DetailContainer>
      <HeaderCard>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <Button variant="light" className="rounded-circle p-2" onClick={() => navigate('/designs')}>
              <HiOutlineArrowLeft size={18} />
            </Button>
            <div>
              <div className="d-flex align-items-center gap-2">
                <h2 className="h5 fw-bold mb-0" style={{ color: '#1B1F3B' }}>{design.name}</h2>
                <StatusBadge status={design.status} />
              </div>
              <span className="text-muted" style={{ fontSize: 13 }}>{design.id} &middot; {design.designer} ({design.designerKr})</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1">
              <HiOutlinePencil size={16} /> Edit
            </Button>
            <Button variant="outline-primary" size="sm" className="d-flex align-items-center gap-1">
              <HiOutlinePaperAirplane size={16} /> Submit Review
            </Button>
            <Button variant="outline-success" size="sm" className="d-flex align-items-center gap-1">
              <HiOutlineDownload size={16} /> Export
            </Button>
          </div>
        </div>
      </HeaderCard>

      <ContentCard>
        <Tabs defaultActiveKey="specs" className="mb-3">
          <Tab eventKey="specs" title="Specifications">
            <DesignSpecTable specs={{ ...design.specs, type: design.type }} />
          </Tab>

          <Tab eventKey="approval" title="Approval Workflow">
            <ApprovalFlow currentStep={statusStep[design.status] || 0} />
          </Tab>

          <Tab eventKey="history" title="Revision History">
            <RevisionHistory revisions={designRevisions} />
          </Tab>

          <Tab eventKey="files" title="Attachments">
            <FileAttachments files={designAttachments} />
          </Tab>

          <Tab eventKey="comments" title="Comments">
            <CommentThread comments={designComments} />
          </Tab>
        </Tabs>
      </ContentCard>
    </DetailContainer>
  )
}
