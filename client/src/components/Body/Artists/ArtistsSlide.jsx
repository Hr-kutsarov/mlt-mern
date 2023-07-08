import { motion } from 'framer-motion'
import './ArtistSlide.css'
import { Link } from 'react-router-dom'
import { useArtistStore } from '../../../store/appStore'
import { useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export function ArtistSlide({artist}) {

    const setId = useArtistStore((state) => state.setId)
    const setName = useArtistStore((state) => state.setName)
    // useEffect(() => {
    //     console.log(artist)
    // })

    const infoHandler = () => {
        setId(artist._id)
        setName(artist.name)
    } 
    return (
        //  item in the tutorial
        <motion.div className="artist-card">
            <img src={artist.photo} alt={artist.name}></img>
            <h2>{artist.name}</h2>
            <Link to="/details-artist"><button onClick={infoHandler}><FaInfoCircle /></button></Link>
        </motion.div>
    )
}