export default function HealthScore({ score = 55, label = 'Bon' }) {
  const radius = 32
  const circumference = 2 * Math.PI * radius
  const progress = (score / 100) * circumference
  const offset = circumference - progress

  return (
    <div className="health-score">
      <svg className="health-score-circle" width="80" height="80" viewBox="0 0 80 80">
        <circle
          cx="40" cy="40" r={radius}
          fill="none" stroke="#e5e7eb" strokeWidth="6"
        />
        <circle
          cx="40" cy="40" r={radius}
          fill="none" stroke="#4f46e5" strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="health-score-value">
        <span className="health-score-number">{score}</span>
        <span className="health-score-label">{label}</span>
      </div>
    </div>
  )
}
