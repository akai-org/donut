import {
  ADD_POINTS, RECEIVE
} from '../actions'

import socket from '../socket';

function freestyleReducer(state = { score: 0 }, action) {
  switch (action.type) {
    case ADD_POINTS:
      socket.emit('click', { id: 3 })
      return state
    break;
    case RECEIVE:
      const newState = {...state}
      newState.score = action.data.score
      return newState
    break;
    default:
      return state
  }
}

export default freestyleReducer