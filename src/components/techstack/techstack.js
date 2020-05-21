// React import
import React from "react"

// Import components
import Section from "../common/section/section";

// Import styles
import styles from "./techstack.module.scss"

/**
 * Tech stack component.
 *
 * @returns {*}
 * @constructor
 */
export default function TechStack() {
    return (
        <Section className={styles.techStack}>
            <div className={styles.intro}>
                <h2>Tech stack</h2>
                <p>Experiences are what makes great developer and not just tools and I can select right tool for the
                    right job.</p>
            </div>
        </Section>
    )
}
