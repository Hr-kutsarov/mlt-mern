import './ScrollUp.css'
import {IoMdArrowDropup} from 'react-icons/io'

export function ScrollUp() {

    const handlerReturn = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <section id='navigate-to-top'>
            <span onClick={handlerReturn}><IoMdArrowDropup /> Back to top</span>
        </section>
    )
}