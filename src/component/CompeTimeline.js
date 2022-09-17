import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function CompeTimeline({ table }) {
  const tableList = table.map((time, i) => (
    <TimelineItem key={i}>
      <TimelineOppositeContent sx={{fontSize: '1.15em'}} color="text.secondary">
        {time.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{background: '#f87171'}} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{fontSize: '1.15em'}}>{time.content}</TimelineContent>
    </TimelineItem>
  ))

  return (
    <React.Fragment>
      <Timeline>
        {tableList}
      </Timeline>
    </React.Fragment>
  );
}