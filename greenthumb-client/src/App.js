import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  contentPaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  primaryPaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={classes.primaryPaper}>Welcome to Greenthumb Gardens</Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper className={classes.contentPaper}>Map</Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper className={classes.contentPaper}>List</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
