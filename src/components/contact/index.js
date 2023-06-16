import React from "react"
import { Info, InfoLink, InfoSection, SectionContent, SectionWrapper, TitleComponent } from "../../elements";
import theme from "../../config/theme";
import cvPDF from '../../utilities/Eran-Zilberberg-CV.pdf';
import { GITHUB_LINK, LINKEDIN_LINK } from "../../config/data";

const Contact = () => (
    <SectionWrapper backgroundColor={theme.colors.lightBlue} height={"93vh"}>
        <SectionContent height={"93vh"}>
            <TitleComponent>
                contact
            </TitleComponent>
            <InfoSection>
                <Info>
                    Please feel free to contact me for any question or offer.<br/>
                    I speak Hebrew, English and German, and would love to hear from you.<br/>

                    Email: zil.eran@gmail.com<br/>
                    Phone: +972 54 318 7228<br/>

                    For more information, please visit my profiles and view my resume.<br/>
                    <InfoLink href={LINKEDIN_LINK} target={"_blank"}>LinkedIn</InfoLink><br/>
                    <InfoLink href={GITHUB_LINK} target={"_blank"}>GitHub</InfoLink><br/>
                    <InfoLink href={cvPDF} target={"_blank"}>Resume</InfoLink> (PDF)
                </Info>
            </InfoSection>
        </SectionContent>
    </SectionWrapper>
)

export default Contact;