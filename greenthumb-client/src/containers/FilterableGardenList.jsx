import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { searchGardens } from '../actions/searchGardens';
import { bindActionCreators } from 'redux';
import GardenList from '../components/GardenList'

class FilterableGardenList extends Component {

  handleFilter = (event) => {
    this.props.searchGardens(event.currentTarget.value)
  }

  componentDidMount() {
    console.log("foobar")
    this.props.searchGardens(this.props.query)
  }

  render() {
    return (
      <div>
        <TextField onChange={this.handleFilter} placeholder="Search" />
        <GardenList gardens={this.props.gardens} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchGardens: searchGardens }, dispatch)
}

const mapStateToProps = (state) => {
  return { gardens: state.gardens.filter(garden => garden.garden_name.toLowerCase().includes(state.query)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterableGardenList)