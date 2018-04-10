import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import React, { Component } from 'react';

class GardenListItem extends Component {

  render() {
    return (
      <div>
        <ListItem button key={`${this.props.garden.garden_name}-${this.props.garden.jurisdiction}`}>
          <ListItemIcon>
            <LocalFlorist />
          </ListItemIcon>
          <ListItemText primary={this.props.garden.garden_name} />
        </ListItem>
      </div>
    )
  }
}

export default GardenListItem;