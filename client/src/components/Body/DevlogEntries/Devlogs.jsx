import './Devlogs.css'
import './Devlog.css'
import { CreateDevlog } from './CreateDevlog.jsx'
import { ViewDevlog } from './ViewDevlog.jsx'
import { EditDevlog } from './EditDevlog.jsx'
import { FaHome } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { Devlog } from './Devlog'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDevStore } from '../../../store/appStore'
import { DeleteDevlog } from './DeleteDevlog.jsx'
import { api } from '../../../utils/utils'
import { weekRepr, yearRepr} from '../../../utils/dateRepr'
// import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries.js'
// import { useQuery } from '@apollo/client'

export function Devlogs() {
    const add = useDevStore((state) => state.add)
    const edit = useDevStore((state) => state.edit)
    const details = useDevStore((state) => state.details)
    const del = useDevStore((state) => state.del)

    const toggleCreateOn = useDevStore((state) => state.toggleCreateOn)
    const toggleCreateOff = useDevStore((state) => state.toggleCreateOff)
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)
    const toggleDetailsOff = useDevStore((state) => state.toggleDetailsOff)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const date = new Date()
    // shows the create form and hides the edit form
    const handlerNEW = (e) => {
        e.preventDefault()
        toggleCreateOn()
        toggleEditOff()
    }

    // hides the add form, the delete panel and the form
    const handlerHIDE = (e) => {
        e.preventDefault()
        toggleCreateOff()
        toggleDeleteOff()
        toggleEditOff()
        toggleDetailsOff()
    }

    // returns to the top of the page
    const handlerReturn = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    // data fetching
    const getAllDevlogs = async () => {
        api.get('/devlog')
        .then((response) => {
                setLoading(false)
                setData(response.data)
            }).catch((error) => {
                setError(error.message)
            })
        }

    useEffect(() => {
        getAllDevlogs()
        // passing data as an argument here will track the state
        // and run the function again if state changes
    },[data])

    return ( 
        <span id="collection-devlog-wrapper">
            <section id="devlog-left">
                <nav>
                    <Link to="/">
                        <span>
                            HOME <FaHome />
                        </span>
                    </Link>
                    <span onClick={handlerNEW}>
                        NEW
                        <FaPlus />
                    </span>
                    <span onClick={handlerHIDE}>
                        <span>{date.getHours()}:{date.getMinutes()}</span>
                        <FaAngleUp />
                    </span>
                </nav>
                <div id="devlog-form-wrapper">
                    {add && (<CreateDevlog />)}
                    {edit && (<EditDevlog />)}
                </div>
                <div id="devlog-wrapper-bg">
                    <span>{weekRepr[date.getDay()]}</span>
                    <span>{date.getDate()} {yearRepr[date.getMonth()]} </span>
                </div>
            </section>
            <section id="devlog-mid">
                {error && (<span>{error}</span>)}
                {!loading && !error && (data.map((devlog) => (<Devlog key={devlog._id} devlog={devlog}/>)))}
                {(data.length > 2) && (<span id='devlog-return-top-btn' onClick={handlerReturn}><FaAngleUp /></span>)}
            </section>
            <section id="devlog-right">
                {del && (<DeleteDevlog />)}
                {details && (<ViewDevlog />)}
            </section>
        </span>
    )
}
