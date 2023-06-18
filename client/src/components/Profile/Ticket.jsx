import './Ticket.css'
import QRCode from "react-qr-code";
import { FaBan } from 'react-icons/fa';
import { api } from '../../utils/utils';
import { useState } from 'react';

export function Ticket({ticket}) {
    const [msg, setMsg] = useState('')
    const value = `${ticket._id} - ${ticket.title} - ${ticket.seat} - ${ticket.seat}`
    const role = window.sessionStorage.getItem('role')

    const handleDeleteTicket = async () => {
        api.delete(`/tickets/${ticket._id}`)
            .then((res) => {
                setMsg(`${res.data.title} was deleted successfully.`)
            })
            .catch((err) => {
                setMsg(err.message)
            })
    }

    return (
    <>
        <span style={{color: "white"}}>{msg}</span>
        <span id="ticket-card-wrapper">
            <div id="ticket-info">
                <h3>{ticket.title}</h3>
                <h6>{ticket._id}</h6>
                <h4>{ticket.date}</h4>
                <h4>Seat: {ticket.seat}</h4>
            </div>
            <div id="qr-code-wrapper">
                <div>
                    <QRCode
                    size={128}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 128 128`}
                    />
                </div>
            </div>
            {role === 'moderator' ? (
                <div style={{padding: "0.3rem", cursor: "pointer", color: "var(--contrast-orange)"}} onClick={handleDeleteTicket}><FaBan /></div>
            ) : (
                <div style={{padding: "0.3rem", cursor: "pointer", color: "var(--blue-m)"}} onClick={() => {
                    alert('You have no permission to delete tickets!')
                }}><FaBan /></div>
            
            )}
            </span>
    </>
    )
}