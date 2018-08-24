import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Wrapper.css'

console.log(styles);

class Wrapper extends Component {
  render () {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Wrapper