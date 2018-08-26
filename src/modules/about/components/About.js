import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class About extends Component {
  render () {
    return (
      <div>
        {"About"}
        <Link to="/">
          <button> Go Home </button>
        </Link>
      </div>
    )
  }
}

export default About