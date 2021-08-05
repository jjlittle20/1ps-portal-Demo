import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Container, Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

// Generate Order Data
function createData(
  invoice,
  date,
  from,
  to,
  agency,
  amount,
  generratedfor,
  due,
  status
) {
  return {
    invoice,
    date,
    from,
    to,
    agency,
    amount,
    generratedfor,
    due,
    status,
  };
}

const rows = [
  createData(
    "INV-16019",
    "19 Oct 2020",
    "1PS",
    "Test Agency",
    "Test Agency",
    "£27.93",
    "TMS-10205",
    "23 Nov 2020",
    "Paid"
  ),
  createData(
    "INV-16018",
    "19 Oct 2020",
    "1PS",
    "Test Agency",
    "Test Agency",
    "£27.93",
    "TMS-10205",
    "23 Nov 2020",
    "Paid"
  ),
  createData(
    "INV-16017",
    "19 Oct 2020",
    "1PS",
    "Test Agency",
    "Test Agency",
    "£27.93",
    "TMS-10205",
    "23 Nov 2020",
    "Paid"
  ),
  createData(
    "INV-16016",
    "19 Oct 2020",
    "1PS",
    "Test Agency",
    "Test Agency",
    "£27.93",
    "TMS-10205",
    "23 Nov 2020",
    "Paid"
  ),
];



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableTitle: {
    color: "green",
  },
  tableHeadBox: {
    backgroundColor: "green",
    height: 100,
    width: "100%",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,

    borderRadius: 10,
    marginBottom: theme.spacing(4),

    flexDirection: "row",
  },
  tableWrapper: { overflowX: "auto" },
  tableHeadBoxSwitch: {},
  switchbox: {},
  invoiceTitleText: {
    color: "#fff",
  },
  tableContainer: {
    width: "100vw",
    paddingTop: theme.spacing(10),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <Container className={classes.tableContainer}>
      <Box display="sticky" boxShadow={10} className={classes.tableHeadBox}>
        <Box className={classes.switchbox} display="flex" flexWrap="wrap">
          {" "}
          <Switch
            className={classes.tableHeadBoxSwitch}
            defaultUnchecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
        </Box>

        <Box display="flex" className={classes.invoiceTitleText}>
          <Typography>Showing Last 4 Invoices</Typography>
        </Box>
      </Box>
      <Box className={classes.tableWrapper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableTitle}>Invoice#</TableCell>
              <TableCell className={classes.tableTitle}>Date</TableCell>
              <TableCell className={classes.tableTitle}>From</TableCell>
              <TableCell className={classes.tableTitle}>To</TableCell>
              <TableCell className={classes.tableTitle}>Agency</TableCell>
              <TableCell className={classes.tableTitle}>Amount(CCY)</TableCell>
              <TableCell className={classes.tableTitle}>
                Generated For
              </TableCell>
              <TableCell className={classes.tableTitle}>Due Date</TableCell>
              <TableCell align="right" className={classes.tableTitle}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell>{row.invoice}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.agency}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.generratedfor}</TableCell>
                <TableCell>{row.due}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}
