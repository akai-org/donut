import React from 'react'
import { connect } from 'react-redux'
import { addPoints } from '../actions'
import Donut from '../components/Donut/Donut'

class Freestyle extends React.Component {
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freestyle)