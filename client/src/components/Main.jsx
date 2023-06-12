import { Announcement } from './Body/DevlogEntries/Announcement.jsx'
import { EventReel } from './Body/EventReel/EventReel.jsx'
import './Main.css'

export function Main() {
    
    return (
        <>
            <main>
                <Announcement />
                <h2>Watch now</h2>
                <EventReel key="event-reel" />
            </main>
        </>
    )}
