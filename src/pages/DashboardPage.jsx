import { HiOutlineViewGrid, HiOutlineClock, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlinePlusCircle, HiOutlinePaperAirplane, HiOutlineChartBar, HiOutlineDocumentReport } from 'react-icons/hi'
import KPICard from '../components/common/KPICard'
import ProgressLineChart from '../components/charts/ProgressLineChart'
import PackageTypePieChart from '../components/charts/PackageTypePieChart'
import { kpiData, chartData, activityLog } from '../data/mockData'

const activityIcons = {
  review: '📋', approval: '✅', simulation: '📊', design: '🎨', comment: '💬', rejection: '❌', assignment: '👤',
}

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Welcome back, Kim J.H. &middot; PKG Design Team 1</p>
        </div>
        <div className="text-sm text-gray-400">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <KPICard icon={<HiOutlineViewGrid />} value={kpiData.activeProjects} label="Active Projects" change={kpiData.activeChange} color="tech-blue" />
        <KPICard icon={<HiOutlineClock />} value={kpiData.pendingReviews} label="Pending Reviews" change={kpiData.reviewChange} color="amber" />
        <KPICard icon={<HiOutlineShieldCheck />} value={`${kpiData.passRate}%`} label="Design Pass Rate" change={kpiData.passRateChange} color="green" />
        <KPICard icon={<HiOutlineUserGroup />} value={kpiData.teamSize} label="Team Members" change={kpiData.teamChange} color="purple" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-semibold text-navy mb-4">Design Progress</h3>
          <ProgressLineChart data={chartData.monthlyProgress} />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-semibold text-navy mb-4">Package Type Distribution</h3>
          <PackageTypePieChart data={chartData.packageDistribution} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-semibold text-navy mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {activityLog.slice(0, 6).map(item => (
              <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <span className="text-lg mt-0.5">{activityIcons[item.type] || '📄'}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 m-0">
                    <span className="font-semibold text-navy">{item.user}</span>
                    {' '}{item.action}{' '}
                    <span className="font-medium text-hynix-red">{item.target}</span>
                  </p>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-base font-semibold text-navy mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { icon: <HiOutlinePlusCircle size={20} />, label: 'New Design', desc: 'Create a new package design', color: 'bg-hynix-red-light text-hynix-red' },
              { icon: <HiOutlinePaperAirplane size={20} />, label: 'Submit Review', desc: 'Submit design for review', color: 'bg-tech-blue-light text-tech-blue' },
              { icon: <HiOutlineChartBar size={20} />, label: 'Run Simulation', desc: 'Start a new simulation', color: 'bg-emerald-100 text-emerald-600' },
              { icon: <HiOutlineDocumentReport size={20} />, label: 'View Reports', desc: 'Access design reports', color: 'bg-purple-100 text-purple-600' },
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all text-left bg-white cursor-pointer">
                <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center`}>
                  {action.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy">{action.label}</div>
                  <div className="text-xs text-gray-400">{action.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
