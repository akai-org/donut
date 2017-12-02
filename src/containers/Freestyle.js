import React from 'react'
import { connect } from 'react-redux'
import { addPoints, receive } from '../actions'
import Donut from '../components/Donut/Donut'

import socket from '../socket'

class Freestyle extends React.Component {
  constructor(props){
    super(props)
    socket.on('freestyle-state', props.onRecive)
  }
  render() {
    return (
      <div>
        { this.props.score }
        <Donut onClick={this.props.onClick} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    score: state.freestyle.score
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addPoints(1))
    },
    onRecive: (data) => {
      dispatch(receive(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freestyle)