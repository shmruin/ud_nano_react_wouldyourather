import { RECEIVE_USERS, ANSWER_QUESTION_BY_USER, SAVE_QUESTION_BY_USER, SAVE_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION_BY_USER:
            //1. Add to users.authedUser.answers new qid of ontion or REPLACE 
            //2. Add to questions.id.optionX.votes of name. if already exists, then no effect

            let modifiedUser = action.authedUser
            let modifiedQid = action.qid
            let modifiedAnswer = action.answer

            Object.assign(state[modifiedUser].answers, { [modifiedQid]: modifiedAnswer })

            return state
        case SAVE_QUESTION_BY_USER:
            state[action.question.author].questions.push(action.question.id)
            
            return state
        case SAVE_USER:
            return {
                ...state,
                [action.user.id]: action.user,
            }
        default:
            return state
    }
}