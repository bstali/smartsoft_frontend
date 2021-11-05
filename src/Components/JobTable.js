import React, { useState } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tableHeader: {
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif",
    textTransform: "uppercase",
    marginBottom: 30,
    fontSize: 30,
    marginTop: 100
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

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
export default function JobTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <p className={classes.tableHeader}>Job openings</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            {jobs.map((job) => (
              <StyledTableRow key={job.title}>
                <StyledTableCell component="th" scope="row">
                  {job.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" onClick={handleClickOpen}>
                    Apply
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: 18,
            color: "#333333",
          }}
        >
          {"Apply Now"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              fontSize: 14,
              lineHeight: 1.75,
              margin: "0 0 10px",
              color: "#333333",
              fontWeight: 700,
            }}
          >
            Send us an e-mail with the subject of job title at
            "careers@smartsoft.com"
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" size="small" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
