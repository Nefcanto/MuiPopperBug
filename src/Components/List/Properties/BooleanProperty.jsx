import {
    useContext,
    useState,
} from 'react'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'
import CircularProgress from '@mui/material/CircularProgress'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import app from 'App'
import { post } from 'App'
import { useMessage } from 'Hooks'
import { ListContext } from 'Contexts'
import HolismIcon from '../../HolismIcon'

const BooleanProperty = ({
    actionUrl,
    className,
    property,
    reloadListOnSuccess,
    title,
    value,
}) => {

    const { success, error } = useMessage()

    const [progress, setProgress] = useState(false)

    const {
        reload,
        setEntity,
    } = useContext(ListContext)

    const onChange = (e) => {
        if (!actionUrl || app.isNothing(actionUrl)) {
            return
        }
        setProgress(true)
        var api = actionUrl
        if (typeof actionUrl === 'function') {
            api = actionUrl(e.target.checked)
        }
        post(api).then(data => {
            setProgress(false)
            success('Applied')
            if (reloadListOnSuccess) {
                reload()
            }
            else {
                setEntity(data)
            }
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    const control = actionUrl
        ?
        <Switch
            checked={value || false}
            onChange={(e) => onChange(e)}
            size='small'
        />
        :
        <div className={"" + (value === true ? " text-green-600 " : " text-red-600 ")}>
            {
                value === true
                    ?
                    <HolismIcon icon={CheckIcon} />
                    :
                    <HolismIcon icon={ClearIcon} />
            }
        </div>
    return <div className={"property boolean flex items-center justify-center " + (className || '')}>
        {
            progress
                ?
                <CircularProgress
                    size={16}
                    className="my-1"
                />
                :
                title
                    ?
                    <Tooltip title={title || ""}>
                        {
                            control
                        }
                    </Tooltip>
                    :
                    control
        }
    </div>
}

export default BooleanProperty 
