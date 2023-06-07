import './AddEvent.css'
// import { ADD_EVENT } from '../mutations/eventMutations.js'
// import { GET_EVENTS } from '../queries/eventQueries.js';
// import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useEventStore } from '../../store/appStore'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { api } from '../../utils/utils'


export function AddEvent() {
    const eventId = useEventStore((state) => state.id)
    const pictureUrl = useEventStore((state) => state.pictureUrl)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)

    const [title, setTitle] = useState(`"Which event is it?"`)
    // const [pictureUrl, setPictureUrl] = useState(`"Paste the URL of the picture here"`)
    const [summary, setSummary] = useState(`"How would you describe it?"`)
    const [content, setContent] = useState(`"Paste the content from your text editor."`)
    const [price, setPrice] = useState('Set price')
    const [submitted, setSubmitted] = useState(false)
    const [err, setErr] = useState('')
    const imageSource = require('../../static/logo.png')
    const [date, setDate] = useState('')
    // const date = new Date()

    // const [addEvent] = useMutation(ADD_EVENT, {
    //     variables: { title, summary, content, pictureUrl },
    //     refetchQueries: [{ query: GET_EVENTS }]
    // }) 

    const addEvent = async () => {
        const context = {
            title: title, 
            pictureUrl: pictureUrl, 
            summary: summary,
            content: content,
            price: price,
            date: date
        }

        try {
            api.post('/plays', context)
        } catch (err) {
            setErr(err.message)
        }
    }

    // TODO: Improve validation logic for each field
    const submitForm = (e) => {
        e.preventDefault()

        // validation
        if(!title || !summary || !content || !pictureUrl) {
            return alert('There is an empty field')
        }

        // Send mutation
        addEvent()

        // set status of the form - submitted, if it is submitted - show the redirect button / message
        setSubmitted(true)

        // reset inputs
        setTitle('')
        setSummary('')
        setContent('')
        setPrice('')
    }
    
    return (
        <>
            <div id='add-event-form-wrapper'>
                <img id="add-form-picture" alt={eventId} src={imageSource}></img>
                {err && (<h3>{err}</h3>)}
                {!submitted && (
                <form id="add-event-form" onSubmit={submitForm}>
                    <h3>CREATE NEW EVENT</h3>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={pictureUrl} />
                    <input type="text" onChange={(e) => {setPrice(e.target.value)}} value={price} />
                    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} />
                    <textarea onChange={(e) => setSummary(e.target.value)} value={summary} />
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} />
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