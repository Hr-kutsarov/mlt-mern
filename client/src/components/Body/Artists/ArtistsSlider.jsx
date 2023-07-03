import { useEffect, useState, useRef } from "react"
import { api } from "../../../utils/utils"
import { ArtistSlide } from "./ArtistsSlide"
import { motion } from 'framer-motion'
import './ArtistsSlider.css'
import { FaStar } from "react-icons/fa"
import { Loading } from "../EventReel/Loading"

export function ArtistsSlider() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)

    const getArtists = async () => {
        api.get('/artists')
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setErr(err.message)
                setLoading(false)
            })
    }

    const maxItemsOnScreen = 4
    const maxLeftValue = (350 * Number(data.length - maxItemsOnScreen))
    
    useEffect(() => {
        getArtists()
    }, [])


    return (
        <>
        {loading && !err && (<Loading />)}
        {!loading && err && (<h2>{err}</h2>)}
        {!loading && !err && data && (
            <>
            <h2>MEET US</h2>
            <h3><FaStar /><FaStar /><FaStar /></h3>
            <motion.div id="carousel">
                <motion.div drag="x" dragConstraints={{right: -20, left: -maxLeftValue}} id="inner-carousel">
                    {data && (data.map((artist) => (<ArtistSlide key={artist._id} artist={artist}/>)))}
                </motion.div>
            </motion.div>
            </>
        )}
        </>
    )
}