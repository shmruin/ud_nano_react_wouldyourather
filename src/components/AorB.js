import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from './Title'
import cardImg from '../img/crossRoad.jpg'
import checkedImg from '../img/checked.png'


class AorB extends Component {
    state = {
        optionTwoVotes: null,
        optionOneVotes: null,
        toHome: false,
    }

    componentDidMount() {
        const { questions, qid, selected } = this.props

        this.setState({
            optionOneVotes: questions[qid]['optionOne'].votes.length,
            optionTwoVotes: questions[qid]['optionTwo'].votes.length,
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.selected !== this.props.selected) {
            const { questions, qid, selected } = this.props

            this.setState({
                optionOneVotes: questions[qid]['optionOne'].votes.length,
                optionTwoVotes: questions[qid]['optionTwo'].votes.length,
            })
        }   
    }

    //Card Section image with checked icon if selected
    imageWrapperFunc = (option) => {
        if(this.props.selected === option) {
            return (
                <div className='img-wrapper'>
                    <img className='overlayImage' src={checkedImg} height='100' />
                    <img className="card-img-top" src={cardImg} alt="Card image cap" height='500' />
                </div>
            )
        } else {
            return (<img className="card-img-top" src={cardImg} alt="Card image cap" height='500' />)
        }
    }

    render() {

        const { onSelectOption, selected, qid, questions, users, authedUser } = this.props
        const { optionOneVotes, optionTwoVotes } = this.state

        return (
            <div className='container'>
                <div className='card-group mx-auto mt-5'>
                    <div className='card' onClick={ (e) => { onSelectOption(e, 'optionOne') }}>
                        {this.imageWrapperFunc('optionOne')}
                        <div className='card-body'>
                            <h4 className='card-title text-center'>#{questions[qid].optionOne.text}</h4>
                            <p className='card-text text-center'>{selected !== null ? `${optionOneVotes} votes on this option which is... 
                                                                                        ${Math.round(optionOneVotes * 100 / (optionOneVotes + optionTwoVotes))} % of all!` : null}</p>
                        </div>
                    </div>
                    <div className='card' onClick={ (e) => { onSelectOption(e, 'optionTwo') }}>
                        {this.imageWrapperFunc('optionTwo')}
                        <div className='card-body'>
                            <h4 className='card-title text-center'>#{questions[qid].optionTwo.text}</h4>
                            <p className='card-text text-center'>{selected !== null ? `${optionTwoVotes} votes on this option which is... 
                                                                                        ${Math.round(optionTwoVotes * 100 / (optionOneVotes + optionTwoVotes))} % of all!` : null}</p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(AorB)