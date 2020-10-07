import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Título</th>
        <th>Descripción</th>
        <th>Categoría</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {recipes.map((recipe) => {
        return (
          <tr key={recipe.id}>
            <td>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="img-thumbnail"
              />
            </td>
            <td>
              <Link to={"/recipe/" + recipe.slug}>{recipe.title}</Link>
            </td>
            <td>{recipe.description}</td>
            <td>{recipe.categoryName}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(recipe)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default RecipeList;
