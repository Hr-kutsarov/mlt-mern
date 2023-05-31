import './DeleteDevlog.css'
import { useDevStore } from '../../../store/appStore'
import { useMutation } from '@apollo/client'
import { DELETE_DEVLOG } from '../../mutations/devlogMutations'
import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries'

export function DeleteDevlog() {
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleDetailsOff = useDevStore((state) => state.toggleDetailsOff)
    const id = useDevStore((state) => state.id)

    const [deleteDevlogEntry] = useMutation(DELETE_DEVLOG, {
        variables: {id},
        refetchQueries: [{ query: GET_ALL_DEVLOGS }]

    })
    const handlerDeleteDevlog = () => {
        // alert('You are about to delete this entry!')
        deleteDevlogEntry()
        toggleDeleteOff()
        toggleDetailsOff()
    }

    return (
        <>
            <div id="delete-devlog-wrapper">
                <h3>Delete entry?</h3>
                <button onClick={handlerDeleteDevlog}>Confirm</button>
            </div>
        </>
    )
}