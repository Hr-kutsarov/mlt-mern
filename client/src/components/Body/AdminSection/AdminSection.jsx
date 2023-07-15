import './AdminSection.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useEventStore } from '../../../store/appStore'
import { api } from '../../../utils/utils'
import { Loading } from '../EventReel/Loading'
import { Header } from '../../Header'
import { IncomeSection } from './IncomeSection'
import { ChartSection } from './ChartSection'


export function AdminSection() {
    const eventData = useEventStore((state) => state.data)
    const [ticketData, setTicketData] = useState([])
    const [loading, setLoading] = useState(true)

    const getTickets = async () => {
        api.get('/tickets')
            .then((res) => {
                setTicketData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getTickets()
    }, [])

    return (
        <>
        <Header />
        <span id="admin-section-wrapper">
            <section id="admin-section">
                <IncomeSection ticketData={ticketData}/>
                <ChartSection ticketData={ticketData}/>
            </section>
        </span>
        </>
    )
}