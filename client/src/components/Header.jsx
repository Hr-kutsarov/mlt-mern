import './Header.css';
import { LogoBox } from './Header/LogoBox'
import { Navigation } from './Header/Navigation'

export function Header() {
    return (
        <>
            <header>
                <LogoBox />
                <Navigation />
            </header>
        </>
    )
}