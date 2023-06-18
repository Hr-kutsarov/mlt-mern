import { useEffect, useState } from "react"
import { useArtistStore } from "../../../store/appStore"
import { api } from "../../../utils/utils"
import './ArtistEdit.css'
import { FaReply } from 'react-icons/fa'
import { Link } from "react-router-dom"

export function ArtistEdit() {
    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [bio, setBio] = useState('')
    const [err, setErr] = useState('')

    const artistId = useArtistStore((state) => state.artistId)
    
    const submitForm = async (e) => {
        e.preventDefault()
        const context = {
            name: name,
            photo: photo,
            bio: bio,
        }

        try {
            api.put(`/artists/${artistId}`, context)
                .then((res) => {
                    if (res.status === 200) {
                        setSubmitted(true)
                    }
                })
        } catch (err) {
            setErr(err.message)
        }
    }


    useEffect(() => {
        api.get(`/artists/${artistId}`)
            .then((res) => {
                setName(res.data.name)
                setPhoto(res.data.photo)
                setBio(res.data.bio)
            })
            .catch((err) => {
                setErr(err.message)
            })
    }, [])
    return (
        <section id='artist-edit-wrapper'>
            <h1>{err}</h1>
        {!submitted ? (
            <form id="artist-edit-form" onSubmit={submitForm}>
                <h3>EDIT ARTIST FORM</h3>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Photo URL</label>
                <input type='text' value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                <label>Short biography</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        ) : (
            <h1>Edited successfully</h1>
        )}
        <Link to='/'><button id='artist-edit-return'><FaReply /></button></Link>
        </section>
    )
}