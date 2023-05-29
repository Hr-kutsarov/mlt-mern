import './Register.css'
import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaAccessibleIcon } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaDeviantart } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')

    // Submit register 
    const submitRegisterForm = () => {
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
            <section id="register-form-wrapper">
                <div id="register-curtain">
                    <nav id="register-form-navigation-box">
                        <ul>
                            <li><Link to="/"><FaHome /></Link></li>
                            <li><FaAccessibleIcon /></li>
                            <li><FaApple/></li>
                            <li><FaDeviantart /></li>
                            <li><FaDiscord /></li>
                        </ul>
                    </nav>
                </div>
                <form id="user-register-form" onSubmit={submitRegisterForm}>
                    <h3>Register</h3>
                    <div className='register-input-box'>
                        <span className='register-error-message'>Error Message</span>
                        <label className='register-label'>Username</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className='register-input-box'>
                        <span className='register-error-message'>Error Message</span>
                        <label className='register-label'>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>                            </div>
                    <div className='register-input-box'>
                        <span className='register-error-message'>Error Message</span>
                        <label className='register-label'>Re-type password</label>
                        <input type="password" onChange={(e) => setPassword1(e.target.value)} value={password1}/>
                    </div>
                    <button>Submit</button>
                </form>
            </section> 
        </>
    )}
