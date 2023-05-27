import './Event.css';
import { useMutation } from '@apollo/client';
import { DELETE_EVENT } from '../../mutations/eventMutations.js'
import { GET_EVENTS } from '../../queries/eventQueries';
import { useEventStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'
import { FaFeatherAlt } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaEraser } from 'react-icons/fa';




export function Event({ event }) {
    const setId = useEventStore((state) => state.setId)
    const setTitle = useEventStore((state) => state.setTitle)
    const setSummary = useEventStore((state) => state.setSummary)
    const setContent = useEventStore((state) => state.setContent)

    const [deleteEvent] = useMutation(DELETE_EVENT, {
        variables: { id: event._id},
        refetchQueries: [{ query: GET_EVENTS}]
    }) 

    const handleEdit = () => {
        setId(event._id)
        setTitle(event.title)
        setSummary(event.summary)
        setContent(event.content)
    }

    return (
        <>
            <article className='play-hero'>
                <div className="properties">
                    <img id={event._id} alt=''></img>
                    <h4>{event.title}</h4>
                    <p>{event.summary}</p>
                </div>
                <div className="hero-buttons" >
                    <button className="info-btn"><FaEllipsisH /></button>
                    <button className="edit-btn" onClick={handleEdit}><Link to="edit-event"><FaFeatherAlt /></Link></button>
                    <button className="delete-btn" onClick={deleteEvent}><FaEraser /></button>
                </div>
            </article>
        </>
    )
}