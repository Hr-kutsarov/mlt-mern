import { useState } from 'react'
import './Login.css'
import { FaHome } from 'react-icons/fa'
import { FaAccessibleIcon } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaDeviantart } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')

    // Submit login 
    const submitLoginForm = () => {
        if (!email || !password || !password1) {
            alert('Empty fields')
        }
        if (password !== password1) {
            alert('Passwords do not match')
        }
        console.log(`${email}, ${password}, ${password1}`)
    }

    return (
        <>
            <section id="login-form-wrapper">
                
                <div id="login-curtain">
                    <nav id="login-form-navigation-box">
                        <ul>
                            <li><Link to="/"><FaHome /></Link></li>
                            <li><FaAccessibleIcon /></li>
                            <li><FaApple/></li>
                            <li><FaDeviantart /></li>
                            <li><FaDiscord /></li>
                        </ul>
                    </nav>
                    <div id="login-animation">x</div>
                </div>
                <form id="user-login-form" onSubmit={submitLoginForm}>
                    <h3>LOGIN</h3>
                    <div className='login-input-box'>
                        <span className='login-error-message'>Error Message</span>
                        <label className='login-label'>Username</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='login-input-box'>
                        <span className='login-error-message'>Error Message</span>
                        <label className='login-label'>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>                            </div>
                    <div className='login-input-box'>
                        <span className='login-error-message'>Error Message</span>
                        <label className='login-label'>Re-type password</label>
                        <input type="password" onChange={(e) => setPassword1(e.target.value)} value={password1}/>
                    </div>
                    <button>Submit</button>
                </form>
            </section> 
        </>
    )}
