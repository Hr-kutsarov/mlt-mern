import './Event.css';
import { api } from '../../../utils/utils.js';
import { useEventStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'
import { FaFeatherAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaEraser } from 'react-icons/fa';
// import { useMutation } from '@apollo/client';
// import { DELETE_EVENT } from '../../mutations/eventMutations.js'
// import { GET_EVENTS } from '../../queries/eventQueries';

export function Event({ event }) {
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

    const deleteEvent = async () => {
        try {
            api.delete(`/plays/${event._id}`)
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleEdit = () => {
        setId(event._id)
        setTitle(event.title)
        setSummary(event.summary)
        setContent(event.content)
        setPictureUrl(event.pictureUrl)
        setPrice(event.price)
        setDate(event.date)
    }

    const handleDelete =() => {
        alert('This event will be deleted!')
        deleteEvent()
    }

    return (
        <>
            <article className='play-hero'>
                <div className="properties">
                    <img src={event.pictureUrl} alt={event._id}></img>
                    <h4>{event.title}</h4>
                    <p>{event.date} - {event.price}</p>
                    <p>{event.summary}</p>
                </div>
                <div className="hero-buttons" >
                    <button className="info-btn"><Link to="devlog"><FaEllipsisH /></Link></button>
                    <button className="edit-btn" onClick={handleEdit}><Link to="edit-event"><FaFeatherAlt /></Link></button>
                    <button className="delete-btn" onClick={handleDelete}><FaEraser /></button>
                </div>
            </article>
        </>
    )
}