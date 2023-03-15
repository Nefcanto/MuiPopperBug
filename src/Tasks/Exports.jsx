import TaskIcon from '@mui/icons-material/Task'
import Tasks from './Task/List'

const TasksRoutes = [
    {
        path: '/tasks',
        component: Tasks
    }
]

const TasksMenu = [
    {
        title: 'Tasks',
        icon: TaskIcon,
        path: '/tasks'
    }
]

export { TasksRoutes }
export { TasksMenu }
