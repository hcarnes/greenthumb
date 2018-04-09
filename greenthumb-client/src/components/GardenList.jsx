import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LocalFlorist from 'material-ui-icons/LocalFlorist'
import { connect } from 'react-redux';

class GardenList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          {this.props.gardens.map(garden => (
            <ListItem button>
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

const mapStateToProps = (state) => {
  return { gardens: state.gardens };
};

export default connect(mapStateToProps)(GardenList)