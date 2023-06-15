import React from "react"
import { SKILLS } from "../../config/data";
import { SectionContent, SectionWrapper, Skill, TitleComponent } from "../../elements";
import { SkillsWrapper } from "./styles";

const Skills = () => (
    <SectionWrapper>
        <SectionContent>
            <TitleComponent>
                skills
            </TitleComponent>
            <SkillsWrapper>
                {
                    SKILLS.map((skill, index) => {
                        return (
                            <Skill skill={skill} key={index}/>
                        )
                    })
                }
            </SkillsWrapper>
        </SectionContent>
    </SectionWrapper>
)

export default Skills;