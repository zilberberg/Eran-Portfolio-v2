import React from "react"
import { Info, InfoHeader, InfoSection, InfoSectionContent, SectionWrapper, TitleComponent } from "../../elements";
import { AboutWrapper, ProfileImageBackgroundWrapper, ProfileImageContainer, ProfileImageWrapper } from "./styles";
import theme from "../../config/theme";

const About = () => (
    <SectionWrapper backgroundColor={theme.colors.lightBlue}>
        <InfoSectionContent>
            <TitleComponent>
                about me
            </TitleComponent>

            <AboutWrapper>
                <InfoSection>
                    <InfoHeader>
                        Get to know me!
                    </InfoHeader>
                    <Info>
                    I am <b>Eran Zilberberg</b>, a dedicated and driven <b>software engineer</b> with a strong passion for coding and problem-solving.<br/>
                    With a background in computer science and years of experience in <b>full stack</b> development, 
                    I thrive in creating robust and user-friendly applications. <br/>
                    My expertise lies in technologies such as ReactJS, Ruby on Rails, Java, HTML, and CSS. 
                    I am a detail-oriented professional who enjoys collaborating with teams to deliver high-quality solutions. <br/>
                    Continuously expanding my <b>skills</b> and staying updated with the latest industry trends, 
                    I am committed to creating innovative software that makes a positive impact.
                    </Info>
                </InfoSection>
                <InfoSection>
                    <ProfileImageContainer>
                        <ProfileImageBackgroundWrapper/>
                        <ProfileImageWrapper/>
                    </ProfileImageContainer>
                </InfoSection>
            </AboutWrapper>
        </InfoSectionContent>
    </SectionWrapper>
)

export default About;