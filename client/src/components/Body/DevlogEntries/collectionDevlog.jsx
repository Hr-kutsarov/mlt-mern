import { useState } from 'react'
import './collectionDevlog.css'
import './devlog.css'
import { CreateDevlog } from './createDevlog'
import { ViewDevlog } from './viewDevlog'
import { EditDevlog } from './editDevlog'
import { FaHome } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { Devlog } from './devlog'
import { Link } from 'react-router-dom'
import { useDevStore } from '../../../store/appStore'
import { DeleteDevlog } from './DeleteDevlog'

export function CollectionDevlog() {
    const add = useDevStore((state) => state.add)
    const edit = useDevStore((state) => state.edit)
    const details = useDevStore((state) => state.details)
    const del = useDevStore((state) => state.del)

    const toggleCreateOn = useDevStore((state) => state.toggleCreateOn)
    const toggleEditOn = useDevStore((state) => state.toggleEditOn)
    const toggleDeleteOn = useDevStore((state) => state.toggleDeleteOn)

    const toggleCreateOff = useDevStore((state) => state.toggleCreateOff)
    const toggleEditOff = useDevStore((state) => state.toggleEditOff)
    const toggleDeleteOff = useDevStore((state) => state.toggleDeleteOff)


    const weekRepr = {
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        7: 'Sun'
    }

    const yearRepr = {
        0: 'Jan',
        1: 'Feb',
        3: 'March',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }

    const date = new Date()
    
    const handlerNEW = (e) => {
        e.preventDefault()
        toggleCreateOn()
        toggleEditOff()
    }

    const handlerHIDE = (e) => {
        e.preventDefault()
        toggleCreateOff()
        toggleDeleteOff()
        toggleCreateOff()
    }
    return (
        <>  
                <div id="collection-devlog-wrapper">
                    <section id="devlog-left">
                        <nav>
                            <Link to="/">
                                <span>
                                    HOME <FaHome />
                                </span>
                            </Link>
                            <span onClick={handlerNEW}>
                                NEW
                                <FaPlus />
                            </span>
                            <span onClick={handlerHIDE}>
                                <span>{date.getHours()}:{date.getMinutes()}</span>
                                <FaAngleUp />
                            </span>
                        </nav>
                        <div id="devlog-form-wrapper">
                            {del && (<DeleteDevlog />)}
                            {add && (<CreateDevlog />)}
                            {edit && (<EditDevlog />)}
                        </div>
                        <div id="devlog-wrapper-bg">
                            <span>{weekRepr[date.getDay()]}</span>
                            <span>{date.getDate()} {yearRepr[date.getMonth()]} </span>
                        </div>
                    </section>
                    <section id="devlog-mid">
                        <Devlog />
                        <Devlog />
                        <Devlog />
                    </section>
                    <section id="devlog-right">
                        {details && (<ViewDevlog />)}
                    </section>
                </div>

        </>
    )
}