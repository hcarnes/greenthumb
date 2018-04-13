import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import PlantList from './PlantList';
import { fetchPlants } from '../actions/fetchPlants';
import { bindActionCreators } from 'redux';

class GardenDetails extends Component {

  componentDidMount() {
    this.props.fetchPlants(this.props.match.params.gardenId)
  }

  render() {
    if (!this.props.garden) return <div>Loading...</div>
    return (
      <div>
        {this.props.garden.garden_name}
        <PlantForm gardenIndex={this.props.match.params.gardenId} />
        <PlantList plants={this.props.plants} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPlants: fetchPlants }, dispatch)
}

const mapStateToProps = (state, props) => {
  return {
    garden: state.gardens[props.match.params.gardenId],
    plants: state.plants.filter(plant => plant.gardenIndex.toString() === props.match.params.gardenId)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GardenDetails)