import './AddEvent.css'
// import { ADD_EVENT } from '../mutations/eventMutations.js'
// import { GET_EVENTS } from '../queries/eventQueries.js';
// import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useEventStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { api } from '../../../utils/utils'
// icons
import { FaCalendar } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';

export function AddEvent() {
    const eventId = useEventStore((state) => state.id)
    const pictureUrl = useEventStore((state) => state.pictureUrl)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)

    const [title, setTitle] = useState(`"Which event is it?"`)
    // const [pictureUrl, setPictureUrl] = useState(`"Paste the URL of the picture here"`)
    const [summary, setSummary] = useState(`"How would you describe it?"`)
    const [content, setContent] = useState(`"Paste the content from your text editor."`)
    const [price, setPrice] = useState('123')
    const [submitted, setSubmitted] = useState(false)
    const [date, setDate] = useState('')
    const [err, setErr] = useState('')
    const imageSource = require('../../../static/logo.png')

    // const date = new Date()

    // const [addEvent] = useMutation(ADD_EVENT, {
    //     variables: { title, summary, content, pictureUrl },
    //     refetchQueries: [{ query: GET_EVENTS }]
    // }) 

    const clearInputData = () => {
        setTitle('')
        setSummary('')
        setContent('')
        setPrice('')
    }

    const addEvent = async () => {
        try {
            const context = {
                title: title, 
                pictureUrl: pictureUrl, 
                summary: summary,
                content: content,
                price: price,
                date: date
            }
            const response = await api.post('/plays', context)
            if (response.status === 201) {
                setSubmitted(true)
                clearInputData()
            }

        } catch (err) {
            setErr(err.message)
        }
    }
    // TODO: Improve validation logic for each field
    const submitForm = (e) => {
        e.preventDefault()

        // validation
        if(!title || !summary || !content || !pictureUrl || !price || !date) {
            return alert('There is an empty field')
        }
        addEvent()
    }

    
    return (
        <>
            <div id='add-event-form-wrapper'>
                {!submitted ? (
                <form id="add-event-form" onSubmit={submitForm}>
                    <h3>CREATE NEW EVENT</h3>
                    {err && (<h4>{err}</h4>)}
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <label>Event Image URL</label>
                    <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={pictureUrl} />
                    <label>Price</label>
                    <input type="text" onChange={(e) => {
                        if (isNaN(e.target.value)) {
                            alert('Input value is not a number')
                            return
                        }
                        setPrice(e.target.value)}} value={price} />
                    <label>Date</label>
                    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} />
                    <label>Summary</label>
                    <textarea onChange={(e) => setSummary(e.target.value)} value={summary} />
                    <label>Content</label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} />
                    <button>CREATE</button>
                </form>
                ) : (
                    <>
                <Link to="/">
                    <div id="submitted-event-wrapper">
                        <h1>Your form has been submitted</h1>
                        <p>Event object added successfully.</p>
                        <p>Return to homepage. <FaHome /></p>
                    </div>
                </Link>
                </>)}

                <nav id="add-event-form-navigation-box">
                    <ul>
                        <li><Link to="/"><FaHome /></Link></li>
                        <li><Link to="/calendar-view"><FaCalendar /></Link></li>
                        <li><Link to="/devlog"><FaEdit /></Link></li>
                        <li><Link to="/logout"><FaUserTimes /></Link></li>
                    </ul>
                </nav>
            </div>
            </>
    )
}