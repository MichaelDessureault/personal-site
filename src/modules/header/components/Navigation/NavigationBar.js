import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import styles from '../../styles/NavigationStyles.css'

import onClickOutside from "react-onclickoutside"
import createReactClass from "create-react-class"

import NavigationItem from './NavigationItem'
import { navigationLinks } from '../../../../helpers/navigation'
import { keys, objectToArray } from '../../../../helpers/utils'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={"navBar"} className={styles.navBarContainer}>
        <ul className={styles.navBarItemList}>
          {objectToArray(navigationLinks).map(navLink =>
            <NavigationItem
              level={1}
              link={navLink.link}
              label={navLink.label}
              hasSubMenu={(keys(navLink.subMenu).length !== 0)}
              subMenu={navLink.subMenu}
            />)
          }
        </ul>
      </div>

    )
  }
}

export default NavigationBar

