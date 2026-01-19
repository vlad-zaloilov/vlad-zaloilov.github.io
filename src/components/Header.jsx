import { NavLink, Link } from "react-router";

import "../styling.css"

function HeaderButton({buttonText}) {
    return (
        <button className="header-button">
            {buttonText}
        </button>
    );
}

export default function Header() {

    return(
        <nav className="header-row">
            
            <NavLink to="/" className="header-button">
                About Me
            </NavLink>
            
            <NavLink to="/ProgrammingProjects" className="header-button">
                Programming Projects
            </NavLink>

            <NavLink to="/3DProjects" className="header-button">
                3D Projects
            </NavLink>

            <NavLink to="/ContactInformation" className="header-button">
                Contact Information
            </NavLink>
        </nav>
    );
};