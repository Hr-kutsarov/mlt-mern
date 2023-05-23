import './Play.css';

export function Play() {
    return (
        <>
            <article>
                <img id='article1'></img>
                <h3>Test title</h3>
                <p>Test Content</p>
                <div className="buttons" >
                    <button className="create-type-btn">Create</button>
                    <button classname="edit-type-btn">Edit</button>
                    <button className="delete-type-btn">Delete</button>
                </div>
            </article>
        </>
    )
}