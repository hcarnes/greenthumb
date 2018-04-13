import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import PlantList from './PlantList';

class GardenDetails extends Component {

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

const mapStateToProps = (state, props) => {
  return {
    garden: state.gardens[props.match.params.gardenId],
    plants: state.plants.filter(plant => plant.gardenIndex.toString() === props.match.params.gardenId)
  };
};

export default connect(mapStateToProps)(GardenDetails)