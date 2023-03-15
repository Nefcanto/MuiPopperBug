import DashboardIcon from '@mui/icons-material/Dashboard'
import { TasksMenu } from 'Tasks'

const menuItems = [
    {
        title: "Dashboard",
        icon: DashboardIcon,
        url: "/"
    },
    ...TasksMenu
]

export default menuItems
