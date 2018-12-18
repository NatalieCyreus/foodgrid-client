import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getUserQuery, addRecipeMutation } from '../queries/queries';

import AddTitleForm from '../forms/AddTitle';
import AddCategoryForm from '../forms/AddCategory';
import AddIngredientsForm from '../forms/AddIngredients';
import AddDirectionsForm from '../forms/AddDirections';
import AddAboutForm from '../forms/AddAbout';


class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: [],
      about: '',
      ingredients: [],
      directions: [],
      userId: '',
    }
  }

  displayUsers() {
    var data = this.props.getUserQuery;
    if(data.loading) {
      return (<option>loading...</option>);
    } else {
      return data.users.map(user => {
        return (<option key={user.id} value={user.id}>{user.name}</option>);
      })
    }
  };

  handleClick = () => {
    console.log(this.state);
    this.props.addRecipeMutation({
      variables: {
        title: this.state.title,
        category:this.state.category,
        about:this.state.about,
        ingredients:this.state.ingredients,
        directions:this.state.directions,
        userId:this.state.userId
      }
    });
  }

  render() {
    return (
      <div>
        <AddTitleForm getTitle={(title) => this.setState({title})}/>
        <AddCategoryForm getCategory={(category) => this.setState({category})} />
        <AddAboutForm getAbout={(about) => this.setState({about})}/>
        <AddIngredientsForm getIngredients={(ingredients) => this.setState({ingredients})} />
        <AddDirectionsForm getDirections={(directions) => this.setState({directions})} />
        <form >
          <div className="field">
            <label></label>
            <select onChange={(e) => this.setState({ userId: e.target.value })}>
              <option>select user</option>
              {this.displayUsers()}
            </select>
          </div>
        </form>
        <button onClick={this.handleClick}>create</button>

        <div>
        <h2>{this.state.title?this.state.title:''}</h2>

        {this.state.category.length>=1?this.state.category.map((cat, i) => (
          <h5 key={i}>#{cat}</h5>)):''}

        <p>{this.state.about?this.state.about:''}</p>

        <ul>
        {this.state.ingredients.length>=1 ?this.state.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>)):''}
        </ul>

        <ol>
        {this.state.directions.length>=1 ?this.state.directions.map((direction, i) => (
          <li key={i}>{direction}</li>)):''}
        </ol>

        </div>
      </div>
    );
  }
}

export default compose(
  graphql(getUserQuery, { name: "getUserQuery" }),
  graphql(addRecipeMutation, { name: "addRecipeMutation" })
)(AddRecipe);
