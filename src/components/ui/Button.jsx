import Icon from './Icon'

function Button({
  children,
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'default',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant} ${
        size === 'small' ? 'button--small' : ''
      }`.trim()}
    >
      <span>{children}</span>
      {icon ? <Icon name={icon} className="icon icon--sm" /> : null}
    </button>
  )
}

export default Button
