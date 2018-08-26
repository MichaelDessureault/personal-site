import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Wrapper.css'

class Wrapper extends Component {
  render () {
    return (
      <div
        className={styles.mainContainer}
        style={
          !!this.props.backgroundImage 
          ? { backgroundImage : `url(${this.props.backgroundImage})` } 
          : {}
        }
      >
        <div className={styles.innerContainer}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Wrapper