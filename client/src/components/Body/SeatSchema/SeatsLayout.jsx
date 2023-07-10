import './SeatsLayout.css'
import { Seat } from './Seat'
import { IoIosCloseCircle } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { api } from '../../../utils/utils'
import { useEventStore } from '../../../store/appStore'
import { Loading } from '../EventReel/Loading'

export function SeatsLayout({toggle, setSeat}) {

    const eventTitle = useEventStore((state) => state.title)
    const [loading, setLoading] = useState(true)
    const [unavailable, setUnavailable] = useState([])
    const calculateSeats = () => {
        let arr = []
        const maxSeats = 51
        for (let i=1;i<maxSeats;i++) {
            if (!unavailable.includes(i)) {
                arr.push({seatNumber: i, occupancy: "available"})
            } else {
                arr.push({seatNumber: i, occupancy: "occupied"})
            }
            
        }
        return arr
    }

    const seats = calculateSeats()

    const extractValues = (objArray) => {
        let arr = []
        for (let i=0;i<objArray.length; i++) {
            arr.push(objArray[i].seat)
        }
        setUnavailable(arr)
    }

    useEffect(() => {
        api.post('/tickets-byname', {title: eventTitle})
            .then((res) => {
                extractValues(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <span id="seats-layout-wrapper">
            <button onClick={toggle}><IoIosCloseCircle /></button>
            {loading && (<Loading />)}
            {!loading && (
                <>
                <h3>Select Seat</h3>
                <span>Stage</span>
                <section id="seats-grid">
                    {seats.map((seat) => (<Seat key={seat.seatNumber} seat={seat} toggle={toggle} setSeat={setSeat}/>))}
                </section>
                </>
            )}
        </span>
    )
}