import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavigationBar from '../components/NavigationBar' 
import { WrapperContainer } from '../../index'
import styles from '../styles/NavigationBar.css'

class NavigationBarContainer extends Component {
  render () {
    return (
      <div className={styles.mainContainer}>
        <WrapperContainer>
          <NavigationBar/>
        </WrapperContainer>
      </div>
    )
  }
}

export default NavigationBarContainer