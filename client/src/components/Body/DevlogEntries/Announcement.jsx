import { useEffect, useState } from "react";
import { api } from "../../../utils/utils";
import './Announcement.css'
import { weekReprExtended, weekRepr } from "../../../utils/dateRepr";
import {FaCalendarAlt} from 'react-icons/fa'

export function Announcement() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')

    const formatDate = () => {
        const options = {month: 'short', day: 'numeric'}
        const x = new Date(data.date)
        return `${x.toLocaleDateString('en-GB', options)}`
    }

    const date = formatDate()

    useEffect(() => {
        api.get('/devlog')
            .then((res) => {
                setData(res.data[0])
            })
            .catch((err) => {
                setErr(err.message)
            })
    }, [])

    return (
        <>
            <span id="announcement-wrapper">
                {err && (<h2>{err}</h2>)}
                {data ? (<span>
                    <h4>{data.title}</h4>
                    <h5><FaCalendarAlt /> {date}</h5>
                    <p>{data.entry}</p>
                </span>) : (<h3>No data.</h3>)}
            </span>

        </>
    )
}