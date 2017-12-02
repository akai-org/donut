export const ADD_POINTS = 'ADD_POINTS'
export const RECEIVE = 'RECEIVE'

export function addPoints(count) {
  return { type: ADD_POINTS, count }
}

export function receive(data) {
  return { type: RECEIVE, data }
}