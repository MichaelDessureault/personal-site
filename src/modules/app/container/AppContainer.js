import React, { Component } from 'react'
import PropTypes from 'prop-types'

import App from '../components/App'
import { NavigationBarContainer, WrapperContainer } from '../../index'

class AppContainer extends Component {
  render () {
    return (
      <div id={"AppContainer"}>
        <WrapperContainer isPageWrapper={true}>
          <App/>
        </WrapperContainer>
      </div>
    )
  }
}

export default AppContainer