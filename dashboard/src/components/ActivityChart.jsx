import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
  { date: '02', value: 3 },
  { date: '05', value: 2 },
  { date: '08', value: 4 },
  { date: '11', value: 3 },
  { date: '14', value: 2 },
  { date: '17', value: 3 },
  { date: '21/02', value: 5 },
  { date: '24', value: 4 },
  { date: '27/02', value: 6 },
  { date: '02/03', value: 5 },
  { date: '05/03', value: 8 },
  { date: '08', value: 6 },
  { date: '11/03', value: 18 },
  { date: '14', value: 12 },
]

export default function ActivityChart() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis
            dataKey="date" axisLine={false} tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }} dy={8}
          />
          <YAxis
            axisLine={false} tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }} dx={-4}
          />
          <Tooltip
            contentStyle={{
              background: '#1a1a2e', border: 'none', borderRadius: 8,
              color: '#fff', fontSize: 13, padding: '8px 14px',
            }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#9ca3af', marginBottom: 4 }}
          />
          <Line
            type="monotone" dataKey="value" stroke="#4f46e5"
            strokeWidth={2} dot={false} activeDot={{ r: 5, fill: '#4f46e5' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
