import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import Table from './Table'


class Leaderboard extends Component {
    render() {

        const { authedUser, users, questions } = this.props

        return (
            <div className='container w-75'>
                <Title mainTitle='Would You Rather...?' subTitle="Check your and other's score!" />
                <Table users={users} authedUser={authedUser} />
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {

    return {
        authedUser: authedUser,
        questions: questions,
        users: users,
    }
}

export default connect(mapStateToProps)(Leaderboard)