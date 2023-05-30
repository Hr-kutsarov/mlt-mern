import { useEventStore } from '../../store/appStore'
import { useMutation } from '@apollo/client'
import { EDIT_EVENT } from '../mutations/eventMutations'
import { GET_EVENTS } from '../queries/eventQueries'
import { Link } from 'react-router-dom'
import './EditEvent.css'
import { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'

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

    // getters
    const eventId = useEventStore((state) => state.id)
    const eventTitle = useEventStore((state) => state.title)
    const eventSummary = useEventStore((state) => state.summary)
    const eventContent = useEventStore((state) => state.content)
    const eventPicture = useEventStore((state) => state.pictureUrl)

    // setters
    const setTitle = useEventStore((state) => state.setTitle)
    const setSummary = useEventStore((state) => state.setSummary)
    const setContent = useEventStore((state) => state.setContent)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)

    // unset
    const unsetId = useEventStore((state) => state.unsetId)
    const unsetTitle = useEventStore((state) => state.unsetTitle)
    const unsetSummary = useEventStore((state) => state.unsetSummary)
    const unsetContent = useEventStore((state) => state.unsetContent)
    const unsetPictureUrl = useEventStore((state) => state.unsetPictureUrl)

    // 
    const [editEvent] = useMutation(EDIT_EVENT, {
        variables: { id: eventId, title: eventTitle, summary: eventSummary, content: eventContent, pictureUrl: eventPicture },
        refetchQueries: [{ query: GET_EVENTS}]
    }) 

    const _clearEventStorage = () => {
        unsetId()
        unsetTitle()
        unsetSummary()
        unsetContent()
        unsetPictureUrl()
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
                    {eventId && !submitted && (<>
                        <h3>Edit event</h3>
                        <form id="edit-event-form" onSubmit={handleSubmit}>
                            <input type="text" onChange={(e) => setTitle(e.target.value)} value={eventTitle}/>
                            <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={eventPicture}/>
                            <textarea type="text" onChange={(e) => setSummary(e.target.value)} value={eventSummary}/>
                            <textarea type="text" onChange={(e) => setContent(e.target.value)} value={eventContent}/>
                        <button type="submit">Edit</button>
                        </form>
                    </>)}
                
                    {submitted && (<>
                    <Link to="/">
                        <div className="submitted-form-space">
                            <h1>Your form has been submitted</h1>
                            <p>Event object edition completed successfully.</p>
                            <p>Return to homepage. <FaHome /></p>
                        </div>
                    </Link>
                    </>)}
            </div>
        </>
    )
}


