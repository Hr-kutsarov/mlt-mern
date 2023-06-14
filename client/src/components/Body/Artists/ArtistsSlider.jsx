import { useEffect, useState, useRef } from "react"
import { api } from "../../../utils/utils"
import { ArtistSlide } from "./ArtistsSlide"
import { motion } from 'framer-motion'
import './ArtistsSlider.css'

export function ArtistsSlider() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')

    const getArtists = async () => {
        api.get('/artists')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setErr(err.message)
            })
    }

    const maxItemsOnScreen = 4
    const maxLeftValue = (350 * Number(data.length - maxItemsOnScreen))
    
    useEffect(() => {
        getArtists()
    }, [])


    return (
        <>
            <motion.div className="carousel">
                <motion.div drag="x" dragConstraints={{right: 0, left: -maxLeftValue}} className="inner-carousel">
                    {data && (data.map((artist) => (<ArtistSlide key={artist._id} artist={artist}/>)))}
                </motion.div>
            </motion.div>
        </>
    )
}