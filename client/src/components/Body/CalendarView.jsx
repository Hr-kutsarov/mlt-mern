import './CalendarView.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_DEVLOGS } from '../queries/devlogQueries.js'

export function CalendarView() {
    const [arr, setArr] = useState([])
    const { loading, error, data } = useQuery(GET_ALL_DEVLOGS, {
        onCompleted: (data) => {
            
            
            let result = []
            for (let el of data.getAllDevlogs) {
                // setArr([...arr, el])
                result.push({id: el._id,title: el.title, date: el.created})
            }
            setArr(result)
        }    
    })    

    return (
        <>
            <div id='calendar-view-wrapper'>
                <section id='Calendar'>
                    <FullCalendar 
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    // removes the columns for Sat and Sun
                    // weekends={false}
                    events={arr}
                    />
                </section>
                <section>
                    <article>
                        {/* just to check how this will look like */}
                        <h1>Text</h1>
                        <p>Text</p>
                        <p>Text</p>
                    </article>
                </section>
            </div>
        </>
    )
}