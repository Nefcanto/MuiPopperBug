import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useField } from 'Hooks'
import Field from './Field'

const Check = ({
    ...rest
}) => {

    const { change } = rest

    const field = useField({
        type: 'Check',
        ...rest
    })
    const {
        displayValue,
        isDirty,
        label,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    return <Field
        {...rest}
        {...field}
    >
        <FormGroup className="">
            <FormControlLabel
                className="select-none"
                control={<Checkbox

                />}
                label={app.t(label)}
                checked={displayValue || false}
                onBlur={() => {
                    if (!isDirty) {
                        setIsDirty(true)
                    }
                }}
                onChange={(e) => {
                    setDisplayValue(e.target.checked)
                    setChosenValue(e.target.checked)
                    if (change && typeof change === 'function') {
                        change(e.target.checked)
                    }
                }}
            />
        </FormGroup>
    </Field>
}

export default Check 
