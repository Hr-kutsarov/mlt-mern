import './Event.css';
import { useMutation } from '@apollo/client';
import { DELETE_EVENT } from '../../mutations/eventMutations.js'
import { GET_EVENTS } from '../../queries/eventQueries';

export function Event({ event }) {
    const [deleteEvent] = useMutation(DELETE_EVENT, {
        variables: { id: event._id},
        refetchQueries: [{ query: GET_EVENTS}]
    }) 

    return (
        <>
            <article className='play-hero'>
                <img id='p123' alt=''></img>
                <h3>{event.title}</h3>
                <p>{event.content}</p>
                <div className="hero-buttons" >
                    <button className="create-btn">Create</button>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={deleteEvent}>Delete</button>
                </div>
            </article>
        </>
    )
}