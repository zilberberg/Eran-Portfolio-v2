import React from "react"
import { PROJECTS } from "../../config/data";
import { Info, InfoHeader, InfoSection, SectionWrapper, SubHeader } from "../../elements";
import { ShortSeperator } from "../../elements/seperators";
import { ProjectImage, ProjectImageWrapper, ProjectsWrapper } from "./styles";

const Projects = () => (
    <SectionWrapper>
        <SubHeader>
            PROJECTS
        </SubHeader>
        <ShortSeperator/>
        <Info>
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
        </Info>
        {
            PROJECTS.map((project, index) => {
                return (
                    <ProjectsWrapper key={index}>
                        <InfoSection>
                            <ProjectImageWrapper>
                                <ProjectImage image={project.image}/>
                            </ProjectImageWrapper>
                        </InfoSection>
                        <InfoSection>
                            <InfoHeader>
                                {project.title}
                            </InfoHeader>
                            <Info>
                                {project.description}
                            </Info>
                        </InfoSection>
                    </ProjectsWrapper>
                )
            })
        }
    </SectionWrapper>
)

export default Projects;