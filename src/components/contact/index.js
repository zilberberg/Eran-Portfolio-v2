import React from "react"
import { Info, SectionWrapper, SubHeader } from "../../elements";
import theme from "../../config/theme";
import { ShortSeperator } from "../../elements/seperators";

const Contact = () => (
    <SectionWrapper backgroundColor={theme.colors.lightBlue}>
        <SubHeader>
            Contact
        </SubHeader>
        <ShortSeperator/>
        <Info>
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible        
        </Info>
    </SectionWrapper>
)

export default Contact;