import { Users, UserCheck, UserPlus, RefreshCw, Eye, CreditCard, Gift, BarChart2, Euro, ShoppingCart } from 'lucide-react'
import StatCard from '../components/StatCard'
import DonutChart from '../components/DonutChart'
import GrowthChart from '../components/GrowthChart'
import DailyChart from '../components/DailyChart'
import { useReveal } from '../hooks/useReveal'

const donutData = [
  { label: 'Actifs', value: 11 },
  { label: 'VIP', value: 28 },
  { label: 'Nouveaux', value: 26 },
]

const perfData = [
  { label: 'Cartes complétées (total)', value: '16' },
  { label: 'Récompenses gagnées (période)', value: '3' },
  { label: 'Clients proches récompense', value: '9' },
  { label: 'Temps moyen carte complète', value: '--' },
  { label: 'Taux utilisation récompenses', value: '19%' },
]

export default function Analytiques() {
  const ref = useReveal()

  return (
    <div ref={ref}>
      {/* Header */}
      <div className="page-header reveal">
        <div>
          <h1>Analytiques</h1>
          <div className="page-header-date">Analyse détaillée de votre programme de fidélité · Maj 16/03/2026</div>
        </div>
        <div className="page-header-actions">
          <div className="period-selector">
            <button className="period-btn">7j</button>
            <button className="period-btn active">30j</button>
            <button className="period-btn">90j</button>
          </div>
        </div>
      </div>

      {/* Row 1 - 5 stat cards */}
      <div className="stats-grid stats-grid-5">
        <StatCard label="Clients totaux" value="65" icon={Users} delay={1} />
        <StatCard label="Actifs" value="65" icon={UserCheck} delay={2} />
        <StatCard label="Nouveaux" value="26" icon={UserPlus} delay={3} />
        <StatCard label="Taux de retour" value="87%" icon={RefreshCw} delay={4} />
        <StatCard label="Visites / scans" value="195" icon={Eye} delay={5} />
      </div>

      {/* Row 2 - 5 stat cards */}
      <div className="stats-grid stats-grid-5">
        <StatCard label="Cartes complétées" value="16" icon={CreditCard} delay={1} />
        <StatCard label="Récompenses" value="3" icon={Gift} delay={2} />
        <StatCard label="Moy. visites/client" value="11.8" icon={BarChart2} delay={3} />
        <StatCard label="Revenu estimé" value="3 607,5 €" icon={Euro} delay={4} />
        <StatCard label="Panier moyen" value="18.50 €" icon={ShoppingCart} delay={5} />
      </div>

      {/* Donut + Performance */}
      <div className="content-grid">
        <div className="card reveal reveal-delay-1">
          <div className="card-title">Répartition clients</div>
          <DonutChart data={donutData} />
        </div>
        <div className="card reveal reveal-delay-2">
          <div className="card-title">Performance fidélité</div>
          <div className="perf-list">
            {perfData.map((row) => (
              <div key={row.label} className="perf-row">
                <span className="perf-label">{row.label}</span>
                <span className="perf-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth + Daily */}
      <div className="content-grid">
        <div className="card reveal reveal-delay-1">
          <div className="card-title">Croissance mensuelle</div>
          <div style={{ fontSize: '.82rem', color: '#6b7280', marginTop: -12, marginBottom: 16 }}>
            Nouveaux clients vs clients récurrents
          </div>
          <GrowthChart />
        </div>
        <div className="card reveal reveal-delay-2">
          <div className="card-title">Activité quotidienne</div>
          <div style={{ fontSize: '.82rem', color: '#6b7280', marginTop: -12, marginBottom: 16 }}>
            30 derniers jours
          </div>
          <DailyChart />
        </div>
      </div>
    </div>
  )
}
