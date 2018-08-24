import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { WrapperContainer } from '../../index'
import NavigationBar from '../components/NavigationBar' 

class NavigationBarContainer extends Component {
  render () {
    return (
      <WrapperContainer>
        <NavigationBar />
      </WrapperContainer>
    )
  }
}

export default NavigationBarContainer