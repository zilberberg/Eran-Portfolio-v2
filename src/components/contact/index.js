import React from "react"
import { SectionContent, SectionWrapper, TitleComponent } from "../../elements";
import theme from "../../config/theme";

const Contact = () => (
    <SectionWrapper backgroundColor={theme.colors.lightBlue} height={"93vh"}>
        <SectionContent height={"93vh"}>
            <TitleComponent>
                contact
            </TitleComponent>
        </SectionContent>
    </SectionWrapper>
)

export default Contact;