import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Table extends Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        authedUser: PropTypes.string.isRequired,
    }

    render() {

        const { users, authedUser } = this.props

        return (
            <div className='container'>
                <table className="table table-hover table-striped text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Id</th>
                            <th># of Askings</th>
                            <th># of Answers</th>
                            <th>Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(users).sort((a, b) => {
                            return (users[a].questions.length + Object.keys(users[a].answers).length) <
                            (users[b].questions.length + Object.keys(users[b].answers).length)
                            ? true : false
                        }).map((id, index) => {

                            let numAskings = users[id].questions.length
                            let numAnswers = Object.keys(users[id].answers).length

                            return (<tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{id}</td>
                                <td>{numAskings}</td>
                                <td>{numAnswers}</td>
                                <td>{numAskings + numAnswers}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                {/* TODO: Paginations */}
                <nav className='mt-4'>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Table