import {
  LayoutDashboard, Users, Heart, Send, BarChart3,
  Settings, QrCode, Wallet, Receipt, CalendarCheck,
  HelpCircle, LogOut, ChevronLeft, Sparkles
} from 'lucide-react'

const navItems = [
  { id: 'overview', label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: 'clients', label: 'Clients', icon: Users },
  { id: 'fidelite', label: 'Fidélité', icon: Heart },
  { id: 'campagnes', label: 'Campagnes', icon: Send },
  { id: 'analytiques', label: 'Analytiques', icon: BarChart3 },
  { id: 'parametres', label: 'Paramètres', icon: Settings },
]

const navSecondary = [
  { id: 'scanner', label: 'Scanner QR', icon: QrCode },
  { id: 'wallet', label: 'Studio Wallet', icon: Wallet },
  { id: 'facturation', label: 'Facturation', icon: Receipt },
  { id: 'aide', label: 'Aide', icon: HelpCircle },
]

export default function Sidebar({ activePage, onNavigate, open, onClose }) {
  return (
    <>
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-placeholder">BR</div>
          <div className="sidebar-info">
            <span className="sidebar-name">BurgerReBites</span>
            <span className="sidebar-plan">Starter</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={activePage === item.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); onNavigate(item.id); onClose?.() }}
            >
              <item.icon className="nav-icon" size={20} />
              {item.label}
            </a>
          ))}

          <div className="sidebar-divider" />

          {navSecondary.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => { e.preventDefault(); onClose?.() }}
            >
              <item.icon className="nav-icon" size={20} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-upgrade">
          <div className="sidebar-upgrade-title">Passer à Pro</div>
          <div className="sidebar-upgrade-desc">Campagnes illimitées + Analytics</div>
          <button className="sidebar-upgrade-btn">
            Passer à Pro <Sparkles size={12} style={{ display: 'inline', verticalAlign: '-1px' }} />
          </button>
        </div>

        <div className="sidebar-footer">
          <button>
            <LogOut size={16} style={{ marginRight: 8, verticalAlign: '-2px' }} />
            Déconnexion
          </button>
        </div>

        <button className="sidebar-collapse-btn" title="Réduire">
          <ChevronLeft size={14} />
        </button>
      </aside>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  )
}
