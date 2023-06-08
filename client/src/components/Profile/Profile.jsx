import './Profile.css'
import { FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <span id='profile-wrapper'>
            <h1><FaTools /></h1>
            <h1>This section is under construction.</h1>
            <h3><Link to="/">Return to homepage.</Link></h3>
        </span>
    )
}