import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { isUndefinedOrNull } from '../../../helpers/utils'

class About extends Component {

  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentWillMount () {
    if ( !isUndefinedOrNull(this.props.location.state) && this.props.location.state.aboutSite) {
      this.scrollToDomRef()
    }
  }

  scrollToDomRef = () => {
    const domNode = ReactDOM.findDOMNode(this.domRef.current)
    domNode.scrollIntoView()
  }
  
  render () {
    return (
      <div>
        <div id={"about1"} style={{ height: 15000 }}>
          <a href="#about2"> Goto about2 </a>
          {"About"}
        </div>

        <div ref={this.myRef}>
          {"About2"}
        </div>
      </div>
    )
  }
}

export default About