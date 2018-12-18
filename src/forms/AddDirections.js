import React, { Component } from 'react';

class AddDirectionsForm extends Component {
  state = { directions: [] }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      directions: [...prevState.directions, this.inputNode.value]
    }), () => {
      this.inputNode.value = '';
      this.props.getDirections(this.state.directions);
    })
  };

  render() {
    let placeholder;
    if(this.state.directions.length >= 1) {
      placeholder = 'add next direction'
    } else {
      placeholder = 'add first direction';
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <input placeholder={placeholder} type="text" ref={node => this.inputNode = node}/>
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default AddDirectionsForm;
