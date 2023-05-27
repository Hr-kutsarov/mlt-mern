import { AddEvent } from './Body/AddEvent.jsx'
import { EventReel } from './Body/EventReel.jsx'
import { EditEvent } from './Body/EditEvent.jsx'
import { useEventStore } from '../store/appStore.js'
import './Main.css'

export function Main() {
    const id = useEventStore((state) => state.id)
    
    return (
        <>
            <main>
                {id && <EditEvent />}
                <EventReel key="event-reel" />
                <AddEvent />
            </main>
        </>
    )}
