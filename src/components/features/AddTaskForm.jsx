import Button from '../ui/Button'

function AddTaskForm({ priorityOptions, statusOptions, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    onSubmit({
      title: formData.get('title')?.toString().trim() ?? '',
      description: formData.get('description')?.toString().trim() ?? '',
      priority: formData.get('priority')?.toString() ?? 'medium',
      status: formData.get('status')?.toString() ?? 'todo',
      dueDate: formData.get('dueDate')?.toString() ?? '',
    })
  }

  return (
    <section className="task-form">
      <div className="task-form__header">
        <div>
          <h2>AddTaskForm</h2>
          <p>
            This form is part of the lab task and sends a stub action without
            changing the static board data.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="task-form__grid">
          <div className="task-form__field">
            <label htmlFor="task-title">Task title</label>
            <input id="task-title" name="title" placeholder="Prepare Lab 7 demo" />
          </div>

          <div className="task-form__field">
            <label htmlFor="task-date">Due date</label>
            <input id="task-date" name="dueDate" type="date" />
          </div>

          <div className="task-form__field">
            <label htmlFor="task-priority">Priority</label>
            <select id="task-priority" name="priority" defaultValue="medium">
              {priorityOptions
                .filter((option) => option.value !== 'all')
                .map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
          </div>

          <div className="task-form__field">
            <label htmlFor="task-status">Status</label>
            <select id="task-status" name="status" defaultValue="todo">
              {statusOptions
                .filter((option) => option.value !== 'all')
                .map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
          </div>

          <div className="task-form__field task-form__field--full">
            <label htmlFor="task-description">Short description</label>
            <textarea
              id="task-description"
              name="description"
              placeholder="Describe the task briefly so it is easy to understand during the defense."
            />
          </div>
        </div>

        <div className="task-form__actions">
          <Button type="submit" icon="plus">
            New task
          </Button>
        </div>
      </form>
    </section>
  )
}

export default AddTaskForm
