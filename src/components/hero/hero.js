// React import
import React from "react"

// Import components
import Section from "../../common/section/section";

// Import styles
import styles from "./hero.module.scss"

/**
 * Hero component.
 *
 * @returns {*}
 * @constructor
 */
export default function Hero() {
  return (
    <Section className={styles.hero}>Hero</Section>
  )
}
