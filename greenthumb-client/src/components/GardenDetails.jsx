import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import PlantList from './PlantList';
import { fetchPlants } from '../actions/fetchPlants';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';

class GardenDetails extends Component {



  componentDidMount() {
    if (this.props.plants.length == 0) this.props.fetchPlants(this.props.match.params.gardenId)
  }

  render() {
    if (!this.props.garden) return <div>Loading...</div>
    return (
      <div>
        <Paper style={style}>
          <h4>
            {this.props.garden.garden_name}
          </h4>
          <PlantForm gardenIndex={this.props.match.params.gardenId} />
          <PlantList plants={this.props.plants} />
        </Paper>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPlants: fetchPlants }, dispatch)
}

const mapStateToProps = (state, props) => {
  return {
    garden: state.gardens.find(garden => garden.id.toString() === props.match.params.gardenId),
    plants: state.plants.filter(plant => plant.gardenIndex.toString() === props.match.params.gardenId)
  };
};

const style = {
  padding: 20
};

export default connect(mapStateToProps, mapDispatchToProps)(GardenDetails)