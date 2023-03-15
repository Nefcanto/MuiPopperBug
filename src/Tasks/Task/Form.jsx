import {
    DialogForm,
    Title,
    LongText,
} from 'Form'

const inputs = <>
    <Title />
    <LongText property='Description' />
</>

const TaskForm = () => {
    return <DialogForm
        entityType='Task'
        inputs={inputs}
    />
}

export default TaskForm
