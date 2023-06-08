import { Link } from 'react-router-dom'
import './LoginSuccess.css'

export function LoginSuccess() {
    return (
        <>
            <span id="login-success-wrapper">
                <h1>You are now logged in.</h1>
                <h2><Link to="/">Return to homepage.</Link></h2>
            </span>
        </>
    )
}