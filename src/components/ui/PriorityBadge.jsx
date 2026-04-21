function PriorityBadge({ priority }) {
  return (
    <span className={`priority-badge priority-badge--${priority}`}>
      {priority}
    </span>
  )
}

export default PriorityBadge
