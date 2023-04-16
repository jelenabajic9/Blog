import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <header>
            <div className="max-width">
                <ul>
                    <li className="logo">  <Link to="/"><img src={logo} alt="logo" /></Link></li>
                    <li className="add-post"><Link to="/add-blog">Dodaj post</Link></li>
                </ul>
            </div>
        </header>
    )
}