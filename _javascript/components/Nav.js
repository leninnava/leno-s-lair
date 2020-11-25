import React from "react";
import ReactDOM from "react-dom";

export const Nav = (props) => {
    return (
        <nav className={props.location == "Home" ? "nav nav--home" : "Sections" ? "nav nav--section" : ""}>
            <ul>
                <li>
                    <a className="link-1" href="#projects">Projects,</a>
                </li>
                <li>
                    <a className="link-2" href="#">Posts;</a>
                </li>
                <li>
                    <a className="link-3" href="#">About me.</a>
                </li>
            </ul>
        </nav>
    )
};