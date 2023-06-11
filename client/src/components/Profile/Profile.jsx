import './Profile.css'
import { Link } from 'react-router-dom'
import { Ticket } from './Ticket'
import { useEffect } from 'react'
import { useAuthStore } from '../../store/appStore'
import { api } from '../../utils/utils'
import { useState } from 'react'

export function Profile() {
    const userId = window.sessionStorage.getItem('userId')
    const username = window.sessionStorage.getItem('user')
    const [err, setErr] = useState('')
    const [tickets, setTickets] = useState([])

    const getUserTickets = async () => {
        try {
            const response = await api.get(`/my-tickets/${userId}`);
            console.log(response)
            if (response.status === 200) {
                console.log(response.data)
                setTickets(response.data)
            }
        } catch (err) {
            setErr(err.message)
        }
    }
    useEffect(() => {
        getUserTickets()

    }, [])
    return (
        <span id='profile-wrapper'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Events</Link></li>
                    <li>
                        <span>
                        </span>
                    </li>
                    <li>Hi, {username}</li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <section id="tickets-list">
                {tickets ? (tickets.map((ticket) => (<Ticket key={ticket._id} ticket={ticket}/>))) : <h1>You have not purchased any tickets yet.</h1>}
            </section>
        </span>
    )
}