import { _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from '../actions/questions'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getQuestions()
        .then((questions) => {
            dispatch(receiveQuestions(questions))
        })
    }
}