import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";

import List from "@material-ui/icons/List";
import Description from "@material-ui/icons/Description";
import FileCopy from "@material-ui/icons/FileCopy";
import TrendingUp from "@material-ui/icons/TrendingUp";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" exact style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <List />
      </ListItemIcon>
      <ListItemText primary="Placements" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Timesheets" />
    </ListItem>
    <Divider />
    <Link to="/Expenses" style={{ textDecoration: "none", color: "inherit" }}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Expenses" />
    </ListItem>
    </Link>
    <Divider />
    <Link to="/Orders" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>
          <Description />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItem>
    </Link>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <FileCopy />
      </ListItemIcon>
      <ListItemText primary="Manual Invoices" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <TrendingUp />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <Divider />
  </div>
);
