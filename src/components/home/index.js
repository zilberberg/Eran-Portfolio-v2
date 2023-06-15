import React from "react"
import { Header, SectionWrapper } from "../../elements";
import { HeaderInfo } from "./styles";

const Home = () => (
    <SectionWrapper>
        <Header>
            HEY, I'm ERAN ZILBERBERG
        </Header>
        <HeaderInfo>
        Welcome to my Portfolio Website! {'\n'} I'm Eran Zilberberg, a passionate software engineer specializing in full stack development. {'\n'}
        Explore my projects and discover my expertise. Let's connect and bring innovative ideas to life!
        </HeaderInfo>
    </SectionWrapper>
)

export default Home;