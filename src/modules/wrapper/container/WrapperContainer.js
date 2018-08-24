import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from '../component/Wrapper'

class WrapperContainer extends Component {
  render () {
    return (
      <Wrapper children={this.props.children}/>
    )
  }
}

export default WrapperContainer