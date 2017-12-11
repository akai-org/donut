import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.css'

const LandingPage = () => (
  <div className="wrap-container">
    <Link to="/freestyle">Play game</Link>
    <button>Instructions</button>
  </div>
)

export default LandingPage