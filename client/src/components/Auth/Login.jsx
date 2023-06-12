import './Login.css'
import { FaHome } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { LoginSuccess } from './LoginSuccess'

export function Login() {
    const userLoggedIn = window.sessionStorage.getItem('isLoggedIn')

    return (
        <>
            <span id="login-form-wrapper">
                {!userLoggedIn ? (<LoginForm />) : (<LoginSuccess />)}
                <nav id="login-form-navigation-box">
                    <ul>
                        <li><Link to="/"><FaHome /></Link></li>
                        <li><Link to="/register"><FaKey /></Link></li>
                        <li onClick={() => {
                            alert('Support centre')
                        }}><FaPhone /></li>
                        <li onClick={() => {
                            alert('FAQ section')
                        }}><FaQuestionCircle /></li>
                    </ul>
                </nav>
            </span> 
        </>
    )}
