import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import "./layout.css"

function Layout({ children }) {
  return (
    <GlobalStyle>
      <main>{children}</main>
    </GlobalStyle>
  )
}

export default Layout
