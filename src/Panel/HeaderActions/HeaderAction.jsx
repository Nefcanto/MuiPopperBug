import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Tooltip from '@mui/material/Tooltip'
import Fade from '@mui/material/Fade'
import app from 'App'
import { useMessage } from 'Hooks'
import HolismIcon from '../../Components/HolismIcon'
import Progress from '../../Components/Progress'

const HeaderAction = ({
    action,
    component,
    icon,
    show,
    title,
    url,
    ...rest
}) => {

    const navigate = useNavigate()

    const Component = component || (() => <div></div>)

    const [showComponent, setShowComponent] = useState(false)
    const [progress, setProgress] = useState(false)
    const { success, error } = useMessage()

    const handleClick = () => {
        if (url && app.isSomething(url)) {
            navigate(url)
        }
        else if (action && (typeof action === 'function')) {
            action({
                error,
                setProgress,
                success,
            })
        }
        else if (component) {
            setShowComponent(!showComponent)
        }
        else {
            console.warn('No action is defined for HeaderAction')
        }
    }

    return <div className="headerAction relative select-none">
        {
            progress
                ?
                <div className="w-6 h-6 flex items-center justify-center -mb-2">
                    <Progress size={20} />
                </div>
                :
                <Tooltip title={app.t(title || "")}>
                    <div
                        //rest
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClick()
                        }}
                        className={
                            'text-gray-600 cursor-pointer hover:text-blue-500 transition-colors dark:text-slate-500 dark:hover:text-slate-300'
                        }
                    >
                        {
                            show
                                ?
                                show
                                :
                                <HolismIcon icon={icon} />
                        }
                    </div>
                </Tooltip>
        }

        <ClickAwayListener onClickAway={() => setShowComponent(false)}>
            <div>
                <Fade in={showComponent}>
                    <div
                        className={
                            "absolute top-10 z-50 shadow-xl "
                            + " ltr:right-0 rtl:left-0 "
                        }
                    >
                        <Component
                            hide={() => setShowComponent(false)}
                        />
                    </div>
                </Fade>
            </div>
        </ClickAwayListener>
    </div>
}

export default HeaderAction 
