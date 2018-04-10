import React, { Component } from 'react';
import { connect } from 'react-redux';

class GardenDetails extends Component {

  render() {
    if (!this.props.garden) return <div>Loading...</div>
    return (
      <div>
        {this.props.garden.garden_name}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { garden: state.gardens[props.match.params.gardenId] };
};

export default connect(mapStateToProps)(GardenDetails)