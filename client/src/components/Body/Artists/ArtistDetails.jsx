import { useEffect, useState } from "react"
import { useArtistStore } from "../../../store/appStore"
import { api } from "../../../utils/utils"
import './ArtistDetails.css'
import { Link } from 'react-router-dom'

export function ArtistDetails() {
    const permission = window.sessionStorage.getItem('role')

    const artistId = useArtistStore((state) => state.artistId)
    const setId = useArtistStore((state) => state.artistId)

    // const artistId = window.sessionStorage.getItem('artistId')
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    
    useEffect(() => {
        api.get(`/artists/${artistId}`)
            .then((res) => {
                setData(res.data)
                setId(res.data._id)


            })
            .catch((err) => {
                setErr(err.message)
            })
    }, [])
    return (
        <>
        <span id="artist-details-wrapper">
            <section id="artist-details-section">
                {data && (
                    <>
                <nav>
                    <ul>
                        {permission === 'moderator' && (
                            <>
                            <li><Link to="/add-artist">New</Link></li>
                            <li><Link to="/edit-artist">Edit</Link></li>
                            <li><Link to="/delete-artist">Delete</Link></li>
                            </>
                        )}
                        <li><Link to="/">Return</Link></li>
                    </ul>
                </nav>
                    <span></span>
                    <img src={data.photo}></img>
                    <h3>{data.name}</h3>
                    <p>{data.bio}</p>
                    </>
                )}
            </section>
        </span>
        </>
    )
}

