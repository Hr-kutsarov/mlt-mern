import './Navigation.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav>
            <ul>
                <li id='homepage-nav-link-home'><Link to="/" >Home</Link></li>
                <li id='homepage-nav-link-calendar'><Link to="/calendar-view">Calendar</Link></li>
                <li id='homepage-nav-link-add-event'><Link to="/add-event">Add Event</Link></li>
                <li id='homepage-nav-link-devlogs'><Link to="/devlog">Devlogs</Link></li>
                <li id='homepage-nav-link-login'><Link to="/login">Login</Link></li>
                <li id='homepage-nav-link-register'><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    )
}