import Collapse from '@mui/material/Collapse'
import { useContext } from 'react'
import { FormContext } from 'Contexts'
import Unify from '../Unify'
import Progress from '../Progress'
import Key from './Fields/Key'

const FormElement = ({
    handleSubmit,
    id,
    inputs,
    isInline,
}) => {

    const {
        contentProgress,
        externalProgress,
        progress,
    } = useContext(FormContext)

    return <form
        id={id || 'form'}
        noValidate
        onSubmit={handleSubmit}
    >
        {
            isInline
                ?
                <>
                    <div className="relative w-full h-full">
                        <div id='fields'>
                            <Unify component={inputs} />
                        </div>
                        {
                            (externalProgress || contentProgress || progress)
                            &&
                            <div className="absolute top-0 right-0 bottom-0 left-0 grid place-items-center opacity-30 bg-gray-800 ">
                                <Progress />
                            </div>
                        }
                    </div>
                </>
                :
                <>
                    <div id='fields' className={(externalProgress || contentProgress) && 'grid place-items-center'}>
                        <Collapse in={externalProgress || contentProgress}>
                            <div className="py-10">
                                <Progress />
                            </div>
                        </Collapse>
                        <Collapse in={!externalProgress && !contentProgress}>
                            <Unify
                                component={inputs}
                            />
                        </Collapse>
                    </div>
                </>
        }
    </form>
}

export default FormElement 
