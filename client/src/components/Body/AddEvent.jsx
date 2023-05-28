import './AddEvent.css'
import { ADD_EVENT } from '../mutations/eventMutations.js'
import { GET_EVENTS } from '../queries/eventQueries.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useEventStore } from '../../store/appStore'


export function AddEvent() {
    const eventId = useEventStore((state) => state.id)
    const [title, setTitle] = useState('Which play is it?')
    const [summary, setSummary] = useState('How would you describe it?')
    const [content, setContent] = useState('Paste from your text editor.')

    const imageSource = require('../../static/logo.png')
    const [addEvent] = useMutation(ADD_EVENT, {
        variables: { title, summary, content },
        refetchQueries: [{ query: GET_EVENTS }]
    }) 

    // TODO: Improve validation logic for each field
    const submitForm = (e) => {
        e.preventDefault()
        if(!title || !summary || !content) {
            return alert('There is an empty field')
        }

        addEvent(title, summary, content)
        setTitle('')
        setSummary('')
        setContent('')
    }


    if (!eventId) {
        return (
        <div id='add-event-form-wrapper'>
            <img id="add-form-picture" src={imageSource}></img>
            <form id="add-event-form" onSubmit={submitForm}>
                <h3>CREATE NEW EVENT</h3>
                {/* <label>Title</label> */}
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                {/* <label>Summary</label> */}
                <input type="text" onChange={(e) => setSummary(e.target.value)} value={summary}/>
                {/* <label>Content</label> */}
                <textarea onChange={(e) => setContent(e.target.value)} value={content}/>
                <button>CREATE</button>
            </form>
        </div>
        )
    }
 
 }