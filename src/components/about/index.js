import React from "react"
import { Info, InfoHeader, InfoSection, SectionWrapper, SubHeader } from "../../elements";
import { ShortSeperator } from "../../elements/seperators";
import { AboutWrapper, BoxWrapper } from "./styles";
import theme from "../../config/theme";
import { Box } from "../../elements/box";
import { SKILLS } from "../../config/data";

const About = () => (
    <SectionWrapper backgroundColor={theme.colors.lightBlue}>
        <SubHeader>
            ABOUT ME
        </SubHeader>
        <ShortSeperator/>

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
                <InfoHeader>
                    My Skills
                </InfoHeader>
                <Info>
                    <BoxWrapper>
                        {
                            SKILLS.map((skill, index) => {
                                return (
                                    <Box key={index}>
                                        {skill}
                                    </Box>
                                )
                            })
                        }
                    </BoxWrapper>
                </Info>
            </InfoSection>
        </AboutWrapper>
    </SectionWrapper>
)

export default About;