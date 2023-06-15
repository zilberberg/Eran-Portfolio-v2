import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../utilities/globalstyle"
import theme from "../config/theme"

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <main>{children}</main>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout