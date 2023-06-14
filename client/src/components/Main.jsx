import { ArtistsSlider } from './Body/Artists/ArtistsSlider.jsx'
import { Announcement } from './Body/DevlogEntries/Announcement.jsx'
import { EventReel } from './Body/EventReel/EventReel.jsx'
import './Main.css'

export function Main() {
    
    return (
        <main>
            <Announcement />
            <h2>Watch now</h2>
            <EventReel />
            <h2>MEET US</h2>
            <ArtistsSlider />
        </main>
    )}
