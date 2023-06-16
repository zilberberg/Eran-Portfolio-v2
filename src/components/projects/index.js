import React from "react"
import { PROJECTS } from "../../config/data";
import { SectionContent, SectionWrapper, TitleComponent } from "../../elements";
import { ProjectImage, ProjectImageWrapper, ProjectInfoSection, ProjectInfoTitle, ProjectInfoWrapper, ProjectLink, ProjectsWrapper, ProjectWrapper } from "./styles";

const Projects = () => (
    <SectionWrapper>
        <SectionContent>
            <TitleComponent>
                projects
            </TitleComponent>
            <ProjectsWrapper>
                {
                    PROJECTS.map((project, index) => {
                        return (
                            <ProjectWrapper key={index}>
                                <ProjectInfoWrapper>
                                    <ProjectImageWrapper>
                                        <ProjectImage src={project.image}/>
                                    </ProjectImageWrapper>
                                </ProjectInfoWrapper>
                                <ProjectInfoWrapper padding={"100px 0px"}>
                                    <ProjectInfoSection>
                                        {project.dev}
                                    </ProjectInfoSection>
                                    <ProjectInfoSection>
                                        <ProjectInfoTitle>
                                            {project.title}
                                        </ProjectInfoTitle>
                                        {project.description}
                                    </ProjectInfoSection>
                                    <ProjectInfoSection>
                                        <ProjectLink href={project.link} target={"_blank"}>
                                            View Project
                                        </ProjectLink>
                                    </ProjectInfoSection>
                                </ProjectInfoWrapper>
                            </ProjectWrapper>
                        )
                    })
                }
            </ProjectsWrapper>
        </SectionContent>
    </SectionWrapper>
)

export default Projects;