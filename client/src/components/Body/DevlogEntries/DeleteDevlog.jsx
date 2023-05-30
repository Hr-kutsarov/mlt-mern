import './DeleteDevlog.css'
import { useDevStore } from '../../../store/appStore'

export function DeleteDevlog() {
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleDetailsOff = useDevStore((state) => state.toggleDetailsOff)
    
    const handlerDeleteDevlog = () => {
        alert('You are about to delete this entry!')
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