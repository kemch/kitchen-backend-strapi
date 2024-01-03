'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {}
// module.exports = {
//   /**
//    * Triggered before user creation.
//    */
//   lifecycles: {
//     async beforeCreate(data) {
//       for (var i = data.IngredientList.length - 1; i >= 0; i--) {
//         const ing_id = data.IngredientList[i].ingredient;
//         const res = await strapi.services.ingredient.find({ id: ing_id });
//         const name = res[0].Name;
//         const qty= data.IngredientList[i].Quantity;
//         const unit= data.IngredientList[i].Unit;
//         const isHeading = data.IngredientList[i].HeadingOnly;
//         let prep = '';
//         if (data.IngredientList[i].Preparation != null) {
//           prep = data.IngredientList[i].Preparation;
//         }

//         let line;
//         if (isHeading) {
//           line = `${data.IngredientList[i].Heading}`;
//         } else {
//           line = `${qty} ${unit} ${name} ${prep}`;
//         }
//         data.IngredientList[i].slug = line;
//       }
//     },
//     async beforeUpdate(params, data) {
      
//       if (data.IngredientList) {
//         for (var i = data.IngredientList.length - 1; i >= 0; i--) {
//           const ing_id = data.IngredientList[i].ingredient;
//           const res = await strapi.services.ingredient.find({ id: ing_id });
//           const name = res[0].Name;
//           const qty= data.IngredientList[i].Quantity;
//           const unit= data.IngredientList[i].Unit;
//           const isHeading = data.IngredientList[i].HeadingOnly;
//           let prep = '';
//           if (data.IngredientList[i].Preparation != null) {
//             prep = data.IngredientList[i].Preparation;
//           }

//           let line;
//           if (isHeading) {
//             line = `${data.IngredientList[i].Heading}`;
//           } else {
//             line = `${qty} ${unit} ${name} ${prep}`;
//           }
//           data.IngredientList[i].slug = line;
//         }
//       }
//     },
//   },
// };