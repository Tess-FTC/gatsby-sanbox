import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import menuStyles from "./style/menu.module.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `coral`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className={menuStyles.navMenu}>
        <li>
          <Link
            className={menuStyles.navMenu__item}
            activeClassName={menuStyles.navMenu__itemActive}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navMenu__item}
            activeClassName={menuStyles.navMenu__itemActive}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navMenu__item}
            activeClassName={menuStyles.navMenu__itemActive}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navMenu__item}
            activeClassName={menuStyles.navMenu__itemActive}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navMenu__item}
            activeClassName={menuStyles.navMenu__itemActive}
            to="/trip"
          >
            Trip
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
