export default function KPICard({ icon, value, label, change, color = 'tech-blue' }) {
  const isPositive = change >= 0

  const colorMap = {
    'tech-blue': { bg: 'bg-tech-blue-light', text: 'text-tech-blue' },
    'amber': { bg: 'bg-amber-100', text: 'text-amber-600' },
    'green': { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    'purple': { bg: 'bg-purple-100', text: 'text-purple-600' },
  }

  const c = colorMap[color] || colorMap['tech-blue']

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.text} flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
      <h3 className="text-2xl font-bold text-navy">{value}</h3>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  )
}
