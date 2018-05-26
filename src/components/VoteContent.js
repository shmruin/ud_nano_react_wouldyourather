import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import AorB from './AorB'
import cardImg from '../img/crossRoad.jpg'
import { handleAnswerQuestion } from '../actions/shared'


class VoteContent extends Component {
    state = {
        isAnswered: false,
        selected: null,
    }

    componentDidMount() {
        this.setState({
            isAnswered: this.props.isAnswered,
            selected: this.props.selected,
        })
    }

    onSelectOption = (e, option) => {
        e.preventDefault()

        const { dispatch, id, authedUser} = this.props

        let that = this

        dispatch(handleAnswerQuestion({
            authedUser: authedUser,
            qid: id,
            answer: option,
        }, this.endVote)) 
    }

    endVote = (option) => {
        this.setState({
            isAnswered: true,
            selected: option,
        })
    }

    onNotSelectOption = (e, option) => {
        e.preventDefault()

        //No special events
    }

    render() {
        return (
            <div className='container w-75'>
                {this.state.isAnswered === true
                    ? <Fragment>
                        <Title mainTitle='People Rather...' subTitle='See the results!' />
                        <AorB onSelectOption={this.onNotSelectOption} selected={this.state.selected} qid={this.props.id} />
                      </Fragment>
                    : <Fragment>
                        <Title mainTitle='Would You Rather...?' subTitle='Give it a Vote Today!' />
                        <AorB onSelectOption={this.onSelectOption} selected={this.state.selected} qid={this.props.id} />
                      </Fragment>
                }
            </div>
        )
    }
}


function mapStateToProps({ users, authedUser }, props) {
    const { id } = props.match.params

    //Check if question is already answered and set state to these values priorly.
    let isAnswered = (users[authedUser].answers[id] !== undefined ? true : false)
    let selected = (isAnswered === true ? users[authedUser].answers[id] : null)

    return {
        isAnswered,
        selected,
        id,
        authedUser: authedUser,
    }
}

export default connect(mapStateToProps)(VoteContent)