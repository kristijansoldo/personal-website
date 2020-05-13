import React from "react"
import LogoSvg from "../../../static/logo.svg"

import styles from "./navigation.module.scss"

/**
 * Navigation component.
 *
 * @returns {*}
 * @constructor
 */
export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
    </nav>
  )
}
