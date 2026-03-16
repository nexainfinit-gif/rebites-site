import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'

const data = [
  { month: 'Oct', nouveaux: 8, recurrents: 12 },
  { month: 'Nov', nouveaux: 15, recurrents: 18 },
  { month: 'Déc', nouveaux: 10, recurrents: 22 },
  { month: 'Jan', nouveaux: 20, recurrents: 25 },
  { month: 'Fév', nouveaux: 45, recurrents: 30 },
  { month: 'Mars', nouveaux: 52, recurrents: 35 },
]

export default function GrowthChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis
            dataKey="month" axisLine={false} tickLine={false}
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
          <Legend
            iconType="circle" iconSize={8}
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
          <Bar dataKey="nouveaux" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} name="Nouveaux" />
          <Bar dataKey="recurrents" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} name="Récurrents" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
