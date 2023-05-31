import './devlog.css'
import { FaArrowAltCircleRight, FaUserClock } from 'react-icons/fa'
import { FaDeploydog } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore'

export function Devlog() {
    const date = new Date().toLocaleDateString()
    const toggleDetailsOn = useDevStore((state) => state.toggleDetailsOn)

    const togglerDetails = (e) => {
        e.preventDefault()
        toggleDetailsOn()
    }

    return (
        <>
            <article className='devlog'>
                <h3>Devlog title</h3>
                <span id='devlog-timestamp'><FaUserClock /> Added on {date}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio at ullam obcaecati placeat. Eius repudiandae laborum tenetur, excepturi officiis quasi blanditiis numquam aliquam quibusdam dolores vel consequuntur ipsum! Quibusdam, velit?</p>
                <nav>
                    <button onClick={togglerDetails}><FaArrowAltCircleRight /></button>
                </nav>
            </article>
        </>
    )
}