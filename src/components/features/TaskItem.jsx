import Icon from '../ui/Icon'
import PriorityBadge from '../ui/PriorityBadge'

function TaskItem({ task, onTaskAction }) {
  return (
    <article className="task-card">
      <div className="task-card__header">
        <div className="task-card__assignee">
          <img
            className="task-card__avatar"
            src={task.avatar}
            alt={`${task.assignee} avatar`}
          />
          <div>
            <strong>{task.assignee}</strong>
            <span>{task.role}</span>
          </div>
        </div>

        <div className="task-card__actions">
          <button
            type="button"
            className="icon-button"
            aria-label={`Edit ${task.title}`}
            onClick={() => onTaskAction('Edit task', task)}
          >
            <Icon name="edit" className="icon icon--sm" />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label={`Delete ${task.title}`}
            onClick={() => onTaskAction('Delete task', task)}
          >
            <Icon name="delete" className="icon icon--sm" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="task-card__details"
        onClick={() => onTaskAction('View details', task)}
      >
        <div className="task-card__title-row">
          <h3 className="task-card__title">{task.title}</h3>
          <PriorityBadge priority={task.priority} />
        </div>
        <p className="task-card__description">{task.description}</p>
      </button>

      <div className="task-card__meta">
        <span className="task-card__date">Due: {task.dueDate}</span>
        <button
          type="button"
          className="button button--ghost button--small"
          onClick={() => onTaskAction('Move task', task)}
        >
          Move Task
        </button>
      </div>
    </article>
  )
}

export default TaskItem
