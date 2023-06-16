import React from "react"
import { EXPERIENCE_TIMELINE } from "../../config/data";
import { SectionContent, SectionWrapper, TitleComponent } from "../../elements";
import TimelineContainer from "../timeline-container";
import { ExperienceWrapper } from "./styles";

const Experience = () => (
    <SectionWrapper>
        <SectionContent>
            <TitleComponent>
                work experience
            </TitleComponent>
            <ExperienceWrapper>
                <TimelineContainer data={EXPERIENCE_TIMELINE}/>
            </ExperienceWrapper>
        </SectionContent>
    </SectionWrapper>
)

export default Experience;