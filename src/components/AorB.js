import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from './Title'
import cardImg from '../img/crossRoad.jpg'


class AorB extends Component {
    static propTypes = {
        onSelectOption: PropTypes.func.isRequired,
    }

    render() {

        const { onSelectOption } = this.props

        return (
            <div className='container'>
                <div className='card-group mx-auto mt-5'>
                    <div className='card' onClick={(e) => { onSelectOption(e, 'optionOne') }}>
                        <img className="card-img-top" src={cardImg} alt="Card image cap" height='500' />
                        <div className='card-body'>
                            <h4 className='card-title'>#Option One</h4>
                            <p className='card-text'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className='card' onClick={(e) => { onSelectOption(e, 'optionTwo') }}>
                        <img className="card-img-top" src={cardImg} alt="Card image cap" height='500' />
                        <div className='card-body'>
                            <h4 className='card-title'>#Option Two</h4>
                            <p className='card-text'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AorB