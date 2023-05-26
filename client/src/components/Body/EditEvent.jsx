import { useState } from 'react'
import './EditEvent.css'

export function EditEvent() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sumbitting!')
        setErr('You cannot get data from the server just yet.')
        setTitle('')
        setSummary('')
        setContent('')
    }

    return (
        <>
            <div className="edit-event-wrapper">
            <form id="add-event-form" onSubmit={handleSubmit}>
                {err}
                <h3>Edit event</h3>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <label>Summary</label>
                <input type="text" onChange={(e) => setSummary(e.target.value)} value={summary}/>
                <label>Content</label>
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content}/>
                <button type="submit">Editing</button>
            </form>
            </div>
        </>
    )
}


