import { _getQuestions, _getUsers } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()])
        .then(([questions, users]) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
        })
    }
}