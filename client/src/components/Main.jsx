import { ArtistsSlider } from './Body/Artists/ArtistsSlider.jsx'
import { Announcement } from './Body/DevlogEntries/Announcement.jsx'
import { EventReel } from './Body/EventReel/EventReel.jsx'
import './Main.css'

export function Main() {
    
    return (
        <main>
            <Announcement />
            <EventReel />
            <ArtistsSlider />
        </main>
    )}
