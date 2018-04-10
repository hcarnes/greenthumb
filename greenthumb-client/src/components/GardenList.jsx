import List from 'material-ui/List';
import React, { Component } from 'react';
import GardenListItem from './GardenListItem'

class GardenList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          {this.props.gardens.map(garden => (
            <GardenListItem garden={garden} />
          ))}
        </List>
      </div>
    )
  }
}

export default GardenList;