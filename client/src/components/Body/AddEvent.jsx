import './AddEvent.css'
import { ADD_EVENT } from '../mutations/eventMutations.js'
import { GET_EVENTS } from '../queries/eventQueries.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';



export function AddEvent(object) {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')

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
    return (
        <div id='add-event-form-wrapper'>
            <span id="add-form-picture"></span>
            <form id="add-event-form" onSubmit={submitForm}>
                <h3>Create new event</h3>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <label>Summary</label>
                <input type="text" onChange={(e) => setSummary(e.target.value)} value={summary}/>
                <label>Content</label>
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content}/>
                <button>Create</button>
            </form>
        </div>
 );
 
 }