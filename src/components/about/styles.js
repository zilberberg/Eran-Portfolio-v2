import styled from "styled-components";
import ProfileImage from "../../images/profile-image.png"
import ProfileImageBackground from "../../images/profile-image-background.png"

export const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ProfileImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ProfileImageWrapper = styled.div`
    background-image: url(${ProfileImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
    position: relative;
`

export const ProfileImageBackgroundWrapper = styled.div`
    background-image: url(${ProfileImageBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
    position: absolute;
    margin-left: 70px;
    margin-top: -40px;
`