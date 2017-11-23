import { combineReducers } from 'redux'
import freestyle from './reducers/FreestyleReducer'

const todoApp = combineReducers({
  freestyle
})

export default todoApp