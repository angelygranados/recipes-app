import React from "react";
import PropTypes from "prop-types";
import TextInput from "./common/TextInput";
import TextArea from "./common/TextArea";
import SelectInput from "./common/SelectInput";

const RecipeForm = ({
  recipe,
  categories,
  prepTime,
  servings,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{recipe.id ? "Editar" : "Nueva"} Receta</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Título"
        value={recipe.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="categoryId"
        label="Categoría"
        value={recipe.categoryId || ""}
        defaultOption="Seleccionar Categoría"
        options={categories.map((category) => ({
          value: category.id,
          text: category.name,
        }))}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="description"
        label="Descripción"
        value={recipe.description}
        onChange={onChange}
        error={errors.description}
      />
      <SelectInput
        name="prepTimeId"
        label="Tiempo de preparación"
        value={recipe.prepTimeId || ""}
        defaultOption="Seleccionar Tiempo"
        options={prepTime.map((time) => ({
          value: time.id,
          text: time.name,
        }))}
        onChange={onChange}
        error={errors.prepTime}
      />
      <SelectInput
        name="servingsId"
        label="Porciones"
        value={recipe.servingsId || ""}
        defaultOption="Seleccionar Porciones"
        options={servings.map((serving) => ({
          value: serving.id,
          text: serving.name,
        }))}
        onChange={onChange}
        error={errors.servings}
      />
      <TextInput
        name="image"
        label="Imagen (URL)"
        value={recipe.image}
        onChange={onChange}
        error={errors.image}
      />
      <TextArea
        name="ingredients"
        label="Ingredientes"
        value={recipe.ingredients}
        onChange={onChange}
        error={errors.ingredients}
      />
      <TextArea
        name="instructions"
        label="Instrucciones"
        value={recipe.instructions}
        onChange={onChange}
        error={errors.instructions}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
};

RecipeForm.propTypes = {
  categories: PropTypes.array.isRequired,
  prepTime: PropTypes.array.isRequired,
  servings: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RecipeForm;
