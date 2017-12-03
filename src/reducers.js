import { combineReducers } from 'redux'
import freestyle from './reducers/FreestyleReducer'

const donutClickerApp = combineReducers({
  freestyle
})

export default donutClickerApp