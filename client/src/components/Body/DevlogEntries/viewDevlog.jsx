import './ViewDevlog.css'
import { FaUserClock } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaRecycle } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore'

export function ViewDevlog() {

    // Navigation
    const toggleDeleteOn = useDevStore((state) => state.toggleDeleteOn)
    const toggleEditOn = useDevStore((state) => state.toggleEditOn)
    const toggleCreateOff = useDevStore((state) => state.toggleCreateOff)
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)
    const toggleDetailsOff = useDevStore((state) => state.toggleDetailsOff)

    // Data
    // const devlogId = useDevStore((state) => state.id)
    const created = useDevStore((state) => state.created)
    const title = useDevStore((state) => state.title)
    const content = useDevStore((state) => state.entry)

    const togglerEdit = (e) => {
        e.preventDefault()
        toggleEditOn()
        toggleCreateOff()
        toggleDeleteOff()
        toggleDetailsOff()
    }

    const togglerDelete = (e) => {
        e.preventDefault()
        toggleDeleteOn()
        toggleEditOff()
        toggleCreateOff()
    }
    
    // so the whole trick here is to render the same component of this class 
    return (
        <>
            <article className='devlog extended'>
                <h3>{title}</h3>
                <p><FaUserClock /> {created}</p>
                <p>{content}</p>
                <nav>
                    <button onClick={togglerEdit}><FaEdit /></button>
                    <button onClick={togglerDelete}><FaRecycle /></button>
                </nav>
            </article>
        </>
    )
}