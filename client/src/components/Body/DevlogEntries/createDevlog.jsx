import { useState } from 'react'
import './CreateDevlog.css'
import { FaArrowRight } from 'react-icons/fa'
import { api } from '../../../utils/utils'
// import { CREATE_DEVLOG } from '../../mutations/devlogMutations.js'
// import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries.js'
// import { useMutation } from '@apollo/client';

export function CreateDevlog() {
    const [title, setTitle] = useState('')
    const [entry, setEntry] = useState('')
    const [err, setErr] = useState('')

    const date = new Date()

    // const [addDevlog] = useMutation(CREATE_DEVLOG, {
    // variables: { title, created: date.toISOString().slice(0, 19), entry },
    // refetchQueries: [{ query: GET_ALL_DEVLOGS }]
    // }) 
    
    const addDevlog = async () => {
        setErr('')
        try {
            api.post('/devlog', {title: title, date: date, entry: entry})
        } catch (err) {
            setErr(err.message)
        }
    }
    
    const handlerCreateDevlog = (e) => {
        e.preventDefault()

        // clear erorrs
        setErr('')

        // validation
        if (!title || !entry) {
            setErr('Missing fields')
            return
        }

        // get data
        addDevlog()

        // clear form
        setTitle('')
        setEntry('')
    }

    return (
        <>
            <form id="create-devlog-form" onSubmit={handlerCreateDevlog}>
                {!err ? <h2>NEW ENTRY</h2> : <h2 style={{color: "var(--contrast-orange"}}>{err}</h2>}
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