import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import About from '../components/About'
import { WrapperContainer } from '../..';

class AboutContainer extends Component {
  render () {
    return (
      <WrapperContainer isPageWrapper={true}>
        <About aboutMeStartPoint={this.props.aboutMeStartPoint}/>
      </WrapperContainer>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state)
  return {
    aboutMeStartPoint: state.about.aboutMeStartPoint
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)