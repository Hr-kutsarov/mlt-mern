import './Navigation.css'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/appStore.js'

export function Navigation() {
    const userLoggedIn = window.sessionStorage.getItem('isLoggedIn')
    const role = window.sessionStorage.getItem('role')

    return (
        <nav>
            <ul>
                <li id='homepage-nav-link-home'><Link to="/" >Home</Link></li>
                <li id='homepage-nav-link-calendar'><Link to="/calendar-view">Calendar</Link></li>
                {role === 'moderator' && (
                <>
                    <li id='homepage-nav-link-add-event'><Link to="/add-event">Add Event</Link></li>
                    <li id='homepage-nav-link-devlogs'><Link to="/devlog">Announcements</Link></li>
                </>    
                )}

                {!userLoggedIn && (
                    <>
                        <li id='homepage-nav-link-login'><Link to="/login">Login</Link></li>
                        <li id='homepage-nav-link-register'><Link to="/register">Register</Link></li>
                    </>
                )}
                {userLoggedIn && (
                    <>
                        <li id='homepage-nav-link-profile'><Link to="/profile">Profile</Link></li>
                        <li id='homepage-nav-link-logout'><Link to="/logout">Logout</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}