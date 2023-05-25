import './AddEvent.css'
import { ADD_EVENT } from '../mutations/eventMutations.js'
import { GET_EVENTS } from '../queries/eventQueries.js';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom'



export function AddEvent() {
    const [title, setTitle] = useState('test title')
    const [summary, setSummary] = useState('test summary')
    const [content, setContent] = useState('test content')

    const [addEvent] = useMutation(ADD_EVENT, {
        variables: { title, summary, content },
        refetchQueries: [{ query: GET_EVENTS}]
    }) 
    return (
        <>
            <button onClick={addEvent}>Add test event</button>
        </>
    )
}