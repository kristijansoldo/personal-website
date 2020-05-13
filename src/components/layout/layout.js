// React import
import React from "react"

// Import components
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

/**
 * Layout of website.
 *
 * @param children
 * @returns {*}
 * @constructor
 */
export default function Layout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
