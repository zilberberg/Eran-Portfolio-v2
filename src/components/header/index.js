import React from "react"
import Navigation from "../nav"
import { BackgroundWrapper, HeaderContentWrapper, HeaderWrapper, ImageWrapper, NameWrapper } from "./styles"

const Header = () => (
    <HeaderWrapper>
        <BackgroundWrapper/>
        <HeaderContentWrapper>
            <ImageWrapper/>
            <Navigation/>
        </HeaderContentWrapper>
    </HeaderWrapper>
)

export default Header