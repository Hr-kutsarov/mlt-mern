import './viewDevlog.css'
import { FaUserClock } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaRecycle } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore'

export function ViewDevlog() {
    const date = new Date().toLocaleDateString()
    const toggleDeleteOn = useDevStore((state) => state.toggleDeleteOn)
    const toggleEditOn = useDevStore((state) => state.toggleEditOn)
    const toggleCreateOff = useDevStore((state) => state.toggleCreateOff)
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)

    const togglerEdit = (e) => {
        e.preventDefault()
        toggleEditOn()
        toggleCreateOff()
        toggleDeleteOff()
    }

    const togglerDelete = (e) => {
        e.preventDefault()
        toggleDeleteOn()
        toggleEditOff()
        toggleCreateOff()
    }
    
    return (
            <>
                <article className='devlog extended'>
                    <h3>Devlog title</h3>
                    <p id='devlog-timestamp'><FaUserClock /> Added on {date}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores. Harum magnam dolore, doloribus animi at fugiat eos soluta natus illum laudantium corporis maiores. Modi quidem beatae aspernatur excepturi error?</p>
                    <nav>
                        <button onClick={togglerEdit}><FaEdit /></button>
                        <button onClick={togglerDelete}><FaRecycle /></button>
                    </nav>
                </article>
            </>
    )
}