import './Devlogs.css'
import './Devlog.css'
import { CreateDevlog } from './CreateDevlog.jsx'
import { ViewDevlog } from './ViewDevlog.jsx'
import { EditDevlog } from './EditDevlog.jsx'
import { FaHome } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { Devlog } from './Devlog'
import { Link } from 'react-router-dom'
import { useDevStore } from '../../../store/appStore'
import { DeleteDevlog } from './DeleteDevlog.jsx'
// import { GET_ALL_DEVLOGS } from '../../queries/devlogQueries.js'
// import { useQuery } from '@apollo/client'
import axios from 'axios'



export function Devlogs() {
    const id = useDevStore((state) => state.id)
    const title = useDevStore((state) => state.title)
    const created = useDevStore((state) => state.created)
    const entry = useDevStore((state) => state.entry)
    const add = useDevStore((state) => state.add)
    const edit = useDevStore((state) => state.edit)
    const details = useDevStore((state) => state.details)
    const del = useDevStore((state) => state.del)

    const toggleCreateOn = useDevStore((state) => state.toggleCreateOn)
    const toggleCreateOff = useDevStore((state) => state.toggleCreateOff)
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)




    const date = new Date()

    // const { loading, error, data } = useQuery(GET_ALL_DEVLOGS)    
    
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
    }

    // returns to the top of the page
    const handlerReturn = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})

    }

    return (
        <>  
                <div id="collection-devlog-wrapper">
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
                            {del && (<DeleteDevlog />)}
                            {add && (<CreateDevlog />)}
                            {edit && (<EditDevlog />)}
                        </div>
                        <div id="devlog-wrapper-bg">
                            <span>{weekRepr[date.getDay()]}</span>
                            <span>{date.getDate()} {yearRepr[date.getMonth()]} </span>
                        </div>
                    </section>
                    <section id="devlog-mid">
                        {/* {!loading && !error && (data.getAllDevlogs.map((devlog) => (<Devlog key={devlog._id} devlog={devlog}/>)))}
                        <span id='devlog-return-top-btn' onClick={handlerReturn}><FaAngleUp /></span> */}
                    </section>
                    <section id="devlog-right">
                        {details && (<ViewDevlog />)}
                    </section>
                </div>

        </>
    )
}


    const weekRepr = {
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        7: 'Sun'
    }

    const yearRepr = {
        0: 'Jan',
        1: 'Feb',
        3: 'March',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }
