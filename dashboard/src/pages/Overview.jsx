import { Users, UserPlus, RefreshCw, Gift, Mail, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import StatCard from '../components/StatCard'
import HealthScore from '../components/HealthScore'
import ActivityChart from '../components/ActivityChart'
import { useReveal } from '../hooks/useReveal'

export default function Overview() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="page-header reveal">
        <div>
          <h1>Vue d'ensemble</h1>
          <div className="page-header-date">lundi 16 mars 2026 · 30 derniers jours</div>
        </div>
        <div className="page-header-actions">
          <div className="period-selector">
            <button className="period-btn">7j</button>
            <button className="period-btn active">30j</button>
            <button className="period-btn">90j</button>
          </div>
          <button className="btn-campaign">
            <Mail size={16} /> Campagne
          </button>
        </div>
      </div>

      {/* Health Card */}
      <div className="health-card reveal reveal-delay-1">
        <div className="health-card-content">
          <div className="health-status">Programme en bonne santé</div>
          <div className="health-desc">Aucun client actif cette période · 9 proche(s) d'une récompense</div>
          <div className="health-insight">
            <Gift size={14} className="insight-icon" style={{ color: '#f59e0b' }} />
            9 client(s) proches d'une récompense, un rappel peut booster les visites.
          </div>
          <div className="health-insight">
            <TrendingUp size={14} className="insight-icon" style={{ color: '#10b981' }} />
            Croissance de +767% de nouveaux clients, belle dynamique !
          </div>
        </div>
        <HealthScore score={55} label="Bon" />
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard label="Clients actifs" value="53" change="+47%" icon={Users} delay={1} />
        <StatCard label="Nouveaux clients" value="26" change="+767%" icon={UserPlus} delay={2} />
        <StatCard label="Taux de fidélité" value="87%" change="2+ visites" changeType="neutral" icon={RefreshCw} delay={3} />
        <StatCard label="Récompenses" value="3" change="+100%" icon={Gift} delay={4} />
      </div>

      {/* Activity + Actions */}
      <div className="content-grid content-grid-wide">
        <div className="card reveal reveal-delay-1">
          <div className="card-title">Activité</div>
          <ActivityChart />
        </div>
        <div className="card reveal reveal-delay-2">
          <div className="card-title">
            <Sparkles size={18} className="card-title-icon" /> Actions prioritaires
          </div>
          <div className="action-item reward">
            <div className="action-icon"><Gift size={18} /></div>
            <div>
              <div className="action-text">9 client(s) proches de la récompense</div>
              <div className="action-link">Envoyer un rappel <ArrowRight size={12} /></div>
            </div>
          </div>
          <div className="action-item growth">
            <div className="action-icon"><TrendingUp size={18} /></div>
            <div>
              <div className="action-text">Accélération de la croissance</div>
              <div className="action-link">Explorer <ArrowRight size={12} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Segments */}
      <div style={{ marginTop: 24 }}>
        <h2 className="card-title reveal" style={{ fontSize: '1.1rem', marginBottom: 16 }}>Segments à surveiller</h2>
        <div className="segments-grid">
          <div className="segment-card reveal reveal-delay-1">
            <div className="segment-value">30</div>
            <div className="segment-label">Clients réguliers</div>
            <div className="segment-bar">
              <div className="segment-bar-fill green" style={{ width: '58%' }} />
            </div>
          </div>
          <div className="segment-card reveal reveal-delay-2">
            <div className="segment-value">8</div>
            <div className="segment-label">À risque (pas de visite 30j)</div>
            <div className="segment-bar">
              <div className="segment-bar-fill orange" style={{ width: '15%' }} />
            </div>
          </div>
          <div className="segment-card reveal reveal-delay-3">
            <div className="segment-value">2</div>
            <div className="segment-label">Perdus (60j+ sans visite)</div>
            <div className="segment-bar">
              <div className="segment-bar-fill red" style={{ width: '4%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
