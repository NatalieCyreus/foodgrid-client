import React, { Component } from 'react';

class AddTitleForm extends Component {
  state = { title: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      title: this.inputNode.value
      }, () => {
      this.inputNode.value = '';
      this.props.getTitle(this.state.title);
    })
  };

  render() {
    let placeholder;
    if(this.state.title.length >= 1) {
      placeholder = 'change title'
    } else {
      placeholder = 'add title';
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

export default AddTitleForm;
