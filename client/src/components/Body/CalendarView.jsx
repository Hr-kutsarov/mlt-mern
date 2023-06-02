import './CalendarView.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_DEVLOGS } from '../queries/devlogQueries.js'

export function CalendarView() {
    const [arr, setArr] = useState([])
    const { loading, error, data } = useQuery(GET_ALL_DEVLOGS, {
        onCompleted: (data) => {
            let result = []
            for (let el of data.getAllDevlogs) {
                result.push({id: el._id,title: el.title, date: el.created})
            }
            setArr(result)
        }    
    })    

    return (
        <>
            <div id='calendar-view-wrapper'>
                <section>
                    <FullCalendar 
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    // weekends={false}
                      events={arr}
                    />
                </section>
                <section>
                    <article>

                    </article>
                </section>
            </div>
        </>
    )
}