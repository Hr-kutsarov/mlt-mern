import './CalendarView.css'
import { api } from '../../../utils/utils.js';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useEffect, useState } from 'react'
import { Header } from '../../Header'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { FaHandPointRight } from 'react-icons/fa'
import { useEventStore } from '../../../store/appStore';

export function CalendarView() {
    // global state
    const isLoggedIn = window.sessionStorage.getItem('isLoggedIn')
    const setTitle = useEventStore((state) => state.setTitle)
    const setContent = useEventStore((state) => state.setContent)
    const setPic = useEventStore((state) => state.setPictureUrl)
    const setPrice = useEventStore((state) => state.setPrice)
    const setDate = useEventStore((state) => state.setDate)

    // local state
    const [arr, setArr] = useState([])
    const [data, setData] = useState([])
    const [toggleModal, setToggleModal] = useState(false)
    
   
    const handleDateClick = (args) => {
        // alert(args.dateStr)
    }

    const handleEventClick = (args) => {
        const data = args.event._def.extendedProps
        
        try {
            api.get(`/plays/${data._id}`)
                .then((res) => {
                    setData(res.data)
                    setToggleModal(!toggleModal)
                    setTitle(res.data.title)
                    setContent(res.data.content)
                    setPrice(res.data.price)
                    setPic(res.data.pictureUrl)
                    setDate(res.data.date)
                    window.sessionStorage.setItem('eventId', data._id)
                })
        } catch(err) {
            console.log(err)
        }
    }

    const handleHideModal = () => {
        setToggleModal(false)
    }
    const getAllEvents = async () => {
        try {
            api.get('/plays')
                .then((res) => {
                    setArr(res.data)
                })
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getAllEvents()
    },[])

    return (
        <>  
            <Header />
            <div id='calendar-view-wrapper'>
                <section id='Calendar'>
                    <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                    initialView="dayGridMonth"
                    events={arr}
                    dateClick={handleDateClick}
                    firstDay="1"
                    eventClick={handleEventClick}
                    contentHeight="100vh"
                    aspectRatio="1,8"
                    />
                </section>
                {toggleModal && (
                    <section id="calendar-view-details-modal">
                        <span>
                            <h1>{data.title}</h1>
                            <p>{data.summary}</p>
                            <p>{data.content}</p>
                            <h5>Price: {data.price.toFixed(2)} BGN</h5>
                        </span>
                        <span>
                            {isLoggedIn ? 
                            (<button onCLick={handleEventClick}><Link id="calendar-view-buy-button" to={'../details-view'}>Buy ticket <FaShoppingCart /></Link></button>
                                ) : (
                            <button><Link id="calendar-view-details-button" to={'../details-view'}>Detailed view <FaHandPointRight /></Link></button>)
                            }
                            <button onClick={handleHideModal}>Cancel <FaTimes /></button>
                        </span>
                    </section>
                )}
            </div>
        </>
    )
}