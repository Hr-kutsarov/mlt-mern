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
    const date = useDevStore((state) => state.date)
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
    
    return (
        <article className='devlog extended'>
            <h3>{title}</h3>
            <p><FaUserClock /> {date.slice(0, 10)}</p>
            <p>{content}</p>
            <nav>
                <button onClick={togglerEdit}><FaEdit /></button>
                <button onClick={togglerDelete}><FaRecycle /></button>
            </nav>
        </article>
    )
}