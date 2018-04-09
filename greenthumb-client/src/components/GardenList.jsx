import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import { connect } from 'react-redux';
import { searchGardens } from '../actions/searchGardens';
import { bindActionCreators } from 'redux';

class GardenList extends Component {

  handleFilter = (event) => {
    this.props.searchGardens(event.currentTarget.value)
  }

  render() {
    return (
      <div>
        <TextField onChange={this.handleFilter} placeholder="Search" />
        <List component="nav">
          {this.props.gardens.map(garden => (
            <ListItem button key={`${garden.garden_name}-${garden.jurisdiction}`}>
              <ListItemIcon>
                <LocalFlorist />
              </ListItemIcon>
              <ListItemText primary={garden.garden_name} />
            </ListItem>
          ))}
        </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(GardenList)