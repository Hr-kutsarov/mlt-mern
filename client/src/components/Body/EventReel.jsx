import './EventReel.css'
import { Event } from './EventReel/Event.jsx'
import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '../queries/eventQueries.js'

export function EventReel() {
    const { loading, error, data } = useQuery(GET_EVENTS)

    const dummyData = {
        title: "Loading",
        summary: "Loading",
        content: "Loading"
    }

    return <>
        <section id='event-reel'>
            {loading && (<>
            <Event key='loading' event={dummyData}/>
            <Event key='loading2' event={dummyData}/>
            </>)}
            {!loading && !error && (data.allEvents.map((event) => (<Event key={event._id} event={event}/>)))}
        </section>
    </>
}