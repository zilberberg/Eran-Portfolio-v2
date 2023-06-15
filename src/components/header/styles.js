import styled from "styled-components"
import Logo from '../../images/LOGO.svg'
import Background from "../../images/header-background.png"

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1500;
    display: flex;
`

export const HeaderContentWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 250px;
    align-items: center;
`

export const ImageWrapper = styled.div`
    background-image: url(${Logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40px;
    height: 30px;
    z-index: 100;
`

export const BackgroundWrapper = styled.img.attrs((props) => ({
    src: Background
}))`
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
`