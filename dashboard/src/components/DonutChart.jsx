const COLORS = ['#10b981', '#f59e0b', '#3b82f6']

export default function DonutChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const radius = 60
  const cx = 80
  const cy = 80
  const strokeWidth = 28
  const circumference = 2 * Math.PI * radius

  let offset = 0

  return (
    <div className="donut-container">
      <svg className="donut-svg" viewBox="0 0 160 160">
        {data.map((d, i) => {
          const segmentLength = (d.value / total) * circumference
          const dashOffset = -offset
          offset += segmentLength
          return (
            <circle
              key={d.label}
              cx={cx} cy={cy} r={radius}
              fill="none"
              stroke={COLORS[i]}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${cx} ${cy})`}
              style={{ transition: 'stroke-dasharray .8s ease, stroke-dashoffset .8s ease' }}
            />
          )
        })}
      </svg>
      <div className="donut-legend">
        {data.map((d, i) => (
          <div key={d.label} className="donut-legend-item">
            <span className="donut-legend-dot" style={{ background: COLORS[i] }} />
            <span className="donut-legend-label">{d.label}</span>
            <span className="donut-legend-value">{d.value}</span>
            <span className="donut-legend-pct">{Math.round((d.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
