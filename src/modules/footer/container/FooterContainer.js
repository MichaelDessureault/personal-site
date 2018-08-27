import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import { WrapperContainer } from '../../index';
import styles from '../styles/footer.css'

class FooterContainer extends Component {
  render () {
    return (
      <div className={styles.mainContainer}>
        <WrapperContainer>
          <Footer/>
        </WrapperContainer>
      </div>
    )
  }
}

export default FooterContainer