import React from "react"
import styles from "./hero.module.scss"
import Container from "../../common/container/container";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>Hero</Container>
    </section>
  )
}