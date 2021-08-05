import React, { useState, useEffect } from 'react';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Container, Typography, Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({seeMore: {
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
AddRequestButton:{
  backgroundColor: "green",
  color: "#fff"
}
}));

 
// function App() {
  
  

export default function Expenses() {
  const classes = useStyles();
  const [data, setData] = useState( [] );
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "expenses.json",
      );
 
      setData(result.data);
      console.log({data})
    };
 
    fetchData();
  }, []);
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
              <TableCell className={classes.tableTitle}>Application Id</TableCell>
              <TableCell className={classes.tableTitle}>Date</TableCell>
              <TableCell className={classes.tableTitle}>Description</TableCell>
              <TableCell className={classes.tableTitle}>From</TableCell>
              <TableCell className={classes.tableTitle}>Agency</TableCell>
              <TableCell className={classes.tableTitle}>Amount(CCY)</TableCell>
              
              <TableCell align="right" className={classes.tableTitle}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.request}</TableCell>
                <TableCell>{row.requestedby}</TableCell>
                <TableCell>{row.agency}</TableCell>
                <TableCell>{row.amount}</TableCell>
                
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box>
      <Link to="/ExpenseRequest" style={{ textDecoration: "none", color: "inherit" }}>
        <Button className={classes.AddRequestButton}>
          Add Request
        </Button>
        </Link>
      </Box>
    </Container>
  );
}
 
