import './Logout.css'
import { useAuthStore } from '../../store/appStore.js'
import { Link } from 'react-router-dom'

export function Logout() {
    const setId = useAuthStore((state) => state.setId)

    const handleLogout = () => {
        window.sessionStorage.clear()
        // not using unset function this time
        setId('')
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
