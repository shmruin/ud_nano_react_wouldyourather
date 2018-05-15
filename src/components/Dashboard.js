import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'


class Dashboard extends Component {
    state = {
        btnActive: 'answered',
    }

    intoVote = (e, id) => {
        e.preventDefault()

        //TODO: Goto poll page
    }

    filterAnsweredList = (e, val) => {
        e.preventDefault()

        this.setState({
            btnActive: val,
        })

        e.target.blur()
    }

    render() {

        const { questions, questionIds, users, authedUser } = this.props
        const { btnActive } = this.state

        return (
            <div className='container w-75'>
                <Title />
                <div className='btn-group d-flex mx-auto mb-2' role='group' onClick={(e) => this.filterAnsweredList(e, e.target.value)}>
                    <button className={'btn btn-outline-primary w-100 ' + (this.state.btnActive === 'answered' ? 'active' : '')} value='answered'>Answered</button>
                    <button className={'btn btn-outline-secondary w-100 ' + (this.state.btnActive === 'unanswered' ? 'active' : '')} value='unanswered'>Unanswered</button>
                </div>
                <ul className='dashboard-list list-group mx-auto'>
                    {questionIds.filter((id) => {
                        if(btnActive === 'answered') {
                            return id in users[authedUser].answers ? true : false
                        } else {
                            return id in users[authedUser].answers ? false : true
                        }
                    }).map((id) => (
                        <a key={id} className='list-group-item list-group-item-action' onClick={(e) => this.intoVote(e, id)}>
                            {questions[id].optionOne.text} <strong>OR</strong> {questions[id].optionTwo.text} ?
                        </a>
                    ))}
                </ul>
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

export default connect(mapStateToProps)(Dashboard)