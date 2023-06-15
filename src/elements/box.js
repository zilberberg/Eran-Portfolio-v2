import styled from "styled-components";

export const SkillIcon = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    transition: .4s;
    :hover {
        width: 100px;
        height: 100px;
    }
`

export const SkillTitle = styled.div`

`

export const SkillWrapper = styled.div`
    width: 160px;
    height: 160px;
    margin: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Skill = (props) => (
    <SkillWrapper>
        <SkillIcon src={props.skill.icon}/>
        <SkillTitle>
            {props.skill.title}
        </SkillTitle>  
    </SkillWrapper>
)