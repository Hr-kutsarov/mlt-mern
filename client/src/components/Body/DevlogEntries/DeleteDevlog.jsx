import './DeleteDevlog.css'
import { useDevStore } from '../../../store/appStore'
import { useMutation } from '@apollo/client'
import { DELETE_DEVLOG } from '../../mutations/devlogMutations'
import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries'

export function DeleteDevlog() {
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleDetailsOff = useDevStore((state) => state.toggleDetailsOff)
    const id = useDevStore((state) => state.id)

    // deletes an item by id
    // apollo client has its own state management store, and because we render what its stored there, upon refetching the data our collection will be updated 
    const [deleteDevlogEntry] = useMutation(DELETE_DEVLOG, {
        variables: {id},
        refetchQueries: [{ query: GET_ALL_DEVLOGS }]

    })
    const handlerDeleteDevlog = () => {
        // a simple stupid way of dealing with the fact that after deleting that devlog,
        // the details window still contains the data and provides with options although the item is already deleted
        // the next time the details button is triggered the data will be different because it gets its values from the global state store

        deleteDevlogEntry()
        toggleDeleteOff()
        toggleDetailsOff()
    }

    const handlerCancelDevlog = () => {
        toggleDeleteOff()
    }

    return (
        <>
            <div id="delete-devlog-wrapper">
                <h3>Delete entry?</h3>
                <div id="delete-devlog-btn-box">
                    <button onClick={handlerDeleteDevlog}>Confirm</button>
                    <button onClick={handlerCancelDevlog}>Cancel</button>
                </div>
            </div>
        </>
    )
}