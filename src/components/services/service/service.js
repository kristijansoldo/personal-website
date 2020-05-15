// React import
import React from "react"

// Import styles
import styles from "./service.module.scss"

/**
 * Service component.
 *
 * @returns {*}
 * @constructor
 */
export default function Service({icon, title, description}) {
    return (
        <div className={styles.service}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <h3>{description}</h3>
            </div>
        </div>
    )
}
