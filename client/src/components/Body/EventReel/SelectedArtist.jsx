import { useState } from "react"
import "./SelectedArtist.css"

export function SelectedArtist({artist}) {

    const [ selected, setSelected ] = useState(false)

    const toggleSelect = () => {
        setSelected(!selected)
    }
    return (
        <span id="selected-artist-wrapper" onClick={toggleSelect} style={selected ? {opacity: 0.5} : {opacity: 1}}>
            <img src={artist.photo} alt={artist.name}/>
        </span>
    )
}