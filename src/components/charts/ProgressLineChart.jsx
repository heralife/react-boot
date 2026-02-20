import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { COLORS } from '../../utils/constants'

export default function ProgressLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
        <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
        />
        <Legend />
        <Line type="monotone" dataKey="completed" stroke={COLORS.HYNIX_RED} strokeWidth={2.5} dot={{ r: 4 }} name="Completed" />
        <Line type="monotone" dataKey="submitted" stroke={COLORS.TECH_BLUE} strokeWidth={2.5} dot={{ r: 4 }} name="Submitted" />
      </LineChart>
    </ResponsiveContainer>
  )
}
