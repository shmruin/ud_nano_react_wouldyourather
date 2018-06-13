import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'


function imageFormatter(cell, row) {
    return (<span><img src={cell} className='img-fluid rounded-circle' width='40' height='40' /></span>)
}

class Table extends Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        authedUser: PropTypes.string.isRequired,
    }

    state = {
        products: [],
        columns: [{
            dataField: 'rank',
            text: '#'
        }, {
            dataField: 'avatar',
            formatter: imageFormatter,
            text: 'avatar',
        },
        {
            dataField: 'userid',
            text: 'User Id',
        }, {
            dataField: 'askings',
            text: '# of Askings',
            sort: true,
        }, {
            dataField: 'answers',
            text: '# of Answers',
            sort: true,
        }, {
            dataField: 'total',
            text: 'Total Score',
            sort: true,
        }]
    }

    componentDidMount() {

        //fill the table with users data
        this.makeTableData()
    }

    makeTableData = () => {
        const { users, authedUser } = this.props

        let result = Object.keys(users).sort((a, b) => {
            return (users[a].questions.length + Object.keys(users[a].answers).length) <
            (users[b].questions.length + Object.keys(users[b].answers).length)
            ? true : false
        }).map((id, index) => {
            let numAskings = users[id].questions.length
            let numAnswers = Object.keys(users[id].answers).length

            return {
                'rank': index+1,
                'avatar': users[id].avatarURL,
                'userid': id,
                'askings': numAskings,
                'answers': numAnswers,
                'total': numAskings + numAnswers,
            }
        })

        this.setState({
            products: result,
        })
    }

    render() {

        const { users, authedUser } = this.props

        return (
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={this.state.products}
                    columns={this.state.columns}
                    pagination={paginationFactory()}
                />
            </div>
        )
    }
}

export default Table