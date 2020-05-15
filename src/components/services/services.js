// React import
import React from "react"

// Import components
import Section from "../common/section/section";

// Import styles
import styles from "./services.module.scss"

/**
 * Services component.
 *
 * @returns {*}
 * @constructor
 */
export default function Services() {
    return (
        <Section className={styles.services}>
            <div className={styles.intro}>
                <div className={styles.contentContainer}>
                    <div className={styles.leftBox}>
                        <h2>Services</h2>
                    </div>
                    <div className={styles.rightBox}>
                        <p>During the past few years I had an opportunity to work with great teams on awesome project where
                            I managed to hone my vast technological skills that I can utilize now.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
