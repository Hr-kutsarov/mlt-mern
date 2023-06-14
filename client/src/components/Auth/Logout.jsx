import './Logout.css'
import { Link } from 'react-router-dom'

export function Logout() {

    const handleLogout = () => {
        window.sessionStorage.clear()
    }

    return (
        <>
            <span id="logout-wrapper">
                <h1>Logout?</h1>
                <span>
                    <button><Link to="/">Return</Link></button>
                    <button onClick={handleLogout}><Link to="/">Logout</Link></button>
                </span>
            </span>
        </>
    )}
