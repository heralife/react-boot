import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PackageDesignListPage from './pages/PackageDesignListPage'
import DesignDetailPage from './pages/DesignDetailPage'
import SimulationResultsPage from './pages/SimulationResultsPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import TeamCollaborationPage from './pages/TeamCollaborationPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/designs" element={<PackageDesignListPage />} />
        <Route path="/designs/:id" element={<DesignDetailPage />} />
        <Route path="/simulations" element={<SimulationResultsPage />} />
        <Route path="/simulations/:id" element={<SimulationResultsPage />} />
        <Route path="/projects" element={<ProjectManagementPage />} />
        <Route path="/team" element={<TeamCollaborationPage />} />
      </Route>
    </Routes>
  )
}

export default App
