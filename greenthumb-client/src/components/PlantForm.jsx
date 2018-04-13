import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlant } from '../actions/addPlant';

class PlantForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPlant({ name: this.state.text, gardenIndex: this.props.gardenIndex })
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div style={style}>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="ex: carrots"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input value="Add plant" type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPlant: addPlant
  }, dispatch);
};

const style = {
  margin: 20
};

export default connect(null, mapDispatchToProps)(PlantForm);