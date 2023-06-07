import './EditDevlog.css'
import './CreateDevlog.css'
import { FaArrowRight } from 'react-icons/fa'
import { useDevStore } from '../../../store/appStore.js'
import { api } from '../../../utils/utils'
// import { useMutation } from '@apollo/client'
// import { EDIT_DEVLOG } from '../../mutations/devlogMutations'
// import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries'


export function EditDevlog() {
    // togglers
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)

    // setters
    const setTitle = useDevStore((state) => state.setTitle)
    const setEntry = useDevStore((state) => state.setEntry)
    
    // getters
    const id = useDevStore((state) => state.id)
    const title = useDevStore((state) => state.title)
    const date = useDevStore((state) => state.date)
    const entry = useDevStore((state) => state.entry)
    
    // const [editDevlog] = useMutation(EDIT_DEVLOG, {
    //     variables: {id, title, created, entry},
    //     refetchQueries: [{ query: GET_ALL_DEVLOGS}]
    // })

    const editDevlog = async () => {
        api.put(`/devlog/${id}`, {title: title, date: date, entry: entry})
    }

    // form submit
    const handlerSubmitEditForm = (e) => {
        e.preventDefault()
        editDevlog()
        toggleEditOff()
    }

    return (
        <>
            <form id="edit-devlog-form" onSubmit={handlerSubmitEditForm}>
                <h2>EDIT ENTRY</h2>
                <label>TITLE</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <label>CONTENT</label>
                <textarea value={entry} onChange={(e) => setEntry(e.target.value)}></textarea>
                <button><FaArrowRight /></button>
            </form>
        </>
    )
}