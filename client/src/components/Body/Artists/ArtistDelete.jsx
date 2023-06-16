import "./ArtistDelete.css"
import { useArtistStore } from '../../../store/appStore'
import { Link } from "react-router-dom"
import { api } from "../../../utils/utils"
import { useState } from "react"

export function ArtistDelete() {
    const artistId = useArtistStore((state) => state.artistId)
    const setId = useArtistStore((state) => state.setId)

    const [completed, setCompleted] = useState(false)
    const [err, setErr] = useState('')

    const deleteArtist = async () => {
        try {
            api.delete(`/artists/${artistId}`)
                .then(() => {
                    setCompleted(true)
                })
        } catch (err) {
            setErr(err.message)
        }
    }

    const cancelDeleteAction = () => {
        setId('')
    }
    return (
        <> 
            <section id="delete-artist-wrapper">
                <span>
                    {err && (<h1>{err}</h1>)}
                    {!completed && (<h1>Delete Artist</h1>)}
                    {completed && (<h1>Deletion successful.</h1>)}
                </span>
                <span>
                    {!completed && (<button onClick={deleteArtist}>Confirm delete</button>)}
                    <button onClick={cancelDeleteAction}><Link to="/">Back to home page</Link></button>
                </span>
            </section>
        </>
    )
}