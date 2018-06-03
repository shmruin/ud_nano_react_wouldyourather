import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfoNav from '../components/UserInfoNav'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'


class Nav extends Component {
    logout = (e) => {
        e.preventDefault()

        const { dispatch, authedUser } = this.props

        authedUser !== null
            ? dispatch(setAuthedUser(null))
            : null
    }

    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-light bg-light mb-3'>
                <div className='container'>
                    <UserInfoNav users={this.props.users} authedUser={this.props.authedUser} />
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
                            <NavLink to='/login' className='nav-link' style={{ textDecoration: 'none' }} onClick={(e) => this.logout(e)}>
                                Sign Out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

// export default Nav

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser: authedUser,
        users: users,
    }
}

export default connect(mapStateToProps)(Nav)