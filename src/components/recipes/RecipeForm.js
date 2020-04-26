import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const RecipeForm = ({
  recipe,
  categories,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{recipe.id ? "Edit" : "Add"}Receta</h2>
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
        error={errors.author}
      />

      <TextInput
        name="description"
        label="Descripción"
        value={recipe.description}
        onChange={onChange}
        error={errors.description}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
};

RecipeForm.propTypes = {
  categories: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RecipeForm;
