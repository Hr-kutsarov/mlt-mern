import { Play } from './Body/Play.jsx'
import { Hero } from './Body/Hero.jsx'
import './Body.css'

export function Body() {
    return (
        <>
            <main>
                <h2>Main Element</h2>
                <div className="collection">
                    <Hero />
                    <Play />
                </div>
            </main>
        </>
    )}