import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts'

export default function StressBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis type="number" tick={{ fontSize: 12, fill: '#94a3b8' }} unit=" MPa" />
        <YAxis type="category" dataKey="location" tick={{ fontSize: 11, fill: '#94a3b8' }} width={100} />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }}
          formatter={(value) => [`${value} MPa`, 'Stress']}
        />
        <Bar dataKey="stress" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.stress > entry.limit * 0.8 ? '#F59E0B' : '#10B981'} />
          ))}
        </Bar>
        <Bar dataKey="limit" radius={[0, 4, 4, 0]} fill="#E2E8F0" opacity={0.4} />
      </BarChart>
    </ResponsiveContainer>
  )
}
