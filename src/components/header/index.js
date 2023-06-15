import React from "react"
import Navigation from "../nav"
import { HeaderWrapper, ImageWrapper, NameWrapper } from "./styles"

const Header = () => (
    <HeaderWrapper>
        <ImageWrapper/>
        <NameWrapper>
            Eran Zilberberg
        </NameWrapper>
        <Navigation/>
    </HeaderWrapper>
)

export default Header