// React import
import React from "react"

// Import styles
import styles from "./container.module.scss"

/**
 * Container component.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export default function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
