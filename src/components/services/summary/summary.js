// React import
import React from "react"

// Import styles
import styles from "./summary.module.scss"

/**
 * Summary component.
 *
 * @returns {*}
 * @constructor
 */
export default function Summary({number, title}) {
    return (
        <div className={styles.summary}>
            <div className={styles.number}>
                <span>{number}</span>
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    )
}
