import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/Wrapper.css'
import { NavigationBarContainer, FooterContainer } from '../../index'

/**
 * PageWrapper 
 *  - This wraps a new page in a NavigationBar and Footer tag.
 *  - It also aligns the page
 * 
 */
class PageWrapper extends Component {
  render () {
    return (
      <div className={styles.mainContainer}>
        <NavigationBarContainer />
        {this.props.children}
        <FooterContainer />
      </div>
    )
  }
}

export default PageWrapper