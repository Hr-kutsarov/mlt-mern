import './Event.css';
import { useEventStore } from '../../../store/appStore';
import { Link } from 'react-router-dom'
import { FaWrench } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
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
        setId(event._id)
    }

    return (
        <>
            <article className='play-hero'>
                <div className="properties">
                    <img src={event.pictureUrl} alt={event._id}></img>
                    <h5 style={{margin: "0 1rem"}}>FROM {event.price.toFixed(2)} BGN</h5>
                    <h4>{event.title}</h4>
                    {/* <h4>{event.date.slice(0,10)} {event.date.slice(11, 16)}</h4> */}
                    <p>{event.summary}</p>

                </div>
                <div className="hero-buttons" >
                    <button className="info-btn"><Link to="devlog"><FaQuestion /></Link></button>
                    <button className="edit-btn" onClick={handleEdit}><Link to="edit-event"><FaWrench /></Link></button>
                    <button className="delete-btn" onClick={handleDelete}><Link to="/delete-event"><FaTimes /></Link></button>
                </div>
            </article>
        </>
    )
}