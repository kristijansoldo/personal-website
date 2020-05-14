// React import
import React from "react"

// Import components
import ClassNames from "classnames";
import Container from "../container/container";

// Import styles
import styles from "./section.module.scss"

/**
 * Section layout.
 *
 * @param className
 * @param children
 * @returns {*}
 * @constructor
 */
export default function Section({className, children}) {
    return (
        <section className={ClassNames(styles.section, className)}>
            <Container>
                {children}
            </Container>
        </section>
    )
}
