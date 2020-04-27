import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRecipes, saveRecipe } from "../redux/actions/recipeActions";
import { loadCategories } from "../redux/actions/categoryActions";
import { loadServings } from "../redux/actions/servingsAction";
import { loadPrepTime } from "../redux/actions/prepTimeActions";
import PropTypes from "prop-types";
import RecipeForm from "../components/RecipeForm";
import { newRecipe } from "../../tools/mockData";
import Spinner from "../components/common/Spinner";
import { toast } from "react-toastify";

export function ManageRecipePage({
  recipes,
  categories,
  servings,
  prepTime,
  loadCategories,
  loadPrepTime,
  loadServings,
  loadRecipes,
  saveRecipe,
  history,
  ...props
}) {
  const [recipe, setRecipe] = useState({ ...props.recipe });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (recipes.length === 0) {
      loadRecipes().catch((error) => {
        alert("Loading recipes failed" + error);
      });
    } else {
      setRecipe({ ...props.recipe });
    }

    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }

    if (servings.length === 0) {
      loadServings().catch((error) => {
        alert("Loading servings failed" + error);
      });
    }

    if (prepTime.length === 0) {
      loadPrepTime().catch((error) => {
        alert("Loading prep time failed" + error);
      });
    }
  }, [props.recipe]);

  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const {
      title,
      categoryId,
      description,
      prepTimeId,
      servingsId,
      image,
      ingredients,
      instructions,
    } = recipe;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!categoryId) errors.category = "Category is required";
    if (!description) errors.description = "Description is required";
    if (!prepTimeId) errors.prepTimeId = "PrepTime is required";
    if (!servingsId) errors.servings = "Servings is required";
    if (!image) errors.image = "Image is required";
    if (!ingredients) errors.ingredients = "Ingredients are required";
    if (!instructions) errors.instructions = "Instructions are required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveRecipe(recipe)
      .then(() => {
        toast.success("Recipe saved.");
        history.push("/recipes");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return categories.length === 0 || recipes.length === 0 ? (
    <Spinner />
  ) : (
    <RecipeForm
      recipe={recipe}
      errors={errors}
      categories={categories}
      servings={servings}
      prepTime={prepTime}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageRecipePage.propTypes = {
  recipe: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  servings: PropTypes.array.isRequired,
  prepTime: PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired,
  loadRecipes: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  loadServings: PropTypes.func.isRequired,
  loadPrepTime: PropTypes.func.isRequired,
  saveRecipe: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getRecipeBySlug(recipes, slug) {
  return recipes.find((recipe) => recipe.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const recipe =
    slug && state.recipes.length > 0
      ? getRecipeBySlug(state.recipes, slug)
      : newRecipe;
  return {
    recipe,
    recipes: state.recipes,
    categories: state.categories,
    servings: state.servings,
    prepTime: state.prepTime,
  };
}

const mapDispatchToProps = {
  loadRecipes,
  loadCategories,
  loadPrepTime,
  loadServings,
  saveRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage);
