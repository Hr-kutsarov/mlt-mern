import './createDevlog.css'
import {FaArrowRight} from 'react-icons/fa'

export function CreateDevlog() {

    const defaultTextArea = `Devlog content entry.`

    return (
        <>
            <form id="create-devlog-form">
                <h2>NEW ENTRY</h2>
                <label>TITLE</label>
                <input type="text"></input>
                <label>CONTENT</label>
                <textarea defaultValue={defaultTextArea}></textarea>
                <div className='btn-box'>
                    <button><FaArrowRight /></button>
                </div>
            </form>
        </>
    )
}