import { RECEIVE_QUESTIONS, ANSWER_QUESTION, SAVE_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            let modifiedUser = action.authedUser
            let modifiedQid = action.qid
            let modifiedAnswer = action.answer

            //Check if votes in option one of two already has this id. If so, erase it first.
            state[modifiedQid]['optionOne'].votes = state[modifiedQid]['optionOne'].votes.filter((user) => user !== modifiedUser)
            state[modifiedQid]['optionTwo'].votes = state[modifiedQid]['optionTwo'].votes.filter((user) => user !== modifiedUser)

            state[modifiedQid][modifiedAnswer].votes.push(modifiedUser)
            
            return state
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        default:
            return state
    }
}
