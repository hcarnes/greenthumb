import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import GardenMap from './components/GardenMap';
import FilterableGardenList from './containers/FilterableGardenList';
import './App.css';
import { fetchGardens } from './actions/fetchGardens';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class App extends Component {

  componentDidMount() {
    this.props.fetchGardens()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Greenthumb Gardens
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchGardens: fetchGardens }, dispatch)
}

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(App);
