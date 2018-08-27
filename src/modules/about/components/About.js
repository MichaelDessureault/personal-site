import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { isUndefinedOrNull } from '../../../helpers/utils'

class About extends Component {

  constructor (props) {
    super(props)
    this.aboutSite = React.createRef()
    this.aboutMe = React.createRef()
  }

  componentDidMount () {
    this.scrollToDomRef();
  }

  scrollToDomRef = () => {
    const domNode = ReactDOM.findDOMNode(
      (this.props.aboutMeStartPoint) 
      ? this.aboutMe.current 
      : this.aboutSite.current
    )

    console.log('domNode', domNode)

    if (domNode) {
      console.log('scroll', domNode.offsetTop)
      window.scrollTo(0, domNode.offsetTop)
    }
  }
  
  render () {

    console.log(this.myRef)
    console.log('aboutStartPoint: ' + this.props.aboutMeStartPoint)

    return (
      <div>
        <div id={"aboutMe"} ref={this.aboutMe} style={{ height: 15000 }}>
          <a href="#aboutSite"> Goto about2 </a>
          {"About"}
        </div>

        <div id={"aboutSite"} ref={this.aboutSite}>
          {"About2"}
        </div>
      </div>
    )
  }
}

export default About