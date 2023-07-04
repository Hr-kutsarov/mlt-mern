import './Hero.css'
import Image from "../../../static/happy-hour.svg"
import { Link } from 'react-router-dom'

export function HeroSection() {

    const handleScrollToEvents = () => {
        const eventReelSection = document.getElementById('event-reel')
        if (eventReelSection) {
            eventReelSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section id="hero-section">
            <span>
                <h1>Dear guests,</h1>
                <p>We are happy to announce our first anniversary!</p>
                <p>All tickets are now 10% off!</p>
                <span id="hero-box-buttons">
                    <button onClick={handleScrollToEvents}>UPCOMING</button>
                    <Link to="/calendar-view">CALENDAR</Link>
                </span>
            </span>
            <img src={Image} alt="storytel-image-happy-hour" />
        </section>
    )
}