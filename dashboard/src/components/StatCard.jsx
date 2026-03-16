export default function StatCard({ label, value, change, changeType = 'positive', icon: Icon, delay = 0 }) {
  return (
    <div className={`stat-card reveal reveal-delay-${delay}`}>
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        {Icon && <Icon className="stat-card-icon" size={20} />}
      </div>
      <div className="stat-card-value">{value}</div>
      {change && (
        <div className={`stat-card-change ${changeType}`}>{change}</div>
      )}
    </div>
  )
}
