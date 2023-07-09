import './ArtistMinimal.css'
import { useArtistStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'

export function ArtistMinimal({data}) {

    const setId = useArtistStore((state) => state.setId)
    const setName = useArtistStore((state) => state.setName)

    const handleClick = () => {
        setId(data._id)
        setName(data.name)
    }

    return (
        <span id='artist-minimal' onClick={handleClick}>
            <Link to='/details-artist'><img src={data.photo} alt={data.name} /></Link>
            <p>{data.name}</p>
        </span>
    )
}