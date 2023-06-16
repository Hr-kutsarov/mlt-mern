import './Profile.css'
import { Link } from 'react-router-dom'
import { Ticket } from './Ticket'
import { useEffect } from 'react'
import { api } from '../../utils/utils'
import { useState } from 'react'
import { FaUser, FaUserAlt } from 'react-icons/fa'

export function Profile() {
    const userId = window.sessionStorage.getItem('userId')
    const username = window.sessionStorage.getItem('user')
    const [err, setErr] = useState('')
    const [tickets, setTickets] = useState([])
    const role = window.sessionStorage.getItem('role')
    const newRole = role === 'moderator' ? 'user' : 'moderator'
    const [currentRole, switchRole] = useState(role)

    const getUserTickets = async () => {
        try {
            const response = await api.get(`/my-tickets/${userId}`);
            console.log(response)
            if (response.status === 200) {
                setTickets(response.data)
            }
        } catch (err) {
            setErr(err.message)
        }
    }

    const handleSwitchRole = async () => {
        const context = {role: newRole}
        api.put(`/switch-role/${userId}`, context)
            .then((res) => {
                window.sessionStorage.setItem('role', res.data.message)
                switchRole(res.data.message)
            })
            .catch((err) => {
                setErr(err.message)
            })
    }

    useEffect(() => {
        getUserTickets()

    }, [])
    return (
        <span id='profile-wrapper'>
            {userId ? (<>
                     <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Events</Link></li>
                    <li>
                        <span>
                            <FaUser />
                        </span>
                    </li>
                    <li>Hi, {username}</li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <section id="permissions-info">
                <h5><FaUserAlt /> You are viewing this website as {currentRole} {err}</h5>
                <button onClick={handleSwitchRole}>Switch</button>
            </section>
            <section id="tickets-list">
                {tickets ? (tickets.map((ticket) => (<Ticket key={ticket._id} ticket={ticket}/>))) : (<h1>You have not purchased any tickets yet.</h1>)}
            </section>
            </>) : (
                <>
                    <section id='profile-error'>
                        <h1>You must be logged in to visit this page.</h1>
                        <h3><Link to='/'>Navigate to homepage.</Link></h3>
                        <h4><Link to='/login'>Proceed to login.</Link></h4>
                        <h5><Link to='/register'>New around here? You can register at this page.</Link></h5>
                    </section>
                </>
            )}
        </span>
    )
}