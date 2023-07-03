import './DetailsView.css'
import { Link } from 'react-router-dom'
import { useAuthStore, useEventStore } from '../../../store/appStore'
import { FaHome, FaKey, FaWrench } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { weekReprExtended, weekRepr } from '../../../utils/dateRepr'
import { api } from '../../../utils/utils'
import { useEffect, useState } from 'react'
import { Loading } from './Loading'


export function DetailsView() {
    const userId = window.sessionStorage.getItem('userId')
    const eventId = window.sessionStorage.getItem('eventId')
    const permission = window.sessionStorage.getItem('role')

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [frozen, setFrozen] = useState(false)

    const setId = useEventStore((state) => state.setId)
    const setTitle = useEventStore((state) => state.setTitle)
    const setContent = useEventStore((state) => state.setContent)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)
    const setPrice = useEventStore((state) => state.setPrice)
    const setDate = useEventStore((state) => state.setDate)
    const setSummary = useEventStore((state) => state.setSummary)

    const dateObj = new Date(data.date)
    const day = weekReprExtended[dateObj.getDay()]
    const dayShort = weekRepr[dateObj.getDay()]
    const hour = dateObj.getHours()
    const mins = dateObj.getMinutes()
    const minsFormatted = mins.toString().length < 2 ? `0${mins}` : mins
    const regularPrice = Math.floor(data.price * 0.9).toFixed(2)
    const fakePrice = Math.floor(Number(data.price)).toFixed(2)
    const seat = Math.floor(Math.random() * 100) + 1

    const [err, setErr] = useState('')
    const [won, setWon] = useState(false)

    const handleEdit = () => {
        setId(data._id)
        setTitle(data.title)
        setSummary(data.summary)
        setContent(data.content)
        setPictureUrl(data.pictureUrl)
        setPrice(data.price)
        setDate(data.date)
        window.sessionStorage.setItem('eventId', data._id)
    }
    
    const handleFreeTicket = async () => {
        // title, date, price, seat owner
        const context = {
            title: data.title,
            date: `${dayShort} ${hour}:${minsFormatted}`,
            price: data.price,
            seat: seat,
            owner: userId
        }

        try {
            const response = await api.post('/tickets', context);
            if (response.status === 201) {
                setWon(true)
            }
        } catch (err) {
            setErr(err.message)
        }

    }

    const handlePurchase = async () => {
        alert('Payment system is under construction.')
    }

    useEffect(() => {
        setTimeout(() => {
        api.get(`plays/${eventId}`)
            .then((res) => {
                setData(res.data)
                const now = new Date()
                const fetched = new Date(res.data.date)
                if (now > fetched) {
                    setFrozen(true)
                } 
            })
            .catch((err) => setErr(err))
        setLoading(false)
        }, 500)
    }, [])

    return (
        <>
            <span id="event-details-view-wrapper">
            <nav id="event-details-nav">
                <ul>
                    <li><Link to="/"><FaHome /></Link></li>
                    <li>
                        {userId ? 
                        (<Link to="/profile"><FaUser /></Link>) :
                        (<Link to="/login"><FaKey /></Link>)}
                    </li>
                    {permission === 'moderator' && (<li onClick={handleEdit}><Link to="/edit-event"><FaWrench /></Link></li>)}
                </ul>
            </nav>
            {loading ? (<Loading />) : (
                <>
            <section id="event-details-card">
                <article>
                    <h1>{data.title}</h1>
                    <h2>{day}</h2>
                    <h2>{hour}:{minsFormatted}</h2>
                    <p>{data.content}</p>
                </article>
                <span>
                    <img src={data.pictureUrl} alt="asd"></img>    
                </span>
                </section>
            {!userId && (
                <section id="event-details-tickets">
                    <span>
                        <h3>You must be logged in to view ticket options.</h3>
                    </span>
                </section>
            )}
            {userId && (
            <section id="event-details-tickets">
                {!frozen ? (
                    <>
                    <span>
                    <h3>Tickets</h3>
                    {won? <button disabled={true} style={{background: "transparent", border: "unset", color: "var(--contrast-orange)", fontSize: "1.5rem"}}>You won!</button> : <button onClick={handleFreeTicket}>Win free ticket</button>}
                    <h5 style={{padding: '0'}}>Price: ${regularPrice} <s>${fakePrice}</s></h5>
                    <button onClick={handlePurchase}>Buy</button>
                </span>
                    </>
                ) : (
                <span>
                    <h3>This event is expired.</h3>
                </span>
                )}
            </section>
            )}
            
            </>)}
            <section id="event-details-artists-reel">
                <h1>Meet us</h1>
            </section>
        </span>
        </>
    )
}