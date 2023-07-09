import { useEffect, useState } from "react"
import { useArtistStore } from "../../../store/appStore"
import { api } from "../../../utils/utils"
import './ArtistDetails.css'
import { Link } from 'react-router-dom'
import { FaPlusCircle, FaMinusCircle, FaWrench, FaReply } from "react-icons/fa"
import { RelatedPlay } from "./RelatedPlay"

export function ArtistDetails() {
    const permission = window.sessionStorage.getItem('role')

    const setId = useArtistStore((state) => state.setId)
    const artistId = useArtistStore((state) => state.artistId)
    const artistName = useArtistStore((state) => state.name)

    // const artistId = window.sessionStorage.getItem('artistId')
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [relatedPlays, setRelatedPlays] = useState([])
    const [err, setErr] = useState('')
    

    // Filters only the plays with unique titles

    const unique = relatedPlays.filter((value, index, self) =>
        index === self.findIndex((item) => (item.title === value.title)))

    const fetchArtistById = async () => {
        api.get(`/artists/${artistId}`)
            .then((res) => {
                setData(res.data)
                setId(res.data._id)
                console.log(artistName)
            }) 
            .catch((err) => {
                setErr(err.message)
            })
    }

    // const getRelatedPlays = async () => {
    //     api.post('/plays-related', { name: artistName })
    //         .then((res) => {
    //             console.log(res.data)
    //             setRelatedPlays(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }

    const getRelatedPlaysById = async () => {
        api.get(`/events-related/${artistId}`)
            .then((res) => {
                console.log(res.data)
                setRelatedPlays(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchArtistById()
        // getRelatedPlays()
        getRelatedPlaysById()
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
        {!loading && relatedPlays && (
            <>
            <h2>Related Content</h2>
            <section id="related-plays-wrapper">
                {unique.map((play) => (<RelatedPlay key={play._id} play={play}/>))}
            </section>
            </>
        )}
        </span>
        </>
    )
}

