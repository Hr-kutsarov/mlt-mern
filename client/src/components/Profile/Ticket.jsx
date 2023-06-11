import './Ticket.css'
import QRCode from "react-qr-code";

export function Ticket({ticket}) {
    
    const value = `${ticket._id} - ${ticket.title} - ${ticket.seat} - ${ticket.seat}`
    return (
    <>
        <span id="ticket-card-wrapper">
            <div id="ticket-info">
                <h3>{ticket.title}</h3>
                <h6>{ticket._id}</h6>
                <h5>{ticket.date}</h5>
                <h5>Seat: {ticket.seat}</h5>
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
        </span>
    </>
    )
}