import './EventReel.css'
import { Event } from './EventReel/Event.jsx'
import { gql, useQuery } from '@apollo/client'

const GET_EVENTS = gql`
    query {
        allEvents {
            _id
            title
            summary
            content
        }
    }
`

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
            {!loading && !error && (data.allEvents.map(event => (<Event key={event._id} event={event}/>)))}
        </section>
    </>
}