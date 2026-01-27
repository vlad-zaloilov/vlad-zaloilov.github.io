"use client"

import Link from "next/link";

/*
function HeaderButton({buttonText}) {
    return (
        <button className="header-button">
            {buttonText}
        </button>
    );
}
*/

export default function Header() {

    return(
        <nav className="header-row">
            
            <Link href="/" className="header-button ${pathname === '/' ? 'active' : ''}`">
                About Me
            </Link>
            
            <Link href="/ProgrammingProjects" className="header-button">
                Programming Projects
            </Link>

            <Link href="/3DProjects" className="header-button">
                3D Projects
            </Link>

            <Link href="/ContactInformation" className="header-button">
                Contact Information
            </Link>
        </nav>
    );
};