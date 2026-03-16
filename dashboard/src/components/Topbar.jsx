import { Menu } from 'lucide-react'

export default function Topbar({ title, onMenuClick }) {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          <Menu size={18} />
        </button>
        <span className="topbar-title">{title}</span>
      </div>
      <div className="topbar-right">
        <span className="topbar-user">BurgerReBites</span>
        <div className="topbar-avatar">BR</div>
      </div>
    </header>
  )
}
