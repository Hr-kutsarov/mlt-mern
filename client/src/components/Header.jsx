import './Header.css';
import { LogoBox } from './Header/LogoBox'
import { Navigation } from './Header/Navigation'
import { IoIosMenu } from 'react-icons/io'
import { useState } from 'react';

export function Header() {
    const [open, setOpen] = useState(false)

    const toggleNavigation = () => {
        setOpen(!open)
    }

    return (
        <>
            <header>
                <LogoBox />
                <IoIosMenu onClick={toggleNavigation}/>
            </header>
            {open && (<Navigation toggleNavigation={toggleNavigation}/>)}
        </>
    )
}