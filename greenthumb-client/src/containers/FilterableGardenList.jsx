import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { searchGardens } from '../actions/searchGardens';
import { bindActionCreators } from 'redux';
import GardenList from '../components/GardenList'

class FilterableGardenList extends Component {

  handleFilter = (event) => {
    this.props.searchGardens(event.currentTarget.value)
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