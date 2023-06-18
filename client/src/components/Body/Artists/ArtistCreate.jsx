import { useState } from "react"
import { api } from "../../../utils/utils"
import './ArtistCreate.css'
import { Link } from "react-router-dom"
import { FaReply } from 'react-icons/fa'

export function ArtistCreate() {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [bio, setBio] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [err, setErr] = useState('')

    const handlerCreateArtist = async (e) => {
        e.preventDefault()

        if (!name || !photo || !bio) {
            alert('Empty fields')
            return
        }
        
        const context = {
            name: name,
            photo: photo,
            bio: bio
        }
        api.post('/artists', context)
            .then(res => {
                console.log(res.data)
                if (res.status !== 201) {
                    setErr(res.data)
                    
                }
                if (res.status === 201) {
                    setSubmitted(true)
                }
            })
            .catch(err => {
                setErr(err.message)
            })
    }

    return (
        <section id="artist-create-wrapper">
            <h5>{err}</h5>
        {!submitted && (
            <form id="artist-create-form" onSubmit={handlerCreateArtist}>
            <h3>CREATE ARTIST</h3>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
            <label>Photo</label>
            <input type="text" onChange={(e) => setPhoto(e.target.value)} value={photo}></input>
            <label>Biography</label>
            <textarea onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            <button>Add Artist</button>
        </form>
        )}
        {submitted && (
            <>
                <h1>Created Successfully</h1>
                <h2><Link to="/">Navigate to homepage.</Link></h2>
            </>
        )}
        <Link to='/'><button id='artist-create-return'><FaReply /></button></Link>
        </section>
    )
}