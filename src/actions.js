export const ADD_POINTS = 'ADD_POINTS'

export function addPoints(count) {
  return { type: ADD_POINTS, count }
}