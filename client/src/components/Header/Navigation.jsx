import './Navigation.css'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/appStore.js'

export function Navigation({toggleNavigation}) {
    const userLoggedIn = window.sessionStorage.getItem('isLoggedIn')
    const role = window.sessionStorage.getItem('role')

    return (
        <nav>
            <ul id='header-navigation' onClick={toggleNavigation}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/calendar-view">Calendar</Link></li>
                {role === 'moderator' && (
                <>
                    <li><Link to="/add-event">Add Event</Link></li>
                    <li><Link to="/devlog">Announcements</Link></li>
                </>    
                )}

                {!userLoggedIn && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
                {userLoggedIn && (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}