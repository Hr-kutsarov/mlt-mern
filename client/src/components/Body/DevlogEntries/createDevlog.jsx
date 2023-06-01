import { useState } from 'react'
import './CreateDevlog.css'
import { FaArrowRight } from 'react-icons/fa'
import { CREATE_DEVLOG } from '../../mutations/devlogMutations.js'
import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries.js'
import { useMutation } from '@apollo/client';

export function CreateDevlog() {
    const [title, setTitle]= useState('')
    const [entry, setEntry]= useState('')
    const [err, setErr] = useState('')

    const date = new Date()

    const [addDevlog] = useMutation(CREATE_DEVLOG, {
    variables: { title, created: date.toISOString().slice(0, 19), entry },
    refetchQueries: [{ query: GET_ALL_DEVLOGS }]
    }) 

    // the thing with date.toISOString() - get the first 20 chars is that it can be passed to FullCalendar in this format
    // and then Full calendar (if including the last symbols that indicate the time can also display when the event is about to happen)

    const handlerCreateDevlog = (e) => {
        e.preventDefault()

        if (!title || !entry || title.length < 3 || entry.length < 5) {
            setErr('New error')
            return
        }

        if (!err) {
            addDevlog()
            
        }

        setTitle('')
        setEntry('')
        setErr('')
    }

    return (
        <>
            <form id="create-devlog-form" onSubmit={handlerCreateDevlog}>
                {!err ? <h2>NEW ENTRY</h2> : <h2>{err}</h2>}
                <label>TITLE</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>CONTENT</label>
                <textarea onChange={(e) => setEntry(e.target.value)} value={entry}></textarea>
                <div className='btn-box'>
                    <button><FaArrowRight /></button>
                </div>
            </form>
        </>
    )
}