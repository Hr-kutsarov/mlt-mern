import './Event.css';

export function Event({ event }) {

    return (
        <>
            <article className='play-hero'>
                <img id='p123' alt=''></img>
                <h3>{event.title}</h3>
                <p>{event.content}</p>
                <div className="hero-buttons" >
                    <button className="create-type-btn">Create</button>
                    <button className="edit-type-btn">Edit</button>
                    <button className="delete-type-btn">Delete</button>
                </div>
            </article>
        </>
    )
}