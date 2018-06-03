import { _saveUser } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_BY_USER = 'ANSWER_QUESTION_BY_USER'
export const SAVE_QUESTION_BY_USER = 'SAVE_QUESTION_BY_USER'
export const SAVE_USER = 'SAVE_USER'


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function answerQuestionByUser(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION_BY_USER,
        authedUser,
        qid,
        answer,
    }
}

export function saveQuestionByUser(question) {
    return {
        type: SAVE_QUESTION_BY_USER,
        question,
    }
}

function saveUser(user) {
    return {
        type: SAVE_USER,
        user,
    }
}

export function handleSaveUser({ id, name, password, imgUrl }) {
    return (dispatch) => {
        dispatch(showLoading())

        return _saveUser({
            id,
            name,
            password,
            imgUrl,
        })
        .then((user) => {
            dispatch(saveUser(user))
            dispatch(hideLoading())
        })
    }
}