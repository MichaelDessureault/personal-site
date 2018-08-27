import React, { Component } from 'react'
import PropTypes from 'prop-types'
import About from '../components/About'
import { WrapperContainer } from '../..';
import { isUndefinedOrNull } from '../../../helpers/utils'


class AboutContainer extends Component {
  render () {
    return (
      <WrapperContainer isPageWrapper={true}>
        <About {...this.props}/>
      </WrapperContainer>
    )
  }
}

export default AboutContainer