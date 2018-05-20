import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import cardImg from '../img/crossRoad.jpg'
import AorB from './AorB'
import { handleAnswerQuestion } from '../actions/shared'


class VoteContent extends Component {
    onSelectOption = (e, option) => {
        e.preventDefault()

        //TODO: After dispatch redirect to the result page

        const { dispatch, id, authedUser} = this.props

        dispatch(handleAnswerQuestion({
            authedUser: authedUser,
            qid: id,
            answer: option,
        }))
    }

    render() {
        return (
            <div className='container w-75'>
                <Title />
                <AorB onSelectOption={this.onSelectOption}/>
            </div>
        )
    }
}


function mapStateToProps({ authedUser }, props) {
    const { id } = props.match.params

    return {
        id,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(VoteContent)