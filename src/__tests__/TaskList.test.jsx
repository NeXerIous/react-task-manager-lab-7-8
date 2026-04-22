import { render, screen } from '@testing-library/react'
import TaskList from '../components/features/TaskList'
import { tasks } from '../data/mockData'

describe('TaskList', () => {
  test('shows only tasks that match the current column, status and priority filters', () => {
    render(
      <TaskList
        title="To do"
        columnIcon="todo"
        theme="todo"
        tasks={tasks}
        statusFilter="todo"
        activeStatusFilter="all"
        priorityFilter="high"
        onTaskAction={() => {}}
      />,
    )

    expect(screen.getByText('Finalize dashboard layout')).toBeInTheDocument()
    expect(screen.queryByText('Write props examples')).not.toBeInTheDocument()
    expect(screen.getByText('1', { selector: '.task-list__count' })).toBeInTheDocument()
  })

  test('shows the empty state when no tasks match the filters', () => {
    render(
      <TaskList
        title="Done"
        columnIcon="done"
        theme="done"
        tasks={tasks}
        statusFilter="done"
        activeStatusFilter="in-progress"
        priorityFilter="high"
        onTaskAction={() => {}}
      />,
    )

    expect(
      screen.getByText('No tasks match the current status and priority filters.'),
    ).toBeInTheDocument()
  })
})
