import './Devlog.css'
import { FaArrowAltCircleRight, FaClock } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore'
// import { useQuery } from '@apollo/client'
// import { GET_DEVLOG } from '../../queries/devlogQueries.js'
// import { api } from '../../../utils/utils.js'

export function Devlog({devlog}) {
    const toggleDetailsOn = useDevStore((state) => state.toggleDetailsOn)
    const setId = useDevStore((state) => state.setId)
    const setDate = useDevStore((state) => state.setDate)
    const setTitle = useDevStore((state) => state.setTitle)
    const setEntry = useDevStore((state) => state.setEntry)

    // const getDevlog = async () => {
    //     api.get(`/devlog/${devlog._id}`)
    //         .then((res) => {
    //             console.log
    //             setId(res.data._id)
    //             setTitle(res.data.title)
    //             setDate(res.data.date)
    //             setEntry(res.data.entry)
    //         })
    // }

    // saving one query while passing the data via props
    const togglerDetails = (e) => {
        e.preventDefault()
        setId(devlog._id)
        setTitle(devlog.title)
        setDate(devlog.date)
        setEntry(devlog.entry)
        toggleDetailsOn()
    }

    return (
        <article className='devlog'>
            <h3>{devlog.title}</h3>
            <span className='devlog-timestamp'><FaClock /> {devlog.date.slice(0,10)}</span>
            <p>{devlog.entry}</p>
            <nav>
                <button onClick={togglerDetails}><FaArrowAltCircleRight /></button>
            </nav>
        </article>
    )
}