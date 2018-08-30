import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/HeaderStyles.css'
import NavigationBar from '../components/Navigation/NavigationBar'
import { WrapperContainer } from '../../index'

class HeaderContainer extends Component {
  render () {
    return (
      <div className={styles.header}>
        <div className={styles.headerSection}>
          <WrapperContainer>
            <NavigationBar/>
          </WrapperContainer>
        </div>
      </div>
    )
  }
}

export default HeaderContainer