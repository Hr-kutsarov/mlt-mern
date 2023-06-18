import { useEventStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'
import './EditEvent.css'
import { useState, useEffect } from 'react'
import { FaHome, FaReply } from 'react-icons/fa'
import { api } from '../../../utils/utils.js'

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
                {eventId && (<>
                    
                    <form id="edit-event-form" onSubmit={handleSubmit}>
                        <h3>Edit event</h3>
                        <label>Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={eventTitle}/>
                        <label>Picture URL</label>
                        <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={eventPicture}/>
                        <label>Price</label>
                        <input type="text" onChange={(e) => 
                            {
                                if (isNaN(e.target.value)) {
                                    alert('Input value is not a number')
                                    return
                                }
                                setPrice(e.target.value)
                            }} value={eventPrice}/>
                        <label>Date</label>
                        <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={eventDate}/>
                        <label>Summary</label>
                        <textarea type="text" onChange={(e) => setSummary(e.target.value)} value={eventSummary}/>
                        <label>Content</label>
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

                    <Link to='/'><button id='artist-create-return'><FaReply /></button></Link>
            </div>
        </>
    )
}


