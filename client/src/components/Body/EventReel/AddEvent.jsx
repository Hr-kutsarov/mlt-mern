import './AddEvent.css'
// import { ADD_EVENT } from '../mutations/eventMutations.js'
// import { GET_EVENTS } from '../queries/eventQueries.js';
// import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useEventStore } from '../../../store/appStore'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { api } from '../../../utils/utils'
import { useArtistStore } from '../../../store/appStore';
import { SelectedArtist } from './SelectedArtist';
// icons
import { FaCalendar } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io'

export function AddEvent() {
    // const eventId = useEventStore((state) => state.id)
    const pictureUrl = useEventStore((state) => state.pictureUrl)
    const setPictureUrl = useEventStore((state) => state.setPictureUrl)

    // global state
    const artists = useArtistStore((state) => state.artistsArray)
    const selectedArtists = useArtistStore((state) => state.selectedArtists)
    const setSelectedArtists = useArtistStore((state) => state.setSelectedArtists)

    const [title, setTitle] = useState(`Event Title`)
    // const [pictureUrl, setPictureUrl] = useState(`"Paste the URL of the picture here"`)
    const [summary, setSummary] = useState(`Summary of the event`)
    const [content, setContent] = useState(`Event content`)
    const [price, setPrice] = useState('Please input a number here.')
    const [submitted, setSubmitted] = useState(false)
    const [date, setDate] = useState('')
    const [err, setErr] = useState('')
    const [toggleArtistsModal, setToggleArtistsModal] = useState(false)

    // const date = new Date()

    // const [addEvent] = useMutation(ADD_EVENT, {
    //     variables: { title, summary, content, pictureUrl },
    //     refetchQueries: [{ query: GET_EVENTS }]
    // }) 

    const clearInputData = () => {
        setTitle('')
        setSummary('')
        setContent('')
        setPrice('')
    }

    const toggleModal = () => {
        setToggleArtistsModal(!toggleArtistsModal)
        setSelectedArtists([])
    }

    const confirmSelected = () => {
        setToggleArtistsModal(!toggleArtistsModal)
    }

    const addEvent = async () => {
        try {
            const context = {
                title: title, 
                pictureUrl: pictureUrl, 
                summary: summary,
                content: content,
                price: price,
                date: date,
                artists: selectedArtists
            }
            const response = await api.post('/plays', context)
            if (response.status === 201) {
                setSubmitted(true)
                clearInputData()
            }

        } catch (err) {
            setErr(err.message)
        }
    }
    // TODO: Improve validation logic for each field
    const submitForm = (e) => {
        e.preventDefault()

        // validation
        if(!title || !summary || !content || !pictureUrl || !price || !date) {
            return alert('There is an empty field')
        }

        if(!selectedArtists) {
            return alert('You did not select any artists!')
        }
        addEvent()
        setSelectedArtists([])
    }
    
    return (
        <>
            <div id='add-event-form-wrapper'>
                {!submitted ? (
                <>
                <button id="select-cast-button" onClick={toggleModal}>
                    Select Cast -  [ {selectedArtists.length} ] selected
                </button>
                <form id="add-event-form" onSubmit={submitForm}>
                    <h3>CREATE NEW EVENT</h3>
                    {err && (<h4>{err}</h4>)}
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <label>Event Image URL</label>
                    <input type="text" onChange={(e) => setPictureUrl(e.target.value)} value={pictureUrl} />
                    <label>Price</label>
                    <input type="text" onChange={(e) => {
                        if (isNaN(e.target.value)) {
                            alert('Input value is not a number')
                            return
                        }
                        setPrice(e.target.value)}} value={price} />
                    <label>Date</label>
                    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} />
                    <label>Summary</label>
                    <textarea onChange={(e) => setSummary(e.target.value)} value={summary} />
                    <label>Content</label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} />
                    <button>CREATE</button>
                </form>
                    {toggleArtistsModal && (          
                        <span id='artists-modal-wrapper'>
                            <span id="artists-modal">
                                <h4>Artists</h4>
                                <span>
                                    <button onClick={toggleModal}><IoIosCloseCircle /></button>
                                    {artists.map((artist) => <SelectedArtist key={artist._id} artist={artist} />)}
                                </span>
                                <button onClick={confirmSelected}>DONE</button>
                            </span>
                        </span>
                        )}
                    </>
                ) : (
                    <>
                <Link to="/">
                    <div id="submitted-event-wrapper">
                        <h1>Your form has been submitted</h1>
                        <p>Event object added successfully.</p>
                        <p>Return to homepage. <FaHome /></p>
                    </div>
                </Link>
                </>)}

                <nav id="add-event-form-navigation-box">
                    <ul>
                        <li><Link to="/"><FaHome /></Link></li>
                        <li><Link to="/calendar-view"><FaCalendar /></Link></li>
                        <li><Link to="/devlog"><FaEdit /></Link></li>
                        <li><Link to="/logout"><FaUserTimes /></Link></li>
                    </ul>
                </nav>
            </div>
            </>
    )
}