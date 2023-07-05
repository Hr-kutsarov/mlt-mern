import { useEffect, useState, useRef } from "react"
import { api } from "../../../utils/utils"
import { ArtistSlide } from "./ArtistsSlide"
import { motion } from 'framer-motion'
import './ArtistsSlider.css'
import { FaStar } from "react-icons/fa"
import { Loading } from "../EventReel/Loading"
import { useArtistStore } from "../../../store/appStore"

export function ArtistsSlider() {
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)
    const setArtists = useArtistStore((state) => state.setArtists)
    const artistsArray = useArtistStore((state) => state.artistsArray)

    const getArtists = async () => {
        api.get('/artists')
            .then((res) => {
                setArtists(res.data)
            })
            .catch((err) => {
                setErr(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const maxItemsOnScreen = 4
    const maxLeftValue = (350 * Number(artistsArray.length - maxItemsOnScreen))
    
    useEffect(() => {
        getArtists()
    }, [])


    return (
        <>
        {loading && !err && (<Loading />)}
        {!loading && err && (<h2>{err}</h2>)}
        {!loading && !err && artistsArray && (
            <>
            <h2>MEET US</h2>
            <h3><FaStar /><FaStar /><FaStar /></h3>
            <motion.div id="carousel">
                <motion.div drag="x" dragConstraints={{right: -20, left: -maxLeftValue}} id="inner-carousel">
                    {artistsArray && (artistsArray.map((artist) => (<ArtistSlide key={artist._id} artist={artist}/>)))}
                </motion.div>
            </motion.div>
            </>
        )}
        </>
    )
}