import './AddEvent.css'
import { ADD_EVENT } from '../mutations/eventMutations.js'
import { GET_EVENTS } from '../queries/eventQueries.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useEventStore } from '../../store/appStore'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'


export function AddEvent() {
    const eventId = useEventStore((state) => state.id)
    const [title, setTitle] = useState(`"Which event is it?"`)
    const [summary, setSummary] = useState(`"How would you describe it?"`)
    const [content, setContent] = useState(`"Paste the content from your text editor."`)
    const [submitted, setSubmitted] = useState(false)
    const imageSource = require('../../static/logo.png')

    const [addEvent] = useMutation(ADD_EVENT, {
        variables: { title, summary, content },
        refetchQueries: [{ query: GET_EVENTS }]
    }) 

    // TODO: Improve validation logic for each field
    const submitForm = (e) => {
        e.preventDefault()

        // validation
        if(!title || !summary || !content) {
            return alert('There is an empty field')
        }

        // Send mutation
        addEvent(title, summary, content)

        // set status of the form - submitted, if it is submitted - show the redirect button / message
        setSubmitted(true)

        // reset inputs
        setTitle('')
        setSummary('')
        setContent('')
    }


    if (!eventId) {
        return (
            <>
            <div id='add-event-form-wrapper'>
                <img id="add-form-picture" alt={eventId} src={imageSource}></img>
                {!submitted && (
                <form id="add-event-form" onSubmit={submitForm}>
                    <h3>CREATE NEW EVENT</h3>
                    {/* <label>Title</label> */}
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    {/* <label>Summary</label> */}
                    <textarea onChange={(e) => setSummary(e.target.value)} value={summary}/>
                    {/* <label>Content</label> */}
                    <textarea onChange={(e) => setContent(e.target.value)} value={content}/>
                    <button>CREATE</button>
                </form>)}
                {submitted && (
                <Link to="/">
                    <div className="submitted-form-space">
                        <h1>Your form has been submitted</h1>
                        <p>Event object added successfully.</p>
                        <p>Return to homepage. <FaHome /></p>
                    </div>
                </Link>)}
            </div>
        </>
        )
    }
 
 }