import bellIcon from '../../assets/figma-icons/bell.svg'
import deleteIcon from '../../assets/figma-icons/delete.svg'
import doneIcon from '../../assets/figma-icons/done.svg'
import editIcon from '../../assets/figma-icons/edit.svg'
import inProgressIcon from '../../assets/figma-icons/in-progress.svg'
import logoutIcon from '../../assets/figma-icons/logout.svg'
import plusIcon from '../../assets/figma-icons/plus.svg'
import searchIcon from '../../assets/figma-icons/search.svg'
import sidebarCalendarIcon from '../../assets/figma-icons/sidebar-calendar.svg'
import sidebarDashboardIcon from '../../assets/figma-icons/sidebar-dashboard.svg'
import sidebarProjectsIcon from '../../assets/figma-icons/sidebar-projects.svg'
import sidebarTasksIcon from '../../assets/figma-icons/sidebar-tasks.svg'
import todoIcon from '../../assets/figma-icons/todo.svg'
import toolbarCalendarIcon from '../../assets/figma-icons/toolbar-calendar.svg'
import toolbarDashboardIcon from '../../assets/figma-icons/toolbar-dashboard.svg'
import toolbarProjectsIcon from '../../assets/figma-icons/toolbar-projects.svg'
import toolbarTasksIcon from '../../assets/figma-icons/toolbar-tasks.svg'

const iconMap = {
  bell: bellIcon,
  calendar: sidebarCalendarIcon,
  dashboard: sidebarDashboardIcon,
  delete: deleteIcon,
  done: doneIcon,
  edit: editIcon,
  'in-progress': inProgressIcon,
  logout: logoutIcon,
  plus: plusIcon,
  projects: sidebarProjectsIcon,
  search: searchIcon,
  tasks: sidebarTasksIcon,
  todo: todoIcon,
  'toolbar-calendar': toolbarCalendarIcon,
  'toolbar-dashboard': toolbarDashboardIcon,
  'toolbar-projects': toolbarProjectsIcon,
  'toolbar-tasks': toolbarTasksIcon,
}

function Icon({ name, className = 'icon' }) {
  const iconSource = iconMap[name]

  if (!iconSource) {
    return null
  }

  return <img src={iconSource} className={className} alt="" aria-hidden="true" />
}

export default Icon
