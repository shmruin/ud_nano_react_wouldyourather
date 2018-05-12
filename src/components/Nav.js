import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        DashBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        LeaderBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        Create New Poll
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' activeClassName='active'>
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}