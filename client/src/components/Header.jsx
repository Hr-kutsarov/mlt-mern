import './Header.css';

export function Header() {
    return (
        <>
        <div className='header'>
            <div id='logo-box'>
                <span id='company-logo-image'></span>
                <span id='company-logo-text'>Company logo text</span>
            </div>
            <nav>
                <ul>
                    <li>Upcoming</li>
                    <li>Newest</li>
                    <li>Top Rated</li>
                    <li>Promo</li>
                    <li>Login/Register</li>
                </ul>
            </nav>
        </div>
        </>
    )
}