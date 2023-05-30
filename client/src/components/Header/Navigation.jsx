import './Navigation.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/add-event">Add Event</Link></li>
                    <li><Link to="/devlogs">Devlog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </>
    )
}