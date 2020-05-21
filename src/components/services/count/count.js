// React import
import React from "react"

// Import components
import ClassNames from "classnames";

// Import styles
import styles from "./count.module.scss"

/**
 * Count component.
 *
 * @returns {*}
 * @constructor
 */
export default function Count({number, title, className}) {
    return (
        <div className={ClassNames(styles.count, className)}>
            <div className={styles.number}>
                <span>{number}</span>
            </div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </div>
    )
}
