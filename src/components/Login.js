import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import { setAuthedUser } from '../actions/authedUser'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Login extends Component {
    state = {
        clickedId: null,
        passwording: null,
        modal: false,
        errorMessage: null,
    }

    componentDidLoad() {
        const { dispatch } = this.props
        
        dispatch(setAuthedUser(null))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.authedUser !== null) {
            const { dispatch, authedUser } = this.props

            dispatch(setAuthedUser(null))

            this.props.history.push(`/login`)
        }
    }

    signIn = (id) => {
        const { dispatch } = this.props

        dispatch(setAuthedUser(id))

        this.props.history.push(`/`)
    }

    gotoCreateUser = (e) => {
        e.preventDefault()

        this.props.history.push(`/createUser`)
    }

    toggleModal = (e = null, id = null) => {
        if (id === null) {
            this.setState({
                clickedId: null,
                passwording: null,
                errorMessage: null,
                modal: !this.state.modal
            })
        } else {
            this.setState({
                clickedId: id,
                passwording: null,
                errorMessage: null,
                modal: !this.state.modal
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            errorMessage: null,
            passwording: e.target.value,
        })
    }

    submitModal = () => {
        //Check the paassword of the user
        const { users } = this.props
        const { clickedId, passwording } = this.state

        let inputA = this.refs.pw.value

        if (clickedId === null || passwording === null || clickedId === '' || passwording === '') {
            this.setState({
                errorMessage: '*** Error Occur: Id or Password is missing.',
            })
        } else {
            if(!users.hasOwnProperty(clickedId)) {
                this.setState({
                    errorMessage: '*** Error Occur: No user id exists.',
                })
            } else {
                if (users[clickedId].password !== passwording) {
                    this.setState({
                        errorMessage: '*** Error Occur: Password not matched.',
                    })
                } else {
                    alert(`Welcome, ${users[clickedId].name} !`)

                    this.setState({
                        clickedId: null,
                        passwording: null,
                        errorMessage: null,
                        modal: false,
                    })

                    this.signIn(clickedId)
                }
            }
        }
    }

    render() {

        const { users } = this.props

        return (
            <div className='container w-75 text-center'>
                <Title mainTitle='Would You Rather...?' subTitle='# Please Sign In First #' />
                <ul className='dashboard-list list-group mx-auto w-50'>
                   {Object.keys(users).map((id) => (
                        <a key={id} className='list-group-item list-group-item-action' href='#' onClick={(e) => this.toggleModal(e, id)}>
                            {users[id].id}
                        </a>
                    ))}
                </ul>
                <button className="btn btn-outline-primary mt-5" type="button" onClick={(e) => this.gotoCreateUser(e)}>Sign Up</button>

                <Modal isOpen={this.state.modal} toggle={(e) => this.toggleModal()}>
                    <ModalHeader toggle={(e) => this.toggleModal()}>Your Password?</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className='form-group input-group-lg mt-3'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text' id='user-pw'><i className='far fa-arrow-alt-circle-right'></i></span>
                                    <input ref='pw' type='password' className='form-control' placeholder="Your Password Here" onChange={(e) => this.handleChange(e)} />
                                </div>
                            </div>
                        </form>
                        <p className='text-danger'>{this.state.errorMessage}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={(e) => this.submitModal()}>Confirm</Button>{' '}
                        <Button color="secondary" onClick={(e) => this.toggleModal()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser: authedUser,
        users: users,
    }
}

export default connect(mapStateToProps)(Login)