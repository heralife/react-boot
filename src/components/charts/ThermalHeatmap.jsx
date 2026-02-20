import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Cell } from 'recharts'

export default function ThermalHeatmap({ data, threshold }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="point" tick={{ fontSize: 11, fill: '#94a3b8' }} angle={-30} textAnchor="end" height={60} />
        <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[0, 100]} unit="°C" />
        <Tooltip
          contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }}
          formatter={(value) => [`${value}°C`, 'Temperature']}
        />
        <ReferenceLine y={threshold} stroke="#EF4444" strokeDasharray="5 5" label={{ value: `Threshold ${threshold}°C`, position: 'right', fontSize: 11, fill: '#EF4444' }} />
        <Bar dataKey="temp" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.temp > threshold ? '#EF4444' : entry.temp > threshold * 0.8 ? '#F59E0B' : '#00A0E9'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
