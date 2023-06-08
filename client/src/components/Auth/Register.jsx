import { useState } from 'react'
import './Register.css'
import { FaHome } from 'react-icons/fa'
import { FaSignInAlt } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaUnlockAlt } from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { api } from '../../utils/utils.js'

export function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [err, setErr] = useState('')
    const [registered, setRegistered] = useState(false)

    // Submit login 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !password || !password1) {
            alert('Empty fields')
            return
        }
        if (password !== password1) {
            alert('Passwords do not match')
            return
        }

        register()
        clearInputData()
    }

    const clearInputData = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setPassword1('')
    }

    const register = async () => {
        try {
            const response = await api.post('/register', {username: username, email: email, password: password});
            console.log(response)
            if (response.status === 201) {
                console.log('registered successfully')
                setRegistered(true)
            }
        } catch (err) {
            setErr(err.message)
        }
    }

    return (
        <>
            <span id="register-form-wrapper">
            {/* THIS MAY LOOK NASTY, SORRY */}
            {!registered && (
                            <Box component="form" onSubmit={handleSubmit} sx={{ 
                maxWidth: "60vw", 
                m: "1rem auto", 
                backgroundColor: "white", 
                p: "3rem 2rem", 
                borderRadius: "1rem"
            }}>
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mb: "2rem"}}>
                    <Avatar sx={{ m: 1, bgcolor: "var(--blue-m)", p: "0.25rem"}}>
                        <FaUnlockAlt />
                    </Avatar>
                    <Typography component="h1" variant="h3">
                        Register
                    </Typography>
                </Box>
                <Box>
                    <Typography component="h1" variant="h6" sx={{p: "0.25rem 1rem", color: "var(--contrast-orange)", textAlign: "center"}}>
                        {err ? err : " "}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="username-register"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        onChange={(e) => {
                            setErr('')
                            setUsername(e.target.value)}}
                        value={username}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email-register"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password-register"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="re-password"
                        label="Re-Password"
                        type="password"
                        id="re-password-register"
                        // autoComplete="new-password"
                        onChange={(e) => setPassword1(e.target.value)}
                        value={password1}
                    />
                    </Grid>
                </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ maxWidth: "50%", display: "grid", m: "2rem auto", backgroundColor: "var(--blue-m)", p: "0.75rem 0"}}
                    >
                        Register
                    </Button>
                </Box>
            )}

            {registered && (
                <span id='registered-confirmation-wrapper'>
                    <h2>You are now registered.</h2>
                    <h3><Link to="/login">Log in <FaUnlockAlt /></Link></h3>
                    
                </span>
            )}
                <nav id="register-form-navigation-box">
                    <ul>
                        <li><Link to="/"><FaHome /></Link></li>
                        {/* <li><FaSignIn /></li> */}
                        <li><Link to="/login"><FaSignInAlt /></Link></li>
                        <li onClick={() => {alert('Assistance')}}><FaPhone /></li>
                        <li onClick={() => {alert('FAQ')}}><FaQuestionCircle /></li>
                    </ul>
                </nav>
            </span> 
        </>
    )}
