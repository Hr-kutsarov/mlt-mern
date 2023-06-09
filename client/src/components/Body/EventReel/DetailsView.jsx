import './DetailsView.css'
import { Link } from 'react-router-dom'
import { useEventStore } from '../../../store/appStore'
import { FaHome } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { weekReprExtended } from '../../../utils/dateRepr'


export function DetailsView() {
    const title = useEventStore((state) => state.title)
    const content = useEventStore((state) => state.content)
    const pictureUrl = useEventStore((state) => state.pictureUrl)
    const price = useEventStore((state) => state.price)
    const date = useEventStore((state) => state.date)

    const dateObj = new Date(date)
    const day = weekReprExtended[dateObj.getDay()]
    const hour = dateObj.getHours()
    const mins = dateObj.getMinutes()
    const regularPrice = Math.floor(price).toFixed(2)
    const fakePrice = Math.floor(Number(price) * 1.1).toFixed(2)
    // const day = dateObj.getDay()

    return (
        <span id="event-details-view-wrapper">
            <nav id="event-details-nav">
                <ul>
                    <li><Link to="/"><FaHome /></Link></li>
                    <li><Link to="/profile"><FaUser /></Link></li>
                    <li><FaQuestionCircle /></li>
                </ul>
            </nav>
            <section id="event-details-card">
                <article>
                    <h1>{title}</h1>
                    <h2>{day}</h2>
                    <h2>{hour}:{mins}</h2>
                    <p>{content}</p>
                </article>
                <span>
                    <img src={pictureUrl} alt="asd"></img>    
                </span>
                </section>
            <section id="event-details-tickets">
                <span>
                    <h3>Tickets</h3>
                    <button onClick={() => {
                        alert('Under construction')
                    }}>Win free ticket</button>
                    <h5>Price: ${regularPrice} <s>${fakePrice}</s></h5>
                    <button onClick={() => {
                        alert('Under construction')
                    }}>Buy</button>
                </span>
            </section>
            <section id="event-details-artists-reel">
                <h1>Meet us</h1>
            </section>
        </span>
    )
}