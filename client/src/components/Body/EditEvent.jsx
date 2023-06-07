import { useEventStore } from '../../store/appStore'
// import { useMutation } from '@apollo/client'
// import { EDIT_EVENT } from '../mutations/eventMutations'
// import { GET_EVENTS } from '../queries/eventQueries'
import { Link } from 'react-router-dom'
import './EditEvent.css'
import { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { api } from '../../utils/utils.js'

// When the button that has an attached function to edit the Event
// will save the parameters of that event in the global state
// then the contents of the edit form is loaded from the global state
// Retyping the contents of the form sets the state for the object
// Submitting the form gets the data from the input fields and maps them over the expected keys AND
//  sends a mutation with the new data. 
// Then the event form is cleared by unsetting the values of the global state.
// And if there's no stored for that item the form is not displayed.

export function EditEvent() {
    const [submitted, setSubmitted] = useState(false)
    const [err, setErr] = useState('')

    // getters
    const eventId = useEventStore((state) => state.id)
    const eventTitle = useEventStore((state) => state.title)
    const eventSummary = useEventStore((state) => state.summary)
    const eventContent = useEventStore((state) => state.content)
    const eventPicture = useEventStore((state) => state.pictureUrl)
    const eventPrice = useEventStore((state) => state.price)
    const eventDate = useEventStore((state) => state.date)

    // setters
    const setTitle = useEventStore((state) => state.setTitle)
    const setSummary = useEventStore((state) => state.setSummary)
    const setContent = useEventStore((state) => state.setContent)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)
    const setPrice = useEventStore((state) => state.setPrice)
    const setDate = useEventStore((state) => state.setDate)

    // unset
    const unsetId = useEventStore((state) => state.unsetId)
    const unsetTitle = useEventStore((state) => state.unsetTitle)
    const unsetSummary = useEventStore((state) => state.unsetSummary)
    const unsetContent = useEventStore((state) => state.unsetContent)
    const unsetPictureUrl = useEventStore((state) => state.unsetPictureUrl)
    const unsetPrice = useEventStore((state) => state.unsetPrice)
    const unsetDate = useEventStore((state) => state.unsetDate)

    // 
    // const [editEvent] = useMutation(EDIT_EVENT, {
    //     variables: { id: eventId, title: eventTitle, summary: eventSummary, content: eventContent, pictureUrl: eventPicture },
    //     refetchQueries: [{ query: GET_EVENTS}]
    // }) 

    const editEvent = async () => {
        const context = {
            title: eventTitle,
            pictureUrl: eventPicture,
            summary: eventSummary,
            content: eventContent,
            price: eventPrice,
            date: eventDate
        }

        try {
            api.put(`/plays/${eventId}`, context)
        } catch(err) {
            setErr(err.message)
        }
    }

    const _clearEventStorage = () => {
        unsetId()
        unsetTitle()
        unsetSummary()
        unsetContent()
        unsetPictureUrl()
        unsetPrice()
        unsetDate()
    }

    // TODO! Redirect
    // TODO! Form validation
    const handleSubmit = (e) => {
        e.preventDefault()
        editEvent()
        setSubmitted(true)
        _clearEventStorage()
    }

    return (
        <>
            <div id="edit-event-wrapper">
                {!eventId && !submitted && (<Link to="/">Return to homepage.</Link>)}
                {eventId && !submitted && (<>
                    <h3>Edit event</h3>
                    <form id="edit-event-form" onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={eventTitle}/>
                        <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={eventPicture}/>
                        <input type="text" onChange={(e) => setPrice(e.target.value)} value={eventPrice}/>
                        <input type="text" onChange={(e) => setDate(e.target.value)} value={eventDate}/>
                        <textarea type="text" onChange={(e) => setSummary(e.target.value)} value={eventSummary}/>
                        <textarea type="text" onChange={(e) => setContent(e.target.value)} value={eventContent}/>
                    <button type="submit">Edit</button>
                    </form>
                </>)}
                
                    {submitted && (<>
                    <Link to="/">
                        <div className="submitted-form-space">
                            <h1>Your form has been submitted</h1>
                            {err ? <p>{err}</p> : <p>Event object edition completed successfully.</p>}
                            <p>Return to homepage. <FaHome /></p>
                        </div>
                    </Link>
                    </>)}
            </div>
        </>
    )
}


