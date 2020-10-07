import React from "react";
import { connect } from "react-redux";
import * as recipeActions from "../../redux/actions/recipeActions";
import * as categoryActions from "../../redux/actions/categoryActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import RecipeList from "./RecipeList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class RecipesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    const { recipes, categories, actions } = this.props;

    if (recipes.length === 0) {
      actions.loadRecipes().catch((error) => {
        alert("Loading recipes failed" + error);
      });
    }

    if (categories.length === 0) {
      actions.loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }
  }

  handleDeleteRecipe = async (recipe) => {
    toast.success("Recipe deleted");
    try {
      await this.props.actions.deleteRecipe(recipe);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddRecipePage && <Redirect to="/recipe" />}
        <h2>Recipes</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddRecipePage: true })}
            >
              Add Course
            </button>

            <RecipeList
              onDeleteClick={this.handleDeleteRecipe}
              recipes={this.props.recipes}
            />
          </>
        )}
      </>
    );
  }
}

RecipesPage.propTypes = {
  categories: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    recipes:
      state.categories.length === 0
        ? []
        : state.recipes.map((recipe) => {
            return {
              ...recipe,
              categoryName: state.categories.find(
                (a) => a.id === recipe.categoryId
              ).name,
            };
          }),
    categories: state.categories,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecipes: bindActionCreators(recipeActions.loadRecipes, dispatch),
      loadCategories: bindActionCreators(
        categoryActions.loadCategories,
        dispatch
      ),
      deleteRecipe: bindActionCreators(recipeActions.deleteRecipe, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
