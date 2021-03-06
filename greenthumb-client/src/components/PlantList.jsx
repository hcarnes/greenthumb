import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

class PlantList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          {this.props.plants.map((plant, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <LocalFlorist />
              </ListItemIcon>
              <Counter plant={plant} />
              <ListItemText primary={plant.name} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default PlantList;