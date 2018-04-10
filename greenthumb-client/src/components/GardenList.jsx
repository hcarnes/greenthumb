import List from 'material-ui/List';
import React, { Component } from 'react';
import GardenListItem from './GardenListItem'
import { Link } from 'react-router-dom';

class GardenList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          {this.props.gardens.map((garden, index) => (
            <Link to={`/gardens/${index}`}><GardenListItem garden={garden} /></Link>
          ))}
        </List>
      </div>
    )
  }
}

export default GardenList;