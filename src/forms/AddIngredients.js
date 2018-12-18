import React, { Component } from 'react';

class AddIngredientsForm extends Component {
  state = { ingredients: [] }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, this.inputNode.value]
    }), () => {
      this.inputNode.value = '';
      this.props.getIngredients(this.state.ingredients);
    })
  };

  render() {
    let placeholder;
    if(this.state.ingredients.length >= 1) {
      placeholder = 'add next ingredient'
    } else {
      placeholder = 'add first ingredient';
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

export default AddIngredientsForm;
