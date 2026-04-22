import Icon from '../ui/Icon'
import logoMark from '../../assets/figma-icons/logo-mark.svg'

function Sidebar({ links, activeLink, onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__brand">
          <img className="sidebar__logo" src={logoMark} alt="" aria-hidden="true" />
          <p className="sidebar__brand-text">TaskMinder.</p>
        </div>

        <nav className="sidebar__links" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = link.label === activeLink

            return (
              <button
                key={link.label}
                type="button"
                className={`sidebar__link ${
                  isActive ? 'sidebar__link--active' : ''
                }`.trim()}
                onClick={() => onNavigate(link.label)}
              >
                <Icon name={link.icon} className="icon" />
                <span>{link.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="sidebar__footer">
        <button
          type="button"
          className="sidebar__link sidebar__link--logout"
          onClick={() => onLogout('Log out')}
        >
          <Icon name="logout" className="icon" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
