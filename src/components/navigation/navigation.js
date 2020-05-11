import React from "react"
import Section from "../../common/section/section"
import LogoSvg from "../../../static/logo.svg"

import styles from "./navigation.module.scss"

export default function Navigation() {
  return (
    <Section className={styles.navigation}>
      <div className={styles.logo}>
        <LogoSvg />
      </div>
      Navigation
    </Section>
  )
}
