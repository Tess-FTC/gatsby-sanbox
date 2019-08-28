import React from "react"
import { Link } from "gatsby"

import menuStyles from "./style/menu.module.scss"

const Collapsible = () => (
  <div className={menuStyles.collapsibleContainer}>
    <input type="checkbox" id="menu" className={menuStyles.collapsibleMenu} />
    <label
      htmlFor="menu"
      style={{
        color: "coral",
        fontWeight: 600,
      }}
    >
      Menu
    </label>
    <ul style={{}}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Collapsible
