import { gql } from 'apollo-boost';

const getRecipeQuery = gql`
{
  recipes {
    id
    title
    category
    about
    ingredients
    directions
    likes
  }
}
`;

const getUserQuery = gql`
{
  users {
    id
    name
  }
}
`;

const addRecipeMutation = gql`
  mutation($title:String!, $category:[String], $about:String!, $ingredients:[String], $directions:[String], $userId:ID!){
    addRecipe(
      title: $title,
      category: $category,
      about: $about,
      ingredients: $ingredients,
      directions: $directions,
      userId: $userId
    ) {
      title
      category
      about
      ingredients
      directions
    }
  }
`;

export { getUserQuery, getRecipeQuery, addRecipeMutation };
