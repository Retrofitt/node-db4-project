const recipes = [
    {recipe_name: 'Cookies'}
]

exports.recipes = recipes

exports.seed = function(knex){
    return knex('recipes').insert(recipes)
}