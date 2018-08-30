import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import { NavigationBarContainer, WrapperContainer } from '../../index'

import { operators as aboutActionCreators } from '../../../store/modules/about'
import { detectMobile } from '../../../helpers/utils'

class AppContainer extends Component {
  dispatchAboutStartPoint = (value) => {
    this.props.handleAboutStartPoint(value)
  }

  render () {
    return (
      <div id={"AppContainer"}>
        <WrapperContainer isPageWrapper={true}>
          <App 
            dispatchAboutStartPoint={this.dispatchAboutStartPoint}/>
        </WrapperContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...aboutActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)