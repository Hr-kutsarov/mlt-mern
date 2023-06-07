import { useEffect, useState } from 'react'
import './EventReel.css'
import { Event } from './EventReel/Event.jsx'
import { api } from '../../utils/utils.js'
import { useEventStore } from '../../store/appStore'
// import { useQuery } from '@apollo/client'
// import { GET_EVENTS } from '../queries/eventQueries.js'

export function EventReel() {
    // const { loading, error, data } = useQuery(GET_EVENTS)
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    
    const getEvents = async () => {
        api.get('/plays')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setErr(err.message)
            })
    }

    useEffect(() => {
        getEvents()
    }, [])

    return <>
        <section id='event-reel'>
            {data && (data.map((event) => (<Event key={event._id} event={event}/>)))}
        </section>
    </>
}