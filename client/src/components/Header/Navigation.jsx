import './Navigation.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/add-event">Add Event</Link></li>
                    <li>Top-Rated</li>
                    <li>Promo</li>
                    <li>Login/Register</li>
                </ul>
            </nav>
        </>
    )
}