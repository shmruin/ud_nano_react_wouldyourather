import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveQuestions, answerQuestion } from './questions'
import { receiveUsers, answerQuestionByUser } from './users'
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

export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return (dispatch) => {
        dispatch(showLoading())

        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
        .then(() => {
            dispatch(answerQuestion(authedUser, qid, answer))
            dispatch(answerQuestionByUser(authedUser, qid, answer))
            dispatch(hideLoading())
        })
    }
}