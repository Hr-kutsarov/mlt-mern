import { AddEvent } from './Body/AddEvent.jsx'
import { EventReel } from './Body/EventReel.jsx'
import './Main.css'

export function Main() {
    return (
        <>
            <main>
                <AddEvent />
                <EventReel key="event-reel" />
            </main>
        </>
    )}
