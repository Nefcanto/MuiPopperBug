import {
    List,
    Text,
    ValueWithTitle,
} from 'List'
import TaskForm from './Form'

const filters = <>
    <Text
        property="Title"
    />
    <Text
        property="Description"
    />
</>

const headers = <>
    <th>Title</th>
    <th>Description</th>
</>

const row = entity => <>
    <td>
        <ValueWithTitle
            value={entity.title}
            title={entity.description}
        />
    </td>
</>


const Tasks = () => {
    return <List
        title='Tasks'
        entityType='Task'
        filters={filters}
        headers={headers}
        row={row}
        create={TaskForm}
        hasDelete
        hasEdit
    />
}

export default Tasks
