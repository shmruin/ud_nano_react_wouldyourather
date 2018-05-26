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
                        {/* NavLink with BS4 nav-link */}
                        <NavLink to='/' exact className='nav-link' style={{ textDecoration: 'none' }}>
                            DashBoard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/leaderboard' className='nav-link' style={{ textDecoration: 'none' }}>
                            LeaderBoard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/add' className='nav-link' style={{ textDecoration: 'none' }}>
                            Create New Poll
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/789' className='nav-link' style={{ textDecoration: 'none' }}>
                            Sign Out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}