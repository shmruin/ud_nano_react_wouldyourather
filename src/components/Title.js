import React, { Component } from 'react'
import { connect } from 'react-redux'


export default function Title() {
    return (
        <div className='container'>
            <h2 className='dashboard-title text-center mt-5'>Would You Rather...?</h2>
            <blockquote className="blockquote text-muted text-center mb-5">
                <p>Give it a Vote Today!</p>
            </blockquote>
        </div>
    )
}