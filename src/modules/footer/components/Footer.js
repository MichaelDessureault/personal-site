import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/footer.css'

class Footer extends Component {
  render () {
    return (
      <div className={styles.mainContainer}>
        {"This is a footer"}
        {"I will contain links from the navigation stuff, i will contain links to linkden, github, and more..."}
      </div>
    )
  }
}

export default Footer