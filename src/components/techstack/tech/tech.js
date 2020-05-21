// React import
import React from "react"

// Import styles
import styles from "./tech.module.scss"

/**
 * Tech component.
 *
 * @returns {*}
 * @constructor
 */
export default function Tech({icon, title}) {
    return (
        <div className={styles.tech}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    )
}
