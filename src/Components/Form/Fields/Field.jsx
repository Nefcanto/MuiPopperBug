import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import app from 'App'
import fieldStyles from './FieldStyle'

const Field = ({
    children,
    className,
    helpText,
    id,
    isDirty,
    isValid,
    label,
    progress,
    required,
    type,
}) => {

    return <div className={fieldStyles + (className || "")}>
        <FormControl
            error={isDirty && !isValid()}
            fullWidth
            required={required ? true : false}
            disabled={progress}
        >
            {
                type !== 'Check'
                && type !== 'Upload'
                && type !== 'Radio'
                && type !== 'View'
                && type !== 'DateOnly'
                && type !== 'DateTime'
                && type !== 'Time'
                && <InputLabel
                    htmlFor={id}
                    disableAnimation={progress}
                    disabled={progress}
                >
                    {app.t(label)}
                </InputLabel>
            }
            {children}
            <FormHelperText
                disabled={progress}
            >
                {app.t(helpText) || " "}
            </FormHelperText>
        </FormControl>
    </div>
}

export default Field
