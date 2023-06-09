import {
    useContext,
    useEffect,
    useState,
} from 'react'
import app from 'App'
import { filterOperator } from 'App'
import { ListContext } from 'Contexts'

const useFilter = ({
    choose,
    property,
    operator,
    placeholder,
    show,
    type,
}) => {

    app.ensure([property, choose, type])

    const [id, setId] = useState()
    const [entity, setEntity] = useState(null)
    const [shown, setShown] = useState('')
    const [chosen, setChosen] = useState('')

    var {
        reload,
        setFilter,
        setFilterable,
        usedFilters,
    } = useContext(ListContext)
    const label = placeholder || property

    // todo: on resetting filters => setEntity(entity || "")

    useEffect(() => {
        setFilterable(property)
    }, [property])

    useEffect(() => {
        setId(`${type}_${property}`)
    }, [type, property])

    useEffect(() => {
        setFilter(property, chosen, operator || filterOperator.contains)
    }, [property, chosen])

    useEffect(() => {
        if (entity) {
            setShown(show(entity))
            setChosen(choose(entity))
        }
        else {
            setShown('')
            setChosen('')
        }
    }, [entity])

    useEffect(() => {
        if (!usedFilters || usedFilters.length === 0) {
            setEntity(null)
        }
    }, [usedFilters])

    return {
        chosen,
        entity,
        id,
        label,
        setChosen,
        setEntity,
        setShown,
        shown,
    }
}

export default useFilter
