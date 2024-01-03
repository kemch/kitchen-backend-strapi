import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipeCategoryRecipe extends Schema.Component {
  collectionName: 'components_recipe_category_recipes';
  info: {
    icon: 'atlas';
    displayName: 'Recipe';
  };
  attributes: {
    recipes: Attribute.Relation<
      'recipe-category.recipe',
      'oneToMany',
      'api::recipe.recipe'
    >;
  };
}

export interface RecipeContentIngredientComponent extends Schema.Component {
  collectionName: 'components_test_ingredient_components';
  info: {
    icon: 'dot-circle';
    description: '';
    displayName: 'Ingredient Component';
  };
  attributes: {
    Unit: Attribute.Enumeration<
      ['cup', 'tbsp', 'tsp', 'lb', 'oz', 'g', 'whole', 'half', 'quarter']
    >;
    Quantity: Attribute.Decimal;
    ingredient: Attribute.Relation<
      'recipe-content.ingredient-component',
      'oneToOne',
      'api::ingredient.ingredient'
    >;
    Preparation: Attribute.String;
    slug: Attribute.String;
    HeadingOnly: Attribute.Boolean & Attribute.DefaultTo<false>;
    Heading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipe-category.recipe': RecipeCategoryRecipe;
      'recipe-content.ingredient-component': RecipeContentIngredientComponent;
    }
  }
}
