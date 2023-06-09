import './Event.css';
import { useEventStore } from '../../../store/appStore';
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaWrench, FaHandPointer } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import { weekReprExtended } from '../../../utils/dateRepr';
// import { useMutation } from '@apollo/client';
// import { DELETE_EVENT } from '../../mutations/eventMutations.js'
// import { GET_EVENTS } from '../../queries/eventQueries';

export function Event({ event }) {
    // permissions 
    const permission = window.sessionStorage.getItem('role')

    const setId = useEventStore((state) => state.setId)
    const setTitle = useEventStore((state) => state.setTitle)
    const setSummary = useEventStore((state) => state.setSummary)
    const setContent = useEventStore((state) => state.setContent)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)
    const setPrice = useEventStore((state) => state.setPrice)
    const setDate = useEventStore((state) => state.setDate)

    // const [deleteEvent] = useMutation(DELETE_EVENT, {
    //     variables: { id: event._id},
    //     refetchQueries: [{ query: GET_EVENTS}]
    // }) 

    const formatDate = () => {
        const obj = new Date(event.date)
        const weekday = weekReprExtended[obj.getDay()]
        const day = obj.getDate()
        return `${weekday} ${day}`
    }
    const formattedDate = formatDate()

    const handleDetails = () => {
        setProps()
    }

    const handleEdit = () => {
        setProps()
    }

    const handleDelete = () => {
        setId(event._id)
    }

    const setProps = () => {
        setId(event._id)
        setTitle(event.title)
        setSummary(event.summary)
        setContent(event.content)
        setPictureUrl(event.pictureUrl)
        setPrice(event.price)
        setDate(event.date)
        window.sessionStorage.setItem('eventId', event._id)
    }

    return (
        <>
            <article className='play-hero'>
                <div className="properties">
                    <img src={event.pictureUrl} alt={event._id} loading="lazy"></img>
                    <h3>{event.title}</h3>
                    <h4>{formattedDate}</h4>
                    <h5>${event.price.toFixed(2)}</h5>
                    <p>{event.summary}</p>
                </div>
                <div className="hero-buttons">
                    <Link to="/details-view"><button className="info-btn" onClick={handleDetails}><FaInfoCircle /></button></Link>
                    {permission === 'moderator' ? (<><Link to="edit-event"><button className="edit-btn" onClick={handleEdit}><FaWrench /></button></Link>
                        <Link to="/delete-event"><button className="delete-btn" onClick={handleDelete}><FaTimes /></button></Link>
                    </>) : (<>
                        </>)}    
                </div>
            </article>
        </>
    )
}