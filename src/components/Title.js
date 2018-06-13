import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export default function Title(props) {
    return (
        <div className='container'>
            <h2 className='dashboard-title text-center mt-5'>{props.mainTitle}</h2>
            <blockquote className="blockquote text-muted text-center">
                <p>{props.subTitle}</p>
            </blockquote>
        </div>
    )
}

Title.propTypes = {
    mainTitle: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}