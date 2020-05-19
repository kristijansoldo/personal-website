// React import
import React from "react"

// Import components
import ClassNames from "classnames";

// Import styles
import styles from "./service.module.scss"

/**
 * Service component.
 *
 * @returns {*}
 * @constructor
 */
export default function Service({className, icon, title, description}) {
    return (
        <div className={ClassNames(styles.service, className)}>
            <div className={styles.contentContainer}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
