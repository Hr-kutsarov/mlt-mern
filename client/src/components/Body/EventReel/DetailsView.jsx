import './DetailsView.css'
import { Link } from 'react-router-dom'
import { useAuthStore, useEventStore } from '../../../store/appStore'
import { FaHome, FaKey, FaWrench } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { weekReprExtended, weekRepr } from '../../../utils/dateRepr'
import { api } from '../../../utils/utils'
import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { ArtistMinimal } from '../Artists/ArtistMinimal'
import { PurchaseModal } from './PurchaseModal'

export function DetailsView() {
    // tickets are linked to the user 
    const userId = window.sessionStorage.getItem('userId')
    // using this just so refresh won't clear the page
    const eventId = window.sessionStorage.getItem('eventId')
    // if permission = moderator -> display certain stuff, else -> display default
    const permission = window.sessionStorage.getItem('role')

    // where the data fetched data about the event is stored
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // expired means -> if the Event date is in the past => the purchase options will be disabled
    const [expired, setExpired] = useState(false)
    // quick and effective way (logically) to add a ticket with random seat to the user profile
    const [won, setWon] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)

    // global state setters -> used in Edit view
    const setId = useEventStore((state) => state.setId)
    const setTitle = useEventStore((state) => state.setTitle)
    const setContent = useEventStore((state) => state.setContent)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)
    const setPrice = useEventStore((state) => state.setPrice)
    const setDate = useEventStore((state) => state.setDate)
    const setSummary = useEventStore((state) => state.setSummary)

    // formatted layout text
    const dateObj = new Date(data.date)
    const day = weekReprExtended[dateObj.getDay()]
    const dayShort = weekRepr[dateObj.getDay()]
    const hour = dateObj.getHours()
    const mins = dateObj.getMinutes()
    const minsFormatted = mins.toString().length < 2 ? `0${mins}` : mins
    const regularPrice = Math.floor(data.price * 0.9).toFixed(2)
    const finalPrice = Math.floor(Number(data.price)).toFixed(2)
    const formattedDate = `${dayShort} ${hour}:${minsFormatted}`

    const [err, setErr] = useState('')
    
    // toggle modal -> purchase logic

    const [toggleModal, setToggleModal] = useState(false)

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
    
    const handlePurchase = async () => {
        // alert('Payment system is under construction.')
        setToggleModal(true)
    }

    useEffect(() => {
        setTimeout(() => {
        api.get(`plays/${eventId}`)
            .then((res) => {
                setData(res.data)
                const now = new Date()
                const fetched = new Date(res.data.date)
                if (now > fetched) {
                    setExpired(true)
                } 
            })
            .catch((err) => setErr(err))
        setLoading(false)
        }, 0)
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
                    <h1>"{data.title}"</h1>
                    <h2>{day}</h2>
                    <h2>{hour}:{minsFormatted}</h2>
                    <p>{data.content}</p>
                </article>
                <span>
                    <img src={data.pictureUrl} alt={data.title}></img>    
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
            {/* PURCHASE MODAL */}
            {toggleModal && (<PurchaseModal setToggleModal={setToggleModal} data={data} user={userId} price={finalPrice} formattedDate={formattedDate}/>)}
            {/* PURCHASE MODAL */}
                {!expired ? (
                    <>
                    <span id="ticket-price-span">
                        <h3>Tickets</h3>
                        <span>
                            <h4 style={{padding: '0'}}>Price: ${regularPrice} <s>${finalPrice}</s></h4>
                            <button onClick={handlePurchase}>Buy</button>
                    </span>
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
            <span id="artist-minireel-title">
                {!loading && (<h3>Starring in this play</h3>)}
            </span>
            <section id="artists-minireel">
                {data.artists && (data.artists.map((a) => <ArtistMinimal key={a._id} data={a} />))}
            </section>
        </span>
        </>
    )
}