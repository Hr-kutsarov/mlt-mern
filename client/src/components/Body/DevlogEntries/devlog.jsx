import './devlog.css'
import { FaArrowAltCircleRight, FaClock } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore'
import { useQuery } from '@apollo/client'
import { GET_DEVLOG } from '../../queries/devlogQueries.js'

export function Devlog({devlog}) {
    const toggleDetailsOn = useDevStore((state) => state.toggleDetailsOn)
    const setId = useDevStore((state) => state.setId)
    const setCreated = useDevStore((state) => state.setCreated)
    const setTitle = useDevStore((state) => state.setTitle)
    const setEntry = useDevStore((state) => state.setEntry)


    const { loading, error, data } = useQuery(GET_DEVLOG, {
        variables: { id: devlog._id},
    })    

    const togglerDetails = (e) => {
        e.preventDefault()
        toggleDetailsOn()
        if (!loading && !error && data) {
            setId(data.getDevlog._id)
            setCreated(data.getDevlog.created)
            setTitle(data.getDevlog.title)
            setEntry(data.getDevlog.entry)
        }
        toggleDetailsOn()
    }

    return (
        <>
            <article className='devlog'>
                <h3>{devlog.title}</h3>
                <span id='devlog-timestamp'><FaClock /> {devlog.created}</span>
                <p>{devlog.entry}</p>
                <nav>
                    <button onClick={togglerDetails}><FaArrowAltCircleRight /></button>
                </nav>
            </article>
        </>
    )
}