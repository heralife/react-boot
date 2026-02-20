import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import './LoginPage.scss'

export default function LoginPage() {
  const navigate = useNavigate()
  const [showPw, setShowPw] = useState(false)
  const [empId, setEmpId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-page__card">
        <div className="login-page__logo">
          <div className="login-page__logo-icon">SK</div>
          <h1>SK hynix</h1>
          <p>PKG Design Platform</p>
        </div>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold" style={{ fontSize: 13 }}>Employee ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your employee ID"
              value={empId}
              onChange={e => setEmpId(e.target.value)}
              size="lg"
              style={{ fontSize: 14 }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold" style={{ fontSize: 13 }}>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPw ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                size="lg"
                style={{ fontSize: 14, paddingRight: 44 }}
              />
              <button
                type="button"
                className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                onClick={() => setShowPw(!showPw)}
                style={{ zIndex: 5 }}
              >
                {showPw ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
              </button>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <Form.Check type="checkbox" label="Remember me" style={{ fontSize: 13 }} />
            <a href="#" className="text-decoration-none" style={{ fontSize: 13, color: '#ED1C24' }}>
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="w-100 btn-login">
            Sign In
          </Button>
        </Form>

        <div className="login-page__footer">
          SK hynix Confidential &middot; Internal Use Only
        </div>
      </div>
    </div>
  )
}
