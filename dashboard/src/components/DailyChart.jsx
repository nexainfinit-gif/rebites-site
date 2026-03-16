import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  visites: Math.floor(Math.random() * 15) + (i > 20 ? 25 : 5),
}))

export default function DailyChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis
            dataKey="day" axisLine={false} tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
          />
          <YAxis
            axisLine={false} tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
          />
          <Tooltip
            contentStyle={{
              background: '#1a1a2e', border: 'none', borderRadius: 8,
              color: '#fff', fontSize: 13, padding: '8px 14px',
            }}
          />
          <defs>
            <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone" dataKey="visites"
            stroke="#4f46e5" strokeWidth={2}
            fill="url(#gradientArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
