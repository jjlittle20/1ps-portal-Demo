import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  textField: {
    paddingBottom: theme.spacing(2),
  },
  submitButton: {
    color: "white",
    backgroundColor: "green",
  },
  formBox: {
    backgroundColor: "#e0e0e0",
    width: "500px",
    marginTop: theme.spacing(10),
    borderRadius: 10,
  },
  formPageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    color: "white",
    backgroundColor: "red",
    marginTop: theme.spacing(2),
  },
}));

export default function AddExpenseRequestForm() {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [requestedBy, setRequestedBy] = useState("");
  const [agency, setAgency] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRequestedBy = (e) => {
    setRequestedBy(e.target.value);
  };
  const handleAgency = (e) => {
    setAgency(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(description);

    await axios.post("http://localhost:3000/expensesDataBase", {
      id: Math.floor(Math.random) * 1000,
      date: new Date(),
      request: description,
      requestedby: requestedBy,
      status: "Under Review",
      agency: agency,
      amount: amount,
    });
  };

  return (
    <Container className={classes.formPageContainer}>
      <Box className={classes.formBox}>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            id="outlined-basic"
            onChange={(e) => handleDescription(e)}
            label="Expense Description"
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Requested By"
            onChange={(e) => handleRequestedBy(e)}
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Agency"
            onChange={(e) => handleAgency(e)}
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            id="outlined-basic"
            label="Amount"
            onChange={(e) => handleAmount(e)}
            className={classes.textField}
          />
          <Button className={classes.submitButton} type="submit">
            Add
          </Button>
          <Link
            to="/Expenses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button className={classes.cancelButton}>Cancel</Button>
          </Link>
        </form>
      </Box>
    </Container>
  );
}
