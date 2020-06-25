// React import
import React from "react"

// Import styles
import styles from "./testimonial.module.scss"

/**
 * Testimonial component.
 *
 * @returns {*}
 * @constructor
 */
export default function Testimonial({testimonialText, creatorImage, creatorFullName, creatorTitle}) {
    return (
        <div className={styles.testimonial}>
            <p>{testimonialText}</p>
            <div className={styles.creator}>
                <div className={styles.creatorImage}>
                    <img src={creatorImage} alt={creatorFullName}/>
                </div>
                <div className={styles.creatorInfo}>
                    <h3>{creatorFullName}</h3>
                    <h4>{creatorTitle}</h4>
                </div>
            </div>
        </div>
    )
}
