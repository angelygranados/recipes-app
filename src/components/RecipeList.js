import React from "react";
import PropTypes from "prop-types";

const RecipeList = ({ recipes, onDeleteClick, onEditClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Título</th>
        <th>Descripción</th>
        <th>Categoría</th>
        <th />
        <th />
      </tr>
    </thead>
    <tbody>
      {recipes.map((recipe) => {
        return (
          <tr key={recipe.id}>
            <td>
              <img className="img-thumbnail" src={recipe.image }alt={recipe.title} />
            </td>
            <td>{recipe.title}</td>
            <td>{recipe.description}</td>
            <td>{recipe.categoryName}</td>
            <td>
            <button 
                className="btn btn-outline-primary"
                onClick={() => onEditClick(recipe.slug)}
              >
               Editar
              </button> 
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(recipe)}
              >
                Eliminar
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
  onEditClick: PropTypes.func.isRequired
};

export default RecipeList;
