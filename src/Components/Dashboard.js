import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Card} from "@material-ui/core";

import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Equalizer from "@material-ui/icons/Equalizer";
import AxiosTest from "./AxiosTest"


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://my1ps.com/">
//         1PS - Managed Growth Solutions
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#e0e0e0",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  notificationsIcon: {
    color: "#000000",
  },
  notificationsIconBadge: {
    color: "red",
  },
  underDrawerLogoDivider: {
    background: "green",
  },
  drawerLogoTop: {},
  pageWrapper: {
    backgroundColor: "#e0e0e0",
    height: "100vh",
  },
  avatar: {
    backgroundColor: red[500],
  },
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
  },
}));

export default function Dashboard() {
  const classes = useStyles();

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
                title="Placements"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                title="Timesheets"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                title="Invoices"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={4}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Initiated
                    </Typography>
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
                      Paid
                    </Typography>
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
                      Overdue
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                title="Placement expiary"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                title="Cash In"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
                title="Cash Out"
              />
              <Divider />
              <Grid container spacing={0} wrap="nowrap">
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent
                    alignItems="center"
                    className={classes.cardTypography}
                  >
                    <Typography variant="body2" component="p">
                      Approved
                    </Typography>
                  </CardContent>
                </Grid>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                  flexItem
                />
                <Grid item xs={12} sm={6} md={6}>
                  <CardContent className={classes.cardTypography}>
                    <Typography variant="body2" component="p">
                      Rejected
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  );
}
