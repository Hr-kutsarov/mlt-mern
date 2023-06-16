import { useState } from "react"
import { api } from "../../../utils/utils"

export function ArtistCreate() {
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [bio, setBio] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [err, setErr] = useState('')

    const handlerCreateArtist = async () => {
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
                if (res.status === 200) {
                    setSubmitted(true)
                }
            })
            .catch(err => {
                setErr(err.message)
            })
    }

    return (
        <>
            <h5>{err}</h5>
        {!submitted ?  (
            <form id="artist-create-form" onSubmit={handlerCreateArtist}>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
            <label>Photo</label>
            <input type="text" onChange={(e) => setPhoto(e.target.value)} value={photo}></input>
            <label>Biography</label>
            <input type="text" onChange={(e) => setBio(e.target.value)} value={bio}></input>
            <button>Add Artist</button>
        </form>
        ) : (
            <h1>Artist created</h1>
        )}
        </>
    )
}