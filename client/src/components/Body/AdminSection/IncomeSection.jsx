import './IncomeSection.css'

export function IncomeSection({ticketData}) {
    
    const calcTotal = () => {
        let arr = ticketData.map((ticket) => ticket.price)
        const sum = arr.reduce((acc, cv) => acc + cv, 0)
        return sum.toFixed(2)
    }

    return (
        <span id="income-section-wrapper">
            <span>
                <h1>Tickets</h1>
                <h4>Sold Total: {ticketData.length}</h4>
            </span>
            <span>
                <h1>Income </h1>
                <h4>Total: ${calcTotal()}</h4>
            </span>
        </span>
    )
}