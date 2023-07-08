import './RelatedPlay.css'
import { Link } from 'react-router-dom'

export function RelatedPlay({ play }) {

    const setProps = () => {
        window.sessionStorage.setItem('eventId', play._id)
    }
    
    return (
        <span id="related-plays-unit" onClick={setProps}>
            <Link to='/details-view'><img src={play.pictureUrl} alt={play.title} /></Link>
            <p>{play.title}</p>
        </span>
    )
}