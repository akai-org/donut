import {
  ADD_POINTS
} from '../actions'

function freestyleReducer(state = { score: 0 }, action) {
  switch (action.type) {
    case ADD_POINTS:
      const newState = {...state}
      newState.score += action.count
      return newState
    default:
      return state
  }
}

export default freestyleReducer