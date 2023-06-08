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
import { useAuthStore } from '../../store/appStore.js'

export function LoginForm() {
        // global state
    const userId = useAuthStore((state) => state.userId)
    const setId = useAuthStore((state) => state.setId)

    // component state
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [err, setErr] = useState('')

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

        login()
        clearInputData()
    }

    // State storage is cleared if the page is refreshed 
    // Saving the userId in the session storage as well, for now
    const setLogIn = () => {
        window.sessionStorage.setItem('isLoggedIn', true)
        window.sessionStorage.setItem('userId', userId)
    }

    const clearInputData = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setPassword1('')
    }

    const login = async () => {
        try {
            const response = await api.post('/login', {username: username, email: email, password: password});
            console.log(response)
            if (response.status === 200) {
                setId(response.data.message.id)
                setLogIn()
            }
        } catch (err) {
            setErr(err.message)
        }
    }

    return (
        <>
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
                    Login
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
                <Grid item xs={12}>
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
                </Grid>
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
            <Grid item xs={12}>
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
                </Grid>
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
    )
}