import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import todo from './todo'

const todoApp = combineReducers({
    todo,
    form
})

export default todoApp
