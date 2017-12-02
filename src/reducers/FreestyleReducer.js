import {
  ADD_POINTS, RECEIVE
} from '../actions'

import socket from '../socket';

function freestyleReducer(state = { score: 0 }, action) {
  switch (action.type) {
    case ADD_POINTS:
      socket.emit('click', { id: 3 })
      return state
    case RECEIVE:
      const newState = {...state}
      newState.score = action.data.score
      return newState
    default:
      return state
  }
}

export default freestyleReducer