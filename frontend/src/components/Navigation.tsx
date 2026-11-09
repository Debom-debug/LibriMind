
type NavigationProps = {
  activePage: string
  onNavigate: (page: string) => void
}

const pages = [
  'Home',
  'AI Assistant',
  'Books',
  'Study Rooms',
  'Laptops',
  'Library Tour',
]

function Navigation({ activePage, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Main navigation">
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button
              type="button"
              className={activePage === page ? 'nav-active' : ''}
              onClick={() => onNavigate(page)}
              aria-current={activePage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
