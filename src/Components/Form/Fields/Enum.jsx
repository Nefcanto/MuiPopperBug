import {
    useEffect,
    useState,
} from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import app from 'App'
import { get } from 'App'
import fieldStyles from './FieldStyle'
import Select from './Select'
import Radio from './Radio'

const Enum = ({
    entityType,
    radio,
    row,
    ...rest
}) => {

    app.ensure([entityType])

    const [loading, setLoading] = useState()
    const [enumItems, setEnumItems] = useState(app.getEnum(entityType) || [])

    useEffect(() => {
        if (enumItems.length !== 0) {
            return
        }
        // ajax
    }, [entityType])

    return <div className={fieldStyles}>
        {
            loading
                ?
                <CircularProgress />
                :
                radio
                    ?
                    <Radio
                        {...rest}
                        options={enumItems}
                        display={entity => entity.titleizedKey}
                        choose={entity => entity.id * 1}
                        row={row}
                    />
                    :
                    <Select
                        {...rest}
                        options={enumItems}
                        display={entity => entity.titleizedKey}
                        choose={entity => entity.id}
                    />
        }
    </div>
}

export default Enum 
