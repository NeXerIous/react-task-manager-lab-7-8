import AddTaskForm from '../components/features/AddTaskForm'
import TaskList from '../components/features/TaskList'
import FilterButtons from '../components/ui/FilterButtons'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'

function TaskBoardPage({
  boardColumns,
  priorityOptions,
  statusOptions,
  tasks,
  onCreateTask,
  onTaskAction,
}) {
  const searchParams = new URLSearchParams(globalThis.location?.search ?? '')
  const validStatuses = new Set(statusOptions.map((option) => option.value))
  const validPriorities = new Set(priorityOptions.map((option) => option.value))

  const activeStatus = validStatuses.has(searchParams.get('status'))
    ? searchParams.get('status')
    : 'all'

  const activePriority = validPriorities.has(searchParams.get('priority'))
    ? searchParams.get('priority')
    : 'all'

  const createHref = (key, value) => {
    const nextParams = new URLSearchParams(globalThis.location?.search ?? '')

    nextParams.set(key, value)

    return `?${nextParams.toString()}`
  }

  const filteredCount = tasks.filter((task) => {
    const matchesStatus = activeStatus === 'all' || task.status === activeStatus
    const matchesPriority =
      activePriority === 'all' || task.priority === activePriority

    return matchesStatus && matchesPriority
  }).length

  const handleFilterSelect = (option) => {
    console.log('Filter selected:', option)
  }

  return (
    <main className="task-board">
      <section className="task-board__hero">
        <div className="task-board__title-block">
          <h1>Tasks</h1>
          <p>
            Variant 3 TaskManager with static mock data, reusable components and
            query-based filters.
          </p>
        </div>

        <div className="task-board__toolbar">
          <div className="task-board__hint-icons" aria-hidden="true">
            <button type="button" className="icon-button">
              <Icon name="dashboard" className="icon icon--sm" />
            </button>
            <button type="button" className="icon-button">
              <Icon name="projects" className="icon icon--sm" />
            </button>
            <button type="button" className="icon-button">
              <Icon name="tasks" className="icon icon--sm" />
            </button>
            <button type="button" className="icon-button">
              <Icon name="calendar" className="icon icon--sm" />
            </button>
          </div>
          <Button
            icon="plus"
            onClick={() =>
              onTaskAction('Open new task form', {
                title: 'AddTaskForm section',
              })
            }
          >
            New task
          </Button>
        </div>
      </section>

      <section className="task-board__filters">
        <AddTaskForm
          priorityOptions={priorityOptions}
          statusOptions={statusOptions}
          onSubmit={onCreateTask}
        />

        <aside className="filter-panel">
          <div className="filter-panel__header">
            <div>
              <h2>FilterButtons</h2>
              <p>
                The board keeps all three status columns visible and filters tasks
                through URL parameters.
              </p>
            </div>
            <Icon name="sparkles" className="icon icon--lg" />
          </div>

          <div className="filter-panel__groups">
            <FilterButtons
              label="Status"
              options={statusOptions}
              currentValue={activeStatus}
              createHref={createHref}
              filterKey="status"
              onSelect={handleFilterSelect}
            />

            <FilterButtons
              label="Priority"
              options={priorityOptions}
              currentValue={activePriority}
              createHref={createHref}
              filterKey="priority"
              onSelect={handleFilterSelect}
            />
          </div>

          <div className="filter-panel__summary">
            <p className="task-board__results">
              {filteredCount} task(s) match the current filters.
            </p>
          </div>
        </aside>
      </section>

      <section className="task-board__board">
        {boardColumns.map((column) => (
          <TaskList
            key={column.value}
            title={column.label}
            columnIcon={column.icon}
            theme={column.theme}
            tasks={tasks}
            statusFilter={column.value}
            activeStatusFilter={activeStatus}
            priorityFilter={activePriority}
            onTaskAction={onTaskAction}
          />
        ))}
      </section>
    </main>
  )
}

export default TaskBoardPage
