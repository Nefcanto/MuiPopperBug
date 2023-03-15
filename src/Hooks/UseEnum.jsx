import {
    useEffect,
    useState,
} from 'react'
import app from 'App'
import { get } from 'App'

const useEnum = ({
    entityType
}) => {

    app.ensure([entityType])

    const [progress, setProgress] = useState()
    const [enumItems, setEnumItems] = useState(app.getEnum(entityType) || [])

    useEffect(() => {
        if (enumItems.length !== 0) {
            return
        }
        // ajax
    }, [enumItems.length, setEnumItems, entityType])

    return {
        enumItems,
        progress,
        setEnumItems,
        setProgress,
    }
}

export default useEnum
