import "./DeleteEvent.css"
import { useEventStore } from '../../../store/appStore'
import { Link } from "react-router-dom"
import { api } from "../../../utils/utils"
import { useState } from "react"

export function DeleteEvent() {
    const id = useEventStore((state) => state.id)
    const unsetId = useEventStore((state) => state.unsetId)

    const [completed, setCompleted] = useState(false)
    const [err, setErr] = useState('')

    const deleteEvent = async () => {
        try {
            api.delete(`/plays/${id}`)
                .then(() => {
                    setCompleted(true)
                })
        } catch (err) {
            setErr(err.message)
        }
    }

    const cancelDeleteAction = () => {
        unsetId()
    }
    return (
        <> 
            <section id="delete-event-wrapper">
                <span>
                    {err && (<h1>{err}</h1>)}
                    {!completed && (<h1>Delete Event</h1>)}
                    {completed && (<h1>Deletion successful.</h1>)}
                </span>
                <span>
                    {!completed && (<button onClick={deleteEvent}>Confirm delete</button>)}
                    <button onClick={cancelDeleteAction}><Link to="/">Back to home page</Link></button>
                </span>
            </section>
        </>
    )
}