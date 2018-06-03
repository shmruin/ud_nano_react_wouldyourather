import React, { Component, Fragment } from 'react'
import userImg from '../img/user.png'

class UserInfoNav extends Component {

    render() {

        const { users, authedUser } = this.props

        return (
            <div>
                {authedUser == null 
                    ? <div>
                        <img src={userImg} className='img-fluid rounded-circle' width='40' height='40' />
                        <span className="font-weight-bold"> Guest</span>
                       </div>
                    : <div>
                        <img src={users[authedUser].avatarURL} className='img-fluid rounded-circle' width='50' height='50' />
                        <span className="font-weight-bold"> {users[authedUser].name}</span>
                      </div>
                }
            </div>
        )
    }
}

export default UserInfoNav