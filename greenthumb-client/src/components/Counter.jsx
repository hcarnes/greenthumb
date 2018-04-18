import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likePlant } from '../actions/likePlant'
import { bindActionCreators } from 'redux';

class Counter extends Component {

  handleClick = (event) => {
    this.props.likePlant(this.props.plant)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Like</button>
        {this.props.plant.likes}
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
