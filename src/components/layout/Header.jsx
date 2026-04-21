import Icon from '../ui/Icon'

const userAvatar = 'https://i.pravatar.cc/88?img=20'

function Header({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchTerm = formData.get('search')?.toString().trim() ?? ''

    onSearch(searchTerm)
  }

  return (
    <header className="topbar">
      <form className="topbar__search-form" onSubmit={handleSubmit}>
        <div className="topbar__search-shell">
          <input
            type="search"
            name="search"
            className="topbar__search-input"
            placeholder="Search"
            aria-label="Search tasks"
          />
          <button className="topbar__search-submit" type="submit">
            <Icon name="search" className="icon icon--lg" />
          </button>
        </div>
      </form>

      <div className="topbar__actions">
        <button
          type="button"
          className="icon-button"
          aria-label="Notifications"
          onClick={() => onSearch('notification center')}
        >
          <Icon name="bell" className="icon icon--lg" />
        </button>
        <img
          className="topbar__avatar"
          src={userAvatar}
          alt="Current user avatar"
        />
      </div>
    </header>
  )
}

export default Header
