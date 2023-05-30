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


    const date = new Date()
    
    const handlerNEW = (e) => {
        e.preventDefault()
        toggleCreateOn()
        toggleEditOff()
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
                        <span>
                            <span>{date.getHours()}:{date.getMinutes()}</span>
                            Tuesday
                            <FaAngleUp />
                        </span>
                    </nav>
                    <div id="devlog-form-wrapper">
                        {add && (<CreateDevlog />)}
                        {edit && (<EditDevlog />)}
                        {del && (<DeleteDevlog />)}
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