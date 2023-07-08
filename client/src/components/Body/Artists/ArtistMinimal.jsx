import './ArtistMinimal.css'
import { useArtistStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'

export function ArtistMinimal({data}) {

    const setId = useArtistStore((state) => state.setId)

    const handleClick = () => {
        setId(data._id)
    }

    return (
        <span id='artist-minimal' onClick={handleClick}>
            <Link to='/details-artist'><img src={data.photo} alt={data.name} /></Link>
            <p>{data.name}</p>
        </span>
    )
}