import Icon from '../ui/Icon'
import TaskItem from './TaskItem'

function TaskList({
  title,
  columnIcon,
  theme,
  tasks,
  statusFilter,
  activeStatusFilter,
  priorityFilter,
  onTaskAction,
}) {
  const filteredTasks = tasks.filter((task) => {
    const matchesColumn = task.status === statusFilter
    const matchesStatus =
      activeStatusFilter === 'all' || task.status === activeStatusFilter
    const matchesPriority =
      priorityFilter === 'all' || task.priority === priorityFilter

    return matchesColumn && matchesStatus && matchesPriority
  })

  return (
    <section className={`task-list task-list--${theme}`}>
      <div className="task-list__header">
        <h2 className="task-list__title">
          <Icon name={columnIcon} className="icon icon--lg" />
          <span>{title}</span>
        </h2>
        <span className="task-list__count">{filteredTasks.length}</span>
      </div>

      <div className="task-list__items">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onTaskAction={onTaskAction} />
          ))
        ) : (
          <p className="task-list__empty">
            No tasks match the current status and priority filters.
          </p>
        )}
      </div>
    </section>
  )
}

export default TaskList
