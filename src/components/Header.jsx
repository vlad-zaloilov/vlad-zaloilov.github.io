import { HeaderButton } from "../components/Button"

import "../styling.css"

export default function Header() {

    return(
        <div className="header-row">
            <HeaderButton buttonText="About Me"/>
            <HeaderButton buttonText="Programming Projects"/>
            <HeaderButton buttonText="3D Projects"/>
            <HeaderButton buttonText="Contact Information"/>
        </div>
    );
}