import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav =()=> {
    return (
        <div className="navbar">
        <div className="Container">
        <ul >
            <Link to="/Home">Hem</Link>
            <Link to="/Annonser">Annonser</Link>
            <Link to="/About">Om oss</Link>
            <Link to="/Paintings">Kända verk</Link>
            <Link to="/PostPainting">Post</Link>

        </ul>

        </div>
        </div>
    )
}
export default Nav;