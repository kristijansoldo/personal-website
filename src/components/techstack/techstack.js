// React import
import React from "react"

// Import components
import Section from "../common/section/section";
import Tech from "./tech/tech";

// Import icons
import WordPressIcon from "../../../static/icons/wordpress.svg"
import SymfonyIcon from "../../../static/icons/symfony.svg"
import PhpIcon from "../../../static/icons/php.svg"
import ReactIcon from "../../../static/icons/reactjs.svg"
import JavaIcon from "../../../static/icons/java.svg"

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
            <div className={styles.techsContainer}>
                <Tech icon={<WordPressIcon />} title="WordPress" />
                <Tech icon={<SymfonyIcon />} title="Symfony" />
                <Tech icon={<PhpIcon />} title="PHP" />
                <Tech icon={<ReactIcon />} title="React" />
                <Tech icon={<JavaIcon />} title="Java" />
            </div>
        </Section>
    )
}
