import './Navigation.css'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/appStore.js'

export function Navigation({toggleNavigation}) {
    const userLoggedIn = window.sessionStorage.getItem('isLoggedIn')
    const role = window.sessionStorage.getItem('role')

    return (
            <nav id='header-navigation' onClick={toggleNavigation}>
                <Link to="/" >Home</Link>
                <Link to="/calendar-view">Calendar</Link>
                <Link to="/events">Upcoming Events</Link>
                {role === 'moderator' && (
                <>
                    <Link to="/add-event">Add Event</Link>
                    <Link to="/devlog">Announcements</Link>
                    <Link to="/admin-section">Admin Panel</Link>
                </>    
                )}

                {!userLoggedIn && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
                {userLoggedIn && (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </>
                )}
            </nav>
    )
}