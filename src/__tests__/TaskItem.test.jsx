import { fireEvent, render, screen } from '@testing-library/react'
import TaskItem from '../components/features/TaskItem'
import { tasks } from '../data/mockData'

describe('TaskItem', () => {
  const task = tasks[0]

  test('renders the main task information', () => {
    render(<TaskItem task={task} onTaskAction={() => {}} />)

    expect(screen.getByText(task.title)).toBeInTheDocument()
    expect(screen.getByText(task.assignee)).toBeInTheDocument()
    expect(screen.getByText(`Due: ${task.dueDate}`)).toBeInTheDocument()
    expect(screen.getByText(task.priority)).toBeInTheDocument()
  })

  test('calls onTaskAction when the user clicks every control', () => {
    const onTaskAction = jest.fn()

    render(<TaskItem task={task} onTaskAction={onTaskAction} />)

    fireEvent.click(screen.getByRole('button', { name: `Edit ${task.title}` }))
    fireEvent.click(screen.getByRole('button', { name: `Delete ${task.title}` }))
    fireEvent.click(screen.getByRole('button', { name: 'Move Task' }))
    fireEvent.click(screen.getByText(task.description).closest('button'))

    expect(onTaskAction).toHaveBeenNthCalledWith(1, 'Edit task', task)
    expect(onTaskAction).toHaveBeenNthCalledWith(2, 'Delete task', task)
    expect(onTaskAction).toHaveBeenNthCalledWith(3, 'Move task', task)
    expect(onTaskAction).toHaveBeenNthCalledWith(4, 'View details', task)
  })
})
