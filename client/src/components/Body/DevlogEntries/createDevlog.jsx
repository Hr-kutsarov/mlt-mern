import './createDevlog.css'

export function CreateDevlog() {
    return (
        <>
            <div id="create-devlog-wrapper">
                <form id="create-devlog-form">
                    <label>Devlog Title</label>
                    <input type="text"></input>
                    <label>Content</label>
                    <textarea>Devlog content entry.</textarea>
                </form>
            </div>
        </>
    )
}