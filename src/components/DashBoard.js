import React from 'react'
import {Link} from "react-router-dom";
export function Topbar () {
    return (
       
        <div className="sidebar">
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/create-user">Add User</Link>
            </li>
        </ul>
    </div>
    )
}

