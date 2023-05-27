import { AddEvent } from './Body/AddEvent.jsx'
import { EventReel } from './Body/EventReel.jsx'
import { EditEvent } from './Body/EditEvent.jsx'
import { useStore } from '../store/appStore.js'
import './Main.css'

export function Main() {
    const id = useStore((state) => state.id)
    return (
        <>
            <main>
                <AddEvent />
                {id && <EditEvent />}
                <EventReel key="event-reel" />
            </main>
        </>
    )}
