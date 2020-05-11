import React from "react"
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
