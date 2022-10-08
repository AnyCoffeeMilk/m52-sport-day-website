import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function CompeTimeline({ table, date }) {
  const tableList = table.map((time, i) => {
    const curTime = new Date()
    const nodeTime = new Date(`2022 Sep ${date} ${time.time}`)

    const gray = '#9ca3af'
    const red = '#f87171'
    let past = false
    if (nodeTime.getTime() < curTime.getTime()) {
      past = true
    }

    return (
      <TimelineItem key={i}>
        <TimelineOppositeContent sx={{fontSize: '1.15em', fontWeight: '500', color: past ? gray : null}} color="text.secondary">
          {time.time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{background: past ? gray : red}} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{fontSize: '1.15em', color: past ? gray : null}}>{time.content}</TimelineContent>
      </TimelineItem>
    )
  })

  return (
    <React.Fragment>
      <Timeline>
        {tableList}
      </Timeline>
    </React.Fragment>
  );
}