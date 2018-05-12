import React, { Component } from 'react'
import Radium, { Style } from 'radium'
import { connect } from 'react-redux'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className='dashboard-title' style={styles.base}>Would You Rather...?</h3>
                <ul className='dashboard-list'>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            {id}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[b].timestamp)
    }
}

var styles = {
    base: {
        color: 'blue',
    }
}

export default Radium(connect(mapStateToProps)(Dashboard))