import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Equalizer from "@material-ui/icons/Equalizer";
import { red } from "@material-ui/core/colors";
let confirmedApproved = 0;
const useStyles = makeStyles((theme) => ({
  cardTypography: {
    textAlign: "center",
  },
  dividerVertical: {
    marginTop: 10,
    marginBottom: 10,
  },
  dashboardContainer: {
    paddingTop: theme.spacing(10),
    height: "100%",
    paddingBottom: theme.spacing(10),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ExpenseDashboardCard = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/expensesDataBase");
      setData(result.data);
      setDataLoaded(true);
      console.log(data);

      checkApproved();
    };

    fetchData();
  }, []);
  const [approved, setApproved] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  function checkApproved() {
    console.log(dataLoaded);

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "Approved") {
        console.log(data[i]);
        confirmedApproved++;
        setApproved(confirmedApproved);
      }
    }
  }
  return (
    <Box className={classes.pageWrapper}>
      <Container className={classes.dashboardContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardHeader
                avatar={
                  <Avatar
                    variant="rounded"
                    aria-label="recipe"
                    className={classes.avatar}
                  >
                    <Equalizer />
                  </Avatar>
                }
                title="Expenses"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={4}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                    <Typography variant="h2">{approved}</Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={4}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                    <Typography variant="h2">0</Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={4}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Submitted
                    </Typography>
                    <Typography variant="h2">{data.length}</Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExpenseDashboardCard;
