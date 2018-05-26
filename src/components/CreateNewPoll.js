import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Title from './Title'
import { handleSaveQuestion } from '../actions/shared'
import fontawesome from '@fortawesome/fontawesome'
import faArrowAltCircleRight from '@fortawesome/fontawesome-free-regular/faArrowAltCircleRight'
       
fontawesome.library.add(faArrowAltCircleRight)


class CreateNewPoll extends Component {
    state = {
        inputOptionOne: null,
        inputOptionTwo: null,
    }

    handleChange = (e, option) => {
        switch(option) {
            case 'optionOne':
                this.setState({
                   inputOptionOne: e.target.value, 
                })
                break
            case 'optionTwo':
                this.setState({
                    inputOptionTwo: e.target.value,
                })
                break
            default:
                console.log('No proper input field to handle change')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { authedUser, dispatch } = this.props

        let inputA = this.refs.optionOneInput.value
        let inputB = this.refs.optionTwoInput.value

        if(inputA === '' || inputB === '') {
            alert('Need to fill in all two options!')
            return
        } else {
            dispatch(handleSaveQuestion({
                authedUser: authedUser,
                optionOne: inputA,
                optionTwo: inputB,
            }))

            this.setState({
                inputOptionOne: null,
                inputOptionTwo: null,
                toHome: true,
            })
        }
    }

    render() {

        const { toHome } = this.state

        if(toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='container w-75'>
                <Title mainTitle='Would You Rather...?' subTitle='Make your own vote for everyone!' />
                <form className='mt-5' onSubmit={this.handleSubmit}>
                    <div className='form-group input-group-lg'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id='basic-addon1'><i className='far fa-arrow-alt-circle-right'></i></span>
                            <input ref='optionOneInput' type='text' className='form-control' placeholder="Option One is..." onChange={(e) => this.handleChange(e, 'optionOne')} />
                        </div>
                    </div>
                    <div className='form-group input-group-lg'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text' id='basic-addon1'><i className='far fa-arrow-alt-circle-right'></i></span>
                            <input ref='optionTwoInput' type='text' className='form-control' placeholder="Option Two is..." onChange={(e) => this.handleChange(e, 'optionTwo')} />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary btn-block btn-lg" />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {
        authedUser: authedUser,
        users: users,
        questions: questions,
    }
}

export default connect(mapStateToProps)(CreateNewPoll)