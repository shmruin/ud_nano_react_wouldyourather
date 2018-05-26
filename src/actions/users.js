import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_BY_USER = 'ANSWER_QUESTION_BY_USER'
export const SAVE_QUESTION_BY_USER = 'SAVE_QUESTION_BY_USER'


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
