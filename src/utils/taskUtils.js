const priorityOrder = {
  high: 0,
  medium: 1,
  low: 2,
}

export function generateId(tasks = []) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return 1
  }

  const numericIds = tasks
    .map((task) => Number(task.id))
    .filter((id) => Number.isFinite(id))

  if (numericIds.length === 0) {
    return 1
  }

  return Math.max(...numericIds) + 1
}

export function sortTasks(tasks = [], sortBy = 'priority') {
  const tasksCopy = [...tasks]

  if (sortBy === 'priority') {
    return tasksCopy.sort((firstTask, secondTask) => {
      const firstPriority = priorityOrder[firstTask.priority] ?? priorityOrder.low
      const secondPriority =
        priorityOrder[secondTask.priority] ?? priorityOrder.low

      return firstPriority - secondPriority
    })
  }

  if (sortBy === 'dueDate') {
    return tasksCopy.sort((firstTask, secondTask) => {
      const firstDate = new Date(firstTask.dueDate).getTime()
      const secondDate = new Date(secondTask.dueDate).getTime()

      return firstDate - secondDate
    })
  }

  return tasksCopy
}
