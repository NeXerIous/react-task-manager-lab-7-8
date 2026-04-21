const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.8,
}

function Icon({ name, className = 'icon' }) {
  switch (name) {
    case 'search':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle {...iconProps} cx="11" cy="11" r="6.5" />
          <path {...iconProps} d="M16 16l5 5" />
        </svg>
      )
    case 'bell':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M15 18H5l1.4-1.6V11a5.6 5.6 0 1111.2 0v5.4L19 18h-4" />
          <path {...iconProps} d="M10 20a2 2 0 004 0" />
          <circle cx="18.5" cy="5.5" r="2.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'plus':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'dashboard':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...iconProps} x="4" y="4" width="6.5" height="6.5" />
          <rect {...iconProps} x="13.5" y="4" width="6.5" height="6.5" />
          <rect {...iconProps} x="4" y="13.5" width="6.5" height="6.5" />
          <rect {...iconProps} x="13.5" y="13.5" width="6.5" height="6.5" />
        </svg>
      )
    case 'projects':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M3.5 8.5h7v11h-7zM10.5 5.5h10v14h-10z" />
        </svg>
      )
    case 'tasks':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M8 7h11M8 12h11M8 17h11M4.5 7l1.2 1.2L7.8 6M4.5 12l1.2 1.2L7.8 11M4.5 17l1.2 1.2L7.8 16" />
        </svg>
      )
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...iconProps} x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path {...iconProps} d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17" />
        </svg>
      )
    case 'logout':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M10 17l-5-5 5-5M5.5 12H15M13 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4" />
        </svg>
      )
    case 'edit':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M4 20l4.5-1 9.1-9.1a2.2 2.2 0 00-3.1-3.1L5.4 15.9 4 20z" />
        </svg>
      )
    case 'delete':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M5 7h14M9 7V4h6v3M8 7l.8 12h6.4L16 7" />
        </svg>
      )
    case 'todo':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...iconProps} x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      )
    case 'in-progress':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M8 4h8M8 20h8M9 4v5l3 3-3 3v5M15 4v5l-3 3 3 3v5" />
        </svg>
      )
    case 'done':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect {...iconProps} x="4" y="4" width="16" height="16" rx="2" />
          <path {...iconProps} d="M8 12l2.5 2.5L16 9" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path {...iconProps} d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
