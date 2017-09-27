import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import todo from './todo'
import {reducer as modal} from 'redux-modal'

const todoApp = combineReducers({
    todo,
    modal,
    form
})

export default todoApp
