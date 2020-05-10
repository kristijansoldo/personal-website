import React from "react"
import styles from "./container.module.scss"

export default function Container({ children }) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}