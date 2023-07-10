import './Seat.css'

export function Seat({seat, toggle, setSeat}) {

    const selectSeat = () => {
        toggle()
        setSeat(seat.seatNumber)
    }

    return (
        <span id="seat-wrapper">
            <span style={seat.occupancy === "occupied" ? {opacity: 0.1} : {opacity: 1}}>
                {seat.occupancy !== "occupied" ? (<button onClick={selectSeat}>{seat.seatNumber}</button>) : (<button>{seat.seatNumber}</button>)}
            </span>
        </span>
    )
}