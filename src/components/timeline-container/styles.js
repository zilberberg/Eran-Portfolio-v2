import { TimelineConnector, TimelineDot } from "@mui/lab"
import styled from "styled-components"

export const DatesStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '23px',
}

export const PositionStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '28px',
}

export const CompanyStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
}

export const DescriptionStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '24px',
}

export const CustomizedDot = styled(TimelineDot).attrs((props) => ({
    sx: {
        backgroundColor: props.theme.colors.dark
    }
}))`

`

export const CustomizedConnector = styled(TimelineConnector).attrs((props) => ({
    sx: {
        backgroundColor: props.theme.colors.dark
    }
}))`

`