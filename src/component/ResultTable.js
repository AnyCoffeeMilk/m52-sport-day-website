import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(248, 113, 113)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ResultTable({ content }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>名次</StyledTableCell>
            <StyledTableCell align="center">號碼</StyledTableCell>
            <StyledTableCell align="center">姓名</StyledTableCell>
            <StyledTableCell align="center">成績</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.position}
              </StyledTableCell>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
