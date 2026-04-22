import { generateId, sortTasks } from '../utils/taskUtils'

describe('generateId', () => {
  test('returns 1 for an empty task list', () => {
    expect(generateId([])).toBe(1)
  })

  test('returns the next numeric id for a regular task list', () => {
    const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }]

    expect(generateId(tasks)).toBe(4)
  })

  test('returns 1 when the list does not contain numeric ids', () => {
    const tasks = [{ id: 'abc' }, {}]

    expect(generateId(tasks)).toBe(1)
  })

  test('returns 1 when the input is not an array', () => {
    expect(generateId(null)).toBe(1)
  })

  test('finds the next id even when tasks are not ordered', () => {
    const tasks = [{ id: 3 }, { id: 11 }, { id: 7 }]

    expect(generateId(tasks)).toBe(12)
  })
})

describe('sortTasks', () => {
  const tasks = [
    { id: 1, priority: 'low', dueDate: '2026-04-27' },
    { id: 2, priority: 'high', dueDate: '2026-04-23' },
    { id: 3, priority: 'medium', dueDate: '2026-04-25' },
  ]

  test('sorts tasks by priority from high to low', () => {
    const sortedTasks = sortTasks(tasks, 'priority')

    expect(sortedTasks.map((task) => task.id)).toEqual([2, 3, 1])
  })

  test('sorts tasks by due date from earliest to latest', () => {
    const sortedTasks = sortTasks(tasks, 'dueDate')

    expect(sortedTasks.map((task) => task.id)).toEqual([2, 3, 1])
  })

  test('does not mutate the source array', () => {
    const sourceTasks = [
      { id: 1, priority: 'low', dueDate: '2026-04-27' },
      { id: 2, priority: 'high', dueDate: '2026-04-23' },
    ]

    const sourceSnapshot = [...sourceTasks]

    sortTasks(sourceTasks, 'priority')

    expect(sourceTasks).toEqual(sourceSnapshot)
  })

  test('keeps tasks with the same priority in their original order', () => {
    const samePriorityTasks = [
      { id: 5, priority: 'medium', dueDate: '2026-04-29' },
      { id: 6, priority: 'medium', dueDate: '2026-04-30' },
      { id: 7, priority: 'high', dueDate: '2026-04-22' },
    ]

    const sortedTasks = sortTasks(samePriorityTasks, 'priority')

    expect(sortedTasks.map((task) => task.id)).toEqual([7, 5, 6])
  })

  test('returns a copied array when the sort type is unknown', () => {
    const sortedTasks = sortTasks(tasks, 'manual')

    expect(sortedTasks).toEqual(tasks)
    expect(sortedTasks).not.toBe(tasks)
  })
})
