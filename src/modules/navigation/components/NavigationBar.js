import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import styles from '../styles/NavigationBar.css'

import onClickOutside from "react-onclickoutside"
import createReactClass from "create-react-class"

const Item = (props) => {
  return (
    // <Link
    //   className={`${styles.itemContainer} ${styles.noDecoration}`}
    //   to={ props.noLink ? "" : { pathname: props.link } } // state is passible with the to object
    // >
      <div>
        {props.label}
      </div>
    // </Link>
  )
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
            className={"dropdownItem"} 
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
    this.state = { apiDropdownVisible: false }
  }

  handleCloseMenu = (menuName) => {
    switch (menuName) {
      case "api" : this.setState({ apiDropdownVisible: false }); break;
      default: break;
    }
  }

  handleOpenMenu = (menuName) => {
    switch (menuName) {
      case "api" : this.setState({ apiDropdownVisible: true }); break;
      default: break;
    }
  } 

  render () {
    console.log('NavigationBar')
    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <Item link={"/"}        label={"Home"} />
          <Item link={"/about"}   label={"About"} />
          <Item link={"/chatbot"} label={"Chatbot"} />

          <DropdownItem 
            label={"Api's"}
            visible={this.state.apiDropdownVisible}
            handleCloseMenu={(e) => { 
              e.preventDefault()
              this.handleCloseMenu("api")
            }}
            handleOpenMenu={(e) => {
              e.preventDefault()
              this.handleOpenMenu("api")
            }}
            >
            <Item link={"/gipfy"}  label={"Gipfy"} />
            <Item link={"/google"} label={"Google Maps"} />
          </DropdownItem>
        </div>

        <div className={styles.rightContainer}>

        </div>
      </div>
    )
  }
}

export default NavigationBar

