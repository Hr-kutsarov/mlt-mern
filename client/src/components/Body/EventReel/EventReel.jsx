import { useEffect, useState } from 'react'
import './EventReel.css'
import { Event } from './Event.jsx'
import { api } from '../../../utils/utils.js'
import { Loading } from './Loading'
import { slice } from 'lodash'
import { FaStar } from 'react-icons/fa'

export function EventReel() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(4)
    const initialEvents = slice(data, 0, index)
    const [isCompleted, setIsCompleted] = useState(false)

    const loadMore = () => {
        setIndex(index + 4)
        if (index >= data.length) {
        setIsCompleted(true)
        } else {
            setIsCompleted(false)
        }
  }
    
    const getEvents = async () => {
        api.get('/plays-upcoming')
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setErr(err.message)
                setLoading(false)
            })
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
        {loading && <Loading />}
        {!loading && err && (<h1>{err}</h1>)}
        {!loading && !err && data && (
            <>
            <h2>UPCOMING EVENTS</h2>
            <h3><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h3>
            <section id='event-reel'>
                {data && (initialEvents.map((event) => (<Event key={event._id} event={event}/>)))}
            </section>
            {!isCompleted ? (
                <span id='load-more-events'>
                    <button onClick={loadMore}>LOAD MORE</button>
                </span>
            ) : (
                <span id='load-more-events'>
                    <button disabled>There are no more events to display</button>
                </span>
            )}
        </>
        )}
    </>)
}