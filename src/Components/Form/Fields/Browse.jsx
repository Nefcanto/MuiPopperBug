import {
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import app from 'App'
import { get } from 'App'
import {
    BrowseContext,
    DialogContext,
    FormContext,
} from 'Contexts'
import {
    useField,
    useMessage,
} from 'Hooks'
import BrowserDialog from '../../Browse/BrowserDialog'
import BrowserIcons from '../../Browse/BrowserIcons'
import Field from './Field'

const Browse = ({
    choose,
    list,
    show,
    entityType,
    ...rest
}) => {

    const [open, setOpen] = useState(false)
    const [selectedEntity, setSelectedEntity] = useState(null)
    const [loading, setLoading] = useState(false)

    const { error } = useMessage()

    const {
        formMode,
        mode,
    } = useContext(FormContext)

    const field = useField({
        choose,
        entityType,
        list,
        show,
        type: 'Browse',
        ...rest
    })

    const {
        chosenValue,
        displayValue,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    useEffect(() => {
        if (selectedEntity) {
            return
        }
        if (!displayValue && !chosenValue) {
            return
        }
        if (mode == formMode.edition) {
            // get entity
        }
    }, [displayValue, chosenValue, selectedEntity])

    return <Field
        {...field}
        {...rest}
    >

        {
            mode == formMode.creation
                ?
                <DialogContext.Provider
                    value={{
                        open,
                        setOpen
                    }}
                >
                    <BrowseContext.Provider
                        value={{
                            close: () => setOpen(false),
                            entityType,
                            list,
                            onSelected: (entity) => {
                                if (entity) {
                                    setChosenValue(choose(entity))
                                    setDisplayValue(show(entity))
                                }
                            },
                            progress,
                            selectedEntity,
                            setSelectedEntity,
                            small: true,
                            ...rest
                        }}
                    >
                        <BrowserDialog />
                        <OutlinedInput
                            label={app.t(label)}
                            value={displayValue}
                            readOnly
                            endAdornment={<BrowserIcons
                                onCleared={() => {
                                    setChosenValue('')
                                    setDisplayValue('')
                                    setSelectedEntity(null)
                                }}
                            />}
                            onBlur={() => {
                                if (!isDirty) {
                                    setIsDirty(true)
                                }
                            }}
                        />
                    </BrowseContext.Provider>
                </DialogContext.Provider>
                :
                <OutlinedInput
                    label={app.t(label)}
                    value={displayValue}
                    readOnly
                    disabled
                />
        }
    </Field>
}

export default Browse
