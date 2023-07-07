import { useState } from "react"
import "./SelectedArtist.css"
import { useArtistStore } from "../../../store/appStore"

export function SelectedArtist({artist}) {

    const [ selected, setSelected ] = useState(false)
    const selectedArtists = useArtistStore((state) => state.selectedArtists)
    const setSelectedArtists = useArtistStore((state) => state.setSelectedArtists)


    const toggleSelect = (e) => {
        setSelected(true)
        if (!selected) {
            setSelectedArtists([...selectedArtists, artist])
        } else if (selected) {
            return
        }        
    }

    return (
        <span id="selected-artist-wrapper" onClick={toggleSelect} style={selected ? {opacity: 0.5} : {opacity: 1}}>
            <img src={artist.photo} alt={artist.name}/>
            <span>
                <p>
                    {artist.name}
                </p>
            </span>
        </span>
    )
}