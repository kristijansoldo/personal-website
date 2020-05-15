// React import
import React from "react"

// Import components
import Section from "../common/section/section";

// Import assets
import HandSvg from "../../../static/icons/hand.svg"

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
        <Section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <div className={styles.icon}>
                        <HandSvg/>
                    </div>
                    <h1>Hi, I’m Kristijan, <br/><span>web developer</span><br/> from Croatia!</h1>
                    <p>For the past six years I’ve been helping companies build fast and scalable backend solutions
                        ranging
                        from applications based on WordPress to big custom solutions built from scratch using Sylius or
                        Symfony. </p>
                </div>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <img src={'/images/avatar.jpg'} alt="Kristijan Soldo Avatar"/>
                    </div>
                </div>
            </div>
        </Section>
    )
}
