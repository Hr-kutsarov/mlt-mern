import './editDevlog.css'
import './createDevlog.css'
import {FaArrowRight} from 'react-icons/fa'

export function EditDevlog() {
    return (
        <>
            <form id="edit-devlog-form">
                <h2>EDIT ENTRY</h2>
                <label>TITLE</label>
                <input type="text"></input>
                <label>CONTENT</label>
                <textarea>Devlog content entry.</textarea>
                <button><FaArrowRight /></button>
            </form>
        </>
    )
}