// React import
import React from "react"

// Import componentsa
import Section from "../common/section/section";

// Import assets
import LogoSvg from "../../../static/logo.svg"

// Import styles
import styles from "./navigation.module.scss"

/**
 * Navigation component.
 *
 * @returns {*}
 * @constructor
 */
export default function Navigation() {
    return (
        <Section className={styles.navigation}>
            <nav>
                <a href="/"><LogoSvg/></a>
                <ul>
                    <li><a  href="tel:+385997804790">+ 385 99 780 4790</a></li>
                    <li><a  href="mailto:kristijan@soldo.dev">kristijan@soldo.dev</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/soldokristijan/">linkedin</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/kristijansoldo">github</a></li>
                </ul>
            </nav>
        </Section>
    )
}
