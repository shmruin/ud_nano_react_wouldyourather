import React from 'react'
import UserInfoNav from '../components/UserInfoNav'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-light mb-3'>
            <div className='container'>
                <UserInfoNav />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">DashBoard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">LeaderBoard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Create New Poll</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}