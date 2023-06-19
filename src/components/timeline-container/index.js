import React from "react"
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { Typography } from "@mui/material"
import { CompanyStyle, DatesStyle, DescriptionStyle, PositionStyle } from "./styles"

const TimelineContainer = (props) => (
    <Timeline
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            },
        }}
    >
        {
            props.data.map((work, index) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '8px', maxWidth: "300px" }}>
                            <Typography component="span" sx={DatesStyle}>
                                {work.dates}
                            </Typography>
                        </TimelineContent>

                        <TimelineContent sx={{ py: '8px', px: 2, marginBottom: '40px' }}>
                            <Typography component="div" sx={{ marginBottom: '10px' }}>
                                <Typography component="span" sx={PositionStyle}>
                                    {work.position}
                                </Typography>
                            </Typography>
                            <Typography component="div" sx={{ marginBottom: '40px' }}>
                                <Typography component="span" sx={CompanyStyle}>
                                    {work.company}&nbsp;
                                </Typography>
                                <Typography component="span" sx={CompanyStyle}>
                                    {work.location}
                                </Typography>
                            </Typography>
                            <Typography component="span" sx={DescriptionStyle}>
                                {work.description}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            })
        }
    </Timeline>
)

export default TimelineContainer;