import './Play.css';

export function Play() {
    return (
        <>
                <article className='play-hero' id='123'>
                    <img id='p123' alt=''></img>
                    <h3>Article Title 1</h3>
                    <p>Article paragraph text</p>
                    <div className="hero-buttons" >
                        <button className="create-type-btn">Create</button>
                        <button classname="edit-type-btn">Edit</button>
                        <button className="delete-type-btn">Delete</button>
                    </div>
                </article>
        </>
    )
}