// React import
import React from "react"

// Import components
import Section from "../common/section/section";
import Summary from './summary/summary';
import Service from './service/service';

// Import icons
import CompleteSolutionIcon from "../../../static/icons/complete-solution.svg"
import MentorIcon from "../../../static/icons/mentor.svg"
import RefactorIcon from "../../../static/icons/refactor.svg"
import IntegratedDeveloperIcon from "../../../static/icons/integrated-developer.svg"

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
                        <p>During the past few years I had an opportunity to work with great teams on awesome project
                            where
                            I managed to hone my vast technological skills that I can utilize now.</p>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.leftBox}>
                        <div className={styles.summariesContainer}>
                            <Summary number="32" title="Projects"/>
                            <Summary number="10" title="Happy clients"/>
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.servicesContainer}>
                            <Service
                                className={styles.service}
                                icon={<CompleteSolutionIcon/>}
                                title="Complete solution"
                                description="I can build your app from scratch using newest technology or I can use existing solution."
                            />
                            <Service
                                className={styles.service}
                                icon={<MentorIcon/>}
                                title="Mentor"
                                description="If you have less skilled developer I can help you manage them and hold the whole project together while helping them grow."
                            />
                            <Service
                                className={styles.service}
                                icon={<RefactorIcon/>}
                                title="Refactor"
                                description="I can save money by reducing existing technical dept on your project and aligning it with current business goals."
                            />
                            <Service
                                className={styles.service}
                                icon={<IntegratedDeveloperIcon/>}
                                title="Integrated developer"
                                description="If you need extra man power I can join your existing team, onboard fast and start helping with project."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
