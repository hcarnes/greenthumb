import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import GardenMap from '../components/GardenMap'
import FilterableGardenList from '../containers/FilterableGardenList'
import GardenDetails from '../components/GardenDetails'
import { connect } from 'react-redux';
import { compose } from "recompose";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  contentPaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
});

class GardenDiscovery extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.contentPaper}>
              <GardenMap />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.contentPaper}>
              <FilterableGardenList query={this.props.query || this.props.match.params.query || " "} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(GardenDiscovery)
