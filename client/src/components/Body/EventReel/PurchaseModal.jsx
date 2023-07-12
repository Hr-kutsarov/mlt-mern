import './PurchaseModal.css'
import { IoIosCloseCircle } from 'react-icons/io'
import { useState } from 'react'
import { api } from '../../../utils/utils'
import { Loading } from './Loading'
import { Link } from 'react-router-dom'
import { SeatsLayout } from '../SeatSchema/SeatsLayout'
import CircularProgress from '@mui/material/CircularProgress';

export function PurchaseModal({setToggleModal, data, user, price, formattedDate}) {

    const [err, setErr ] = useState('')
    const [loading, setLoading] = useState(false)
    const [completed, completePurchase] = useState(false)
    // hardcoded seat number until the seat schema is complete
    const [seat, setSeat] = useState('unset')

    const [toggleSeatsLayout, setToggleSeatsLayout] = useState(false)

    const closeModal = (e) => {
        e.preventDefault()
        setToggleModal(false)
    }

    const toggleSeatsModal = () => {
        setToggleSeatsLayout(!toggleSeatsLayout)
    }

    const handlePurchase = async () => {
        if (isNaN(seat)) {
            alert('Invalid seat number')
            return
        }

        setLoading(true)

        const context = {
            title: data.title,
            date: formattedDate,
            price: price,
            seat: seat,
            owner: user
        }

        setTimeout(() => {
            api.post('/tickets', context)
            .then((res) => {
                if (res.status === 201) {
                    console.log('Ticket purchased')
                    completePurchase(true)
                }
                // console.log(res.data)
            })
            .catch((err) => {
                setErr(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
        }, 6000)
        }

    return (
        <span id="purchase-modal-wrapper">
            {toggleSeatsLayout && (<SeatsLayout toggle={toggleSeatsModal} setSeat={setSeat}/>)}
            <section id="purchase-modal">
                <button onClick={closeModal}><IoIosCloseCircle /></button>
            {!loading && !completed && !err && (
                <>
                    <span id="purchase-modal-grid">
                        <label>Selected play:</label>
                        <h3>{data.title}</h3>
                        <label>Date:</label>
                        <h4>{formattedDate}</h4>
                        <label>Final price:</label>
                        <h4>${price}</h4>
                        <label>User ID:</label>
                        <p>{user}</p>
                        <label>Selected seat:</label>
                        <h4>{seat}</h4>
                    </span>
                    <span id="purchase-modal-button-box">
                        <button onClick={toggleSeatsModal}>SELECT SEAT</button>
                        <button onClick={handlePurchase}>CONFIRM</button>
                    </span>
                </>
            )}
            {err && !loading && (<h1>{err}</h1>)}
            {loading && (
                <>
                    <h1>Validating purchase</h1>
                    <CircularProgress />
                    <h2>Please wait...</h2>
                </>
            )}
            {!loading && completed && (
                <>
                    <h1>Purchase completed</h1>
                    <span id="purchase-modal-button-box">
                        <Link to="/profile">VIEW TICKETS</Link>
                        <button onClick={closeModal}>CLOSE</button>

                    </span>
                </>
            )}
            </section>
        </span>
    )
}