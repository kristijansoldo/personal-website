import React from "react"
import Container from "../container/container";
import ClassNames from "classnames";

import styles from "./section.module.scss"

export default function Section({ className, children }) {
  return (
    <section className={ClassNames(styles.section, className)}>
      <Container>
        {children}
      </Container>
    </section>
  )
}