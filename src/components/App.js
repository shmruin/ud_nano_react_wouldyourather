import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'
import VoteContent from './VoteContent'
import CreateNewPoll from './CreateNewPoll'
import Leaderboard from './Leaderboard'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        {this.props.loading === true
                            ? null
                            :  <div>
                                    <Route path='/' exact component={Dashboard} />
                                    <Route path='/questions/:id' component={VoteContent} />
                                    <Route path='/add' component={CreateNewPoll} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                                </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)