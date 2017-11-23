import React from 'react'
import PropTypes from 'prop-types'
import DonutImage from './donut.png'

const Donut = ({onClick}) => (
  <div>
    <img src={DonutImage} alt="donut" onClick={onClick} /> 
  </div>
)

Donut.propTypes = {
  onClick: PropTypes.func
}

export default Donut