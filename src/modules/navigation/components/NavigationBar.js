import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import styles from '../styles/NavigationBar.css'

import onClickOutside from "react-onclickoutside"
import createReactClass from "create-react-class"

import { navigationLinks } from '../../../helpers/navigation'
import { keys, objectToArray } from '../../../helpers/utils'



class Item extends Component {
  static propTypes = {
    navLinkObj: PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    link: PropTypes.string,
    label: PropTypes.string,
    noLink: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    noLink: false,
  }

  render () {
    const { navLinkObj, noLink, onClick } = this.props;
    const link  = navLinkObj !== undefined ? navLinkObj.link  : this.props.link
    const label = navLinkObj !== undefined ? navLinkObj.label : this.props.label

    return (
      <Link
      className={ `${styles.itemContainer} ${styles.noDecoration}` }
      to={ noLink ? "" : { pathname: link } } // state is passible with the to object
      onClick={ onClick }
    >
      <div>
        { label }
      </div>
    </Link>
    )
  }
}

const DropdownItem = onClickOutside(
  createReactClass({

    handleClickOutside(evt) {
      if (this.props.visible) {
        this.props.handleCloseMenu();
      }
    },

    render () {
      return (
        <div>
          <Item 
            className={"ignoreOnClickOutside"} 
            label={this.props.label} 
            noLink={true}
            onClick={this.props.handleOpenMenu}/>
          <div
            className={
              this.props.visible ? styles.dropDownMenuContainer : styles.invisible
            }
          >
            { this.props.children }
          </div>
        </div>
      )
    }
  })
)

class NavigationBar extends Component {
  constructor (props) {
    super(props);
    // dropdown sections
    this.state = { apiDropdownVisible: false }
  }

  handleCloseMenu = (menuName) => {
    switch (menuName) {
      case "api" : this.setState({ apiDropdownVisible: false }); break;
      default: break;
    }
  }

  handleToggleMenu = (menuName) => {
    switch (menuName) {
      case "api" : this.setState({ apiDropdownVisible: !this.state.apiDropdownVisible }); break;
      default: break;
    }
  }

  render () {
    return (
      <div className={styles.componentContainer}>
        <div className={styles.leftContainer}>
          <Item navLinkObj={navigationLinks.home}/>
          <Item navLinkObj={navigationLinks.about}/>
          <Item navLinkObj={navigationLinks.chatbot}/>

          <DropdownItem 
            label={"Api's"}
            visible={this.state.apiDropdownVisible}
            outsideClickIgnoreClass="ignoreOnClickOutside"
            handleCloseMenu={() => this.handleCloseMenu("api")}
            handleOpenMenu={(e) => {
              e.preventDefault()
              this.handleToggleMenu("api")
            }}
            >
            <Item navLinkObj={navigationLinks.gipfy}/>
            <Item navLinkObj={navigationLinks.googlemaps}/>
          </DropdownItem>
        </div>

        <div className={styles.rightContainer}>

        </div>
      </div>
    )
  }
}

export default NavigationBar

