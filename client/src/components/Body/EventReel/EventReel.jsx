import { useEffect, useState } from 'react'
import './EventReel.css'
import { Event } from './Event.jsx'
import { api } from '../../../utils/utils.js'
import { Loading } from './Loading'
// import { useQuery } from '@apollo/client'
// import { GET_EVENTS } from '../queries/eventQueries.js'

export function EventReel() {
    // const { loading, error, data } = useQuery(GET_EVENTS)
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)
    
    const getEvents = async () => {
        api.get('/plays')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setErr(err.message)
            })
        setLoading(false)
    }

    useEffect(() => {
        // just to test the loading component
        const timeoutTimer = 0
        setTimeout(() => {
            getEvents()
            
        }, timeoutTimer)
    }, [])

    return (<>
        {loading ? (
            <Loading />
            ) : (
            <section id='event-reel'>
                {err && (<h1>{err}</h1>)}
                {data && (data.map((event) => (<Event key={event._id} event={event}/>)))}
            </section>
            )
        }
    </>)
}