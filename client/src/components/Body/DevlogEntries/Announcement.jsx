import { useEffect, useState } from "react";
import { api } from "../../../utils/utils";
import './Announcement.css'
import { weekReprExtended, weekRepr } from "../../../utils/dateRepr";
import {FaCalendarAlt} from 'react-icons/fa'
import { Loading } from '../EventReel/Loading'
import { Link } from "react-router-dom";

export function Announcement() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)
    const userLoggedIn = window.sessionStorage.getItem('isLoggedIn')

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
            setLoading(false)
        })
        .catch((err) => {
            setErr(err.message)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <span id="announcement-wrapper">
                {loading && (<Loading />)}
                {!loading && err && (<h2>{err}</h2>)}
                {!loading && data && !err && (
                    <span>
                        <h4>{data.title}</h4>
                        <p><FaCalendarAlt /> {date}</p>
                        <p>{data.entry}</p>
                        {userLoggedIn && (<Link to="/profile">View profile</Link>)}
                    </span>
                )}
            </span>
        </>
    )
}