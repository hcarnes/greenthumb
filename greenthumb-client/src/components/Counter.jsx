import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likePlant } from '../actions/likePlant'
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Favorite from 'material-ui-icons/Favorite';

class Counter extends Component {

  handleClick = (event) => {
    this.props.likePlant(this.props.plant)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="raised" size="small">
          <Favorite />
          {this.props.plant.likes}
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ likePlant: likePlant }, dispatch)
}

const mapStateToProps = (state, props) => {
  return {
    plant: state.plants.find(plant => plant.id === props.plant.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
