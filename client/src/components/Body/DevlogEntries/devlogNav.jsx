import './devlogNav.css'
import { Link } from 'react-router-dom'

export function DevlogNav() {
    return (
        <>
            <nav id='devlog-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Reel</Link></li>
                    <li><Link to="/">Edit</Link></li>
                    <li><Link to="/">Delete</Link></li>
                </ul>
            </nav>
        </>
    )
}

export function DevlogNavMini() {
    return (
        <>
            <nav id='devlog-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Reel</Link></li>
                </ul>
            </nav>
        </>
    )
}