export const sidebarLinks = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Projects', icon: 'projects' },
  { label: 'Tasks', icon: 'tasks' },
  { label: 'Calendar', icon: 'calendar' },
]

export const statusOptions = [
  { label: 'All statuses', value: 'all' },
  { label: 'To do', value: 'todo' },
  { label: 'In progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
]

export const priorityOptions = [
  { label: 'All priorities', value: 'all' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' },
]

export const boardColumns = [
  { label: 'To do', value: 'todo', icon: 'todo', theme: 'todo' },
  {
    label: 'In progress',
    value: 'in-progress',
    icon: 'in-progress',
    theme: 'in-progress',
  },
  { label: 'Done', value: 'done', icon: 'done', theme: 'done' },
]

export const tasks = [
  {
    id: 1,
    title: 'Finalize dashboard layout',
    description:
      'Align the task board with the approved desktop mockup and prepare spacing notes for the report.',
    priority: 'high',
    status: 'todo',
    assignee: 'Sofia Miles',
    role: 'UI designer',
    dueDate: '2026-04-24',
    avatar: 'https://i.pravatar.cc/88?img=32',
  },
  {
    id: 2,
    title: 'Write props examples',
    description:
      'Prepare short explanations for TaskItem, TaskList and AddTaskForm so they are easy to defend.',
    priority: 'medium',
    status: 'todo',
    assignee: 'Leon Hart',
    role: 'Frontend intern',
    dueDate: '2026-04-25',
    avatar: 'https://i.pravatar.cc/88?img=12',
  },
  {
    id: 3,
    title: 'Collect mobile screenshots',
    description:
      'Check how the layout behaves on a narrow screen and save examples for the final report.',
    priority: 'low',
    status: 'todo',
    assignee: 'Mia Chen',
    role: 'QA assistant',
    dueDate: '2026-04-27',
    avatar: 'https://i.pravatar.cc/88?img=47',
  },
  {
    id: 4,
    title: 'Build task column component',
    description:
      'Map static mock data into reusable cards and keep the filtering logic inside the list component.',
    priority: 'high',
    status: 'in-progress',
    assignee: 'Noah Brooks',
    role: 'React developer',
    dueDate: '2026-04-23',
    avatar: 'https://i.pravatar.cc/88?img=52',
  },
  {
    id: 5,
    title: 'Tune filter links',
    description:
      'Use URL query parameters for status and priority filtering without any local component state.',
    priority: 'medium',
    status: 'in-progress',
    assignee: 'Emma Ortiz',
    role: 'Frontend engineer',
    dueDate: '2026-04-24',
    avatar: 'https://i.pravatar.cc/88?img=25',
  },
  {
    id: 6,
    title: 'Prepare add task draft',
    description:
      'Keep the form visual and educational, but submit it as a stub because the lab requires static data.',
    priority: 'low',
    status: 'in-progress',
    assignee: 'Ava James',
    role: 'Product owner',
    dueDate: '2026-04-26',
    avatar: 'https://i.pravatar.cc/88?img=5',
  },
  {
    id: 7,
    title: 'Create mock data set',
    description:
      'Write enough task records to demonstrate all columns, priorities and empty states after filtering.',
    priority: 'high',
    status: 'done',
    assignee: 'Liam Scott',
    role: 'Data author',
    dueDate: '2026-04-21',
    avatar: 'https://i.pravatar.cc/88?img=15',
  },
  {
    id: 8,
    title: 'Install router package',
    description:
      'Add react-router-dom as the PDF requires and keep it ready for the next labs without overcomplicating routing.',
    priority: 'medium',
    status: 'done',
    assignee: 'Nora Green',
    role: 'Tech lead',
    dueDate: '2026-04-22',
    avatar: 'https://i.pravatar.cc/88?img=41',
  },
  {
    id: 9,
    title: 'Review desktop polish',
    description:
      'Verify colors, card shadows and button states so the page stays close to the selected Figma style.',
    priority: 'low',
    status: 'done',
    assignee: 'Ethan Fox',
    role: 'Visual reviewer',
    dueDate: '2026-04-22',
    avatar: 'https://i.pravatar.cc/88?img=60',
  },
]
