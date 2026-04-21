import './App.css'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import TaskBoardPage from './pages/TaskBoardPage'
import {
  boardColumns,
  priorityOptions,
  sidebarLinks,
  statusOptions,
  tasks,
} from './data/mockData'

function App() {
  const handleSearch = (searchTerm) => {
    const message = searchTerm
      ? `Search stub: "${searchTerm}"`
      : 'Search stub: enter a task title or assignee.'

    console.log(message)
    window.alert(message)
  }

  const handleTaskAction = (action, task) => {
    const message = `${action}: ${task.title}`

    console.log(message, task)
    window.alert(message)
  }

  const handleFormSubmit = (taskDraft) => {
    const message = `New task stub: ${taskDraft.title || 'Untitled task'}`

    console.log(message, taskDraft)
    window.alert(
      `${message}\nStatic mock data is required for this lab, so the board is not changed.`,
    )
  }

  const handleSidebarAction = (label) => {
    const message = `${label} is a navigation stub for Lab 7.`

    console.log(message)
    window.alert(message)
  }

  return (
    <div className="app-shell">
      <Sidebar
        links={sidebarLinks}
        activeLink="Tasks"
        onNavigate={handleSidebarAction}
        onLogout={handleSidebarAction}
      />
      <div className="app-shell__content">
        <Header onSearch={handleSearch} />
        <TaskBoardPage
          boardColumns={boardColumns}
          priorityOptions={priorityOptions}
          statusOptions={statusOptions}
          tasks={tasks}
          onCreateTask={handleFormSubmit}
          onTaskAction={handleTaskAction}
        />
      </div>
    </div>
  )
}

export default App
