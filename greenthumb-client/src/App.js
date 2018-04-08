import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ReactMapGL from 'react-map-gl';
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

  state = {
    viewport: {
      height: 600,
      latitude: 40.6981,
      longitude: -73.9571,
      zoom: 10
    }
  };

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={classes.primaryPaper}>Welcome to Greenthumb Gardens</Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.contentPaper}>
              <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.contentPaper}>Garden list goes here</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
