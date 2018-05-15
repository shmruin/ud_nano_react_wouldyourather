import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'

class VoteContent extends Component {
    render() {
        return (
            <div>
                <Title />
                Hi!
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    console.log(questions)
    console.log(authedUser)
    console.log(users)
    return {
        authedUser: authedUser,
        users: users,
        questions: questions,
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[b].timestamp)
    }
}

export default connect(mapStateToProps)(VoteContent)