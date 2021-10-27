import React from "react";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
}));

const jobs = [
  { title: ".Net Developer" },
  { title: "Business Development Manager- Forrun" },
  { title: "Sr. PHP Developer" },
  { title: "SQA Analyst" },
  { title: "PHP Full Stack Developer" },
  { title: "Sr. SQA Automation Engineer" },
  { title: "Machine Learning Expert" },
  { title: "Project Manager" },
  { title: "Sr. Project Manager" },
  { title: "Technical Business Development Manager" },
  { title: "Front End Developer - Angular" },
  { title: "Cloud Support Engineer" },
  { title: "Cloud Support Manager" },
  { title: "Share Point Developer" },
  { title: "Business Analyst" },
];
export default function titleTable() {
  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            {jobs.map((job) => (
              <StyledTableRow key={job.title}>
                <StyledTableCell component="th" scope="row">
                  {job.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained">Apply</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
