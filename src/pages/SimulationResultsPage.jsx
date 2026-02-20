import styled from 'styled-components'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import ThermalHeatmap from '../components/charts/ThermalHeatmap'
import StressBarChart from '../components/charts/StressBarChart'
import { simulationResults } from '../data/mockData'
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineExclamation } from 'react-icons/hi'
import { fadeInUp } from '../styles/SharedStyles'

const StatusIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInUp} 0.5s ease;
  background: ${props => {
    if (props.$status === 'pass') return '#D1FAE5';
    if (props.$status === 'warning') return '#FEF3C7';
    return '#FEE2E2';
  }};
  color: ${props => {
    if (props.$status === 'pass') return '#10B981';
    if (props.$status === 'warning') return '#F59E0B';
    return '#EF4444';
  }};
`

export default function SimulationResultsPage() {
  const { thermal, signalIntegrity, stress, warpage } = simulationResults
  const passCount = [thermal, signalIntegrity, stress].filter(s => s.status === 'pass').length
  const totalTests = 4

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-navy">Simulation Results</h1>
          <p className="text-sm text-gray-400 mt-1">PKG-2026-001 &middot; HBM3E Base Die Package</p>
        </div>
      </div>

      {/* Overall Status */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center gap-6">
        <StatusIcon $status={passCount === totalTests ? 'pass' : 'warning'}>
          {passCount === totalTests ? <HiOutlineCheckCircle size={28} /> : <HiOutlineExclamation size={28} />}
        </StatusIcon>
        <div>
          <h3 className="text-lg font-bold text-navy">
            {passCount === totalTests ? 'All Tests Passed' : `${passCount}/${totalTests} Tests Passed`}
          </h3>
          <p className="text-sm text-gray-400 m-0">
            {passCount === totalTests
              ? 'Design meets all simulation requirements'
              : 'Some tests require attention - review warpage results'}
          </p>
        </div>
        <div className="ml-auto flex gap-3">
          {[
            { label: 'Thermal', s: thermal.status },
            { label: 'Signal', s: signalIntegrity.status },
            { label: 'Stress', s: stress.status },
            { label: 'Warpage', s: warpage.status },
          ].map(t => (
            <div key={t.label} className="text-center px-4 py-2 rounded-xl border border-gray-100">
              <div className={`text-xs font-bold ${t.s === 'pass' ? 'text-emerald-600' : t.s === 'warning' ? 'text-amber-600' : 'text-red-500'}`}>
                {t.s === 'pass' ? 'PASS' : t.s === 'warning' ? 'WARN' : 'FAIL'}
              </div>
              <div className="text-xs text-gray-400 mt-1">{t.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Thermal */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-navy">Thermal Simulation</h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">PASS</span>
          </div>
          <ThermalHeatmap data={thermal.data} threshold={thermal.threshold} />
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { label: 'Max Temp', val: `${thermal.maxTemp}°C` },
              { label: 'Min Temp', val: `${thermal.minTemp}°C` },
              { label: 'Junction', val: `${thermal.junctionTemp}°C` },
              { label: 'Threshold', val: `${thermal.threshold}°C` },
            ].map(m => (
              <div key={m.label} className="text-center p-2 rounded-lg bg-gray-50">
                <div className="text-sm font-bold text-navy">{m.val}</div>
                <div className="text-xs text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Signal Integrity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-navy">Signal Integrity</h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">PASS</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={signalIntegrity.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="freq" tick={{ fontSize: 12, fill: '#94a3b8' }} unit=" GHz" />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} unit=" dB" />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }} />
              <ReferenceLine y={-20} stroke="#EF4444" strokeDasharray="5 5" label={{ value: 'Limit', position: 'right', fontSize: 11, fill: '#EF4444' }} />
              <Line type="monotone" dataKey="loss" stroke="#00A0E9" strokeWidth={2.5} dot={{ r: 3 }} name="Insertion Loss" />
            </LineChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { label: 'Rise Time', val: signalIntegrity.riseTime },
              { label: 'Fall Time', val: signalIntegrity.fallTime },
              { label: 'Jitter', val: signalIntegrity.jitter },
              { label: 'Crosstalk', val: signalIntegrity.crosstalk },
            ].map(m => (
              <div key={m.label} className="text-center p-2 rounded-lg bg-gray-50">
                <div className="text-sm font-bold text-navy">{m.val}</div>
                <div className="text-xs text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-navy">Stress Analysis</h3>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">PASS</span>
          </div>
          <StressBarChart data={stress.data} />
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <div className="text-sm font-bold text-navy">{stress.maxVonMises} MPa</div>
              <div className="text-xs text-gray-400">Max Stress</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <div className="text-sm font-bold text-navy">{stress.threshold} MPa</div>
              <div className="text-xs text-gray-400">Threshold</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <div className="text-sm font-bold text-emerald-600">{stress.safetyFactor}x</div>
              <div className="text-xs text-gray-400">Safety Factor</div>
            </div>
          </div>
        </div>

        {/* Warpage */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-navy">Warpage Analysis</h3>
            <span className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">WARNING</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={warpage.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="position" tick={{ fontSize: 12, fill: '#94a3b8' }} unit=" mm" />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} unit=" μm" />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }} />
              <ReferenceLine y={warpage.tolerance} stroke="#EF4444" strokeDasharray="5 5" label={{ value: `Tolerance ${warpage.tolerance}μm`, position: 'right', fontSize: 11, fill: '#EF4444' }} />
              <Area type="monotone" dataKey="warpage" stroke="#F59E0B" fill="#FEF3C7" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="text-center p-2 rounded-lg bg-amber-50">
              <div className="text-sm font-bold text-amber-600">{warpage.maxWarpage} μm</div>
              <div className="text-xs text-gray-400">Max Warpage</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-gray-50">
              <div className="text-sm font-bold text-navy">{warpage.tolerance} μm</div>
              <div className="text-xs text-gray-400">Tolerance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
