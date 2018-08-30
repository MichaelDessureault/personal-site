import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from '../../styles/NavigationStyles.css'
import { navigationLinks } from '../../../../helpers/navigation';
import { keys, objectToArray } from '../../../../helpers/utils'

const InsertLink = ({ link, label, level, hasSubMenu }) => {
  const faIcon = (level === 1) ? "fa-angle-down" : "fa-angle-right"
  const navStyle = (level === 1) ? `${styles.navLink}` : `${styles.subMenuNavLink}`

  if (link !== "none") {
    return (
      <Link
        className={navStyle}
        to={{ pathname: link }}
      >
        {label}
        {hasSubMenu
          ? <span className={`fa ${faIcon} ${styles.arrow}`}> </span>
          : null
        }
      </Link>
    )
  } else {
    return (
      <div className={navStyle}>
        {label}
        {hasSubMenu
          ? <span className={`fa ${faIcon} ${styles.arrow}`}> </span>
          : null
        }
      </div>
    )
  }
}

class NavigationItem extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,  // "none" is for no link
    hasSubMenu: PropTypes.bool.isRequired,
    subMenu: PropTypes.object.isRequired,
  }

  generateSubMenuWithSeparator = () => {
    const newMap = []
    const subMenuArray = objectToArray(this.props.subMenu)

    for (let i = 0; i < subMenuArray.length; i++) {
      const navLink = subMenuArray[i]

      // Add the navigation item
      newMap.push(
        <NavigationItem
          level={this.props.level + 1}
          link={navLink.link}
          label={navLink.label}
          hasSubMenu={(keys(navLink.subMenu).length !== 0)}
          subMenu={navLink.subMenu}
        />
      )

      // Add the separator is it's not the end
      if (i + 1 !== subMenuArray.length) {
        newMap.push(<div className={styles.separator}> </div>)
      }
    }

    return (
      <ul className={(this.props.level === 1) ? styles.subMenuNavItemList : styles.subMenuNavItemListLevel2}>
        {newMap}
      </ul>
    )
  }

  render() {
    return (
      <li className={styles.navItem}>
        <InsertLink
          link={this.props.link}
          label={this.props.label}
          level={this.props.level}
          hasSubMenu={this.props.hasSubMenu}
        />

        {this.props.hasSubMenu
          ? this.generateSubMenuWithSeparator()
          : null}
      </li>
    )
  }
}

export default NavigationItem