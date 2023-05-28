import { useEventStore } from '../../store/appStore'
import { useMutation } from '@apollo/client'
import { EDIT_EVENT } from '../mutations/eventMutations'
import { GET_EVENTS } from '../queries/eventQueries'
import { Link } from 'react-router-dom'
import './EditEvent.css'

// When the button that has an attached function to edit the Event
// will save the parameters of that event in the global state
// then the contents of the edit form is loaded from the global state
// Retyping the contents of the form sets the state for the object
// Submitting the form gets the data from the input fields and maps them over the expected keys AND
//  sends a mutation with the new data. 
// Then the event form is cleared by unsetting the values of the global state.
// And if there's no stored for that item the form is not displayed.

export function EditEvent() {

    // getters
    const eventId = useEventStore((state) => state.id)
    const eventTitle = useEventStore((state) => state.title)
    const eventSummary = useEventStore((state) => state.summary)
    const eventContent = useEventStore((state) => state.content)

    // setters
    const setTitle = useEventStore((state) => state.setTitle)
    const setSummary = useEventStore((state) => state.setSummary)
    const setContent = useEventStore((state) => state.setContent)

    // unset
    const unsetId = useEventStore((state) => state.unsetId)
    const unsetTitle = useEventStore((state) => state.unsetTitle)
    const unsetSummary = useEventStore((state) => state.unsetSummary)
    const unsetContent = useEventStore((state) => state.unsetContent)

    // 
    const [editEvent] = useMutation(EDIT_EVENT, {
        variables: { id: eventId, title: eventTitle, summary: eventSummary, content: eventContent },
        refetchQueries: [{ query: GET_EVENTS}]
    }) 

    const _clearEventStorage = () => {
        unsetId()
        unsetTitle()
        unsetSummary()
        unsetContent()
    }

    // TODO! Redirect
    // TODO! Form validation
    const handleSubmit = (e) => {
        e.preventDefault()
        editEvent()
        _clearEventStorage()
    }

    const handleReturn = (e) => {
        e.preventDefault()
        _clearEventStorage()
    }

    return (
        <>
            <div id="edit-event-wrapper">
                <form id="edit-event-form" onSubmit={handleSubmit}>
                    <h3>Edit event</h3>
                    {eventId && (<>
                        <label>Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={eventTitle}/>
                        <label>Summary</label>
                        <input type="text" onChange={(e) => setSummary(e.target.value)} value={eventSummary}/>
                        <label>Content</label>
                        <input type="text" onChange={(e) => setContent(e.target.value)} value={eventContent}/>
                        <button type="submit">Edit</button>
                    </>)}
                </form>
                <span 
                onClick={handleReturn}>
                    <Link to="/">Home</Link>
                </span>
            </div>
        </>
    )
}


