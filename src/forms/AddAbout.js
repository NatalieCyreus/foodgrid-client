import React, { Component } from 'react';

class AddAboutForm extends Component {
  state = { about: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      about: this.inputNode.value
      }, () => {
      this.inputNode.value = '';
      this.props.getAbout(this.state.about);
    })
  };

  render() {
    let placeholder;
    if(this.state.about.length >= 1) {
      placeholder = 'change about'
    } else {
      placeholder = 'add about';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input placeholder={placeholder} type="text" ref={node => this.inputNode = node}/>
        <button>+</button>
      </form>
    );
  }
}

export default AddAboutForm;
