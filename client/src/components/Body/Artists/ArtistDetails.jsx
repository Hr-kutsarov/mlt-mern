import { useEffect, useState } from "react"
import { useArtistStore } from "../../../store/appStore"
import { api } from "../../../utils/utils"
import './ArtistDetails.css'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaMinusCircle, FaWrench, FaReply } from "react-icons/fa"

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
                            <li><Link to="/add-artist"><FaPlusCircle /></Link></li>
                            <li><Link to="/edit-artist"><FaWrench /></Link></li>
                            <li><Link to="/delete-artist"><FaMinusCircle /></Link></li>
                            </>
                        )}
                        <li><Link to="/"><FaReply /></Link></li>
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

