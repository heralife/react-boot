import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { HiOutlineDownload, HiOutlineDocumentText, HiOutlineTable, HiOutlinePhotograph } from 'react-icons/hi'

const iconMap = {
  layout: <HiOutlinePhotograph className="text-primary" size={20} />,
  report: <HiOutlineDocumentText className="text-danger" size={20} />,
  data: <HiOutlineTable className="text-success" size={20} />,
  drawing: <HiOutlineDocumentText className="text-info" size={20} />,
}

export default function FileAttachments({ files }) {
  return (
    <ListGroup variant="flush">
      {files.map(file => (
        <ListGroup.Item key={file.id} className="d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center gap-3">
            {iconMap[file.type] || iconMap.data}
            <div>
              <div className="fw-semibold" style={{ fontSize: 14 }}>{file.name}</div>
              <small className="text-muted">{file.size} &middot; {file.date}</small>
            </div>
          </div>
          <Button variant="outline-secondary" size="sm">
            <HiOutlineDownload className="me-1" /> Download
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
