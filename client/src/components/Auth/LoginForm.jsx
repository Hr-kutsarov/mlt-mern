import './Login.css'
import { useState } from 'react'
import { FaUnlockAlt } from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { api } from '../../utils/utils.js'
import { LoginSuccess } from './LoginSuccess';

export function LoginForm() {
    const userId = window.sessionStorage.getItem('userId')
    // component state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    // Submit login 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !password) {
            setErr('All fields are required.')
            return
        }

        login()
        clearInputData()
    }

    // State storage is cleared if the page is refreshed 
    // Saving the userId in the session storage as well, for now
    const setLogIn = () => {
        window.sessionStorage.setItem('isLoggedIn', true)
        setLoggedIn(true)
    }

    const clearInputData = () => {
        setUsername('')
        setPassword('')
    }

    const login = async () => {
        try {
            const response = await api.post('/login', {username: username, password: password});
            // console.log(response)
            if (response.status === 200) {
                // console.log(response.data.message.id)
                window.sessionStorage.setItem('userId', response.data.message.id)
                window.sessionStorage.setItem('user', response.data.message.username)
                window.sessionStorage.setItem('role', response.data.message.role)
                setLogIn()
            }
        } catch (err) {
            if (err.response.status === 400) {
                setErr('Incorrect username or password')
            } else {
                setErr(err.response.statusText)
            }

        }
    }

    return (
        <>{!loggedIn ? 
    (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ 
                maxWidth: "85vw", 
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
                    Login
                </Typography>
            </Box>
            <Box>
                <Typography component="h1" variant="h6" sx={{p: "0.25rem 1rem", color: "var(--contrast-orange)", textAlign: "center", marginBottom: "2rem"}}>
                    {err ? err : " "}
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="username-login"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={(e) => {
                        setErr('')
                        setUsername(e.target.value)}}
                    value={username}
                />
                </Grid>
                {/* <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email-login"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </Grid> */}
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password-login"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </Grid>
            {/* <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="re-password"
                    label="Re-Password"
                    type="password"
                    id="re-password-login"
                    // autoComplete="new-password"
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1}
                />
                </Grid> */}
            </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ maxWidth: "50%", display: "grid", m: "2rem auto", backgroundColor: "var(--blue-dark)", p: "0.75rem 0"}}
                >
                    Sign In
                </Button>
            </Box>
        </>
    ) : (
        <LoginSuccess />
    )}  
    </>)
}