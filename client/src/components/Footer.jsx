import './Footer.css';
import {FaTwitterSquare, FaTwitter, FaFacebook, FaWikipediaW, FaFacebookF, FaFacebookSquare, FaCaretUp, FaCaretSquareUp } from 'react-icons/fa'

export function Footer() {
    const handlerReturn = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <footer>
            <section id='navigate-to-top'>
                <span onClick={handlerReturn}><FaCaretUp /> Back to top</span>
            </section>
            <span className='footer-separator'></span>
            <section id='footer-helpful-links'>
                <ul>
                    <li>Development</li>
                    <li>How to use this site</li>
                    <li><a href="https://github.com/Hr-kutsarov/mlt-mern">Github Repo</a></li>
                </ul>
                <ul>
                    <li>Example links</li>
                    <li>FAQ</li>
                    <li>Ticket inquiries</li>
                    <li>Reservations</li>
                </ul>
                <ul>
                    <li>Contacts</li>
                    <li>Sofia 1000, Bulgaria</li>
                    <li>Maria Luiza Blv. 123</li>
                    <li>+359 888 432 234</li>
                </ul>
                <ul>
                    <li>External links</li>
                    <span id='social-media'>
                        <li><FaFacebookSquare /></li>
                        <li><FaTwitterSquare /></li>
                        <li><FaWikipediaW /></li>
                    </span>
                </ul>
            </section>
        </footer>
    )
}