import { ArtistsSlider } from './Body/Artists/ArtistsSlider.jsx'
import { Announcement } from './Body/DevlogEntries/Announcement.jsx'
import { EventReel } from './Body/EventReel/EventReel.jsx'
import './Main.css'
import {FaStar} from 'react-icons/fa'

export function Main() {
    
    return (
        <main>
            <Announcement />
            <h2>UPCOMING EVENTS</h2>
            <h3><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h3>
            <EventReel />
            <h2>MEET US</h2>
            <h3><FaStar /><FaStar /><FaStar /></h3>
            <ArtistsSlider />
        </main>
    )}
