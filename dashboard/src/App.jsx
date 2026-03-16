import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Overview from './pages/Overview'
import Analytiques from './pages/Analytiques'

const pageTitles = {
  overview: "Vue d'ensemble",
  analytiques: 'Analytiques',
  clients: 'Clients',
  fidelite: 'Fidélité',
  campagnes: 'Campagnes',
  parametres: 'Paramètres',
}

function App() {
  const [activePage, setActivePage] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="main-content">
        <Topbar
          title={pageTitles[activePage] || activePage}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <div className="page-content">
          {activePage === 'overview' && <Overview />}
          {activePage === 'analytiques' && <Analytiques />}
          {activePage !== 'overview' && activePage !== 'analytiques' && (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#9ca3af' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8, color: '#374151' }}>
                {pageTitles[activePage]}
              </h2>
              <p>Cette section sera bientôt disponible.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
