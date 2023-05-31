import { useState } from 'react'
import './createDevlog.css'
import {FaArrowRight} from 'react-icons/fa'
import { CREATE_DEVLOG } from '../../mutations/devlogMutations.js'
import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries.js'
import { useMutation, useQuery } from '@apollo/client';


export function CreateDevlog() {
    const [title, setTitle]= useState('')
    const [entry, setEntry]= useState('')

    const created = new Date().toLocaleString().slice(0, 15)

    const [addDevlog] = useMutation(CREATE_DEVLOG, {
    variables: { title, created, entry },
    refetchQueries: [{ query: GET_ALL_DEVLOGS }]
    }) 

    const handlerCreateDevlog = (e) => {
        e.preventDefault()
        addDevlog()
        setTitle('')
        setEntry('')

    }

    return (
        <>
            <form id="create-devlog-form" onSubmit={handlerCreateDevlog}>
                <h2>NEW ENTRY</h2>
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