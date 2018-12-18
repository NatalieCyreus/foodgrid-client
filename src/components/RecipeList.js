import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getRecipeQuery } from '../queries/queries';

class RecipeList extends Component {
  displayRecipes() {
    var data = this.props.data;
    if(data.loading) {
      return (<div>Loading...</div>)
    } else {
      return data.recipes.map(recipe => {
        return (
          <li key={recipe.id}>{recipe.title}</li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul id="recipeList">
          {this.displayRecipes()}
        </ul>
      </div>
    );
  }
}

export default graphql(getRecipeQuery)(RecipeList);
