import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocalFlorist from 'material-ui-icons/LocalFlorist'

class GardenList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <LocalFlorist />
            </ListItemIcon>
            <ListItemText primary="DUMBO" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalFlorist />
            </ListItemIcon>
            <ListItemText primary="Brooklyn Heights" />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default GardenList