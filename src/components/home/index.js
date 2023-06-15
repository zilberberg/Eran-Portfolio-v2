import React from "react"
import theme from "../../config/theme";
import { Row, SectionContent, SectionWrapper } from "../../elements";
import { HomeHeader, HomeSubHeader, LaptopWrapper, WaveBackgroundWrapper } from "./styles";

const Home = () => (
    <SectionWrapper>
        <WaveBackgroundWrapper/>
        <LaptopWrapper/>
        <SectionContent>
            <HomeHeader>
            Hi, my name is {'\n'}
            Eran Zilberberg
            </HomeHeader>
            <Row>
                <HomeSubHeader color={theme.colors.dark}>
                and I’m a
                </HomeSubHeader>
                <HomeSubHeader color={theme.colors.light}>
                &nbsp;software engineer.
                </HomeSubHeader>
            </Row>
        </SectionContent>
    </SectionWrapper>
)

export default Home;