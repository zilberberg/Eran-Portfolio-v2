import React from "react"
import { FooterHeader, FooterIcon, FooterLink, FooterWrapper } from "./styles"
import LinkedIn from "../../images/footer/linkedin.svg";
import Github from "../../images/footer/github.svg";

const Footer = () => (
    <FooterWrapper>
        <FooterHeader position={"start"}>
            © 2023 Eran Zilberberg
        </FooterHeader>
        <FooterHeader position={"center"}>
            Designed by Daniela Abramov
        </FooterHeader>
        <FooterHeader position={"end"}>
            <FooterLink href={"https://www.linkedin.com/in/eran-zilberberg/"} target={"_blank"}>
                <FooterIcon src={LinkedIn}/>
            </FooterLink>
            <FooterLink href={"https://github.com/zilberberg"} target={"_blank"}>
                <FooterIcon src={Github}/>
            </FooterLink>
        </FooterHeader>
    </FooterWrapper>
)

export default Footer