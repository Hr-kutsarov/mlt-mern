import { useEffect, useState } from "react";
import { api } from "../../../utils/utils";
import './Announcement.css'

export function Announcement() {
    const [data, setData] = useState([])
    const [err, setErr] = useState('')

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
                    <h5>{data.date.slice(0,10)}</h5>
                    <p>{data.entry}</p>
                </span>) : (<h3>No data.</h3>)}
            </span>

        </>
    )
}